export async function POST(request) {
  try {
    const { email, firstName } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.KIT_API_KEY,
          email,
          first_name: firstName || '',
        }),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      return Response.json({ error: data.message || 'Subscription failed' }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
