import Image from "next/image";
import Link from "next/link";
import { AnimatedMetric } from "./animated-metric";
import { CaseCarousel } from "./case-carousel";
import { DesktopNavigation } from "./desktop-navigation";
import { HubSpotContactForm } from "./hubspot-contact-form";
import { MobileNavigation } from "./mobile-navigation";

const serviceMetricsEvent = "auratech:restart-service-metrics";

const services = [
  {
    id: "yonetim-muhendisligi",
    eyebrow: "Yönetim Mühendisliği",
    title: "Stratejiyi çalışan sisteme dönüştürün.",
    text: "Süreçleri, organizasyonu, veriyi ve teknolojiyi birlikte ele alıyor; yönetim kararlarının sahada uygulanmasını ve kalıcı hale gelmesini sağlıyoruz.",
    items: [
      { label: "Süreç ve organizasyon tasarımı", gain: "Net sorumluluklar ve daha hızlı karar alma" },
      { label: "Kurumsal Sistemler ve Dijital Dönüşüm", gain: "Entegre sistemler, güvenilir veri ve uçtan uca izlenebilirlik" },
      { label: "Performans ve yönetim raporlaması", gain: "Erken tespit, ölçülebilir performans ve etkin yönetim kontrolü" },
    ],
    href: "#yonetim-muhendisligi",
  },
  {
    id: "enerji-yonetimi",
    eyebrow: "Enerji Yönetimi",
    title: "Tüketim verisini tasarrufa dönüştürün.",
    text: "Çok lokasyonlu yapılarda veri kalitesinden saha uygulamasına kadar enerji performansını uçtan uca yönetiyor, tasarruf fırsatlarını görünür kılıyoruz.",
    items: [
      { label: "Veri kalitesi ve anomali analizi", gain: "Kayıp ve hataların görünür hâle gelmesi" },
      { label: "Enerji izleme ve raporlama", gain: "Lokasyonların karşılaştırmalı yönetimi" },
      { label: "Verimlilik projeleri ve uygulama takibi", gain: "Ölçülebilir ve kalıcı tasarruf" },
    ],
    href: "#enerji-yonetimi",
  },
];

const servicesEn = [
  {
    id: "management-engineering",
    eyebrow: "Management Engineering",
    title: "Turn strategy into a working system.",
    text: "We address processes, organisation, data and technology together, helping management decisions take root in day-to-day operations.",
    items: [
      { label: "Process and organisation design", gain: "Clear ownership and faster decision-making" },
      { label: "Enterprise Systems and Digital Transformation", gain: "Integrated systems, reliable data and end-to-end traceability" },
      { label: "Performance and management reporting", gain: "Earlier visibility of deviations and stronger management control" },
    ],
    href: "#management-engineering",
  },
  {
    id: "energy-management",
    eyebrow: "Energy Management",
    title: "Turn consumption data into savings.",
    text: "For multi-site organisations, we manage energy performance end to end—from data quality to field implementation—and make savings opportunities visible.",
    items: [
      { label: "Data quality and anomaly analysis", gain: "Visible losses, errors and exceptions" },
      { label: "Energy monitoring and reporting", gain: "Comparable management across locations" },
      { label: "Efficiency projects and implementation follow-up", gain: "Measurable and lasting savings" },
    ],
    href: "#energy-management",
  },
];

