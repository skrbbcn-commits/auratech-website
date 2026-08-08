"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

const endpoint = "https://api.hsforms.com/submissions/v3/integration/submit/144534997/21c8c484-64e0-4056-9462-bcfd4361efae";

export function HubSpotContactForm({ lang }: { lang: "tr" | "en" }) {
  const en = lang === "en";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("name") || "").trim();
    const parts = fullName.split(/\s+/);
    const firstname = parts.shift() || "";
    const lastname = parts.join(" ");

    const payload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: String(data.get("email") || "") },
        { name: "phone", value: String(data.get("phone") || "") },
        { name: "company", value: String(data.get("company") || "") },
        { name: "message", value: String(data.get("message") || "") },
      ],
      context: {
        pageUri: window.location.href,
        pageName: en ? "Auratech Contact" : "Auratech İletişim",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: en
            ? "I consent to Auratech storing and processing my personal data to respond to my request."
            : "Auratech’in talebimi yanıtlamak amacıyla kişisel verilerimi saklamasına ve işlemesine açık rıza veriyorum.",
          communications: [],
        },
      },
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("HubSpot submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-grid">
        <input name="name" required placeholder={en ? "Name and surname" : "Ad soyad"} aria-label={en ? "Name and surname" : "Ad soyad"} />
        <input name="company" required placeholder={en ? "Company" : "Şirket"} aria-label={en ? "Company" : "Şirket"} />
        <input name="email" required type="email" placeholder={en ? "Business email" : "Kurumsal e-posta"} aria-label={en ? "Business email" : "Kurumsal e-posta"} />
        <input name="phone" type="tel" placeholder={en ? "Phone" : "Telefon"} aria-label={en ? "Phone" : "Telefon"} />
      </div>
      <textarea name="message" required placeholder={en ? "What would you like us to assess?" : "Birlikte değerlendirmemizi istediğiniz konu"} aria-label={en ? "Message" : "Mesaj"} />
      <label className="privacy-consent"><input type="checkbox" name="privacy-notice" required /><span>{en ? <>I have read the <Link href="/en/privacy" target="_blank">Information and Privacy Notice</Link> and have been informed about the processing of my personal data.</> : <><Link href="/kvkk" target="_blank">Bilgilendirme ve Aydınlatma Metni</Link>&apos;ni okudum ve kişisel verilerimin işlenmesi hakkında bilgilendirildim.</>}</span></label>
      <label className="privacy-consent marketing-consent"><input type="checkbox" name="explicit-consent" required /><span>{en ? <>I have read and approve the <Link href="/en/commercial-communications" target="_blank">Explicit Consent Statement Regarding Personal Data</Link>.</> : <><Link href="/ticari-elektronik-ileti" target="_blank">Kişisel Verilere İlişkin Açık Rıza Beyanı</Link>&apos;nı okudum ve onaylıyorum.</>}</span></label>
      <button className="button button-light" type="submit" disabled={status === "sending"}>{status === "sending" ? (en ? "Sending…" : "Gönderiliyor…") : (en ? "Plan an initial assessment" : "İlk değerlendirme görüşmesini planlayın")} <span>↗</span></button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {status === "success" && (en ? "Thank you. Your request has been received; we will contact you shortly." : "Teşekkürler. Talebiniz alındı; en kısa sürede sizinle iletişime geçeceğiz.")}
        {status === "error" && (en ? "Your request could not be sent. Please try again or email info@auratech.com.tr." : "Talebiniz gönderilemedi. Lütfen tekrar deneyin veya info@auratech.com.tr adresine yazın.")}
      </p>
    </form>
  );
}
