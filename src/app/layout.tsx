import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

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
            <body className="grid h-screen grid-cols-[min-content_1fr] grid-rows-[min-content_1fr]">
                <Header className="col-span-2 flex h-16 items-center border-b-2 border-solid border-gray-200" />
                <Sidebar className="col-span-1" />
                <main className="col-span-1">{children}</main>
            </body>
        </html>
    );
}