const cases = [
  {
    type: "Bankacılık · Enerji Performans Yönetimi",
    client: "AKBANK",
    title: "650+ şubede veriye dayalı enerji performans yönetimi",
    story: "Şubelerin enerji tüketimleri; çalışma düzeni, geçmiş performans ve tüketim sapmaları üzerinden analiz edildi. Veri kalitesi sorunları ve operasyon kaynaklı enerji kayıpları görünür hâle getirildi.",
    gain: "Yüksek tüketim riski taşıyan şubeler ve tasarruf fırsatları önceliklendirildi. Alınan aksiyonların etkisinin ölçülebildiği sürdürülebilir bir enerji yönetim modeli oluşturuldu.",
  },
  {
    type: "Çok Lokasyonlu İşletme · Enerji Yönetimi",
    client: "TAB GIDA",
    title: "1.000+ şubede ortak performans standardı",
    story: "Farklı marka ve işletme modellerine ait tüketimler normalize edilerek veri kalitesi, operasyon düzeni ve verimlilik potansiyelini birlikte değerlendiren ortak bir yönetim standardı oluşturuldu.",
    gain: "1.000+ lokasyonda enerji verimliliği fırsatları belirlenerek tüketimi azaltmaya yönelik aksiyonlar önceliklendirildi ve sonuçları izlenebilir hâle getirildi.",
  },
  {
    type: "Operasyon · Satış · AR-GE · Strateji",
    client: "YELKEN GROUP",
    title: "Siparişten sevkiyata bütünleşik yönetim",
    story: "Satıştan sipariş yönetimine, AR-GE’den üretim planlama ve sevkiyata uzanan tüm değer zinciri; operasyonel süreçler ve şirket stratejisiyle birlikte yönetildi.",
    gain: "Satış, AR-GE, kapasite, termin ve sevkiyat süreçleri ortak bir yönetim modeli altında buluşturularak operasyonel kontrol ve stratejik karar alma gücü artırıldı.",
  },
  {
    type: "Ticari Gayrimenkul · Satış CRM · Süreç Yönetimi",
    client: "İNNO GAYRİMENKUL",
    title: "İlk müşteri temasından tahsilata bütünleşik satış yönetimi",
    story: "Müşteri temasından teklif, sözleşme, ödeme planı ve tahsilata kadar tüm satış süreci yeniden tasarlandı. CRM altyapısı ve işletme modeli; 2D–3D proje görselleri ile demo senaryolarını satış stratejisine entegre eden, esnek ve ölçeklenebilir bir yapıda kuruldu.",
    gain: "Satış, proje sunumu, sözleşme ve tahsilat süreçleri tek bir yönetim modeli altında birleştirilerek müşteri takibi, finansal görünürlük ve yönetim kontrolü güçlendirildi.",
  },
  {
    type: "İnşaat · Proje Taahhüt Yönetimi",
    client: "NET İNŞAAT",
    title: "Proje taahhütte plan ve maliyet kontrolü",
    story: "Proje taahhüt yapısı; planlama, kaynak, ilerleme, maliyet ve kurumsal sistem ihtiyaçlarını aynı yönetim mimarisinde buluşturacak şekilde tasarlandı.",
    gain: "Zaman ve maliyet sapmalarını erken görünür kılan, projeleri ortak performans ölçütleriyle yöneten ve kararların güncel veriye dayanmasını sağlayan kontrol yapısı tasarlandı.",
  },
];

const casesEn = [
  {
    type: "Banking · Energy Performance Management",
    client: "AKBANK",
    title: "Data-driven energy performance management across 650+ branches",
    story: "Branch energy consumption was analysed against operating patterns, historical performance and consumption deviations. Data-quality issues and operational energy losses were made visible.",
    gain: "Branches with elevated consumption risk and savings opportunities were prioritised. A sustainable energy management model was created in which the impact of actions can be measured.",
  },
  {
    type: "Multi-site Business · Energy Management",
    client: "TAB GIDA",
    title: "One performance standard across 1,000+ branches",
    story: "Consumption across diverse brands and operating models was normalised within a common management standard combining data quality, operating discipline and efficiency potential.",
    gain: "Energy-efficiency opportunities across 1,000+ locations were identified, consumption-reduction actions were prioritised and their results made traceable.",
  },
  {
    type: "Operations · Sales · R&D · Strategy",
    client: "YELKEN GROUP",
    title: "Integrated management from order to shipment",
    story: "The entire value chain—from sales and order management through R&D, production planning and shipment—was managed together with operational processes and company strategy.",
    gain: "Sales, R&D, capacity, delivery and shipment processes were united under a common management model, strengthening operational control and strategic decision-making.",
  },
  {
    type: "Commercial Real Estate · Sales CRM · Process Management",
    client: "İNNO REAL ESTATE",
    title: "Integrated sales management from first contact to collection",
    story: "The entire sales journey—from customer contact through quotation, contract, payment plan and collection—was redesigned. The CRM infrastructure and operating model were built as a flexible, scalable structure integrating 2D–3D project visuals and demo scenarios into the sales strategy.",
    gain: "Sales, project presentation, contract and collection processes were united under one management model, strengthening customer tracking, financial visibility and management control.",
  },
  {
    type: "Construction · Project Contracting",
    client: "NET CONSTRUCTION",
    title: "Schedule and cost control in project contracting",
    story: "The project contracting structure was designed to unite planning, resources, progress, cost and enterprise-system requirements within one management architecture.",
    gain: "A control structure was designed to reveal schedule and cost deviations early, manage projects through common performance measures and ground decisions in current data.",
  },
];

