const CLERK_SECRET_KEY = 'sk_test_3Y4y9BejCdF6Evo6gzDYeLl2JaYfuQHRYEYqSdUuiQ';
const SUPABASE_URL = 'https://gtgjohncvxrgnkobbbef.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Z2pvaG5jdnhyZ25rb2JiYmVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTY0MDE0MSwiZXhwIjoyMDkxMjE2MTQxfQ.XFTvfcgx1x22y2VhRH2ppC2twQdi573uWq-A2orfxHc';

async function syncUsers() {
  console.log('Fetching users from Clerk...');

  let allUsers = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const res = await fetch(`https://api.clerk.com/v1/users?limit=${limit}&offset=${offset}`, {
      headers: { Authorization: `Bearer ${CLERK_SECRET_KEY}` }
    });
    const users = await res.json();
    if (!Array.isArray(users) || users.length === 0) break;
    allUsers = allUsers.concat(users);
    if (users.length < limit) break;
    offset += limit;
  }

  console.log(`Found ${allUsers.length} users in Clerk`);

  let synced = 0;
  let skipped = 0;

  for (const user of allUsers) {
    const email = user.email_addresses?.[0]?.email_address || '';
    const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ') || null;

    const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'resolution=ignore-duplicates',
      },
      body: JSON.stringify({
        clerk_user_id: user.id,
        email,
        full_name: fullName,
        avatar_url: user.image_url || null,
        created_at: new Date(user.created_at).toISOString(),
      }),
    });

    if (res.ok || res.status === 201 || res.status === 200) {
      console.log(`✓ ${email}`);
      synced++;
    } else {
      const err = await res.text();
      if (err.includes('duplicate') || err.includes('already exists')) {
        skipped++;
      } else {
        console.error(`✗ ${email}: ${err}`);
      }
    }
  }

  console.log(`\nDone. Synced: ${synced}, Skipped (already existed): ${skipped}`);
}

syncUsers().catch(console.error);
