import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Workflow } from "@/components/workflow";
import { portfolio } from "@/data/portfolio";

const moreProjects = [
  ["Pilotage stratégique", "Budgétisation et structuration du pilotage de TrayScan."],
  ["Déploiement multi-sites", "Organisation du suivi opérationnel et lecture des usages terrain."],
  ["Produit et opérations", "Traduction des retours utilisateurs en priorités et actions concrètes."],
];

export default function ProjectsPage() {
  return <main><Header /><PageHero code="PROJETS / 02" title="Trois besoins, trois réponses concrètes." intro="Trois exemples pour comprendre comment une situation complexe peut devenir plus lisible, plus fiable et plus simple à piloter." />
    <section className="project-index shell">{portfolio.cases.map(item=><a href={`#${item.id}`} key={item.id}><span>{item.index}</span><strong>{item.title}</strong><ArrowRight /></a>)}</section>
    <section className="project-chapters">{portfolio.cases.map((item,i)=><article className={`project-chapter chapter-${i+1}`} id={item.id} key={item.id}><div className="shell"><header><span className="project-letter">{item.index}</span><div><h2>{item.title}</h2><p>{item.context}</p></div></header><div className="project-workflow"><span>Le chemin, en bref</span><Workflow steps={item.workflow} label={`Workflow : ${item.title}`} /></div><div className="project-detail-grid"><section><span>01</span><h3>Le besoin</h3><p>{item.problem}</p></section><section><span>02</span><h3>La réponse</h3><ol>{item.system.map(step=><li key={step}>{step}</li>)}</ol></section><section><span>03</span><h3>Ce qui reste humain</h3><p>{item.human}</p></section><section><span>04</span><h3>L’intérêt</h3><p>{item.value}</p></section></div><div className="project-skills"><span>Compétences mobilisées</span><ul>{item.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></div></div></article>)}</section>
    <section className="more-projects"><div className="shell more-projects-grid"><div><h2>D’autres projets structurants.</h2><p>Certains sujets sont encore en cours ou ne peuvent pas être détaillés publiquement. Ils peuvent néanmoins être présentés lors d’un échange.</p><div className="more-project-actions"><a className="button primary" href={portfolio.links.email}><Mail size={17}/>Prendre contact</a><a className="button secondary" href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>Échanger sur LinkedIn</a></div></div><div className="more-project-list">{moreProjects.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="next-page"><a href="/parcours" className="shell"><span>Étape suivante</span><strong>Comprendre le parcours derrière ces projets.</strong><ArrowRight /></a></section><SiteFooter /></main>;
}
