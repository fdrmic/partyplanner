<script>
    export let events = [];
  </script>
  
  <ul>
    {#each events as event}
      <li>
        <h3>{event.title}</h3>
        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        <p>Club: {event.club[0]?.name}</p>
        <p>DJs: {#each event.djs as dj}{dj.name}{#if !@last}, {/if}{/each}</p>
      </li>
    {/each}
  </ul>