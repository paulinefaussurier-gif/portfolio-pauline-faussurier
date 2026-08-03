"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Workflow } from "./workflow";

type Case = {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly context: string;
  readonly problem: string;
  readonly system: readonly string[];
  readonly human: string;
  readonly value: string;
  readonly skills: readonly string[];
  readonly workflow: readonly string[];
};

export function CaseStudy({ item, featured = false }: { item: Case; featured?: boolean }) {
  const [open, setOpen] = useState(featured);
  return (
    <article className={`case-study ${open ? "is-open" : ""}`}>
      <button className="case-heading" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`case-${item.id}`}>
        <span className="case-index">{item.index}</span>
        <span className="case-title-wrap"><small>Étude de cas</small><strong>{item.title}</strong></span>
        <span className="case-toggle"><span>{open ? "Réduire" : "Explorer"}</span><ChevronDown size={18} /></span>
      </button>
      <div id={`case-${item.id}`} className="case-body" hidden={!open}>
        <p className="case-context">{item.context}</p>
        <Workflow steps={item.workflow} label={`Workflow : ${item.title}`} />
        <div className="case-grid">
          <div><h3>Problème métier</h3><p>{item.problem}</p></div>
          <div><h3>Système conçu</h3><ol>{item.system.map((step) => <li key={step}>{step}</li>)}</ol></div>
          <div><h3>Rôle de l’humain</h3><p>{item.human}</p></div>
          <div><h3>Valeur créée</h3><p>{item.value}</p></div>
        </div>
        <div className="skills-line"><span>Compétences démontrées</span><ul>{item.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
      </div>
    </article>
  );
}
