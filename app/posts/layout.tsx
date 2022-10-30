import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
        >
            {children}
        </div>
    );
}
