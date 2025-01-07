import { deleteDJ } from '$lib/db.js';

export async function POST({ request }) {
  try {
    const { djName } = await request.json();

    if (!djName) {
      return new Response(JSON.stringify({ message: 'DJ-Name fehlt' }), { status: 400 });
    }

    const result = await deleteDJ(djName);

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ message: 'DJ nicht gefunden' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'DJ erfolgreich gelöscht' }), { status: 200 });
  } catch (error) {
    console.error('Fehler beim Löschen des DJs:', error);
    return new Response(JSON.stringify({ message: 'Serverfehler beim Löschen' }), { status: 500 });
  }
}
