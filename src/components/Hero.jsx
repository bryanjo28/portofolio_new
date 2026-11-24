import { useState } from 'react'
import { profile } from '../data/portfolio'
import { ArrowRight, MapPin } from './Icons'
import { Bot, Check, Circle, Headphones, Mic, Paperclip, Send, Sparkles } from 'lucide-react'

const showcaseScenarios = [
  {
    label: 'Dashboard bisnis',
    prompt: 'Bantu bikin dashboard monitoring yang rapi dan responsif.',
    replyTitle: 'Sip, aku mulai susun dashboard-nya.',
    replyBody: 'Menyiapkan layout, komponen statistik, dan grafik aktivitas.',
    doneTask: 'Menyusun struktur halaman',
    activeTask: 'Membuat komponen React',
    ctaLabel: 'Lihat proyek sistem bisnis',
    ctaHref: '#proyek',
  },
  {
    label: 'Otomasi & AI',
    prompt: 'Bisa bantu otomatiskan laporan & asisten AI untuk tim kami?',
    replyTitle: 'Bisa banget — kita hubungkan workflow & LLM-nya.',
    replyBody: 'Integrasi API, penjadwalan otomatis, dan asisten chat internal sesuai kebutuhan.',
    doneTask: 'Memetakan alur kerja',
    activeTask: 'Menghubungkan AI Agent',
    ctaLabel: 'Lihat solusi otomasi',
    ctaHref: '#pengalaman',
  },
  {
    label: 'Diskusi proyek',
    prompt: 'Kalau mau mulai kolaborasi atau tanya estimasi gimana?',
    replyTitle: 'Langsung kirim detail ide atau target bisnis Anda.',
    replyBody: 'Saya siap bantu dari perencanaan, desain antarmuka, backend, sampai live.',
    doneTask: 'Siap menerima brief',
    activeTask: 'Menjadwalkan diskusi',
    ctaLabel: 'Hubungi B.J. sekarang',
    ctaHref: '#kontak',
  },
]

function Showcase() {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const scenario = showcaseScenarios[scenarioIndex]
  const nextScenario = () => setScenarioIndex((i) => (i + 1) % showcaseScenarios.length)

  return (
    <div className="showcase showcase--agent">
      <div className="showcase__window">
        <div className="showcase__bar">
          <span className="dots" aria-hidden="true"><span className="dot dot--red" /><span className="dot dot--amber" /><span className="dot dot--green" /></span>
          <span className="agent__app-name"><Bot size={15} aria-hidden="true" /> B.J.</span>
          <span className="agent__menu" aria-hidden="true">Chat <span>Projects</span> <span>History</span></span>
          <span className="showcase__live"><span className="live-dot" aria-hidden="true" /> online</span>
        </div>
        <div className="agent__body">
          <div className="agent__topline"><span><Circle size={7} fill="currentColor" aria-hidden="true" /> New conversation</span><span>Today, 09:41</span></div>
          <div className="agent__chat" aria-live="polite">
            <div className="agent__welcome"><span className="agent__avatar" aria-hidden="true"><Sparkles size={25} /></span><div><strong>Halo, B.J. 👋</strong><p>Ada ide yang mau diwujudkan hari ini?</p></div></div>
            <div className="agent__message agent__message--user">{scenario.prompt}</div>
            <div className="agent__reply">
              <span className="agent__reply-icon" aria-hidden="true"><Bot size={16} /></span>
              <div className="agent__reply-content">
                <strong>{scenario.replyTitle}</strong>
                <p>{scenario.replyBody}</p>
                <div className="agent__tasks">
                  <span><Check size={13} aria-hidden="true" /> {scenario.doneTask}</span>
                  <span className="agent__task-active"><span className="agent__spinner" aria-hidden="true" /> {scenario.activeTask}</span>
                </div>
                <a href={scenario.ctaHref} className="agent__reply-link">{scenario.ctaLabel} <ArrowRight size={13} /></a>
              </div>
            </div>
            <div className="agent__prompts" role="group" aria-label="Pilih contoh topik">
              {showcaseScenarios.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`agent__prompt-chip ${index === scenarioIndex ? 'is-active' : ''}`}
                  aria-pressed={index === scenarioIndex}
                  onClick={() => setScenarioIndex(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="agent__composer">
            <Paperclip size={17} aria-hidden="true" />
            <span>Pilih topik di atas atau klik kirim untuk ganti contoh...</span>
            <Mic size={16} aria-hidden="true" />
            <button type="button" onClick={nextScenario} aria-label="Ganti contoh percakapan berikutnya"><Send size={14} /></button>
          </div>
          <div className="agent__foot"><Headphones size={13} aria-hidden="true" /> Agent bisa membuat ide jadi nyata</div>
        </div>
      </div>
      <div className="agent__float agent__float--left" aria-hidden="true"><span className="agent__float-icon"><Sparkles size={16} /></span><div><strong>Ide dipahami</strong><span>Context tersimpan</span></div></div>
      <div className="agent__float agent__float--right" aria-hidden="true"><span className="agent__float-icon agent__float-icon--green"><Check size={16} /></span><div><strong>React components</strong><span>Building your dashboard</span></div></div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="atas">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__head">
          <p className="hero__pill"><span className="pill__dot" aria-hidden="true" />{profile.availability}</p>
          <h1 className="hero__title hero__title--animated"><span className="hero__title-line"><span className="hero__word" style={{ '--word-delay': '80ms' }}>Aplikasi</span>{' '}<span className="hero__word" style={{ '--word-delay': '180ms' }}>&amp;</span>{' '}<span className="hero__word" style={{ '--word-delay': '280ms' }}>otomasi.</span></span><br /><span className="hero__title-mark hero__highlight"><span className="hero__highlight-text">Untuk bisnis Anda.</span></span></h1>
          <p className="hero__lead">Saya membantu membuat aplikasi web, menghubungkan sistem, dan mengotomatiskan pekerjaan rutin agar bisnis Anda berjalan lebih mudah.</p>
          <div className="hero__actions"><a href="#proyek" className="btn btn--light btn--animata"><span>Lihat proyek</span><span className="btn__arrow" aria-hidden="true"><span className="btn__arrow-track"><ArrowRight size={17} /><ArrowRight size={17} /></span></span></a><a href="#kontak" className="btn btn--ghost-dark">Mulai diskusi</a></div>
          <p className="hero__meta"><MapPin size={15} /> {profile.location}<span className="hero__meta-sep" aria-hidden="true" />{profile.role}</p>
        </div>
        <Showcase />
      </div>
    </section>
  )
}
