import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/data";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${site.name} · ${site.role}`,
  description: site.description,
  keywords: [site.name, site.role, "作品集", "前端工程师", "设计系统"],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.description,
    type: "website",
    locale: "zh_CN",
    images: [{ url: site.avatar, width: 800, height: 800, alt: site.avatarAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

/**
 * 首帧前置脚本：在样式解析前把 .dark 打到 <html> 上，
 * 避免深色模式用户看到一帧白闪（FOUC）。
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&m)){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
