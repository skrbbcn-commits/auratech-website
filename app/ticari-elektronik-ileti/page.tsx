import Link from "next/link";

export default function CommercialCommunicationsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">← Auratech</Link>
        <p className="kicker"><span></span> Kişisel Verilerin Korunması</p>
        <h1>Kişisel Verilere İlişkin Açık Rıza Beyanı</h1>
        <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca “KİŞİSEL VERİLERİN KORUNMASI KANUNU AYDINLATMA METNİ” (“Aydınlatma Metni”) veri sorumlusu tarafından paylaşılmış olup; Divan Residence, Bomonti Plaza No:4, Şişli/İstanbul adresinde mukim Veri Sorumlusu <strong>Auratech Danışmanlık Tic. Ltd. Şti.</strong> tarafından toplanacak olan kişisel verilerimin işlenme sebeplerini, toplanma yöntemlerini, işlenme amaçlarını, işlemenin hukuki dayanağını, üçüncü kişilere aktarılıp aktarılmayacağını, aktarılacaksa hangi amaçlarla kimlere aktarılabileceğini, kişisel verilerimle ilgili olarak Kanun’un 11. maddesinde yazılı haklarımın bulunduğunu, Kanun çerçevesinde bu haklarımı kullanabileceğimi ve bu haklarım doğrultusunda Veri Sorumlusu’na nasıl başvurabileceğimi açıkça anladım.</p>
        <p>Auratech ile tarafımla iletişim kurulması için şahsen paylaşmış olduğum tüm kişisel verilerimin doğru ve bana ait olduğunu ve okuduğum Aydınlatma Metni’nde yer alan açıklamalar kapsamında ve bunlarla sınırlı olmak üzere işlenmesine, paylaşılmasına ve gereken sürede saklanmasına, hiçbir baskı altında kalmadan açık rıza verdiğimi <strong>www.auratech.com.tr</strong> internet sitesinde yer alan iletişim sayfasındaki başvuru butonuna tıklayarak kabul ettiğimi beyan ederim.</p>
        <p><strong>Veri Sorumlusu:</strong> Auratech Danışmanlık Tic. Ltd. Şti.<br /><strong>Telefon:</strong> <a href="tel:+902129099173">+90 212 909 91 73</a><br /><strong>E-posta:</strong> <a href="mailto:info@auratech.com.tr">info@auratech.com.tr</a><br /><strong>İnternet sitesi:</strong> www.auratech.com.tr</p>
      </div>
    </main>
  );
}
