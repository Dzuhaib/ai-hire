import { NextResponse } from 'next/server'

const protectedResource = {
  resource: 'https://www.aivized.com',
  authorization_servers: ['https://moving-starfish-1.clerk.accounts.dev'],
  scopes_supported: ['openid', 'email', 'profile'],
  bearer_methods_supported: ['Authorization Request Header Field'],
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
