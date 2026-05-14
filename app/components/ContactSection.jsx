'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [nama, setNama] = useState('')
  const [pesan, setPesan] = useState('')

  const kirimEmail = () => {
    const subject = encodeURIComponent('Konsultasi HOPESY — ' + (nama || '(nama tidak diisi)'))
    const body = encodeURIComponent(
      'Halo HOPESY,\n\nNama/Perusahaan: ' +
        (nama || '(nama tidak diisi)') +
        '\n\nSituasi/Kebutuhan:\n' +
        (pesan || '(pesan tidak diisi)') +
        '\n\nSaya tertarik untuk konsultasi lebih lanjut.\n\nTerima kasih.'
    )
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=arman@hopesy.co.id&su=${subject}&body=${body}`,
      '_blank'
    )
  }

  return (
    <div className="bg-s">
      <div className="sec">
        <div className="eyebrow">Mulai Konsultasi</div>
        <h2 className="dsp">
          Mari <span className="ink">ngobrol</span> dulu.
        </h2>
        <p className="body-l">
          Tidak perlu langsung komitmen. Ceritakan situasi brand Anda — proposal detail dikirim dalam 24 jam.
        </p>
        <div className="contact-g">
          {/* Contact Card */}
          <div className="cc-wrap">
            <div className="cc-top">
              <div className="cc-av">AA</div>
              <div>
                <div className="cc-nm">Arman Aziz</div>
                <div className="cc-rl">Founder &amp; CEO — HOPESY</div>
              </div>
            </div>
            <div className="cc-row">
              <div className="cc-ico">💬</div>
              <a href="https://wa.me/6285892758224" target="_blank" rel="noopener noreferrer">
                +62 858-9275-8224
              </a>
            </div>
            <div className="cc-row">
              <div className="cc-ico">📩</div>
              <a href="mailto:arman@hopesy.co.id">arman@hopesy.co.id</a>
            </div>
            <div className="cc-row">
              <div className="cc-ico">⏱</div>
              <span>Respons dalam 2–4 jam kerja</span>
            </div>
            <div className="cc-div"></div>
            <div className="cc-company">
              <div className="cc-company-name">PT HOPESY SUKSES MAKMUR</div>
              <div className="cc-company-addr">
                Sovereign Plaza<br />
                Jl. T.B. Simatupang No. 36, Cilandak Barat<br />
                Jakarta Selatan, DKI Jakarta 12430
              </div>
            </div>
            <div className="cc-mission">
              &ldquo;Brand yang bagus tidak seharusnya kalah hanya karena tidak ada yang percaya duluan.&rdquo;
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div className="wa-cta-wrap">
              <div className="wa-cta-label">💬 Cara Tercepat</div>
              <div className="wa-cta-desc">
                Chat langsung via WhatsApp — tim kami siap merespons dalam 2 jam kerja. Tidak perlu daftar, langsung ngobrol.
              </div>
              <a
                href="https://wa.me/6285892758224?text=Halo%20HOPESY%2C%20saya%20ingin%20konsultasi%20untuk%20brand%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-big"
              >
                💬 Chat WhatsApp Sekarang
              </a>
            </div>
            <div className="form-divider"><span>atau kirim email</span></div>
            <div className="fg">
              <label className="fl-lbl" htmlFor="f-nama">Nama / Perusahaan</label>
              <input
                type="text"
                className="fi"
                id="f-nama"
                placeholder="Nama Anda atau nama perusahaan"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="fg">
              <label className="fl-lbl" htmlFor="f-pesan">Situasi / Kebutuhan</label>
              <textarea
                className="fi"
                id="f-pesan"
                placeholder="Ceritakan situasi yang sedang dihadapi brand Anda..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />
            </div>
            <button
              onClick={kirimEmail}
              className="btn-f2"
              style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
            >
              Kirim via Gmail →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
