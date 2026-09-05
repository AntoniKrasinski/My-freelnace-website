import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const { error: adminError } = await resend.emails.send({
      from: "Formularz <kontakt@antonikrasinski.pl>",
      to: ["kontakt@antonikrasinski.pl"],
      subject: `Prośba wyceny od ${name}`,
      replyTo: "",
      html: `<h1>${name}</h1> <p>${phone}</p> <p>${email} </p><p>${message}</p>`,
    });

    if (adminError) {
      return Response.json({ adminError }, { status: 500 });
    }

    const { data, error: userError } = await resend.emails.send({
      from: "Antoni <kontakt@antonikrasinski.pl>",
      to: [email],
      subject: "Dziękuję za kontakt!",
      replyTo: "",
      react: EmailTemplate({ firstName: name }),
    });

    if (userError) {
      return Response.json({ userError }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
