'use client'
import { useState, useRef } from 'react'

const WA_BASE = 'https://wa.me/6285892758224'

const services = [
  {
    ico: '📹',
    icoBg: 'var(--pc)',
    name: 'Content, UGC & Influencer',
    sub: 'Video Clippers · UGC Review · TikTok SEO Seeding · Nano/Mikro KOC',
    results: [
      { n: '400+', l: 'UGC per Campaign' },
      { n: '10×', l: 'Organic Reach' },
      { n: '#1', l: 'TikTok Search Result' },
    ],
    cols: [
      {
        title: 'Aktivitas',
        items: [
          'Produksi Video Clippers 15–60 detik',
          'UGC Review oleh real users terverifikasi',
          'TikTok SEO Seeding — keyword brand di search',
          'Aktivasi Nano KOC (Key Opinion Consumer)',
          'Koordinasi konten serentak untuk FYP push',
        ],
      },
      {
        title: 'Deliverables',
        items: [
          '50–500 video UGC per campaign',
          'TikTok search penuh keyword brand',
          'Konten organik yang terasa nyata',
          'Weekly content performance report',
          'Rekomendasi optimasi konten',
        ],
      },
      {
        title: 'Cocok Untuk',
        items: [
          'Brand baru yang butuh konten awal',
          'Produk yang butuh bukti visual nyata',
          'Brand yang ingin dominasi TikTok search',
          'Campaign musiman & product launch',
        ],
      },
    ],
    example:
      'Brand skincare baru launching — dalam 3 minggu, TikTok search dari 0 menjadi 400+ video organik. Konsumen yang search langsung menemukan bukti, bukan halaman kosong.',
    waText: 'Halo%20HOPESY%2C%20saya%20tertarik%20layanan%20Content%20UGC',
  },
  {
    ico: '⭐',
    icoBg: '#fefce8',
    name: 'Rating & Review Management',
    sub: 'Shopee · Tokopedia · Google Play · App Store · Google Maps · GoFood',
    results: [
      { n: '4.7+', l: 'Rating Target' },
      { n: '3.2×', l: 'Conversion Naik' },
      { n: '2 Mgg', l: 'Waktu Recovery' },
    ],
    cols: [
      {
        title: 'Aktivitas',
        items: [
          'Rating bintang 4–5 oleh real buyers',
          'Review tertulis variatif dan organik',
          'Distribusi bertahap sesuai pola algoritma',
          'Q&A halaman produk dijawab aktif',
          'Monitoring rating kompetitor',
        ],
      },
      {
        title: 'Platform Dilayani',
        items: [
          'Shopee & Tokopedia',
          'Google Play & App Store',
          'Google Maps & Google Review',
          'GoFood & GrabFood',
        ],
      },
      {
        title: 'Cocok Untuk',
        items: [
          'Produk baru yang belum punya rating',
          'Brand yang rating-nya turun akibat krisis',
          'Aplikasi baru yang butuh review awal',
          'Bisnis lokal yang butuh reputasi Google',
        ],
      },
    ],
    example:
      'Produk skincare dengan rating 3.1 akibat serangan negatif — dalam 14 hari rating kembali ke 4.7 dengan review dari real buyers. Algoritma Shopee kembali merekomendasikan di halaman pertama.',
    waText: 'Halo%20HOPESY%2C%20saya%20tertarik%20layanan%20Rating%20Review',
  },
  {
    ico: '💬',
    icoBg: '#eff6ff',
    name: 'Engagement & Conversation',
    sub: 'Comment & Q&A · X/Threads · WhatsApp Community & Dark Social',
    results: [
      { n: '1K+', l: 'Komentar per Campaign' },
      { n: '67%', l: 'Konsumen Terpengaruh' },
      { n: '10K+', l: 'Grup WA Dijangkau' },
    ],
    cols: [
      {
        title: 'Aktivitas',
        items: [
          'Komentar positif di iklan Meta & TikTok',
          'Q&A halaman produk marketplace',
          'Percakapan organik di X/Twitter & Threads',
          'Seeding WhatsApp Community & grup',
          'Dark social — forum, Reddit, grup privat',
        ],
      },
      {
        title: 'Deliverables',
        items: [
          '500–2.000 komentar organik per campaign',
          'Jangkauan 10K+ grup WhatsApp',
          'Narasi brand konsisten semua channel',
          'Sentiment analysis report mingguan',
        ],
      },
      {
        title: 'Cocok Untuk',
        items: [
          'Brand yang iklannya sepi komentar',
          'Produk yang butuh word-of-mouth',
          'Campaign yang butuh social proof cepat',
          'Brand yang mau masuk komunitas spesifik',
        ],
      },
    ],
    example:
      "Brand F&B baru dengan iklan yang selalu sepi komentar — setelah 2 minggu aktivasi, engagement naik 4× dan CTR meningkat signifikan karena calon pembeli melihat 'orang lain sudah tertarik'.",
    waText: 'Halo%20HOPESY%2C%20saya%20tertarik%20layanan%20Engagement',
  },
  {
    ico: '🔥',
    icoBg: '#fff7ed',
    name: 'Trending & Broadcast',
    sub: 'Twitter Trending Nasional · WA/TG Broadcast 10K+ grup · TikTok FYP',
    results: [
      { n: '100%', l: 'Twitter Trending Rate' },
      { n: '10K+', l: 'Grup Broadcast' },
      { n: '1 Hari', l: 'Hasil Terlihat' },
    ],
    cols: [
      {
        title: 'Aktivitas',
        items: [
          'Twitter/X Trending Nasional — 100% rate',
          'WA Broadcast ke 10.000+ grup aktif',
          'Telegram Broadcast komunitas relevan',
          'TikTok FYP push — engagement cluster',
          'Timing prime time 10–14 & 19–22',
        ],
      },
      {
        title: 'Deliverables',
        items: [
          'Trending Twitter Nasional (request waktu)',
          'Pesan brand ke jutaan pengguna WA',
          'Screenshot bukti trending dokumentasi',
          'Reach & impression report lengkap',
        ],
      },
      {
        title: 'Cocok Untuk',
        items: [
          'Product launch yang butuh momen viral',
          'Brand yang ingin terlihat dibicarakan',
          'Campaign promo & flash sale',
          'Respons krisis — balik narasi cepat',
        ],
      },
    ],
    example:
      "Brand fashion lokal baru mau positioning sebagai 'brand yang lagi hype' — trending di hari launching, dibarengi WA Broadcast ke komunitas fashion. Dalam 6 jam DM penuh dan website sempat down.",
    waText: 'Halo%20HOPESY%2C%20saya%20tertarik%20layanan%20Trending%20Broadcast',
  },
  {
    ico: '🏪',
    icoBg: '#f0fdf4',
    name: 'Research, Survey & Offline',
    sub: 'Rapid Survey · Trial Offline 100–500 orang · Report Akun · Event Activation',
    results: [
      { n: '500', l: 'Trial Users Offline' },
      { n: '48 Jam', l: 'Rapid Survey Result' },
      { n: 'Real', l: 'First-Hand Data' },
    ],
    cols: [
      {
        title: 'Aktivitas',
        items: [
          'Rapid Survey — 48 jam, 500+ responden',
          'Trial produk offline di lokasi strategis',
          'Event activation — real users hadir fisik',
          'Report & takedown akun palsu/negatif',
          'Audit trust kompetitor',
        ],
      },
      {
        title: 'Deliverables',
        items: [
          'Survey report + insight konsumen lengkap',
          '100–500 tester = testimonial nyata',
          'Data first-hand untuk keputusan marketing',
          'Dokumentasi lengkap aktivitas offline',
        ],
      },
      {
        title: 'Cocok Untuk',
        items: [
          'FMCG yang butuh trial sebelum masuk retail',
          'Brand yang butuh insight konsumen cepat',
          'Produk F&B yang butuh first taster',
          'Brand yang diserang akun palsu/negatif',
        ],
      },
    ],
    example:
      'Brand minuman baru butuh validasi sebelum masuk Alfamart — trial offline di 5 titik Jakarta, 300 tester, sekaligus collect review & foto UGC. Jadi bahan presentasi ke buyer retail dalam 1 minggu.',
    waText: 'Halo%20HOPESY%2C%20saya%20tertarik%20layanan%20Research%20Survey',
  },
]

