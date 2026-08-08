import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/en">← Auratech</Link>
        <p className="kicker"><span></span> Personal Data Protection</p>
        <h1>Information and Privacy Notice on the Processing of Personal Data</h1>
        <p>Auratech Danışmanlık Tic. Ltd. Şti. (“Auratech”), as data controller, processes personal data submitted through the website contact form in accordance with Türkiye’s Personal Data Protection Law No. 6698.</p>
        <h2>Personal data processed</h2>
        <p>Your name, surname, company and position, email address, telephone number, and the message or request you submit may be processed.</p>
        <h2>Purposes and legal basis</h2>
        <p>Your data is processed to receive and answer your enquiry, provide information about requested services, manage proposal, meeting and potential cooperation processes, follow communication records, and meet legal and information-security obligations.</p>
        <h2>Sharing and retention</h2>
        <p>Your data may be shared, only as necessary for these purposes, with authorised Auratech employees, website, email, IT and hosting providers, legal or technical advisers, and legally authorised public bodies. Data submitted through the contact form is retained for up to three years after your enquiry is concluded, unless a longer legal period or ongoing legal process applies.</p>
        <h2>Your rights and contact</h2>
        <p>You may exercise your rights under Article 11 of the Law by contacting <a href="mailto:info@auratech.com.tr">info@auratech.com.tr</a>.</p>
        <p><strong>Auratech Danışmanlık Tic. Ltd. Şti.</strong><br />Divan Residence, Bomonti Plaza No:4, Şişli/İstanbul<br />Telephone: <a href="tel:+902129099173">+90 212 909 91 73</a></p>
      </div>
    </main>
  );
}
