import { Footer, Header } from "@components/ui";
import { AppAssets } from "@config/constants";
import { Poppins } from "@next/font/google";
import "@styles/main.css";

const poppins = Poppins({ weight: "400" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={poppins.className}>
            <head>
                <title>Template</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href={AppAssets.favicon} />
            </head>
            <body className="p-4 h-screen max-w-xl mt-12 mb-24 mx-auto">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

