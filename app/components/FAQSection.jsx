'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Apakah ini legal dan aman untuk brand saya?',
    tag: 'Keamanan',
    a: 'HOPESY beroperasi dengan jaringan real users — bukan bot atau akun palsu. Semua aktivitas mengikuti pola organik yang wajar. Selama 7 tahun, tidak ada satu pun klien yang kena penalti atau suspensi.',
  },
  {
    q: 'Apa bedanya dengan jasa beli rating atau followers biasa?',
    tag: 'Diferensiasi',
    a: 'Jasa rating biasa pakai bot yang mudah dideteksi platform dan tidak memberi dampak nyata pada kepercayaan. HOPESY pakai 500K+ real users dengan riwayat transaksi asli — hasilnya bukan sekadar angka, tapi kepercayaan yang benar-benar memengaruhi keputusan beli.',
  },
  {
    q: 'Berapa lama hasil mulai terlihat?',
    tag: 'Timeline',
    a: 'Untuk framework Launch Day, hasilnya terlihat di hari yang sama. Untuk 4 Minggu Standar, perubahan Trust Score terlihat mulai minggu ke-1. Dampak pada conversion rate biasanya signifikan di minggu ke-2 hingga ke-3.',
  },
  {
    q: 'Apakah ada garansi hasil?',
    tag: 'Garansi',
    a: 'Setiap proposal HOPESY disertai target Trust Score dan KPI yang konkret. Jika dalam periode yang disepakati target belum tercapai, kami lanjutkan aktivasi tanpa biaya tambahan sampai target terpenuhi. Kami tidak menjual janji — kami menjual sistem yang sudah terbukti.',
  },
  {
    q: 'Apakah cocok untuk semua jenis bisnis?',
    tag: 'Compatibility',
    a: 'HOPESY paling efektif untuk bisnis yang bergantung pada kepercayaan konsumen — FMCG, beauty & skincare, F&B, fashion, fintech, aplikasi, dan jasa. Untuk bisnis B2B dengan siklus penjualan panjang, kami rekomendasikan konsultasi terlebih dahulu untuk melihat apakah ada fitnya.',
  },
  {
    q: 'Bisa dipakai agency untuk mengelola banyak klien?',
    tag: 'Untuk Agency',
    a: 'Ya — HOPESY memiliki 20+ agency partners aktif dengan skema khusus: volume pricing, dashboard multi-klien, dan dedicated account manager. Agency juga bisa white-label layanan HOPESY untuk ditawarkan ke klien mereka. Hubungi kami untuk mendiskusikan skema partnership.',
  },
  {
    q: 'Apakah platform seperti Shopee atau TikTok bisa mendeteksi ini?',
    tag: 'Keamanan Platform',
    a: 'Platform mendeteksi pola tidak wajar — lonjakan dari akun baru, pola IP yang sama, aktivitas di luar jam normal. HOPESY mendistribusi aktivitas secara bertahap dari akun dengan riwayat transaksi nyata, dengan pola yang mencerminkan perilaku konsumen organik. Berbeda fundamentalnya dari jasa instan.',
  },
  {
    q: 'Bagaimana cara memulai?',
    tag: 'Onboarding',
    a: 'Chat via WhatsApp atau kirim email. Audit Trust Score 1–2 hari, proposal 24 jam, aktivasi mulai 2–3 hari kerja setelah deal. Total dari kontak pertama ke aktivasi berjalan: 4–5 hari kerja.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  const toggle = (idx) => setOpen(open === idx ? null : idx)

  return (
    <section id="faq" className="bg-s1">
      <div className="sec">
        <div className="eyebrow">FAQ</div>
        <h2 className="dsp">
          Pertanyaan yang<br />
          <span className="ink">paling sering ditanyakan.</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item${open === idx ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => toggle(idx)}>
                <span className="faq-qtxt">{faq.q}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-a">
                <span className="faq-tag">{faq.tag}</span>
                <br />
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
