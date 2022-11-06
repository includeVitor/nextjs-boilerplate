import { AppAssets } from "@config/constants";
import "@styles/main.css";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Template</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href={AppAssets.favicon} />
            </head>
            <body>{children}</body>
        </html>
    );
}

