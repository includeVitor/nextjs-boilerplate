import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("Should be able to match snapshot", () => {
        const { container } = render(<Button>Simple</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
