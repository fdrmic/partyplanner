import { insertClub } from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const location = formData.get('location');

    if (!name || !location) {
      return { error: 'Name und Ort sind erforderlich.' };
    }

    // Club in die Datenbank einfügen
    await insertClub({ name, location });

    return { success: true };
  }
};
