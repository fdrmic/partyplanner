import { updateDJName } from '$lib/db.js';

export async function POST({ request }) {
  try {
    const { oldName, newName } = await request.json();

    if (!oldName || !newName) {
      return new Response(JSON.stringify({ message: 'Alter oder neuer Name fehlt' }), { status: 400 });
    }

    const result = await updateDJName(oldName, newName);

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ message: 'DJ nicht gefunden' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'DJ erfolgreich aktualisiert' }), { status: 200 });
  } catch (error) {
    console.error('Fehler beim Aktualisieren des DJs:', error);
    return new Response(JSON.stringify({ message: 'Serverfehler beim Aktualisieren' }), { status: 500 });
  }
}
