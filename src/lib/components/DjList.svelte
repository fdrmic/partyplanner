<script>
    export let djList = []; // Die Liste der DJs
    export let deleteDJ; // Löschfunktion wird übergeben
    export let updateDJName; // Aktualisierungsfunktion wird übergeben
  </script>
  
  <div class="table-container">
    {#if djList && djList.length > 0}
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
          {#each djList as dj}
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
    {:else}
      <p class="no-events">Keine DJs gefunden.</p>
    {/if}
  </div>
  
  <style>
    .table-container {
      overflow-x: auto;
      margin-top: 20px;
    }
  
    .modern-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 1rem;
      color: #333;
    }
  
    .modern-table thead {
      background: linear-gradient(90deg, #ff00ff, #8000ff);
      color: white;
    }
  
    .modern-table th, .modern-table td {
      padding: 15px;
      text-align: center;
    }
  
    .modern-table tbody tr:hover {
      background: #f5f5f5;
    }
  
    .no-events {
      text-align: center;
      margin-top: 2rem;
      color: #666;
    }
  
    .btn-danger {
      background-color: #ff6f61;
      color: white;
    }
  
    .btn-primary {
      background-color: #6f86ff;
      color: white;
    }
  </style>
  