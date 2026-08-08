import Link from "next/link";

export default function CommercialCommunicationsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/en">← Auratech</Link>
        <p className="kicker"><span></span> Personal Data Protection</p>
        <h1>Explicit Consent Statement Regarding Personal Data</h1>
        <p>I confirm that the Personal Data Protection Law Privacy Notice (“Privacy Notice”) has been provided by the data controller pursuant to Personal Data Protection Law No. 6698 (“Law”) and the applicable notification principles. I understand the reasons and methods for collecting my personal data, the purposes and legal basis of processing, whether and for what purposes it may be transferred to third parties, my rights under Article 11 of the Law, and how to apply to <strong>Auratech Danışmanlık Tic. Ltd. Şti.</strong>, located at Divan Residence, Bomonti Plaza No:4, Şişli/İstanbul, to exercise those rights.</p>
        <p>I declare that all personal data I have provided for Auratech to contact me is accurate and belongs to me, and that I give my explicit consent, freely and without pressure, for it to be processed, shared and retained within the scope of the Privacy Notice by clicking the application button on <strong>www.auratech.com.tr</strong>.</p>
        <p><strong>Data Controller:</strong> Auratech Danışmanlık Tic. Ltd. Şti.<br /><strong>Telephone:</strong> <a href="tel:+902129099173">+90 212 909 91 73</a><br /><strong>Email:</strong> <a href="mailto:info@auratech.com.tr">info@auratech.com.tr</a><br /><strong>Website:</strong> www.auratech.com.tr</p>
      </div>
    </main>
  );
}
