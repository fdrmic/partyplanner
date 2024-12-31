import { insertContactData } from '$lib/db.js';

export const actions = {
  default: async ({ request }) => {
    try {
      // Formulardaten auslesen
      const formData = await request.formData();
      const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      // Validierung der Eingaben
      if (!contactData.name || !contactData.email || !contactData.message) {
        return { error: 'Bitte alle Felder ausfüllen!' };
      }

      // Kontaktanfrage speichern
      await insertContactData(contactData);

      console.log("Kontaktanfrage erfolgreich gespeichert:", contactData);
      return { success: true };
    } catch (err) {
      console.error("Fehler beim Speichern der Kontaktanfrage:", err);
      return { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' };
    }
  }
};
