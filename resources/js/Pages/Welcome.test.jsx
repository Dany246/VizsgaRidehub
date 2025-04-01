import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

vi.mock("@inertiajs/react", () => ({
    Head: ({ children }) => <>{children}</>,
    Link: ({ children, ...props }) => (
        <a {...props} onClick={(e) => e.preventDefault()}>
            {children}
        </a>
    )
}));

vi.mock('ziggy-sjs', () => ({
    default:(name) =>`/${name.replace('.', '/')}`,
}));


const mockAuth = { user: { name: "Teszt Felhasználó" } };


test("first screen test", () => {
    render(<Welcome canLogin={true} canRegister={true} laravelVersion="10.0" phpVersion="8.1.0" auth={mockAuth} />);
    const headElement = screen.getByRole("heading", {
        name: /drivers/i,
    });
    expect(headElement).toBeInTheDocument();

    const driversLinkElements = screen.getAllByRole("link", {
        name: "Drivers",
    });
    expect(driversLinkElements[0]).toBeInTheDocument();

    const carsLinkElements = screen.getAllByRole("link", {
        name: /cars/i,
    });
    expect(carsLinkElements[0]).toBeInTheDocument();

    const feedbackLinkElements = screen.getAllByRole("link", {
        name: /feedback/i,
    });
    expect(feedbackLinkElements[0]).toBeInTheDocument();

});

test("navigation test", () => {
    render(<Welcome canLogin={true} canRegister={true} laravelVersion="10.0" phpVersion="8.1.0" auth={mockAuth} />);
    const loginLinkElement = screen.getByRole("link", {
        name: /login/i,
    });
    expect(loginLinkElement).toBeInTheDocument();
    expect(loginLinkElement).toHaveAttribute("href", "/login");
    const signUpLinkElement = screen.getByRole("link", { name: /sign up/i });
    expect(signUpLinkElement).toBeInTheDocument();
    expect(signUpLinkElement).toHaveAttribute("href", "/signup");
});