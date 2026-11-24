import { projects, projectCategories } from '../data/portfolio'
import { ArrowRight, ArrowUpRight, Check, Close } from './Icons'
import { useReveal } from '../hooks/useReveal'
import { useEffect, useRef, useState } from 'react'
import AnimatedHeading from './AnimatedHeading'

const categoryId = (category) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
const ALL_CATEGORY = 'Semua'
const tabs = [ALL_CATEGORY, ...projectCategories]

export default function Projects() {
  const { ref, visible } = useReveal()
  const [activeProject, setActiveProject] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)
  const tabRefs = useRef([])
  const dialogRef = useRef(null)
  const activeIndex = tabs.indexOf(activeCategory)
  const filteredProjects = activeCategory === ALL_CATEGORY
    ? projects
    : projects.filter((project) => project.category === activeCategory)
  const projectImages = activeProject ? [
    { src: activeProject.image, label: 'Tampilan utama' },
    ...(activeProject.gallery || []).map((src, index) => ({ src, label: activeProject.galleryLabels?.[index] || `Tampilan ${index + 2}` })),
  ] : []
  const activeImage = projectImages[activeSlide] || projectImages[0]

  const countForCategory = (category) =>
    category === ALL_CATEGORY ? projects.length : projects.filter((p) => p.category === category).length

  const openProject = (project) => {
    setActiveSlide(0)
    setActiveProject(project)
  }

  const closeProject = () => {
    const dialog = dialogRef.current
    if (dialog?.open) {
      dialog.close()
    } else {
      setActiveProject(null)
    }
  }

  const moveSlide = (direction) => {
    setActiveSlide((current) => Math.min(projectImages.length - 1, Math.max(0, current + direction)))
  }

  const selectTab = (index) => {
    const nextIndex = (index + tabs.length) % tabs.length
    setActiveCategory(tabs[nextIndex])
    tabRefs.current[nextIndex]?.focus()
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !activeProject) return undefined

    if (!dialog.open) {
      dialog.showModal()
    }

    const onKeyDown = (event) => {
      if (projectImages.length > 1 && event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveSlide((current) => Math.max(0, current - 1))
      }
      if (projectImages.length > 1 && event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveSlide((current) => Math.min(projectImages.length - 1, current + 1))
      }
    }

    dialog.addEventListener('keydown', onKeyDown)

    // Fallback for browsers without native <dialog closedby="any"> (e.g. Safari)
    let cleanupLightDismiss
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (event) => {
        const rect = dialog.getBoundingClientRect()
        return (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
      }
      let pressedOutside = false
      const onPointerDown = (event) => {
        pressedOutside = outside(event)
      }
      const onPointerUp = (event) => {
        if (pressedOutside && outside(event)) dialog.close()
        pressedOutside = false
      }
      dialog.addEventListener('pointerdown', onPointerDown)
      dialog.addEventListener('pointerup', onPointerUp)
      cleanupLightDismiss = () => {
        dialog.removeEventListener('pointerdown', onPointerDown)
        dialog.removeEventListener('pointerup', onPointerUp)
      }
    }

    return () => {
      dialog.removeEventListener('keydown', onKeyDown)
      cleanupLightDismiss?.()
    }
  }, [activeProject, projectImages.length])

  return (
    <section className="section" id="proyek">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section__head">
          <p className="eyebrow">Proyek pilihan</p>
          <AnimatedHeading className="section__title" highlight="saya bangun">Beberapa hal yang pernah</AnimatedHeading>
        </div>

        <div className="project-tabs-wrap">
          <div className="project-tabs" role="tablist" aria-label="Kategori proyek" style={{ '--tab-count': tabs.length }}>
            <span
              className="project-tabs__indicator"
              style={{ '--tab-offset': `calc(${activeIndex * 100}% + ${activeIndex * 4}px)` }}
              aria-hidden="true"
            />
            {tabs.map((category, index) => (
              <button
                className={`project-tabs__tab ${category === activeCategory ? 'is-active' : ''}`}
                id={`project-tab-${categoryId(category)}`}
                key={category}
                type="button"
                role="tab"
                aria-selected={category === activeCategory}
                aria-controls="projects-panel"
                tabIndex={category === activeCategory ? 0 : -1}
                ref={(element) => { tabRefs.current[index] = element }}
                onClick={() => setActiveCategory(category)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') { event.preventDefault(); selectTab(index + 1) }
                  if (event.key === 'ArrowLeft') { event.preventDefault(); selectTab(index - 1) }
                  if (event.key === 'Home') { event.preventDefault(); selectTab(0) }
                  if (event.key === 'End') { event.preventDefault(); selectTab(tabs.length - 1) }
                }}
              >
                <span>{category}</span>
                <span className="project-tabs__count" aria-hidden="true">{countForCategory(category)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="projects" id="projects-panel" role="tabpanel" aria-labelledby={`project-tab-${categoryId(activeCategory)}`}>
          {filteredProjects.map((project) => (
            <article
              className={`project project--${project.accent}`}
              key={project.title}
              role="button"
              tabIndex={0}
              aria-label={`Lihat detail ${project.title}`}
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openProject(project)
                }
              }}
            >
              <div className="project__top">
                <span className="project__year">{project.category}</span>
                <span className="project__arrow"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project__thumb"><img src={project.image} alt={`Tampilan ${project.title}`} loading="lazy" decoding="async" /></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          closedby="any"
          aria-labelledby="project-dialog-title"
          onClose={() => {
            if (dialogRef.current) dialogRef.current.returnValue = ''
            setActiveProject(null)
          }}
        >
          <button className="project-dialog__close" type="button" autoFocus onClick={closeProject} aria-label="Tutup detail proyek"><Close /></button>

          <div className="project-showcase">
            <figure className="project-showcase__stage">
              <img src={activeImage.src} alt={`${activeImage.label} ${activeProject.title}`} decoding="async" />
            </figure>

            <div className="project-showcase__head">
              <div className="project-showcase__intro">
                <strong>Dari ide ke hasil nyata</strong>
                <span>Gambaran alur, tampilan, dan hasil kerja dari produk ini.</span>
              </div>
              <div className="project-showcase__controls">
                <span className="project-showcase__count" aria-live="polite">{activeSlide + 1} / {projectImages.length}</span>
                {projectImages.length > 1 && (
                  <div className="project-showcase__nav">
                    <button type="button" onClick={() => moveSlide(-1)} disabled={activeSlide === 0} aria-label="Gambar sebelumnya"><ArrowRight size={18} /></button>
                    <button type="button" onClick={() => moveSlide(1)} disabled={activeSlide === projectImages.length - 1} aria-label="Gambar berikutnya"><ArrowRight size={18} /></button>
                  </div>
                )}
              </div>
            </div>

            {projectImages.length > 1 && (
              <ul className="project-showcase__thumbs">
                {projectImages.map((slide, index) => (
                  <li key={slide.src}>
                    <button
                      type="button"
                      className={`project-showcase__thumb ${activeSlide === index ? 'is-active' : ''}`}
                      aria-pressed={activeSlide === index}
                      aria-label={`Tampilkan ${slide.label}`}
                      onClick={() => setActiveSlide(index)}
                    >
                      <img src={slide.src} alt="" loading="lazy" decoding="async" />
                      <span>{slide.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="project-dialog__info">
            <p className="eyebrow">{activeProject.category}</p>
            <h1 id="project-dialog-title">{activeProject.title}</h1>
            <p className="project-dialog__lead">{activeProject.detail}</p>

            <ul className="project-dialog__points">
              <li>
                <span className="project-dialog__check"><Check size={14} /></span>
                <div><strong>Untuk siapa?</strong><span>{activeProject.audience}</span></div>
              </li>
              <li>
                <span className="project-dialog__check"><Check size={14} /></span>
                <div><strong>Apa yang dibantu?</strong><span>{activeProject.helps}</span></div>
              </li>
              <li>
                <span className="project-dialog__check"><Check size={14} /></span>
                <div><strong>Contoh pemakaian</strong><span>{activeProject.example}</span></div>
              </li>
            </ul>

            <ul className="tags">{activeProject.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>

            <div className="project-dialog__cta">
              <p>{activeProject.closing}</p>
              {activeProject.website && (
                <a href={activeProject.website} target="_blank" rel="noopener noreferrer" className="btn btn--animata project-dialog__button"><span>Kunjungi website</span><ArrowUpRight size={17} /></a>
              )}
              <a href="#kontak" className="btn btn--animata project-dialog__button" onClick={closeProject}><span>Diskusikan kebutuhan Anda</span><span className="btn__arrow" aria-hidden="true"><span className="btn__arrow-track"><ArrowRight size={17} /><ArrowRight size={17} /></span></span></a>
            </div>
          </div>
        </dialog>
      )}
    </section>
  )
}
