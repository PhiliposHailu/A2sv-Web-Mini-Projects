import "@testing-library/jest-dom";
import { fetchBookmarks } from "@/public/utils/bookmarksLogic";
import { describe } from "node:test";

describe("fetch Bookmars test", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("return empty array if token is falsy", async () => {
    const result = await fetchBookmarks("");
    expect(result).toEqual([]);
  });

  it("throws error if fetch response is not ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchBookmarks("valid-token")).rejects.toThrow(
      "Failed to fetch bookmarks"
    );
  });

  it("returns maped Ids if success", async () => {
    // fake api response
    const mockData = {
      success: true,
      data: [{ eventID: 1 }, { eventID: 2 }, { eventID: 3 }],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchBookmarks("valid-token");
    expect(result).toEqual([1, 2, 3]);
  });

  it("if falsy or bookmarks empty returns empty array", async () => {
    const mockData = {
      success: false,
      data: [],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchBookmarks("valid-token");
    expect(result).toEqual([]);
  });
});

