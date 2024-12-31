import { getEvents } from '$lib/db';

export async function load() {
  try {
    const events = await getEvents();

    // Konvertiere ObjectIDs in Strings
    const serializedEvents = events.map(event => ({
      ...event,
      _id: event._id.toString() // ObjectID in String umwandeln
    }));

    return { events: serializedEvents };
  } catch (err) {
    console.error('Fehler beim Abrufen der Events:', err);
    return { events: [] }; // Fallback bei Fehler
  }
}
