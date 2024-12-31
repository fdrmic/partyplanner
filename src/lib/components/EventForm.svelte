<script>
    import { onMount } from 'svelte';
    export let title = "";
    export let date = "";
    export let clubId = "";
    export let djIds = [];
  
    let clubs = [];
    let djs = [];
  
    onMount(async () => {
      const clubRes = await fetch('/api/clubs');
      clubs = await clubRes.json();
  
      const djRes = await fetch('/api/djs');
      djs = await djRes.json();
    });
  </script>
  
  <form method="POST">
    <label>
      Title:
      <input type="text" name="title" bind:value={title} required />
    </label>
    <label>
      Date:
      <input type="date" name="date" bind:value={date} required />
    </label>
    <label>
      Club:
      <select name="club_id" bind:value={clubId} required>
        <option value="">Select Club</option>
        {#each clubs as club}
          <option value={club._id}>{club.name}</option>
        {/each}
      </select>
    </label>
    <label>
      DJs:
      <select name="dj_ids" multiple bind:value={djIds}>
        {#each djs as dj}
          <option value={dj._id}>{dj.name}</option>
        {/each}
      </select>
    </label>
    <button type="submit">Save Event</button>
  </form>
  