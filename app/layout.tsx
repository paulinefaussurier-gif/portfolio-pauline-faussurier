import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pauline-faussurier-portfolio.vercel.app"),
  title: {
    default: "Pauline Faussurier, IA, automatisation et opérations",
    template: "%s | Pauline Faussurier",
  },
  description: "Portfolio de systèmes, d’automatisations métier et d’agents IA conçus pour transformer les données en décisions opérationnelles.",
  alternates: { canonical: "/" },
  authors: [{ name: "Pauline Faussurier", url: "https://www.linkedin.com/in/pauline-faussurier/" }],
  creator: "Pauline Faussurier",
  keywords: ["Pauline Faussurier", "intelligence artificielle", "automatisation métier", "opérations", "Growth Product Manager", "agents IA"],
  openGraph: {
    title: "Pauline Faussurier, IA, automatisation et opérations",
    description: "Des processus métier complexes transformés en systèmes automatisés, intelligents et pilotables.",
    url: "/",
    siteName: "Portfolio de Pauline Faussurier",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/pauline-faussurier.jpg", width: 1152, height: 1728, alt: "Portrait professionnel de Pauline Faussurier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pauline Faussurier, IA, automatisation et opérations",
    description: "Portfolio de systèmes, d’automatisations métier et d’agents IA.",
    images: ["/pauline-faussurier.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://pauline-faussurier-portfolio.vercel.app/#pauline-faussurier",
                  name: "Pauline Faussurier",
                  url: "https://pauline-faussurier-portfolio.vercel.app/",
                  image: "https://pauline-faussurier-portfolio.vercel.app/pauline-faussurier.jpg",
                  jobTitle: "Growth Product Manager",
                  sameAs: ["https://www.linkedin.com/in/pauline-faussurier/"],
                  knowsAbout: ["Intelligence artificielle", "Automatisation métier", "Opérations", "Stratégie produit", "Agents IA"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pauline-faussurier-portfolio.vercel.app/#website",
                  url: "https://pauline-faussurier-portfolio.vercel.app/",
                  name: "Portfolio de Pauline Faussurier",
                  inLanguage: "fr-FR",
                  author: { "@id": "https://pauline-faussurier-portfolio.vercel.app/#pauline-faussurier" },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        {/*
        THESIS: Un manuel de systèmes modulaires prouve la capacité à structurer; il refuse le portfolio-CV en cartes uniformes.
        OWN-WORLD: Papier blanc froid, encre aubergine, modules bleu/mauve satinés et routes roses de 1px.
        STORY: Comprendre la posture, inspecter les systèmes, vérifier le parcours et initier un échange.
        FIRST VIEWPORT: Typographie éditoriale à gauche, système pseudo-3D opérant à droite, actions sous la promesse.
        FORM: Manuel opérationnel modulaire, direction 5, seed 04438b6c.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        {children}
      </body>
    </html>
  );
}
