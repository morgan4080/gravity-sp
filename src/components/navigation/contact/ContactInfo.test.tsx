import ContactInfo from "./ContactInfo";
import { render, screen } from "../../../utils/test-utils";
import { describe } from "vitest";

describe("Contact Section Test", () => {
  it("the contact information is visible", () => {
    render(
      <ContactInfo
        address={"123"}
        call={"2323424"}
        email={"info@gravitysports.com"}
      />,
    );
    expect(screen.getByText(/123/i)).toBeInTheDocument();
    expect(screen.getByText(/2323424/i)).toBeInTheDocument();
    expect(screen.getByText(/info@gravitysports.com/i)).toBeInTheDocument();
  });
});
