import { ArrowRight, Bot, Braces, Database, GitBranch, ScanSearch, ShieldCheck } from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { portfolio } from "@/data/portfolio";

const contexts = [
  ["Le point de départ", "Un processus réel, avec ses habitudes, ses contraintes, ses outils et ses zones floues."],
  ["Le travail de fond", "Rendre explicites les données, les règles, les dépendances, les responsabilités et les exceptions."],
  ["Le résultat recherché", "Un système compréhensible par l’équipe, contrôlable et capable d’évoluer avec l’activité."],
];

const abilities = [
  [ScanSearch, "Analyser", "Observer le fonctionnement réel avant de proposer une solution : qui fait quoi, avec quelles données, à quel moment et pour décider quoi."],
  [Database, "Structurer", "Rassembler des informations dispersées, définir un langage commun et fiabiliser ce qui alimente le workflow."],
  [GitBranch, "Orchestrer", "Découper le processus en étapes, traduire les règles métier et organiser les passages entre outils, agents et personnes."],
  [Bot, "Augmenter", "Confier à l’IA les tâches où elle apporte une vraie valeur : recherche, synthèse, qualification, priorisation ou préparation d’actions."],
  [ShieldCheck, "Sécuriser", "Prévoir les contrôles, les seuils de confiance, les exceptions et les points où une validation humaine reste nécessaire."],
  [Braces, "Faire évoluer", "Documenter, observer les erreurs et améliorer le système à partir des usages plutôt que de le considérer comme terminé."],
];

export default function ExpertisePage() {
  return <main><Header /><PageHero code="EXPERTISE / 01" title="Des systèmes pensés pour le terrain." intro="Une expertise à l’interface des opérations, des données, des utilisateurs et de l’IA. Le processus métier guide le niveau d’automatisation, et non l’inverse." />
    <section className="section shell expertise-context"><div className="compact-heading"><h2>Avant l’automatisation, il y a un travail de clarification.</h2><p>Une automatisation utile ne se résume pas à connecter des outils. Elle doit comprendre le contexte dans lequel une équipe travaille et les décisions qu’elle cherche à prendre.</p></div><div className="context-rail">{contexts.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="expertise-field"><div className="shell"><div className="compact-heading light"><h2>De la friction au système.</h2><p>Six capacités qui forment une seule chaîne de travail.</p></div><div className="ability-grid">{abilities.map(([Icon,title,text],i)=><article key={title as string}><div><Icon size={22}/><span>{String(i+1).padStart(2,"0")}</span></div><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></div></section>
    <section className="section shell"><div className="expertise-layers"><div><h2>Trois niveaux, un même système.</h2><p>Une intervention possible sur une brique précise ou sur l’ensemble du dispositif, du cadrage jusqu’au pilotage.</p></div><div>{portfolio.pillars.map((pillar,i)=><article key={pillar.title}><span>{i+1}</span><div><h3>{pillar.title}</h3><p>{pillar.text}</p><ul>{pillar.items.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}</div></div></section>
    <section className="next-page"><a href="/projets" className="shell"><span>Étape suivante</span><strong>Voir cette expertise à l’œuvre.</strong><ArrowRight /></a></section><SiteFooter /></main>;
}
