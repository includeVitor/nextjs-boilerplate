import { render } from "@config/test-utils";
import Footer from "./Footer";

describe("Footer", () => {
    it("Should be able to match snapshot", () => {
        const { container } = render(<Footer />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
