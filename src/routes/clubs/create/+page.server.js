import { insertClub } from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    try {
      // Formulardaten auslesen
      const formData = await request.formData();
      console.log("Form Data Received:", Array.from(formData.entries())); // Debugging

      // Daten extrahieren
      const name = formData.get('name');
      const location = formData.get('location');

      // Validierung der Eingabedaten
      if (!name || !location) {
        console.error("Validation Error: Name or Location missing");
        return { error: 'Name und Ort sind erforderlich.' };
      }

      // Club in die Datenbank einfügen
      const newClub = { name: name.trim(), location: location.trim() };
      await insertClub(newClub);
      console.log("Club inserted successfully:", newClub);

      return { success: true }; // Erfolgreich verarbeitet
    } catch (err) {
      // Fehlerbehandlung
      console.error("Error inserting club:", err);
      return { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' };
    }
  }
};