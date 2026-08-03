"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [["Expertise", "/expertise"], ["Projets", "/projets"], ["Parcours", "/parcours"], ["Contact", "/#contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Accueil"><span>PF</span><b>Pauline Faussurier</b></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? "is-open" : ""} aria-label="Navigation principale">
        {links.map(([label, href]) => <a key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  );
}
