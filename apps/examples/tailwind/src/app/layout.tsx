import { getServerTheme, ThemeProvider } from "next-server-theme/server";

import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={getServerTheme()}>
            <body
                className={`${GeistSans.className} pink:bg-pink-100 bg-white dark:bg-black`}
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