const frameworks = [
  {
    ico: '📅',
    name: '4 Minggu Standar',
    dur: '28 Hari',
    quote: '"Bangun kepercayaan bertahap, mengikuti urutan psikologis konsumen."',
    phases: [
      {
        s: 'Minggu 1',
        t: 'UGC & Validasi Awal',
        d: 'Hilangkan kekosongan awal. Distribusi konten UGC, rating pertama, review pembuka.',
        qty: '50–100 UGC, 30–50 rating, 20–30 review',
        ch: 'Shopee/Tokopedia, TikTok, IG',
      },
      {
        s: 'Minggu 2',
        t: 'Komentar & Diskusi',
        d: "Ciptakan sinyal 'ramai = aman.' Aktifkan komentar di semua channel utama.",
        qty: '200–500 comment, 50+ Q&A',
        ch: 'Meta Ads, TikTok Ads, X/Threads, WA Community',
      },
      {
        s: 'Minggu 3',
        t: 'Penguatan & Repetisi',
        d: 'Perluas jangkauan dan sebaran organik. TikTok SEO, post-purchase validation.',
        qty: '100–200 UGC gelombang 2, 500+ WA seeding',
        ch: 'TikTok Search, WA Group, Threads',
      },
      {
        s: 'Minggu 4',
        t: 'Conversion Push',
        d: 'Eliminasi keraguan terakhir sebelum checkout. Dorong keputusan beli final.',
        qty: '50+ afiliasi push, 200+ comment produk',
        ch: 'Marketplace, TikTok Shop, WA Community',
      },
    ],
    kpis: [
      { l: 'Trust Score Target', v: '+30–40 Poin' },
      { l: 'Total UGC', v: '200–500 Konten' },
      { l: 'Total Comment', v: '500–1.000+' },
      { l: 'Cocok Untuk', v: 'Brand existing yang conversion-nya stagnan, iklan sudah jalan tapi trust belum terbangun' },
    ],
    cols: 4,
  },
  {
    ico: '🛡️',
    name: '72 Jam Crisis',
    dur: '3 Hari',
    quote: '"Kontrol narasi sebelum ia mengontrol brand."',
    phases: [
      {
        s: 'Jam 0–6',
        t: 'Assess & Mobilisasi',
        d: 'Audit konten negatif, susun narasi counter, approval klien, aktifkan tim penuh.',
        qty: 'Audit 100% konten negatif',
        ch: 'Semua platform terdampak',
      },
      {
        s: 'Jam 6–24',
        t: 'Counter Flood',
        d: 'Banjiri narasi positif secara masif dan terkoordinasi di semua channel.',
        qty: '2.000+ comment, 500+ report, 1 trending',
        ch: 'Twitter/X, TikTok, Meta, WA Group',
      },
      {
        s: 'Hari 2',
        t: 'Stabilisasi',
        d: 'Tackle comment satu per satu. Gelombang 2 UGC testimonial. Seeding komunitas.',
        qty: '100+ UGC testimonial, 5.000+ WA seeding',
        ch: 'WA Community, Threads, TikTok',
      },
      {
        s: 'Hari 3',
        t: 'Normalisasi',
        d: 'Brand kembali aktif & positif. Monitoring 24 jam. Siapkan laporan lengkap.',
        qty: 'Full monitoring semua channel',
        ch: 'Semua platform + dark social',
      },
    ],
    kpis: [
      { l: 'Target Sentimen', v: '3:1 Positif dalam 24 Jam' },
      { l: 'Respons Aktivasi', v: 'Dalam 6 Jam' },
      { l: 'Trust Score', v: '20 → 65' },
      { l: 'Cocok Untuk', v: 'Brand kena viral negatif, serangan review terkoordinasi, atau isu reputasi mendadak' },
    ],
    cols: 4,
  },
  {
    ico: '📈',
    name: '3 Bulan Brand Building',
    dur: '90 Hari',
    quote: '"Dari tidak dikenal → dipercaya → dibeli."',
    phases: [
      {
        s: 'Bulan 1 — Presence',
        t: '"Siapa brand ini?"',
        d: 'Bangun eksistensi dari nol. Pastikan brand terlihat di semua touchpoint pencarian.',
        qty: '100–200 UGC, 50+ rating, TikTok SEO 20+ keyword',
        ch: 'TikTok Search, Shopee/Tokopedia, IG',
        ts: '45–55',
      },
      {
        s: 'Bulan 2 — Authority',
        t: '"Bisa dipercaya?"',
        d: 'Bangun otoritas dan validasi sosial. Rating massal, komentar aktif, komunitas.',
        qty: '200+ UGC by talent, 100+ rating, 500+ comment',
        ch: 'Marketplace, Meta Ads, X/Threads, WA',
        ts: '60–70',
      },
      {
        s: 'Bulan 3 — Conversion',
        t: '"Beli sekarang?"',
        d: 'Dorong konversi dengan kepercayaan yang sudah terbangun kuat.',
        qty: '50+ afiliasi, 1 trending, 10K+ WA broadcast',
        ch: 'WA Community, Twitter, TikTok Shop',
        ts: '75–85',
      },
    ],
    kpis: [
      { l: 'Trust Score Akhir', v: '75–85+' },
      { l: 'Total Konten', v: '500–1.000 UGC' },
      { l: 'Durasi', v: '90 Hari' },
      { l: 'Cocok Untuk', v: 'Brand baru launching, brand yang rebranding, atau produk baru di kategori yang kompetitif' },
    ],
    cols: 3,
  },
  {
    ico: '🚀',
    name: 'Launch Day D-Day',
    dur: '1 Hari',
    quote: '"Hari pertama launching adalah segalanya."',
    phases: [
      {
        s: 'Pagi 06–10',
        t: 'Ignition',
        d: 'UGC wave pertama live serentak. FYP engagement cluster aktif di jam pembuka.',
        qty: '50–100 UGC serentak',
        ch: 'TikTok FYP, IG Reels',
      },
      {
        s: 'Siang 10–14',
        t: 'Amplification',
        d: 'Trending Twitter prime time. WA Broadcast ke seluruh jaringan. Komentar massif.',
        qty: '1 trending, 1.000+ comment, 5K+ WA grup',
        ch: 'Twitter/X, WA Broadcast, Meta Ads',
      },
      {
        s: 'Sore 14–18',
        t: 'Validation',
        d: 'Rating marketplace mulai masuk. Q&A aktif di halaman produk. UGC gelombang 3.',
        qty: '50+ rating, 50+ Q&A, 50 UGC',
        ch: 'Shopee/Tokopedia, TikTok',
      },
      {
        s: 'Malam 18–23',
        t: 'Conversion Push',
        d: 'Dorong checkout dengan afiliasi dan tackle comment langsung di halaman produk.',
        qty: '50+ afiliasi, 200+ comment produk',
        ch: 'TikTok Shop, Marketplace, WA',
      },
    ],
    kpis: [
      { l: 'Trust Score / Hari', v: '+25–35 Poin' },
      { l: 'Total Aktivitas', v: '250–500 UGC + 1K Comment' },
      { l: 'Hasil', v: 'Terlihat Hari Sama' },
      { l: 'Cocok Untuk', v: 'Product launch baru, flash sale besar, campaign promo terbatas — butuh dampak maksimal dalam 1 hari' },
    ],
    cols: 4,
  },
]

