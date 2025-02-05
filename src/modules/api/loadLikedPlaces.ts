export const loadLikedPlaces = async () => {
  try {
    const response = await fetch("/api/likes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching liked places:", error);
  }
};
