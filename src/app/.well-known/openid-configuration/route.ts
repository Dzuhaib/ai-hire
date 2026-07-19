import { NextResponse } from 'next/server'

const clerkIssuer = 'https://moving-starfish-1.clerk.accounts.dev'

const oidcConfig = {
  issuer: clerkIssuer,
  authorization_endpoint: `${clerkIssuer}/oauth/authorize`,
  token_endpoint: `${clerkIssuer}/oauth/token`,
  revocation_endpoint: `${clerkIssuer}/oauth/token/revoke`,
  introspection_endpoint: `${clerkIssuer}/oauth/token_info`,
  userinfo_endpoint: `${clerkIssuer}/oauth/userinfo`,
  jwks_uri: `${clerkIssuer}/.well-known/jwks.json`,
  scopes_supported: ['openid', 'offline_access', 'email', 'profile'],
  response_types_supported: ['code'],
  response_modes_supported: ['form_post', 'query'],
  grant_types_supported: ['authorization_code', 'refresh_token'],
  subject_types_supported: ['public'],
  id_token_signing_alg_values_supported: ['RS256'],
  token_endpoint_auth_methods_supported: [
    'client_secret_basic',
    'none',
    'client_secret_post',
  ],
  claims_supported: [
    'aud',
    'iss',
    'email',
    'family_name',
    'picture',
    'exp',
    'iat',
    'email_verified',
    'given_name',
    'name',
    'preferred_username',
    'sub',
  ],
  code_challenge_methods_supported: ['S256'],
}

export async function GET() {
  return NextResponse.json(oidcConfig, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
