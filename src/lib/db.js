import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

// Verbindung zur Datenbank herstellen
export async function connectDB() {
  if (!client.isConnected) {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB!");
  }
  return client.db("eventinfo"); // Name der Datenbank
}

// *** Funktionen für Events ***

// Alle Events abrufen
export async function getEvents() {
  const db = await connectDB();
  const events = await db.collection("events").find().toArray();
  console.log("Datenbankevents:", events); // Debugging
  return events;
}

// DJs aus kommenden Events abrufen
export async function getUpcomingEventDJs() {
  const db = await connectDB();
  const currentDate = new Date().toISOString().split('T')[0]; // Heutiges Datum als YYYY-MM-DD-String

  try {
    // Events mit zukünftigen Daten abrufen
    const events = await db.collection("events").find({ date: { $gte: currentDate } }).toArray();
    console.log("Aktuelles Datum:", currentDate);
    console.log("Abgerufene Events aus MongoDB:", events);

    // DJs und zugehörige Event-/Club-Informationen extrahieren
    const djList = events.flatMap(event => {
      if (!Array.isArray(event.djs)) return []; // Ignoriere Events ohne DJs
      return event.djs.map(dj => ({
        dj,
        eventName: event.name,
        clubName: event.club?.name || "Unbekannt",
        clubLocation: event.club?.location || "Unbekannt",
        eventDate: event.date,
      }));
    });

    console.log("Erzeugte DJ-Liste:", djList);
    return djList;
  } catch (error) {
    console.error("Fehler beim Abrufen der DJs:", error);
    throw error;
  }
}

// Ein neues Event hinzufügen
export async function insertEvent(event) {
  try {
    const db = await connectDB();
    console.log("Inserting Event:", event); // Debugging: Event-Daten loggen
    return await db.collection("events").insertOne(event);
  } catch (err) {
    console.error("Database Error (Insert Event):", err);
    throw err; // Fehler weitergeben
  }
}

// Event nach ID abrufen
export async function getEventById(eventId) {
  try {
    if (!ObjectId.isValid(eventId)) {
      throw new Error("Ungültige Event-ID");
    }

    const db = await connectDB();
    const objectId = new ObjectId(eventId);
    const event = await db.collection("events").findOne({ _id: objectId });

    if (!event) {
      throw new Error("Event nicht gefunden");
    }

    return event;
  } catch (err) {
    console.error("Database Error (Get Event by ID):", err);
    throw err;
  }
}

// DJ zu einem Event hinzufügen
export async function addDJToEvent(eventId, djName) {
  try {
    const db = await connectDB();
    return await db.collection("events").updateOne(
      { _id: new ObjectId(eventId) },
      { $addToSet: { djs: djName } }
    );
  } catch (err) {
    console.error("Database Error (Add DJ to Event):", err);
    throw err;
  }
}

// DJ aus allen Events löschen
export async function deleteDJ(djName) {
  try {
    const db = await connectDB();
    const result = await db.collection('events').updateMany(
      {},
      { $pull: { djs: djName } }
    );
    return result;
  } catch (err) {
    console.error('Database Error (Delete DJ):', err);
    throw err;
  }
}

// DJ-Namen in allen Events aktualisieren
export async function updateDJName(oldName, newName) {
  try {
    const db = await connectDB();
    const result = await db.collection('events').updateMany(
      { djs: oldName },
      { $set: { 'djs.$': newName } }
    );
    return result;
  } catch (err) {
    console.error('Database Error (Update DJ Name):', err);
    throw err;
  }
}

// Events nach einem DJ durchsuchen
export async function findEventsByDJ(djName) {
  try {
    const db = await connectDB();
    return await db.collection("events").find({ djs: djName }).toArray();
  } catch (err) {
    console.error("Database Error (Find Events by DJ):", err);
    throw err;
  }
}

// *** Funktionen für Clubs ***

// Alle Clubs abrufen und nach Städten gruppieren
export async function getClubsByCity() {
  try {
    const db = await connectDB();
    console.log("Verbindung zur MongoDB hergestellt.");

    const clubs = await db.collection("clubs_by_city").find().toArray();
    console.log("Abgerufene Clubs aus 'clubs_by_city':", clubs);

    // Gruppiere Clubs nach Städten und zähle sie
    const cityCounts = clubs.reduce((counts, club) => {
      const city = club.location || "Unbekannt";
      counts[city] = (counts[city] || 0) + 1;
      return counts;
    }, {});

    console.log("Club-Zählung nach Stadt:", cityCounts);

    return Object.entries(cityCounts).map(([city, count]) => ({ city, count }));
  } catch (err) {
    console.error("Fehler beim Abrufen der Clubs nach Stadt:", err);
    throw err;
  }
}

// *** Funktionen für Kontakt ***

// Neue Kontaktanfrage speichern
export async function insertContactData(contactData) {
  try {
    const db = await connectDB();
    console.log("Inserting Contact Data:", contactData); // Debugging: Kontakt-Daten loggen
    return await db.collection("contactdata").insertOne(contactData);
  } catch (err) {
    console.error("Database Error (Insert Contact Data):", err);
    throw err; // Fehler weitergeben
  }
}
