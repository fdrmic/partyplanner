import { getUpcomingEventDJs } from '$lib/db.js';

export const load = async () => {
  try {
    const djList = await getUpcomingEventDJs();
    return { djList };
  } catch (error) {
    console.error("Fehler beim Abrufen der DJs:", error);
    return { error: "Fehler beim Abrufen der DJs" };
  }
};
