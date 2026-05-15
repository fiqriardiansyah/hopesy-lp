import TopBar from './components/TopBar'
import HeroProof from './components/HeroProof'
import LiveBar from './components/LiveBar'
import ServicesSection from './components/ServicesSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'

const logos = [
  { txt: 'Disney+',      src: '/brands/disney.png' },
  { txt: 'Allianz',      src: '/brands/allianz.png' },
  { txt: 'digibank',     src: '/brands/digibank.png' },
  { txt: 'tokopedia',    src: '/brands/tokopedia.png' },
  { txt: 'XL',           src: '/brands/xl.png' },
  { txt: 'UOB',          src: '/brands/uob.png' },
  { txt: 'HONDA',        src: '/brands/honda.png' },
  { txt: 'BTN',          src: '/brands/btn.png' },
  { txt: 'tokocrypto',   src: '/brands/tokocrypto.png' },
  { txt: 'Blu',          src: '/brands/blu.png' },
  { txt: 'grab',         src: '/brands/grab.png' },
  { txt: 'Evalube',      src: '/brands/evalube.png' },
  { txt: 'KratingDaeng', src: '/brands/kratindaeng.png' },
  { txt: 'BCA',          src: '/brands/bca.png' },
  { txt: 'Wondr',        src: '/brands/wondr.png' },
  { txt: 'Kopi ABC',     src: '/brands/abc.png' },
  { txt: 'Free Fire',    src: '/brands/freefire.png' },
  { txt: 'ajaib',        src: '/brands/ajaib.png' },
]

