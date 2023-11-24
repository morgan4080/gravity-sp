import NavbarMd from "./NavbarMd";
import { render, screen, userEvent } from "../../../utils/test-utils";
import { describe } from "vitest";

describe("Navigation Test", () => {
  it("entity name", () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={[]} />);
    expect(screen.getByText(/GRAVITY SPORTS/i)).toBeInTheDocument();
  });

  it("entity logo", () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={[]} />);
    const logoImage = document.querySelector("img") as HTMLImageElement;
    expect(logoImage.src).toContain("logo");
  });

  it("CTA and navigable", () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={[]} />);
    userEvent.click(screen.getByRole("CTA"));
    const regex = new RegExp("GET STARTED");
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("menu items and navigable links", () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={menu} />);
    menu.forEach((item) => {
      userEvent.click(screen.getByRole(`navigation-${item.name}`));
      const regex = new RegExp(item.name);
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });

  it("hidden toggle button", () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={menu} />);
    const toggleButton = screen.getByRole("mobile-menu-toggle-collapsed", {
      hidden: true,
    });
    expect(toggleButton.className).contains("md:hidden");
  });

  it("toggle mobile menu on toggle click", async () => {
    render(<NavbarMd appName="GRAVITY SPORTS" menuItems={menu} />);
    // Get trigger button and click it
    const toggleButton = screen.getByRole("mobile-menu-toggle-collapsed", {
      hidden: true,
    });
    expect(toggleButton.className).contains("md:hidden");
    await userEvent.click(toggleButton);

    // Get menu and menu items
    const menuElement = screen.getByRole("menu");
    const menuElementItems = screen.getAllByRole("menuitem");

    // Assertions
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(menuElement).toBeInTheDocument();
    expect(menuElementItems.length).toBe(menu.length);
  });
});

const menu = [
  {
    name: "HOME",
    link: "/",
    current: true,
  },
  {
    name: "ABOUT",
    link: "/",
    current: false,
  },
  {
    name: "PORTFOLIO",
    link: "/",
    current: false,
  },
  {
    name: "CLASSES",
    link: "/",
    current: false,
  },
  {
    name: "BLOG",
    link: "/",
    current: false,
  },
  {
    name: "CONTACTS",
    link: "/",
    current: false,
  },
];
