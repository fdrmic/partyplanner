import { insertEvent } from '$lib/db.js'; // Funktion zum Speichern von Events

export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();

      // Extrahiere Daten aus dem Formular
      const club_name = formData.get('club_name');
      const club_location = formData.get('club_location');
      const name = formData.get('name');
      const date = formData.get('date');
      const description = formData.get('description');
      const djs = formData.get('djs') ? formData.get('djs').split(',').map(dj => dj.trim()) : [];

      // Validierung
      if (!club_name || !club_location || !name || !date || !description) {
        return { error: 'Bitte füllen Sie alle erforderlichen Felder aus.' };
      }

      // Event-Daten vorbereiten
      const newEvent = {
        club: {
          name: club_name,
          location: club_location
        },
        name,
        date,
        description,
        djs
      };

      // Event in der Datenbank speichern
      await insertEvent(newEvent);

      return { success: true };
    } catch (err) {
      console.error('Fehler beim Erstellen des Events:', err);
      return { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' };
    }
  }
};