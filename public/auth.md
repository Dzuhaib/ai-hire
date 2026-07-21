# Auth.md

AIVized is a managed AI chatbot service for UK small businesses. Authentication is handled via Clerk (OpenID Connect).

## Public Resources (No Auth Required)

- `https://www.aivized.com/llms.txt`
- `https://www.aivized.com/llms-full.txt`
- `https://www.aivized.com/robots.txt`
- `https://www.aivized.com/sitemap.xml`

## Authentication Methods

### OpenID Connect (Recommended)

AIVized uses Clerk for authentication. OIDC discovery is available at:

- `/.well-known/openid-configuration`

### OAuth 2.0 Authorization Server

Authorization server metadata is published at:

- `/.well-known/oauth-authorization-server`

### OAuth Protected Resource

Protected resource metadata is published at:

- `/.well-known/oauth-protected-resource`

## Agent Registration

Agents can register via the web sign-up flow:

- **Registration URI**: `https://www.aivized.com/sign-up`
- **Identity types**: Email verification
- **Credential types**: Bearer access token (issued by Clerk)

## Contact

For API access or partnership inquiries: info@aivized.com
