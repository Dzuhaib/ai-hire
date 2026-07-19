import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const keyId = 'CDoJmkhrsM3RJG5EkpWfzTQLmgUHJxpBRJiZ5D_fCW4'

const jwks = {
  keys: [
    {
      kty: 'OKP',
      crv: 'Ed25519',
      x: 'gd1_LgyjdSSHpLA-vkeKiL3TpuUA594g8Nue8WV5R1E',
    },
  ],
}

export async function GET(req: NextRequest) {
  const body = JSON.stringify(jwks)
  const host = req.headers.get('host') || 'www.aivized.com'
  const privateKeyBase64 = process.env.WEB_BOT_AUTH_PRIVATE_KEY

  const headers: Record<string, string> = {
    'Content-Type': 'application/http-message-signatures-directory+json',
    'Cache-Control': 'public, max-age=86400',
  }

  if (privateKeyBase64) {
    const now = Math.floor(Date.now() / 1000)
    const expires = now + 60
    const nonce = crypto.randomBytes(32).toString('base64url')

    const sigParams = `("@authority";req);alg="ed25519";keyid="${keyId}";nonce="${nonce}";tag="http-message-signatures-directory";created=${now};expires=${expires}`

    const signatureBase = `"@authority": ${host}\n"@signature-params": ${sigParams}\n`

    const privateKey = crypto.createPrivateKey({
      key: Buffer.from(privateKeyBase64, 'base64'),
      format: 'der',
      type: 'pkcs8',
    })

    const signer = crypto.createSign('ed25519')
    signer.update(signatureBase)
    const signature = signer.sign(privateKey).toString('base64')

    headers['Signature-Input'] = `sig1=${sigParams}`
    headers['Signature'] = `sig1=:${signature}:`
  }

  return new NextResponse(body, { headers })
}
