import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // TODO: wire this to real email or DB. For now log to server console.
    // eslint-disable-next-line no-console
    console.log('Contact submission:', { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Contact API error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
