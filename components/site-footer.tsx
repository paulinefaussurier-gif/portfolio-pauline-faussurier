import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return <footer className="shell"><span>© {new Date().getFullYear()} {portfolio.identity.name}</span><a href="/#contact">Me contacter →</a></footer>;
}
