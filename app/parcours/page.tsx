import { ArrowRight, BookOpen, Building2, GraduationCap, Lightbulb, Network } from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Workflow } from "@/components/workflow";

const timeline = [
  { icon: GraduationCap, period: "Formation d’ingénieure", title: "EBI", subtitle: "Une base scientifique et structurée", text: "Ma formation à l’EBI a développé ma capacité à analyser un problème, travailler avec méthode et relier des dimensions techniques, humaines et organisationnelles." },
  { icon: Building2, period: "Startup IA B2B", title: "Trayvisor", subtitle: "Une vision transverse de la chaîne de valeur", text: "J’ai progressivement travaillé sur deux produits IA B2B, du marché aux opérations : positionnement, déploiement, analyse des usages, pilotage de la performance et développement commercial." },
  { icon: Network, period: "Expérience entrepreneuriale", title: "MILO", subtitle: "Structurer une offre et son modèle de production", text: "J’ai participé à la clarification du positionnement, à la construction des offres, à l’acquisition des premiers clients et à l’organisation d’une production réunissant clients, talents juniors et experts." },
  { icon: Lightbulb, period: "Projet étudiant · 6 mois", title: "Projet entrepreneurial", subtitle: "Diriger et coordonner une équipe de 15 personnes", text: "Création d’un concept d’entreprise, répartition des rôles, coordination de plusieurs pôles, consolidation du travail collectif et présentation du projet devant le MEDEF." },
];

export default function JourneyPage() {
  return <main><Header /><PageHero code="PARCOURS / 03" title="Un parcours construit à la croisée des mondes." intro="Ingénierie, startup IA, opérations, produit, commerce et entrepreneuriat : ces expériences différentes forment aujourd’hui une même manière de travailler, structurée et transverse." />
    <section className="journey shell">{timeline.map((item,i)=><article key={item.title}><div className="journey-marker"><span>{String(i+1).padStart(2,"0")}</span><i /></div><div className="journey-icon"><item.icon size={24}/></div><div className="journey-copy"><span>{item.period}</span><h2>{item.title}</h2><h3>{item.subtitle}</h3><p>{item.text}</p>{item.title === "Trayvisor" && <div className="trayvisor-scope"><span>Marché</span><span>Produit</span><span>Opérations</span><span>Commerce</span></div>}{item.title === "MILO" && <Workflow label="Workflow MILO" steps={["Cadrage","Attribution","Production","Supervision","Qualité","Livraison"]}/>}</div></article>)}</section>
    <section className="learning"><div className="shell learning-grid"><div><BookOpen size={30}/><h2>Apprendre en continu, avec méthode.</h2><p>L’IA évolue vite. Je complète mes expériences par un apprentissage autonome régulier : veille, prise en main d’outils, expérimentation et mise en pratique sur des cas opérationnels.</p></div><div className="certifications"><h3>Certifications et compétences</h3><article><span>IA</span><div><strong>Certification IA pour marketeurs</strong><p>SideSchool</p></div></article><article><span>EN</span><div><strong>TOEIC — niveau C1</strong><p>Anglais professionnel</p></div></article><article><span>OS</span><div><strong>Suites Microsoft et Google</strong><p>Niveau professionnel</p></div></article></div></div></section>
    <section className="journey-close shell"><h2>Ce que ce parcours rassemble.</h2><div><p>Une culture scientifique pour structurer.</p><p>Une expérience terrain pour rester pragmatique.</p><p>Une vision transverse pour relier les équipes.</p><p>Une curiosité continue pour faire évoluer les solutions.</p></div></section>
    <section className="next-page"><a href="/expertise" className="shell"><span>Revenir à l’essentiel</span><strong>Découvrir mon expertise.</strong><ArrowRight /></a></section><SiteFooter /></main>;
}
