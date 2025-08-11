import { NextResponse } from 'next/server';

export async function POST(req: Request){
  try{
    const data = await req.json();
    // Normally you'd send an email via SMTP here. This is a placeholder.
    // If SMTP env is configured, integrate nodemailer on a server action or route.
    console.log('New subscription request:', data);
    return NextResponse.json({ ok: true });
  }catch(e){
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
