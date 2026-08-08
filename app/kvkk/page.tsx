import Link from "next/link";

export default function KvkkPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">← Auratech</Link>
        <p className="kicker"><span></span> Kişisel Verilerin Korunması</p>
        <h1>Kişisel Verilerin İşlenmesine İlişkin Bilgilendirme ve Aydınlatma Metni</h1>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verilerinizin korunmasına önem veriyoruz.</p>
        <p>İşbu metin, veri sorumlusu sıfatıyla <strong>Auratech Danışmanlık Tic. Ltd. Şti. (“Auratech”)</strong> tarafından, internet sitesi iletişim formu üzerinden elde edilen kişisel verilerin işlenmesine ilişkin sizleri bilgilendirmek amacıyla hazırlanmıştır.</p>

        <h2>1. İşlenen Kişisel Veriler</h2>
        <p>İletişim formu üzerinden aşağıdaki kişisel verileriniz işlenebilir:</p>
        <ul>
          <li>Adınız ve soyadınız</li>
          <li>Şirket ve görev bilginiz</li>
          <li>E-posta adresiniz</li>
          <li>Telefon numaranız</li>
          <li>İletişim formunda paylaştığınız mesaj ve talep bilgileri</li>
        </ul>

        <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
        <p>Kişisel verileriniz;</p>
        <ul>
          <li>İletişim talebinizin alınması ve yanıtlanması,</li>
          <li>Talep ettiğiniz hizmetler hakkında bilgi verilmesi,</li>
          <li>Teklif, toplantı ve olası iş birliği süreçlerinin yürütülmesi,</li>
          <li>İletişim kayıtlarının takibi,</li>
          <li>Hukuki ve bilgi güvenliği yükümlülüklerinin yerine getirilmesi</li>
        </ul>
        <p>amaçlarıyla işlenmektedir.</p>
        <p>Ticari elektronik ileti gönderimi için vereceğiniz onay, bu metinden ayrı olarak alınacaktır.</p>

        <h2>3. Toplama Yöntemi ve Hukuki Sebep</h2>
        <p>Kişisel verileriniz, <strong>www.auratech.com.tr</strong> internet sitesindeki iletişim formunu doldurmanız yoluyla elektronik ortamda ve doğrudan sizden elde edilmektedir.</p>
        <p>Verileriniz; KVKK’nın 5’inci maddesinde belirtilen sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma, bir hakkın tesisi, kullanılması veya korunması ve Auratech’in meşru menfaatleri hukuki sebeplerine dayanılarak işlenmektedir.</p>

        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <p>Kişisel verileriniz, yukarıda belirtilen amaçlarla sınırlı olmak üzere;</p>
        <ul>
          <li>Auratech’in yetkili çalışanlarına,</li>
          <li>İnternet sitesi, e-posta, bilgi teknolojileri ve barındırma hizmeti sağlayıcılarına,</li>
          <li>Hukuki veya teknik destek alınan hizmet sağlayıcılara,</li>
          <li>Kanunen yetkili kamu kurum ve kuruluşlarına</li>
        </ul>
        <p>KVKK’ya uygun olarak aktarılabilir.</p>
        <p>Yurt dışı altyapı sağlayıcılarının kullanılması durumunda aktarım işlemleri KVKK’nın 9’uncu maddesinde belirtilen şartlar ve uygun güvenceler çerçevesinde gerçekleştirilir.</p>

        <h2>5. Saklama Süresi</h2>
        <p>İletişim formu üzerinden elde edilen kişisel verileriniz, talebinizin sonuçlandırılmasını takip eden en fazla <strong>3 yıl</strong> süreyle saklanır. Kanuni bir yükümlülük veya devam eden bir hukuki süreç bulunması hâlinde ilgili mevzuatta öngörülen süreler uygulanır.</p>
        <p>Saklama süresinin sona ermesiyle verileriniz silinir, yok edilir veya anonim hâle getirilir.</p>

        <h2>6. KVKK Kapsamındaki Haklarınız</h2>
        <p>KVKK’nın 11’inci maddesi kapsamında;</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Aktarıldığı üçüncü kişileri öğrenme,</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme,</li>
          <li>Şartları oluştuğunda verilerinizin silinmesini veya yok edilmesini isteme,</li>
          <li>Yapılan işlemlerin verilerin aktarıldığı kişilere bildirilmesini isteme,</li>
          <li>Otomatik analiz sonucunda aleyhinize bir durum oluşmasına itiraz etme,</li>
          <li>Kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme</li>
        </ul>
        <p>haklarına sahipsiniz.</p>

        <h2>7. Başvuru ve İletişim</h2>
        <p>Haklarınıza ilişkin taleplerinizi aşağıdaki iletişim bilgileri üzerinden Auratech’e iletebilirsiniz:</p>
        <p><strong>Auratech Danışmanlık Tic. Ltd. Şti.</strong><br />Divan Residence, Bomonti Plaza No:4, Şişli/İstanbul<br />E-posta: <a href="mailto:info@auratech.com.tr">info@auratech.com.tr</a><br />Telefon: <a href="tel:+902129099173">+90 212 909 91 73</a></p>
      </div>
    </main>
  );
}
