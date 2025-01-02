<script>
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

  <DjList
    djList={data.djList}
    deleteDJ={deleteDJ}
    updateDJName={updateDJName}
  />
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
