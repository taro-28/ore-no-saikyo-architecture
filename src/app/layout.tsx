import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Taro's Architecture",
    description: "Taro's Architecture",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className="grid grid-cols-2">
                <Header className="col-span-2" />
                <Sidebar className="col-span-1" />
                <main className="col-span-1">{children}</main>
            </body>
        </html>
    );
}
