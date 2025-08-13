
export async function fetchBookmarks (token : string) {
    if (!token) return [];
    const res = await fetch("https://akil-backend.onrender.com/bookmarks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if(!res.ok) throw new Error("Failed to fetch bookmarks");

    const data = await res.json();

    if (data.success) {
      return data.data.map((b: any) => b.eventID);
    }

    return [];
};