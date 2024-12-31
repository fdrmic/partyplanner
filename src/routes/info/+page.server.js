import { getClubsByCity } from '$lib/db.js';

export const load = async () => {
  try {
    console.log("Abrufen der Clubs pro Stadt gestartet...");
    const chartData = await getClubsByCity();
    console.log("Verarbeitete Chart-Daten:", chartData);
    return {
      chartData,
    };
  } catch (error) {
    console.error("Fehler beim Abrufen der Clubs pro Stadt:", error);
    return {
      chartData: [],
      error: "Fehler beim Laden der Daten.",
    };
  }
}