import { fireEvent, render, screen } from "@testing-library/react";
import Feedback from "./Feedback";
import { useForm } from "@inertiajs/react";

const mockPost = vi.fn();
const mockSetData = vi.fn();
vi.mock("@inertiajs/react", () => ({
    Head: ({ children }) => <>{children}</>,
    Link: ({ children, ...props }) => (
        <a {...props} onClick={(e) => e.preventDefault()}>
            {children}
        </a>
    ),
    useForm: () => ({
        data: { rating: 3, comment: "" },
        setData: mockSetData,
        post: mockPost,
        error: null,
        processing: false,
    }),
}));


const mockAuth = { user: { name: "Teszt Felhasználó" } };

test("feedback component screen test", () => {
    render(<Feedback feedbacks={[]} auth={mockAuth} />);
    const headElement = screen.getByRole("heading", {
        name: /ratings & comments/i,
    });
    expect(headElement).toBeInTheDocument();

    const commentTextAreaElement = screen.getByPlaceholderText(
        /share your experience.../i
    );
    expect(commentTextAreaElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", {
        name: /submit/i,
    });
    expect(submitButtonElement).toBeInTheDocument();
    fireEvent.click(submitButtonElement);
    expect(mockPost).toHaveBeenCalled(); // post method should be called

});

test("feedback component rating test", () => {
    render(<Feedback feedbacks={[]} auth={mockAuth} />);
    const starElements = screen.getAllByText("★");
    expect(starElements).toHaveLength(5);
    fireEvent.click(starElements[2]);
    expect(mockSetData).toHaveBeenCalledWith("rating", 3);
});
