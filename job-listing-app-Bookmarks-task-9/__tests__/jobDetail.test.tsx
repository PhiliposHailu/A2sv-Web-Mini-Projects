import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import JobDetailClient from "@/app/components/JobDetail";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("JobDetailClient component", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });
  });

  it("shows loading initially", async () => {
    // Mock fetch to return a pending promise to keep the component in loading state
    global.fetch = jest.fn(() => new Promise(() => {})); // Never resolves

    await act(async () => {
      render(<JobDetailClient slug="abc123" />);
    });

    expect(screen.getByText(/loading job/i)).toBeInTheDocument();
  });

  it("renders job details when fetch succeeds", async () => {
    const mockJob = {
      description: "Test description",
      responsibilities: "Resp1\nResp2",
      idealCandidate: "Ideal candidate text",
      whenAndWhere: "Addis Ababa",
      datePosted: "2025-08-10T00:00:00Z",
      deadline: "2025-12-31T00:00:00Z",
      location: ["Addis Ababa", "Remote"],
      startDate: "2025-09-01T00:00:00Z",
      endDate: "2025-12-01T00:00:00Z",
      categories: ["IT", "Education"],
      requiredSkills: ["React", "TypeScript"],
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ data: mockJob }),
    });

    await act(async () => {
      render(<JobDetailClient slug="abc123" />);
    });

    await waitFor(() =>
      expect(screen.queryByText(/loading job/i)).not.toBeInTheDocument()
    );

    expect(screen.getByText(/test description/i)).toBeInTheDocument();
    expect(screen.getByText(/resp1/i)).toBeInTheDocument();
    expect(screen.getByText(/resp2/i)).toBeInTheDocument();
    expect(screen.getByText(/ideal candidate text/i)).toBeInTheDocument();

    const locations = screen.getAllByText(/addis ababa/i);
    expect(locations.length).toBeGreaterThan(0);
  });

  it("renders job not found message if fetch fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    await act(async () => {
      render(<JobDetailClient slug="abc123" />);
    });

    await waitFor(() =>
      expect(screen.queryByText(/loading job/i)).not.toBeInTheDocument()
    );

    expect(
      screen.getByText(/job not found or access denied/i)
    ).toBeInTheDocument();
  });
});