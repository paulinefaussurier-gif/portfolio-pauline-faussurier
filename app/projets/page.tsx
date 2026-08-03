import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Workflow } from "@/components/workflow";
import { portfolio } from "@/data/portfolio";

export default function ProjectsPage() {
  return <main><Header /><PageHero code="PROJETS / 02" title="Trois systèmes. Trois problèmes métier." intro="Chaque projet est présenté avec la même grille de lecture : la friction initiale, le système conçu, la place de l’humain et la valeur opérationnelle recherchée." />
    <section className="project-index shell">{portfolio.cases.map(item=><a href={`#${item.id}`} key={item.id}><span>{item.index}</span><strong>{item.title}</strong><ArrowRight /></a>)}</section>
    <section className="project-chapters">{portfolio.cases.map((item,i)=><article className={`project-chapter chapter-${i+1}`} id={item.id} key={item.id}><div className="shell"><header><span className="project-letter">{item.index}</span><div><h2>{item.title}</h2><p>{item.context}</p></div></header><div className="project-workflow"><span>Architecture du système</span><Workflow steps={item.workflow} label={`Workflow : ${item.title}`} /></div><div className="project-detail-grid"><section><span>01</span><h3>Le problème</h3><p>{item.problem}</p></section><section><span>02</span><h3>Le système</h3><ol>{item.system.map(step=><li key={step}>{step}</li>)}</ol></section><section><span>03</span><h3>Le rôle humain</h3><p>{item.human}</p></section><section><span>04</span><h3>La valeur</h3><p>{item.value}</p></section></div><div className="project-skills"><span>Compétences mobilisées</span><ul>{item.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></div></div></article>)}</section>
    <section className="next-page"><a href="/parcours" className="shell"><span>Étape suivante</span><strong>Comprendre le parcours derrière ces projets.</strong><ArrowRight /></a></section><SiteFooter /></main>;
}
