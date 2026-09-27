import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa'

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gonoise/",
    icon: <FaInstagram size={18} />
  },
  {
    label: "Twitter",
    href: "https://twitter.com/gonoise",
    icon: <FaTwitter size={18} />
  },
  {
    label: "YouTube",
    href: "https://youtube.com/gonoise",
    icon: <FaYoutube size={18} />
  },
  {
    label: "Facebook",
    href: "https://facebook.com/gonoise",
    icon: <FaFacebookF size={18} />
  }
];

const links = [
  { title: "Shop", items: [
    { label: "Smartwatches", href: "#" },
    { label: "Earbuds", href: "#" },
    { label: "Headphones", href: "#" },
    { label: "Accessories", href: "#" }
  ]},
  { title: "Support", items: [
    { label: "Help Center", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Contact Us", href: "#" }
  ]},
  { title: "Company", items: [
    { label: "About Noise", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" }
  ]}
];

const Footer = () => {
  return (
    <footer className="bg-[#111] pt-12 pb-5 text-white border-t border-black/15">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-8 md:gap-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4 min-w-[220px]">
            <a href="#top" className="text-2xl font-semibold tracking-tight lowercase hover:opacity-80 transition">
              noise
            </a>
            <p className="max-w-xs text-sm text-white/60 mt-1 mb-2">
              Stay connected with cutting-edge wearables and audio devices from Noise. Designed for your everyday life.
            </p>
            <div className="flex gap-2 mt-2">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2de1fc] transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 flex-1">
            {links.map(section => (
              <div key={section.title}>
                <div className="font-semibold mb-2 text-sm uppercase tracking-wide text-white/75">{section.title}</div>
                <ul className="flex flex-col gap-2">
                  {section.items.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/60 hover:text-[#2de1fc] transition">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:justify-between md:items-center border-t border-white/10 pt-5">
          <span>
            &copy; {new Date().getFullYear()} Noise. All rights reserved.
          </span>
          <span>
            Designed for your everyday life. Demo site. Headphones by QuickDriftVR; Earbuds by zhe_kan. Both CC-BY-4.0, via Sketchfab.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer