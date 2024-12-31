<script>
  import { goto } from '$app/navigation';

  function navigateToCreateEvent() {
    goto('/events/create'); // Navigiert zur Create-Seite
  }
</script>

<style>
  .container {
    text-align: center;
    margin-top: 40px;
    padding: 20px;
  }

  .intro-text h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: transparent;
    background: linear-gradient(90deg, #ff00ff, #8000ff);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .description {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 30px;
  }

  .button {
    background-color: #6f86ff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .button:hover {
    background-color: #5a6dcc;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
</style>

<div class="container">
  <div class="intro-text">
    <h1>Entdecke die besten Events in deiner Stadt!</h1>
  </div>
  <p class="description">
    Hier findest du eine Übersicht über alle kommenden Events. Erfasse deine eigenen Events
    und teile sie mit der Community, um für großartige Partynächte zu sorgen.
  </p>
  <button class="button" on:click={navigateToCreateEvent}>Event erfassen</button>
</div>
