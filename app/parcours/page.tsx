import Image from "next/image";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Workflow } from "@/components/workflow";

export const metadata: Metadata = {
  title: "Parcours, ingénierie, startup et IA",
  description: "Le parcours de Pauline Faussurier entre formation d’ingénieure à l’EBI, expérience chez Trayvisor, entrepreneuriat, opérations et IA.",
  alternates: { canonical: "/parcours" },
  openGraph: { url: "/parcours", title: "Parcours, ingénierie, startup et IA | Pauline Faussurier", description: "Un parcours transverse reliant ingénierie, produit, opérations, entrepreneuriat et intelligence artificielle." },
};

const timeline = [
  { logo: "/logo-ebi.png", logoAlt: "Logo de l’EBI", period: "Formation d’ingénieure", title: "EBI", subtitle: "Une base scientifique et structurée", text: "La formation suivie à l’EBI a développé une capacité à analyser les problèmes avec méthode et à relier leurs dimensions techniques, humaines et organisationnelles.", link: "", linkLabel: "" },
  { logo: "/logo-trayvisor.svg", logoAlt: "Logo de Trayvisor", period: "Startup IA B2B", title: "Trayvisor", subtitle: "Une vision transverse de la chaîne de valeur", text: "Une expérience construite autour de deux produits IA B2B, du marché aux opérations : positionnement, déploiement, analyse des usages, pilotage de la performance et développement commercial. Le périmètre inclut aujourd’hui une contribution au pilotage stratégique, notamment à la budgétisation de TrayScan.", link: "https://www.trayvisor.com/", linkLabel: "Découvrir Trayvisor" },
  { logo: "/logo-milo.png", logoAlt: "Logo de MILO", period: "Création d’entreprise", title: "MILO", subtitle: "Construire une offre et son modèle de production", text: "Une véritable expérience de création d’entreprise : clarification du positionnement, construction des offres, acquisition des premiers clients et organisation d’une production réunissant clients, talents juniors et experts.", link: "https://withmilo.fr/", linkLabel: "Découvrir MILO" },
  { logo: "/logo-savorise.jpg", logoAlt: "Logo de Savorise", period: "Création d’entreprise, projet étudiant · 6 mois", title: "Savorise", subtitle: "Diriger et coordonner une équipe de 15 personnes", text: "Création d’une entreprise fictive, répartition des rôles, coordination de plusieurs pôles et consolidation du travail collectif. Le projet a été présenté devant le MEDEF.", link: "https://www.instagram.com/savorise_/", linkLabel: "Voir Savorise sur Instagram" },
];

export default function JourneyPage() {
  return <main><Header /><PageHero code="PARCOURS / 03" title="Ingénierie, entrepreneuriat et IA." intro="Startup IA, opérations, produit, commerce et création d’entreprise : ces expériences différentes forment aujourd’hui une même manière de travailler, structurée et transverse." />
    <section className="journey shell">{timeline.map((item,i)=><article key={item.title}><div className="journey-marker"><span>{String(i+1).padStart(2,"0")}</span><i /></div><div className={`journey-icon journey-logo-${item.title.toLowerCase()}`}><Image src={item.logo} alt={item.logoAlt} width={120} height={64} unoptimized/></div><div className="journey-copy"><span>{item.period}</span><h2>{item.title}</h2><h3>{item.subtitle}</h3><p>{item.text}</p>{item.title === "Trayvisor" && <div className="trayvisor-scope"><span>Marché</span><span>Produit</span><span>Opérations</span><span>Commerce</span><span>Stratégie</span></div>}{item.title === "MILO" && <Workflow label="Workflow MILO" steps={["Cadrage","Attribution","Production","Supervision","Qualité","Livraison"]}/>} {item.link && <a className="journey-link" href={item.link} target="_blank" rel="noreferrer">{item.linkLabel}<ExternalLink size={14}/></a>}</div></article>)}</section>
    <section className="learning"><div className="shell learning-grid"><div><BookOpen size={30}/><h2>Apprendre en continu, avec méthode.</h2><p>L’IA évolue vite. Les expériences de terrain sont complétées par un apprentissage autonome régulier : veille, prise en main d’outils, expérimentation et mise en pratique sur des cas opérationnels.</p></div><div className="certifications"><h3>Certifications et compétences</h3><article><span>IA</span><div><strong>Certification IA pour marketeurs</strong><p>SideSchool</p></div></article><article><span>EN</span><div><strong>TOEIC, niveau C1</strong><p>Anglais professionnel</p></div></article><article><span>OS</span><div><strong>Suites Microsoft et Google</strong><p>Niveau professionnel</p></div></article></div></div></section>
    <section className="journey-close shell"><h2>Ce que ce parcours rassemble.</h2><div><p>Une culture scientifique pour structurer.</p><p>Une expérience terrain pour rester pragmatique.</p><p>Une vision transverse pour relier les équipes.</p><p>Une curiosité continue pour faire évoluer les solutions.</p></div></section>
    <section className="next-page"><a href="/expertise" className="shell"><span>Revenir à l’essentiel</span><strong>Découvrir l’expertise.</strong><ArrowRight /></a></section><SiteFooter /></main>;
}
import type { Metadata } from "next";
