import { getEvents } from '$lib/db.js';

export const load = async ({ params }) => {
  const djName = params.dj_id; // Der DJ-Name aus der URL
  const events = await getEvents(); // Hol alle Events aus der Datenbank

  // Finde das Event, bei dem der DJ spielt
  const event = events.find(e => e.djs.includes(djName));

  if (!event) {
    throw new Error(`Kein Event gefunden für DJ: ${djName}`);
  }

  return {
    djName,
    event: {
      eventName: event.name,
      clubName: event.club.name,
      clubLocation: event.club.location,
      eventDate: event.date,
      description: event.description,
    }
  };
};
