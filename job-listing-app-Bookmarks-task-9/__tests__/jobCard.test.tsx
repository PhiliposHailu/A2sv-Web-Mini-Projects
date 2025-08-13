import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JobCard from "@/app/components/JobCard";
import { useRouter } from "next/navigation";
import JobType from "@/app/types/JobType";

// Mock next/router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("JobCard component", () => {
  const mockJob: JobType = {
    id: "123",
    logoUrl: "", // or put a valid image URL string here
    location: ["Addis Ababa", "Remote"],
    title: "Software Engineer",
    orgName: "Awesome Inc",
    description: "Great job description here",

    responsibilities: "Build cool stuff\nFix bugs",
    idealCandidate:
      "Passionate developer with experience in React and TypeScript",
    whenAndWhere: "Office and Remote",

    datePosted: "2025-08-10",
    startDate: "2025-09-01",
    endDate: "2025-12-01",
    deadline: "2025-12-31",

    categories: ["IT", "Education"],
    requiredSkills: ["React", "TypeScript"],
  };

  const mockPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    global.fetch = jest.fn();
  });

  it("renders job details and bookmark button", () => {
    render(<JobCard job={mockJob} bookmarked={false} />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText(/Awesome Inc/i)).toBeInTheDocument();
    expect(screen.getByText(/Addis Ababa, Remote/i)).toBeInTheDocument();

    // Bookmark button aria-label should be "Add bookmark" if not bookmarked
    expect(
      screen.getByRole("button", { name: /add bookmark/i })
    ).toBeInTheDocument();
  });

  it("shows filled bookmark icon if bookmarked", () => {
    render(<JobCard job={mockJob} bookmarked={true} />);
    expect(
      screen.getByRole("button", { name: /remove bookmark/i })
    ).toBeInTheDocument();
  });

  it("toggles bookmark on click and calls API", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
    // Mock localStorage.getItem to return a valid token string
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("fake-token");
    render(<JobCard job={mockJob} bookmarked={false} />);

    const button = screen.getByRole("button", { name: /add bookmark/i });
    fireEvent.click(button);

    // Wait for state update after fetch
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://akil-backend.onrender.com/bookmarks/123",
        expect.objectContaining({ method: "POST" })
      );
    });

    // After toggle, button aria-label changes to "Remove bookmark"
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /remove bookmark/i })
      ).toBeInTheDocument();
    });
  });

  it("handles API failure gracefully", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });
    // Mock localStorage.getItem to return a token string (so fetch is called)
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("fake-token");
    render(<JobCard job={mockJob} bookmarked={false} />);

    const button = screen.getByRole("button", { name: /add bookmark/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Failed to update bookmark. Try again."
      );
    });

    (window.alert as jest.Mock).mockRestore();
  });

  it("redirects to login if no token", () => {
    // Mock localStorage.getItem to return null (no token)
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

    render(<JobCard job={mockJob} bookmarked={false} />);
    const button = screen.getByRole("button", { name: /add bookmark/i });
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/login");

    jest.spyOn(Storage.prototype, "getItem").mockRestore();
  });
});
