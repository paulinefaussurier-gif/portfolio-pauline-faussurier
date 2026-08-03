import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Header } from "@/components/header";
import { AbstractSystem } from "@/components/abstract-system";

const doors = [
  { href: "/expertise", number: "01", title: "Expertise", text: "Comprendre comment un besoin métier devient un système fiable, utile et pilotable.", color: "blue" },
  { href: "/projets", number: "02", title: "Projets", text: "Explorer trois systèmes concrets : performance, pipeline commercial et veille spécialisée.", color: "violet" },
  { href: "/parcours", number: "03", title: "Parcours", text: "Découvrir le fil qui relie Trayvisor, MILO, l’EBI, les certifications et l’apprentissage continu.", color: "ink" },
];

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title"><span>{portfolio.identity.name}</span>Structurer les opérations, rendre l’IA utile.</h1>
          <p className="hero-intro">{portfolio.identity.intro}</p>
          <p className="keyword-line">{portfolio.identity.keywords.join(" · ")}</p>
          <div className="actions">
            <Link className="button primary" href="/projets">Voir les projets <ArrowRight size={17} /></Link>
            <a className="button secondary" href="#contact">Prendre contact <ArrowDown size={17} /></a>
          </div>
          <div className="profile-signature">
            <Image src="/pauline-faussurier.jpg" alt="Portrait de Pauline Faussurier" width={72} height={72} priority />
            <p><strong>Pauline Faussurier</strong><span>Ingénieure de formation, expérience transverse en startup IA B2B</span></p>
          </div>
        </div>
        <AbstractSystem />
      </section>

      <section className="proof-strip" aria-label="Repères professionnels">
        <div className="shell proof-grid">{portfolio.proof.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>
      </section>

      <section className="section shell home-doors">
        <div className="compact-heading"><h2>Trois angles pour découvrir le travail de Pauline.</h2><p>Un portfolio pensé comme un système de lecture, pas comme une longue page à faire défiler.</p></div>
        <div className="door-list">{doors.map((door) => <Link className={`door door-${door.color}`} href={door.href} key={door.href}><span>{door.number}</span><div><h3>{door.title}</h3><p>{door.text}</p></div><ArrowRight /></Link>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid"><div><h2>Échanger autour de l’IA appliquée aux opérations.</h2><p>Un processus à clarifier, une automatisation à cadrer ou un rôle transverse à construire ? Prenons contact.</p></div><div className="contact-links"><a href={portfolio.links.email}><Mail size={21} /><span><small>Email</small>faussurierpauline@gmail.com</span><MoveUpRight /></a><a href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={21} /><span><small>LinkedIn</small>Voir le profil</span><MoveUpRight /></a></div></div>
        <footer className="shell"><span>© {new Date().getFullYear()} {portfolio.identity.name}</span><a href="#top">Retour en haut ↑</a></footer>
      </section>
    </main>
  );
}
