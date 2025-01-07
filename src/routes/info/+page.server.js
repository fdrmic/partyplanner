import { getClubsByCity } from '$lib/db.js';

// Daten aus Mongo-DB abrufen und an die Svelte-Seite übergeben

export const load = async () => {
  try {
    console.log("Abrufen der Clubs pro Stadt gestartet...");
    const chartData = await getClubsByCity(); // Holt die Club-Daten aus der Datenbank
    console.log("Verarbeitete Chart-Daten:", chartData);
    return {
      chartData, // Übergibt die Daten an die Svelte-Seite
    };
  } catch (error) {
    console.error("Fehler beim Abrufen der Clubs pro Stadt:", error);
    return {
      chartData: [],
      error: "Fehler beim Laden der Daten.",
    };
  }
}