type Reference = {
  name: string;
  href: string;
  domain: string;
  metric?: number;
  metricLabelTr?: string;
  metricLabelEn?: string;
};

const references: Reference[] = [
  { name: "AKBANK", href: "https://www.akbank.com/", domain: "akbank.com", metric: 650, metricLabelTr: "şube", metricLabelEn: "branches" },
  { name: "TAB GIDA", href: "https://www.tabgida.com.tr/", domain: "tabgida.com.tr", metric: 1000, metricLabelTr: "şube", metricLabelEn: "branches" },
  { name: "İŞ GIDA", href: "https://www.isholding.com/", domain: "isholding.com", metric: 500, metricLabelTr: "şube", metricLabelEn: "branches" },
  { name: "BURGER KING", href: "https://www.burgerking.com.tr/", domain: "burgerking.com.tr" },
  { name: "POPEYES", href: "https://www.popeyes.com.tr/", domain: "popeyes.com.tr" },
  { name: "ARBY'S", href: "https://www.arbys.com.tr/", domain: "arbys.com.tr" },
  { name: "SBARRO", href: "https://www.sbarro.com.tr/", domain: "sbarro.com.tr" },
  { name: "USTA DÖNERCİ", href: "https://www.ustadonerci.com/", domain: "ustadonerci.com" },
  { name: "USTA PİDECİ", href: "https://www.ustapideci.com.tr/", domain: "ustapideci.com.tr" },
  { name: "KFC", href: "https://www.kfcturkiye.com/", domain: "kfcturkiye.com" },
  { name: "YELKEN GROUP", href: "https://www.yelken.com.tr/", domain: "yelken.com.tr" },
  { name: "FORNAX", href: "https://www.fornax.com.tr/", domain: "fornax.com.tr" },
  { name: "İTO KİLİT", href: "https://www.yelken.com.tr/", domain: "yelken.com.tr" },
  { name: "İNNO GAYRİMENKUL", href: "https://innogy.com.tr/", domain: "innogy.com.tr" },
  { name: "NET İNŞAAT", href: "https://netidm.com/", domain: "netidm.com" },
  { name: "KUZU GRUP · JW MARRIOTT", href: "https://www.kuzugrup.com/", domain: "kuzugrup.com" },
  { name: "GÜRSAŞ", href: "https://www.gursas.com.tr/", domain: "gursas.com.tr" },
  { name: "PIZZA HUT", href: "https://www.pizzahut.com.tr/", domain: "pizzahut.com.tr" },
  { name: "KRISPY KREME", href: "https://www.krispykreme.com.tr/", domain: "krispykreme.com.tr" },
  { name: "SOM PREFABRİK", href: "https://www.somprefabrik.com/", domain: "somprefabrik.com" },
];