export default function Page() {
  return (
    <>
      <TopBar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-in">
          <div>
            <div className="eyebrow-pill">
              <span className="pulse"></span>
              {"Indonesia's Trust Activation Network"}
            </div>
            <h1 className="hero-h">
              {"People don't trust ads."}<br />
              <span className="hl">People trust people.</span>
            </h1>
            <p className="hero-body">
              HOPESY membangun kepercayaan konsumen secara sistematis — lewat 500.000 real users
              terverifikasi, framework yang terbukti, dan Trust Score yang terukur.
            </p>
            <div className="hero-acts">
              <a
                className="btn-wa"
                href="https://wa.me/6285892758224?text=Halo%20HOPESY%2C%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <a className="btn-t" href="#layanan">Lihat Layanan →</a>
            </div>
            <HeroProof />
          </div>

          <div className="browser-wrap">
            <div className="fl-card fc-top">
              <div className="flc-ico">📈</div>
              <div>
                <div className="flc-val">+44 Poin</div>
                <div className="flc-lbl">Trust Score bulan ini</div>
              </div>
            </div>
            <div className="browser">
              <div className="brow-bar">
                <div className="brow-dots"><span></span><span></span><span></span></div>
                <div className="brow-url">hopesy.co.id/dashboard</div>
                <div style={{ width: '60px' }}></div>
              </div>
              <div className="brow-body">
                <div className="brow-side">
                  <div className="bs-logo">Hopesy</div>
                  <div className="bs-item on">Dashboard</div>
                  <div className="bs-item">Campaign</div>
                  <div className="bs-item">Trust Score</div>
                  <div className="bs-item">Report</div>
                  <div className="bs-item">Settings</div>
                </div>
                <div className="brow-main">
                  <div className="bm-head">
                    <span className="bm-title">Trust Score Overview</span>
                    <span className="bm-live">● Live</span>
                  </div>
                  <div className="bm-score-row">
                    <div className="bms-big">72</div>
                    <div className="bms-sub">/100</div>
                    <div className="bms-badge">↑ Zona Kuat</div>
                  </div>
                  <div className="bm-mets">
                    <div>
                      <div className="bmm-head"><span>Volume</span><span className="bmm-v">80</span></div>
                      <div className="bmm-track"><div className="bmm-fill" style={{ width: '80%', background: 'var(--p)' }}></div></div>
                    </div>
                    <div>
                      <div className="bmm-head"><span>Kualitas UGC</span><span className="bmm-v">70</span></div>
                      <div className="bmm-track"><div className="bmm-fill" style={{ width: '70%', background: '#6d28d9' }}></div></div>
                    </div>
                    <div>
                      <div className="bmm-head"><span>Sebaran Platform</span><span className="bmm-v">60</span></div>
                      <div className="bmm-track"><div className="bmm-fill" style={{ width: '60%', background: '#2563eb' }}></div></div>
                    </div>
                    <div>
                      <div className="bmm-head"><span>Sentimen</span><span className="bmm-v">75</span></div>
                      <div className="bmm-track"><div className="bmm-fill" style={{ width: '75%', background: '#16a34a' }}></div></div>
                    </div>
                  </div>
                  <div className="bm-stats">
                    <div className="bmsi"><div className="bmsi-n">1.2K</div><div className="bmsi-l">UGC</div></div>
                    <div className="bmsi"><div className="bmsi-n">4.7</div><div className="bmsi-l">Rating</div></div>
                    <div className="bmsi"><div className="bmsi-n">8.4K</div><div className="bmsi-l">Comments</div></div>
                    <div className="bmsi"><div className="bmsi-n">3×</div><div className="bmsi-l">Trending</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl-card fc-bot">
              <div className="flc-ico">🎯</div>
              <div>
                <div className="flc-val">+312% Sales</div>
                <div className="flc-lbl">Recovery dalam 5 minggu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE TICKER */}
      <LiveBar />

      {/* CLIENT LOGOS */}
      <div className="logos-bar">
        <div className="logos-in">
          <div className="logos-lbl">Dipercaya oleh brand-brand ini</div>
          <div className="logos-grid">
            {logos.map(({ txt, src }) => (
                <img
                  key={txt}
                  className="logo-item"
                  src={src}
                  alt={txt}
                />
            ))}
          </div>
        </div>
      </div>

      {/* CARA KERJA */}
      <section id="cara-kerja" className="bg-s1">
        <div className="sec">
          <div className="eyebrow">Cara Kerja</div>
          <h2 className="dsp">
            Dari konsultasi ke hasil,<br />
            <span className="ink">4 langkah saja.</span>
          </h2>
          <p className="body-l">
            Proses yang simpel dan transparan — dari hari pertama sampai weekly report terakhir.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Konsultasi &amp; Audit</div>
              <div className="step-desc">Ceritakan situasi brand Anda. Kami audit kondisi Trust Score dan petakan gap-nya.</div>
              <span className="step-tag">Gratis · 1–2 Hari</span>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Strategi &amp; Proposal</div>
              <div className="step-desc">Framework dipilih sesuai situasi. Proposal dengan target Trust Score dan KPI dikirim 24 jam.</div>
              <span className="step-tag">24 Jam</span>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Network Activation</div>
              <div className="step-desc">500K+ real users digerakkan terkoordinasi. UGC, rating, komentar, trending — sesuai jadwal.</div>
              <span className="step-tag">Mulai Hari ke-3</span>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-title">Report &amp; Optimasi</div>
              <div className="step-desc">Weekly report real-time. Trust Score dimonitor dan strategi disesuaikan kalau perlu.</div>
              <span className="step-tag">Weekly Report</span>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <ServicesSection />

      {/* TRUST SCORE */}
      <section id="trust-score" className="bg-s1">
        <div className="sec">
          <div className="eyebrow">Trust Score System</div>
          <h2 className="dsp" style={{ marginBottom: '40px' }}>
            Kepercayaan yang <span className="ink">terukur,</span><br />
            bukan sekadar terasa.
          </h2>
          <div className="trust-stats-grid">
            <div style={{ background: 'var(--pc)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(139,15,99,.15)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'rgba(139,15,99,.08)', borderRadius: '50%' }}></div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '2.8rem', fontWeight: 600, color: 'var(--p)', lineHeight: 1, marginBottom: '8px' }}>270%</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--os)', marginBottom: '6px' }}>Peningkatan Konversi</div>
              <div style={{ fontSize: '12px', color: 'var(--osv)', lineHeight: 1.65 }}>
                Produk dengan Trust Score tinggi memiliki peluang konversi hampir 3× lebih tinggi dibanding produk tanpa bukti sosial.{' '}
                <em style={{ color: 'var(--p)', fontStyle: 'normal' }}>— Social Proof Psychology Research</em>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', border: '1px solid var(--olv)', boxShadow: 'var(--e1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'rgba(37,99,235,.05)', borderRadius: '50%' }}></div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '2.8rem', fontWeight: 600, color: '#2563eb', lineHeight: 1, marginBottom: '8px' }}>30–50%</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--os)', marginBottom: '6px' }}>Penurunan CAC</div>
              <div style={{ fontSize: '12px', color: 'var(--osv)', lineHeight: 1.65 }}>
                Cost Per Acquisition turun drastis karena orang lebih cepat percaya. Kepercayaan memangkas biaya akuisisi secara signifikan.
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', border: '1px solid var(--olv)', boxShadow: 'var(--e1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'rgba(22,163,74,.05)', borderRadius: '50%' }}></div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '2.8rem', fontWeight: 600, color: '#16a34a', lineHeight: 1, marginBottom: '8px' }}>70%</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--os)', marginBottom: '6px' }}>Keputusan dari Orang Lain</div>
              <div style={{ fontSize: '12px', color: 'var(--osv)', lineHeight: 1.65 }}>
                70% keputusan beli di TikTok &amp; Shopee didasari apa kata orang lain — UGC, komentar, review — bukan kata iklan brand.
              </div>
            </div>
          </div>
          <div className="trust-g">
            <div className="tf-card">
              <div className="tf-hd">
                <div className="tf-ttl">Formula Trust Score</div>
                <div className="tf-code">
                  <span className="c1">TrustScore</span> =<br />
                  &nbsp;&nbsp;<span className="c2">Volume</span>&nbsp;&nbsp;&nbsp;&nbsp;× <span className="c3">30%</span><br />
                  + <span className="c2">Kualitas</span>&nbsp;&nbsp;× <span className="c3">30%</span><br />
                  + <span className="c2">Sebaran</span>&nbsp;&nbsp;&nbsp;× <span className="c3">20%</span><br />
                  + <span className="c2">Sentimen</span>&nbsp;&nbsp;× <span className="c3">20%</span>
                </div>
              </div>
              <div className="tf-bd">
                {[['0–30','#dc2626','28px','Kritis','Jangan iklan dulu'],['31–50','#d97706','44px','Lemah','Bangun fondasi'],['51–70','#ca8a04','60px','Sedang','Iklan mulai efektif'],['71–85','#16a34a','76px','Kuat','Conversion optimal'],['86–100','var(--p)','96px','Dominan','Pemimpin kategori']].map(([range,color,w,name,desc])=>(
                  <div className="zone-r" key={range}>
                    <span className="zrng" style={{ color }}>{range}</span>
                    <div className="zbar" style={{ width: w, background: color }}></div>
                    <span className="znm">{name}</span>
                    <span className="zdesc">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '19px', fontWeight: 600, color: 'var(--os)', lineHeight: 1.4, marginBottom: '14px' }}>
                Satu-satunya yang mengukur kepercayaan secara sistematis dan terukur.
              </div>
              <div style={{ fontSize: '14px', color: 'var(--osv)', lineHeight: 1.8, marginBottom: '24px', fontWeight: 500 }}>
                Trust Score adalah indikator prediktif seberapa besar kemungkinan traffic yang ada akan berkonversi. Tanpa ini, brand tidak tahu apakah iklan mereka membakar uang atau tidak.
              </div>
              <div style={{ background: 'var(--pc)', borderRadius: '16px', padding: '20px', borderLeft: '3px solid var(--p)' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--p)', letterSpacing: '.5px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Contoh Nyata — 4 Minggu Aktivasi
                </div>
                <div style={{ fontFamily: 'var(--fd)', fontSize: '24px', fontWeight: 600, color: 'var(--poc)' }}>28 → 72 / 100</div>
                <div style={{ fontSize: '12px', color: 'var(--osv)', marginTop: '4px', fontWeight: 500 }}>
                  Vol(80) + Kual(70) + Sebar(60) + Sentimen(75) = Trust Score 72
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUKTI NYATA */}
      <div className="bg-s">
        <div className="sec">
          <div className="eyebrow">Bukti Nyata</div>
          <h2 className="dsp">
            Bukan klaim.<br />
            <span className="ink">Ini yang benar-benar terjadi.</span>
          </h2>
          <p className="body-l" style={{ marginBottom: 0 }}>
            Hasil nyata dari brand-brand yang sudah bekerja sama dengan HOPESY.
          </p>
          <div className="proof-g">
            <div className="cs-card">
              <div className="cs-hd">
                <span className="cs-tag">Crisis Recovery · 5 Minggu</span>
                <div className="cs-title">Brand Skincare Lokal — Dari Krisis Viral ke Pemimpin Kategori</div>
                <div className="cs-sub">TikTok · Shopee · Twitter · Framework 72 Jam + 4 Minggu</div>
              </div>
              <div className="cs-scores">
                <div>
                  <div className="cs-slbl" style={{ color: '#dc2626' }}>
                    <div className="cs-sdot" style={{ background: '#dc2626' }}></div>Sebelum
                  </div>
                  <div className="cs-snum" style={{ color: '#dc2626' }}>18<span style={{ fontSize: '18px', fontWeight: 500, color: 'var(--osv)' }}>/100</span></div>
                  {[['Volume','22','#dc2626'],['Kualitas','15','#ef4444'],['Sebaran','18','#f87171'],['Sentimen','12','#fca5a5']].map(([lbl,v,clr])=>(
                    <div className="cs-bitem" key={lbl}>
                      <div className="cs-bhead"><span>{lbl}</span><span className="cs-bval">{v}</span></div>
                      <div className="cs-btrack"><div className="cs-bfill" style={{ width: `${v}%`, background: clr }}></div></div>
                    </div>
                  ))}
                </div>
                <div className="cs-arrow-col">
                  <div className="cs-arr-ico">→</div>
                  <div className="cs-arr-lbl">5 Minggu</div>
                </div>
                <div>
                  <div className="cs-slbl" style={{ color: '#16a34a' }}>
                    <div className="cs-sdot" style={{ background: '#16a34a' }}></div>Setelah
                  </div>
                  <div className="cs-snum" style={{ color: '#16a34a' }}>79<span style={{ fontSize: '18px', fontWeight: 500, color: 'var(--osv)' }}>/100</span></div>
                  {[['Volume','85','#16a34a'],['Kualitas','78','#22c55e'],['Sebaran','72','#4ade80'],['Sentimen','80','#86efac']].map(([lbl,v,clr])=>(
                    <div className="cs-bitem" key={lbl}>
                      <div className="cs-bhead"><span>{lbl}</span><span className="cs-bval">{v}</span></div>
                      <div className="cs-btrack"><div className="cs-bfill" style={{ width: `${v}%`, background: clr }}></div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-footer">
                <div><div className="cfl">Trust Score</div><div className="cfv">18 → 79</div></div>
                <div><div className="cfl">Sales Recovery</div><div className="cfv">+312%</div></div>
                <div><div className="cfl">Waktu</div><div className="cfv">5 Minggu</div></div>
              </div>
            </div>
            <div className="testi-stack">
              <div className="testi-c featured">
                <div className="testi-res">+2.8× Conversion Rate</div>
                <p className="testi-txt">
                  Rating marketplace kami naik dari 3.8 ke 4.7 dalam 3 minggu. Tapi yang lebih penting —{' '}
                  <strong>conversion rate iklan naik 2.8x tanpa tambah budget.</strong> HOPESY bukan cost, ini investasi yang terukur.
                </p>
                <div className="testi-div"></div>
                <div className="testi-person">
                  <div className="testi-av" style={{ background: 'var(--p)' }}>RP</div>
                  <div>
                    <div className="testi-name">R. Pratama</div>
                    <div className="testi-role">Brand Manager · Industri Skincare</div>
                    <div className="testi-stars">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="testi-c">
                <div className="testi-res">TikTok 0 → 400+ Video Organik</div>
                <p className="testi-txt">
                  TikTok search brand kami dari kosong total jadi{' '}
                  <strong>ratusan video organik dalam sebulan.</strong> Sekarang konsumen yang search nama kami langsung menemukan bukti, bukan halaman kosong.
                </p>
                <div className="testi-div"></div>
                <div className="testi-person">
                  <div className="testi-av" style={{ background: '#3730a3' }}>DK</div>
                  <div>
                    <div className="testi-name">D. Kusuma</div>
                    <div className="testi-role">Digital Marketing Lead · Industri Fashion</div>
                    <div className="testi-stars">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="testi-c">
                <div className="testi-res">Launch Day #1 Twitter Trending</div>
                <p className="testi-txt">
                  Hari pertama launching terasa seperti brand yang sudah 3 tahun ada.{' '}
                  <strong>Trending hari yang sama, rating langsung 4.6, komentar ratusan.</strong> Kompetitor kami sampai kaget.
                </p>
                <div className="testi-div"></div>
                <div className="testi-person">
                  <div className="testi-av" style={{ background: '#16a34a' }}>BS</div>
                  <div>
                    <div className="testi-name">B. Santoso</div>
                    <div className="testi-role">CEO · Industri F&amp;B</div>
                    <div className="testi-stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* MANIFESTO */}
      <div className="manifesto">
        <div className="mani-in">
          <div className="mani-div"></div>
          <p className="mani-q">
            {'"HOPESY bukan di bisnis konten. Bukan di bisnis influencer. '}
            <em>HOPESY ada di bisnis kepercayaan</em>
            {' — '}
            <strong>{'dan kepercayaan adalah fondasi dari setiap rupiah yang dibelanjakan konsumen Indonesia."'}</strong>
          </p>
        </div>
      </div>

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div>
            <div className="footer-logo-wrap">
              <img
                src="/hopesy.png"
                alt="HOPESY"
                height="28"
                style={{ display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.8 }}
              />
            </div>
            <div className="footer-tagline">{"\"People don't trust ads. People trust people.\""}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.2)', marginTop: '14px', lineHeight: 1.7 }}>
              PT HOPESY SUKSES MAKMUR<br />
              Sovereign Plaza, Jakarta Selatan 12430
            </div>
          </div>
          <div>
            <div className="footer-col-title">Layanan</div>
            <div className="footer-col-item">Content, UGC &amp; Influencer</div>
            <div className="footer-col-item">Rating &amp; Review Management</div>
            <div className="footer-col-item">Engagement &amp; Conversation</div>
            <div className="footer-col-item">Trending &amp; Broadcast</div>
            <div className="footer-col-item">Research, Survey &amp; Offline</div>
          </div>
          <div>
            <div className="footer-col-title">Kontak</div>
            <div className="footer-col-item">
              <a href="https://wa.me/6285892758224" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
            <div className="footer-col-item">
              <a href="mailto:arman@hopesy.co.id">📩 arman@hopesy.co.id</a>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="footer-col-title">Alamat</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.3)', lineHeight: 1.7 }}>
                Sovereign Plaza<br />
                Jl. T.B. Simatupang No. 36<br />
                Jakarta Selatan 12430
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 PT HOPESY SUKSES MAKMUR. All rights reserved.</div>
          <div className="footer-copy">{"Indonesia's Trust Activation Network"}</div>
        </div>
      </footer>
    </>
  )
}
