<script>
<<<<<<< HEAD
  export let data; // Daten laden

  async function deleteDJ(djName) {
    const response = await fetch('/api/delete-dj', { //API-Aufruf wird an den Endpunkt /api/delete-dj gesendet
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Daten im JSON-Format
      body: JSON.stringify({ djName }), // djName wird als JSON-Objekt übergeben
    });

    if (response.ok) {
      alert(`DJ ${djName} wurde gelöscht.`);
      location.reload(); // Seite neu laden
    } else {
      const { message } = await response.json();
      alert(`Fehler beim Löschen von DJ ${djName}: ${message}`); // Fehlermeldung anzeigen
    }
  }

  async function updateDJName(oldName, newName) {//Hier dasselbe wie oben
    const response = await fetch('/api/update-dj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldName, newName }),
    });
=======
  import DjList from '$lib/components/DjList.svelte';
  export let data;

  async function deleteDJ(djName) {
    try {
      const response = await fetch('/api/delete-dj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ djName }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        alert(`Fehler: ${message}`);
        return;
      }

      alert(`DJ ${djName} wurde erfolgreich gelöscht.`);
      location.reload();
    } catch (error) {
      console.error('Fehler beim Löschen des DJs:', error);
      alert('Ein Fehler ist aufgetreten.');
    }
  }

  async function updateDJName(oldName, newName) {
    if (!newName || oldName === newName) return;

    try {
      const response = await fetch('/api/update-dj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldName, newName }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        alert(`Fehler: ${message}`);
        return;
      }
>>>>>>> db3f3496858348efa7775472cb07b9309fffa09d

      alert(`DJ ${oldName} wurde in ${newName} umbenannt.`);
      location.reload();
    } catch (error) {
      console.error('Fehler beim Aktualisieren des DJs:', error);
      alert('Ein Fehler ist aufgetreten.');
    }
  }
</script>

<div class="container mt-4">
  <div class="text-center intro-text">
    <h1>Alle DJs auf einen Blick</h1>
  </div>

<<<<<<< HEAD
  {#if data.djList && data.djList.length > 0} 
    <div class="table-container">
      <table class="modern-table">
        <thead>
          <tr>
            <th>DJ</th>
            <th>Event</th>
            <th>Club</th>
            <th>Ort</th>
            <th>Datum</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {#each data.djList as dj}
            <tr>
              <td><a href="/djs/{dj.dj}" class="link">{dj.dj}</a></td>
              <td>{dj.eventName}</td>
              <td>{dj.clubName}</td>
              <td>{dj.clubLocation}</td>
              <td>{new Date(dj.eventDate).toLocaleDateString()}</td>
              <td>
                <button on:click={() => deleteDJ(dj.dj)} class="btn btn-danger">Löschen</button>
                <button on:click={() => updateDJName(dj.dj, prompt('Neuer Name für DJ:', dj.dj))} class="btn btn-primary">Bearbeiten</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p class="no-events">Keine kommenden Events gefunden.</p>
  {/if}
=======
  <DjList
    djList={data.djList}
    deleteDJ={deleteDJ}
    updateDJName={updateDJName}
  />
>>>>>>> db3f3496858348efa7775472cb07b9309fffa09d
</div>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .intro-text h1 {
    font-size: 2.5rem;
    background: linear-gradient(90deg, #ff00ff, #8000ff);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
