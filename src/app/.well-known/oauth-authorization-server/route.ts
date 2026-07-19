import { NextResponse } from 'next/server'

const clerkIssuer = 'https://moving-starfish-1.clerk.accounts.dev'

const authServerConfig = {
  issuer: clerkIssuer,
  authorization_endpoint: `${clerkIssuer}/oauth/authorize`,
  token_endpoint: `${clerkIssuer}/oauth/token`,
  revocation_endpoint: `${clerkIssuer}/oauth/token/revoke`,
  introspection_endpoint: `${clerkIssuer}/oauth/token_info`,
  jwks_uri: `${clerkIssuer}/.well-known/jwks.json`,
  scopes_supported: ['openid', 'offline_access', 'email', 'profile'],
  response_types_supported: ['code'],
  grant_types_supported: ['authorization_code', 'refresh_token'],
  token_endpoint_auth_methods_supported: [
    'client_secret_basic',
    'none',
    'client_secret_post',
  ],
  agent_auth: {
    skill: 'https://isitagentready.com/.well-known/agent-skills/auth-md/SKILL.md',
    register_uri: 'https://www.aivized.com/sign-up',
    identity_types_supported: [
      {
        identity_assertion: {
          assertion_types_supported: ['verified_email'],
          credential_types_supported: ['access_token'],
          claim_uri: `${clerkIssuer}/oauth/userinfo`,
        },
      },
    ],
  },
}

export async function GET() {
  return NextResponse.json(authServerConfig, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