export default function ServicesSection() {
  const [mainTab, setMainTab] = useState(0)
  const [openSvc, setOpenSvc] = useState(null)
  const [fwTab, setFwTab] = useState(0)
  const detailRefs = useRef({})

  const toggleSvc = (idx) => {
    const next = openSvc === idx ? null : idx
    setOpenSvc(next)
    if (next !== null) {
      setTimeout(() => {
        detailRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    }
  }

  const fw = frameworks[fwTab]

  return (
    <section id="layanan" className="bg-s">
      <div className="sec">
        <div className="eyebrow">Layanan &amp; Framework</div>
        <h2 className="dsp">
          Semua yang dibutuhkan<br />
          <span className="ink">untuk membangun kepercayaan.</span>
        </h2>

        <div className="lf-tabs">
          <button className={`lf-tab${mainTab === 0 ? ' active' : ''}`} onClick={() => { setMainTab(0); setOpenSvc(null) }}>
            5 Kategori Layanan
          </button>
          <button className={`lf-tab${mainTab === 1 ? ' active' : ''}`} onClick={() => setMainTab(1)}>
            4 Strategic Framework
          </button>
        </div>

        {/* Services Panel */}
        <div className={`lf-panel${mainTab === 0 ? ' active' : ''}`}>
          <div className="svc-wrap">
            {services.map((svc, idx) => (
              <div key={idx}>
                <div
                  className={`svc-i${openSvc === idx ? ' active' : ''}${idx === services.length - 1 ? '' : ''}`}
                  style={idx === services.length - 1 ? { borderBottom: 'none' } : {}}
                  onClick={() => toggleSvc(idx)}
                >
                  <div className="svc-ico" style={{ background: svc.icoBg }}>{svc.ico}</div>
                  <div>
                    <div className="svc-n">{svc.name}</div>
                    <div className="svc-s">{svc.sub}</div>
                  </div>
                  <div className="svc-arr">›</div>
                </div>
                <div
                  className={`svc-detail${openSvc === idx ? ' open' : ''}`}
                  id={`svc-${idx}`}
                  ref={(el) => { detailRefs.current[idx] = el }}
                >
                  <div className="sd-results">
                    {svc.results.map((r) => (
                      <div className="sd-result-card" key={r.l}>
                        <div className="sd-rn">{r.n}</div>
                        <div className="sd-rl">{r.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="sd-grid">
                    {svc.cols.map((col) => (
                      <div className="sd-col" key={col.title}>
                        <div className="sd-col-title">{col.title}</div>
                        <div className="sd-items">
                          {col.items.map((item) => (
                            <div className="sd-item" key={item}>{item}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sd-bottom">
                    <div className="sd-example">
                      <div className="sd-example-title">Contoh Nyata</div>
                      <div className="sd-example-text">&ldquo;{svc.example}&rdquo;</div>
                    </div>
                    <a
                      href={`${WA_BASE}?text=${svc.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sd-cta"
                    >
                      💬 Diskusi Layanan Ini
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Framework Panel */}
        <div className={`lf-panel${mainTab === 1 ? ' active' : ''}`}>
          <div className="fw-tabs">
            {frameworks.map((f, i) => (
              <button
                key={f.name}
                className={`fw-tab${fwTab === i ? ' active' : ''}`}
                onClick={() => setFwTab(i)}
              >
                <span className="ftb-i">{f.ico}</span>
                <span className="ftb-n">{f.name}</span>
                <span className="ftb-d">{f.dur}</span>
              </button>
            ))}
          </div>

          <div className="fw-panel-item active">
            <div className="fw-top">
              <div className="fw-hl">{fw.quote}</div>
              <a
                href={`${WA_BASE}?text=Halo%20HOPESY%2C%20saya%20ingin%20info%20framework%20${encodeURIComponent(fw.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fw-btn"
              >
                Minta Penawaran →
              </a>
            </div>
            <div
              className="fw-phases"
              style={{ gridTemplateColumns: `repeat(${fw.cols}, 1fr)` }}
            >
              {fw.phases.map((ph) => (
                <div className="fw-ph" key={ph.s}>
                  <div className="ph-s">{ph.s}</div>
                  <div className="ph-t">{ph.t}</div>
                  <div className="ph-d">
                    {ph.d}
                    <br /><br />
                    <strong style={{ fontSize: '11px', color: 'var(--p)' }}>Qty:</strong> {ph.qty}
                    <br />
                    <strong style={{ fontSize: '11px', color: 'var(--p)' }}>Channel:</strong> {ph.ch}
                    {ph.ts && (
                      <>
                        <br />
                        <strong style={{ fontSize: '11px', color: 'var(--p)' }}>Target Trust Score:</strong> {ph.ts}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="fw-kpi">
              {fw.kpis.map((kpi) => (
                <div key={kpi.l}>
                  <div className="kl">{kpi.l}</div>
                  <div className="kv">{kpi.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
