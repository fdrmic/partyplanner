<script>
  export let data; // Daten laden

  async function deleteDJ(djName) {
    const response = await fetch('/api/delete-dj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ djName }),
    });

    if (response.ok) {
      alert(`DJ ${djName} wurde gelöscht.`);
      location.reload();
    } else {
      const { message } = await response.json();
      alert(`Fehler beim Löschen von DJ ${djName}: ${message}`);
    }
  }

  async function updateDJName(oldName, newName) {
    try {
      const response = await fetch('/api/update-dj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldName, newName }),
      });

      if (response.ok) {
        alert(`DJ ${oldName} wurde in ${newName} umbenannt.`);
        location.reload();
      } else {
        const { message } = await response.json();
        alert(`Fehler beim Aktualisieren von DJ ${oldName}: ${message}`);
      }
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
    text-align: center;
    padding-top: 20px;
  }

  .intro-text h1 {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff00ff, #8000ff);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 30px;
  }

  .table-container {
    margin-top: 20px;
    overflow-x: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .modern-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    background-color: #ffffff;
    overflow: hidden;
  }

  .modern-table thead {
    background: linear-gradient(90deg, #ff00ff, #8000ff);
    color: white;
  }

  .modern-table th,
  .modern-table td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }

  .modern-table tbody tr:hover {
    background-color: #f5f5f5;
    transition: background-color 0.3s ease;
  }

  .modern-table tbody tr:last-child td {
    border-bottom: none;
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

  .link {
    color: #6f86ff;
    text-decoration: none;
    font-weight: bold;
  }

  .link:hover {
    text-decoration: underline;
    color: #ff6f61;
  }

  .no-events {
    font-size: 1.2rem;
    color: #666;
    margin-top: 20px;
  }
</style>