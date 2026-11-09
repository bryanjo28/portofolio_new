import { navLinks, profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__mark">{profile.initials}</span>
          <p>
            © {currentYear} {profile.name}.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
