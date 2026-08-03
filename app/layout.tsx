import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: "Pauline Faussurier — AI & Automation Operator",
  description: "Portfolio de systèmes, d’automatisations métier et d’agents IA conçus pour transformer les données en décisions opérationnelles.",
  openGraph: {
    title: "Pauline Faussurier — AI & Automation Operator",
    description: "Des processus métier complexes transformés en systèmes automatisés, intelligents et pilotables.",
    type: "website",
    locale: "fr_FR",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body>
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
