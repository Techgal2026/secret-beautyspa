import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, clientPhone, totalAmount, services } = body;

    // Redirection directe vers WhatsApp avec le récapitulatif
    const merchantPhone = "221764757340";
    const serviceNames = services ? services.map((s: any) => s.name).join(", ") : "Soin";
    
    const whatsappMessage = encodeURIComponent(
      `Bonjour, je souhaite réserver pour :\nClient : ${clientName}\nTéléphone : ${clientPhone}\nSoins : ${serviceNames}\nTotal : ${totalAmount} FCFA`
    );

    const redirectUrl = `https://wa.me/${merchantPhone}?text=${whatsappMessage}`;

    return NextResponse.json({ paymentUrl: redirectUrl });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}