export function HomePage({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const en = lang === "en";
  const activeServices = en ? servicesEn : services;
  const activeCases = en ? casesEn : cases;
  const locale = en ? "en-US" : "tr-TR";
  const navItems = [
    { href: "#top", label: en ? "Home" : "Ana Sayfa" },
    { href: "#hizmetler", label: en ? "Services" : "Hizmetler", restartEvent: serviceMetricsEvent },
    { href: "#yaklasim", label: en ? "Our Approach" : "Yaklaşımımız" },
    { href: "#calismalar", label: en ? "Project Stories" : "Proje Hikâyeleri" },
    { href: "#referanslar", label: en ? "References" : "Referanslar" },
    { href: "#hakkimizda", label: en ? "About" : "Hakkımızda" },
    { href: "#iletisim", label: en ? "Contact" : "İletişim" },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={en ? "Auratech home" : "Auratech ana sayfa"}>
          <Image className="brand-logo" src="/auratech-logo.png" alt="Auratech" width={205} height={300} priority unoptimized />
        </a>
        <DesktopNavigation items={navItems} label={en ? "Main navigation" : "Ana menü"} />
        <div className="header-actions">
          <MobileNavigation items={navItems} label={en ? "Open main navigation" : "Ana menüyü aç"} />
          <span className="language" aria-label={en ? "Language selection" : "Dil seçimi"}>
            <Link className={!en ? "active" : ""} href="/">TR</Link><span>/</span><Link className={en ? "active" : ""} href="/en">EN</Link>
          </span>
          <a className="button button-small header-cta" href="#iletisim">{en ? "Book a meeting" : "Görüşme planla"} <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span></span> {en ? "Management Engineering Services" : "Yönetim Mühendisliği Hizmetlerimiz"}</p>
            <h1>{en ? <>We turn data, systems and processes into <em>measurable results.</em></> : <>Veriyi, sistemleri ve süreçleri <em>ölçülebilir sonuca</em> dönüştürüyoruz.</>}</h1>
            <p className="hero-lead">{en ? "We work alongside management teams, leading operations, digital transformation and energy management projects from analysis through implementation." : "Yönetim ekipleriyle birlikte çalışıyor; operasyon, dijital dönüşüm ve enerji yönetimi projelerini analizden uygulamaya kadar yönetiyoruz."}</p>
            <div className="hero-actions">
              <a className="button" href="#iletisim">{en ? "Introductory meeting" : "Ön değerlendirme görüşmesi"} <span>↗</span></a>
              <a className="text-link" href="#calismalar">{en ? "Explore our work" : "Çalışma örneklerini inceleyin"} <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label={en ? "Auratech operating model visualisation" : "Auratech çalışma modeli görselleştirmesi"}>
            <div className="visual-topline"><span>{en ? "MANAGEMENT ENGINEERING" : "YÖNETİM MÜHENDİSLİĞİ"}</span><span className="live-dot">{en ? "ACTIVE" : "AKTİF"}</span></div>
            <div className="visual-core">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="core-label"><strong>{en ? "RESULT" : "SONUÇ"}</strong><span>{en ? "Measure · apply · improve" : "Ölç · uygula · iyileştir"}</span></div>
              <span className="node node-one">{en ? "DATA" : "VERİ"}</span>
              <span className="node node-two">{en ? "SYSTEM" : "SİSTEM"}</span>
              <span className="node node-three">{en ? "PROCESS" : "SÜREÇ"}</span>
              <span className="node node-four">{en ? "PEOPLE" : "İNSAN"}</span>
            </div>
            <div className="visual-footer">
              <div><span>01</span><strong>{en ? "Assess" : "Tespit"}</strong></div>
              <div><span>02</span><strong>{en ? "Design" : "Tasarım"}</strong></div>
              <div><span>03</span><strong>{en ? "Implement" : "Uygulama"}</strong></div>
              <div><span>04</span><strong>{en ? "Control" : "Kontrol"}</strong></div>
            </div>
          </div>
        </div>
        <div className="trust-strip">
          <p>{en ? <>Strategic perspective for management.<br/>Practical solutions for the field.</> : <>Üst yönetim için stratejik bakış.<br/>Saha için uygulanabilir çözüm.</>}</p>
          <div className="trust-item"><AnimatedMetric end={20} suffix="+" locale={locale} /><span>{en ? <>years of multidisciplinary<br/>business experience</> : <>yıllık çok disiplinli<br/>iş deneyimi</>}</span></div>
          <div className="trust-item"><AnimatedMetric end={50} suffix="+" locale={locale} /><span>{en ? <>completed management and<br/>energy projects</> : <>tamamlanan yönetim ve<br/>enerji projesi</>}</span></div>
          <div className="trust-item"><strong>{en ? "End to end" : "Uçtan uca"}</strong><span>{en ? <>project leadership from<br/>analysis to implementation</> : <>analizden uygulamaya<br/>proje yönetimi</>}</span></div>
          <div className="trust-item"><strong>{en ? "Data-driven" : "Veriye dayalı"}</strong><span>{en ? <>measurable and<br/>traceable results</> : <>ölçülebilir ve<br/>izlenebilir sonuçlar</>}</span></div>
        </div>
      </section>

      <section className="section intro" id="hizmetler">
        <div className="section-heading">
          <p className="kicker"><span></span> {en ? "How we create value" : "Nasıl değer yaratıyoruz?"}</p>
          <h2>{en ? "We turn complex problems into manageable systems." : "Karmaşık problemleri yönetilebilir yapılara dönüştürüyoruz."}</h2>
        </div>
        <p className="section-intro">{en ? "We support organisations through an engineering approach that combines process, systems, data and implementation discipline—not recommendations alone." : "Kurumları yalnızca önerilerle değil; süreç, sistem, veri ve uygulama disiplinini birlikte ele alan bir mühendislik yaklaşımıyla destekliyoruz."}</p>
      </section>

      <section className="services">
        {activeServices.map((service) => (
          <article className="service-card" id={service.id} key={service.id}>
            <div className="service-content">
              <p className="service-eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.items.map((item) => (
                <li key={item.label}>
                  <span className="service-item-copy">
                    <strong>{item.label}</strong>
                    <small>{item.gain}</small>
                  </span>
                  <span className="service-arrow">↗</span>
                </li>
              ))}</ul>
              {(service.id === "yonetim-muhendisligi" || service.id === "management-engineering") && (
                <div className="management-metrics" aria-label={en ? "Management engineering scale" : "Yönetim mühendisliği çalışma ölçeği"}>
                  <div><AnimatedMetric end={15} suffix="+" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "companies supported through management engineering" : "yönetim mühendisliği hizmeti sunulan firma"}</span></div>
                  <div><AnimatedMetric end={35} suffix="+" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "completed management engineering projects" : "tamamlanan yönetim mühendisliği projesi"}</span></div>
                  <div><AnimatedMetric end={20} suffix="+" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "years of corporate management and technology experience" : "yıl kurumsal yönetim ve teknoloji deneyimi"}</span></div>
                </div>
              )}
              {(service.id === "enerji-yonetimi" || service.id === "energy-management") && (
                <div className="energy-metrics" aria-label={en ? "Energy management scale" : "Enerji yönetimi çalışma ölçeği"}>
                  <div><AnimatedMetric end={5400} suffix="+" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "locations assessed for energy performance" : "enerji performansı değerlendirilen lokasyon"}</span></div>
                  <div><AnimatedMetric end={2300} suffix="+" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "locations with energy-efficiency work" : "enerji verimliliği çalışması yürütülen lokasyon"}</span></div>
                  <div><AnimatedMetric end={15} rangeEnd={30} prefix="%" locale={locale} restartEvent={serviceMetricsEvent} /><span>{en ? "identifiable energy-saving potential" : "tespit edilebilen enerji tasarrufu potansiyeli"}</span></div>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="section process" id="yaklasim">
        <div className="process-copy">
          <p className="kicker light"><span></span> {en ? "The Auratech approach" : "Auratech yaklaşımı"}</p>
          <h2>{en ? <>We go beyond reports<br/>and stay through implementation.</> : <>Raporla bitirmiyor,<br/>uygulamada kalıyoruz.</>}</h2>
          <p>{en ? "Every project begins with the organisation’s operational reality. We translate management goals into measurable work packages and collaborate with teams until results are achieved." : "Her projeyi kurumun mevcut gerçeklerinden başlatıyor, yönetim hedeflerini ölçülebilir iş paketlerine dönüştürüyor ve sonuç alınana kadar ekiplerle birlikte çalışıyoruz."}</p>
          <a className="button button-light" href="#iletisim">{en ? "Discuss our operating model" : "Çalışma modelimizi konuşalım"} <span>↗</span></a>
        </div>
        <div className="process-steps">
          {(en ? [
            ["01", "Assess", "We objectively establish the current state of data, processes and the organisation."],
            ["02", "Design", "We define the target structure, responsibilities, system requirements and success measures."],
            ["03", "Implement", "We coordinate implementation across teams, technology providers and management."],
            ["04", "Control", "We measure outcomes, make deviations visible and embed continuous improvement."],
          ] : [
            ["01", "Tespit", "Veri, süreç ve organizasyonun mevcut durumunu objektif olarak ortaya koyarız."],
            ["02", "Tasarım", "Hedef yapıyı, sorumlulukları, sistem gereksinimlerini ve başarı ölçütlerini tanımlarız."],
            ["03", "Uygulama", "Ekipler, teknoloji sağlayıcıları ve yönetim arasında uygulamayı koordine ederiz."],
            ["04", "Kontrol", "Sonuçları ölçer, sapmaları görünür kılar ve iyileştirmeyi kalıcı hale getiririz."],
          ]).map(([no, title, text]) => (
            <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="section case-section" id="calismalar">
        <div className="case-heading-grid">
          <div className="section-heading">
            <p className="kicker"><span></span> {en ? "Project stories" : "Proje hikâyeleri"}</p>
            <h2>{en ? "How did we create value with our clients?" : "Birlikte çalıştığımız kurumlarda nasıl değer yarattık?"}</h2>
          </div>
          <aside className="case-section-intro">
            <strong>{en ? "SOLUTIONS THAT WORK IN THE FIELD" : "SAHADA KARŞILIĞI OLAN ÇÖZÜMLER"}</strong>
            <p>{en ? "We do more than analyse problems: we turn them into practical solutions and follow the results together." : "Sorunları yalnızca analiz etmiyor; uygulanabilir çözümlere dönüştürüyor ve sonuçlarını birlikte takip ediyoruz."}</p>
          </aside>
        </div>
        <CaseCarousel items={activeCases} lang={lang} />
      </section>

      <section className="reference-section" id="referanslar">
        <div className="reference-heading">
          <p className="kicker light"><span></span> {en ? "Organisations We Create Value With" : "Birlikte Değer Ürettiğimiz Kurumlar"}</p>
          <h2>{en ? "Different sectors. One focus: results." : "Farklı sektörlerde, aynı sonuç odağıyla."}</h2>
          <p>{en ? "Selected organisations and brands where our energy and management engineering work has created value." : "Enerji yönetimi ve yönetim mühendisliği çalışmalarımızla değer ürettiğimiz seçili kurum ve markalar."}</p>
        </div>
        <div className="reference-grid" aria-label={en ? "Auratech references" : "Auratech referansları"}>
          {references.map((reference) => (
            <a
              className="reference-logo"
              href={reference.href}
              key={reference.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${reference.name} ${en ? "website" : "web sitesi"}`}
            >
              <strong className="reference-name">{reference.name}</strong>
              {reference.metric && (
                <span className="reference-meta"><AnimatedMetric end={reference.metric} suffix="+" locale={locale} /> {en ? reference.metricLabelEn : reference.metricLabelTr}</span>
              )}
              <span className="reference-link">{reference.domain} <b>↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section about" id="hakkimizda">
        <div>
          <p className="kicker"><span></span> Auratech</p>
          <h2>{en ? "Where management perspective meets engineering discipline." : "Yönetim bakışı ile mühendislik disiplininin birleştiği yerdeyiz."}</h2>
        </div>
        <div className="about-copy">
          <p>{en ? "Auratech is a management engineering company that connects executive decision-making with operational reality and technology implementation." : "Auratech; üst yönetimin karar alma gücünü, sahadaki operasyonel gerçeklik ve teknoloji uygulamalarıyla birleştiren bir yönetim mühendisliği şirketidir."}</p>
          <p>{en ? "We assess organisations across data, systems, processes and structure; identify root causes and develop solutions that can be put into practice." : "Kurumların mevcut yapılarını veri, sistem, süreç ve organizasyon boyutlarıyla birlikte değerlendiriyor; sorunların temel nedenlerini belirleyerek uygulanabilir çözümler geliştiriyoruz."}</p>
          <p>{en ? "From energy management and digital transformation to process design and implementation control, we do more than plan the work: we follow its execution in the field and measure the results." : "Enerji yönetiminden dijital dönüşüme, süreç tasarımından uygulama kontrolüne kadar çalışmaların yalnızca planlanmasını değil, sahada hayata geçirilmesini ve sonuçlarının ölçülmesini de takip ediyoruz."}</p>
          <a className="text-link dark" href="#iletisim">{en ? "Meet Auratech" : "Bizimle tanışın"} <span>↗</span></a>
        </div>
      </section>

      <section className="cta-section" id="iletisim">
        <p className="kicker light"><span></span> {en ? "Let’s assess it together" : "Birlikte değerlendirelim"}</p>
        <h2>{en ? "Let’s make your organisation’s current challenge visible." : "Kurumunuzdaki mevcut problemi birlikte görünür hale getirelim."}</h2>
        <p>{en ? "In the first meeting, we assess the current situation, priorities and potential scope of work together." : "İlk görüşmede mevcut durumu, öncelikleri ve olası çalışma kapsamını birlikte değerlendiriyoruz."}</p>
        <HubSpotContactForm lang={lang} />
      </section>

      <footer>
        <div className="footer-brand">
          <a className="brand brand-footer" href="#top">
            <Image className="brand-logo footer-logo" src="/auratech-logo.png" alt="Auratech" width={205} height={300} unoptimized />
          </a>
          <p>{en ? <>We turn data, systems and processes<br/>into measurable results.</> : <>Veriyi, sistemleri ve süreçleri<br/>ölçülebilir sonuca dönüştürüyoruz.</>}</p>
        </div>
        <div className="footer-column"><span>{en ? "SERVICES" : "HİZMETLER"}</span><a href="#hizmetler">{en ? "Management Engineering" : "Yönetim Mühendisliği"}</a><a href="#hizmetler">{en ? "Energy Management" : "Enerji Yönetimi"}</a><a href="#yaklasim">{en ? "Our Operating Model" : "Çalışma Modelimiz"}</a></div>
        <div className="footer-column contact-column">
          <span>{en ? "CONTACT" : "İLETİŞİM"}</span>
          <a className="address-link" href="https://www.google.com/maps/search/?api=1&query=Divan+Residence+Bomonti+Plaza+No%3A4+%C5%9Ei%C5%9Fli+%C4%B0stanbul" target="_blank" rel="noreferrer" aria-label={en ? "Open Divan Residence address in Google Maps" : "Divan Residence adresini Google Maps'te aç"}>
            <address><strong>Divan Residence</strong><br />Bomonti Plaza No:4<br />Şişli, İstanbul <span aria-hidden="true">↗</span></address>
          </a>
          <a href="mailto:info@auratech.com.tr">info@auratech.com.tr</a>
          <a href="tel:+902129099173">+90 212 909 91 73</a>
          <a href="https://www.linkedin.com/company/auratech-technology-consulting/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Auratech</span><span className="footer-legal"><Link href={en ? "/en/privacy" : "/kvkk"}>{en ? "Privacy Notice" : "KVKK Aydınlatma Metni"}</Link><Link href={en ? "/en/commercial-communications" : "/ticari-elektronik-ileti"}>{en ? "Commercial Communications" : "Ticari Elektronik İleti"}</Link><a className="back-to-top" href="#top">{en ? "Back to top" : "Yukarı Dön"} <span aria-hidden="true">↑</span></a></span></div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <HomePage lang="tr" />;
}
