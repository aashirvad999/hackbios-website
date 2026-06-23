import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MouseFollower from "@/components/MouseFollower";
import IntroLoader from "@/components/IntroLoader";
import ScrollProgress from "@/components/ScrollProgress";
import AuroraBackground from "@/components/AuroraBackground";
import CommandPalette from "@/components/CommandPalette";
import KonamiEgg from "@/components/KonamiEgg";
import ConsoleWelcome from "@/components/ConsoleWelcome";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackBios 2026 | Annual College Hackathon",
  description: "The premier annual college hackathon and innovation event. Join developers, engineers, designers, and technology enthusiasts to collaborate, learn, and build impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="font-sans antialiased selection:bg-primary-container selection:text-on-primary-fixed bg-[#050505] text-[#dae6d0]">
        <IntroLoader />
        <ScrollProgress />
        <AuroraBackground />
        <MouseFollower />
        <CommandPalette />
        <KonamiEgg />
        <ConsoleWelcome />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
