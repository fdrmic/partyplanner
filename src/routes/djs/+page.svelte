<script>
  export let data;

  async function deleteDJ(djName) {
    const response = await fetch('/api/delete-dj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ djName }),
    });

    if (response.ok) {
      alert(`DJ ${djName} wurde gelöscht.`);
      location.reload(); // Seite neu laden
    } else {
      const { message } = await response.json();
      alert(`Fehler beim Löschen von DJ ${djName}: ${message}`);
    }
  }

  async function updateDJName(oldName, newName) {
    const response = await fetch('/api/update-dj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldName, newName }),
    });

    if (response.ok) {
      alert(`DJ ${oldName} wurde in ${newName} umbenannt.`);
      location.reload(); // Seite neu laden
    } else {
      const { message } = await response.json();
      alert(`Fehler beim Aktualisieren von DJ ${oldName}: ${message}`);
    }
  }
</script>

<div class="container mt-4">
  <div class="text-center intro-text">
    <h1>Alle Djs auf einen Blick</h1>
  </div>

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
</div>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  .intro-text h1 {
    font-size: 2.5rem; /* Gleiche Schriftgröße wie Kontaktformular */
    margin-bottom: 20px;
    color: transparent;
    background: linear-gradient(90deg, #ff00ff, #8000ff); /* Farbverlauf */
    -webkit-background-clip: text;
    background-clip: text;
  }

  .table-container {
    overflow-x: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .modern-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
    font-size: 1rem;
    color: #333;
    margin: 0 auto;
  }

  .modern-table thead {
    background: linear-gradient(90deg, #ff00ff, #8000ff); /* Gleicher Farbverlauf wie Titel */
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }

  .modern-table th, .modern-table td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }

  .modern-table tbody tr:hover {
    background: #f5f5f5;
    transition: background 0.3s ease;
  }

  .modern-table tbody tr:last-child td {
    border-bottom: none;
  }

  .no-events {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-top: 2rem;
  }

  .link {
    text-decoration: none;
    color: #6f86ff;
    font-weight: bold;
  }

  .link:hover {
    color: #ff6f61;
    text-decoration: underline;
  }

  .btn {
    padding: 8px 12px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .btn-danger {
    background-color: #ff6f61;
    color: white;
  }

  .btn-danger:hover {
    background-color: #d9534f;
  }

  .btn-primary {
    background-color: #6f86ff;
    color: white;
  }

  .btn-primary:hover {
    background-color: #5a6dcc;
  }
</style>
