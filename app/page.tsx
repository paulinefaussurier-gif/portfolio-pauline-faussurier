import Link from "next/link";
import { ArrowDown, ArrowRight, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Header } from "@/components/header";
import { AbstractSystem } from "@/components/abstract-system";

const doors = [
  { href: "/expertise", number: "01", title: "Expertise", text: "Comprendre comment je transforme un besoin métier en système fiable, utile et pilotable.", color: "blue" },
  { href: "/projets", number: "02", title: "Projets", text: "Explorer trois systèmes concrets : performance, pipeline commercial et veille spécialisée.", color: "violet" },
  { href: "/parcours", number: "03", title: "Parcours", text: "Découvrir le fil qui relie Trayvisor, MILO, l’EBI, mes certifications et mon apprentissage continu.", color: "ink" },
];

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="role">{portfolio.identity.role}</p>
          <h1 id="hero-title">Des opérations complexes. Des systèmes clairs.</h1>
          <p className="hero-intro">{portfolio.identity.intro}</p>
          <p className="keyword-line">{portfolio.identity.keywords.join(" · ")}</p>
          <div className="actions">
            <Link className="button primary" href="/projets">Voir mes projets <ArrowRight size={17} /></Link>
            <a className="button secondary" href="#contact">Me contacter <ArrowDown size={17} /></a>
          </div>
        </div>
        <AbstractSystem />
      </section>

      <section className="proof-strip" aria-label="Repères professionnels">
        <div className="shell proof-grid">{portfolio.proof.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>
      </section>

      <section className="section shell home-doors">
        <div className="compact-heading"><h2>Trois angles pour comprendre mon travail.</h2><p>Un portfolio pensé comme un système de lecture, pas comme une longue page à faire défiler.</p></div>
        <div className="door-list">{doors.map((door) => <Link className={`door door-${door.color}`} href={door.href} key={door.href}><span>{door.number}</span><div><h3>{door.title}</h3><p>{door.text}</p></div><ArrowRight /></Link>)}</div>
      </section>

      <section className="home-about" id="a-propos">
        <div className="shell home-about-grid"><h2>Relier le métier, les données et l’IA.</h2><div><p>Je suis particulièrement attirée par les environnements où les processus ne sont pas encore totalement définis et où il faut comprendre rapidement, structurer les priorités et construire des solutions concrètes.</p><p>Ma formation d’ingénieure et mon expérience transverse en startup IA nourrissent une approche analytique, pragmatique et attentive aux usages.</p><Link href="/parcours">Découvrir mon parcours <ArrowRight size={16} /></Link></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid"><div><h2>Parlons d’IA appliquée aux opérations.</h2><p>Un processus à clarifier, une automatisation à cadrer ou un rôle transverse à construire ? Échangeons.</p></div><div className="contact-links"><a href={portfolio.links.email}><Mail size={21} /><span><small>Email</small>faussurierpauline@gmail.com</span><MoveUpRight /></a><a href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={21} /><span><small>LinkedIn</small>Voir mon profil</span><MoveUpRight /></a></div></div>
        <footer className="shell"><span>© {new Date().getFullYear()} {portfolio.identity.name}</span><a href="#top">Retour en haut ↑</a></footer>
      </section>
    </main>
  );
}
