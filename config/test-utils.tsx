// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <>{children}</>;
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
