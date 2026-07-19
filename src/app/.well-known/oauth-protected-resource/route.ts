import { NextResponse } from 'next/server'

const protectedResource = {
  resource: 'https://www.aivized.com',
  authorization_servers: ['https://moving-starfish-1.clerk.accounts.dev'],
  scopes_supported: ['openid', 'email', 'profile'],
  grant_types_supported: ['authorization_code', 'refresh_token'],
  bearer_methods_supported: ['header'],
  token_type: ['Bearer'],
}

export async function GET() {
  return NextResponse.json(protectedResource, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
