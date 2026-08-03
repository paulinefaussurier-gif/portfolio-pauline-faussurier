import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHero({ title, intro, code }: { title: string; intro: string; code: string }) {
  return (
    <section className="page-hero shell">
      <Link className="back-link" href="/"><ArrowLeft size={15} /> Accueil</Link>
      <div className="page-hero-grid">
        <h1>{title}</h1>
        <div><span className="page-code">{code}</span><p>{intro}</p></div>
      </div>
    </section>
  );
}
