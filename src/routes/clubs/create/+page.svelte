<script>
  import { goto } from '$app/navigation';

  export let title = "Club erstellen";

  function goBack() {
      goto('/clubs'); // Navigiert zurück zur Clubs-Seite
  }
</script>

<div class="container mt-4">
  <!-- Zurück-Button -->
  <button class="btn btn-outline-primary mb-3" on:click={goBack}>
    &larr; Zurück
  </button>

  <!-- Titel und Beschreibung -->
  <section class="text-center mb-4">
    <h1 class="gradient-text mb-3">{title}</h1>
    <p class="text-muted">
      Erfassen Sie hier einen neuen Club, indem Sie den Namen und den Ort angeben.
    </p>
  </section>

  <!-- Formular -->
  <form method="POST" class="row g-3 mx-auto" style="max-width: 600px;">
    <div class="col-md-6">
      <label for="clubname" class="form-label">Club-Name:</label>
      <input type="text" id="clubname" name="name" class="form-control" placeholder="Club-Name" required>
    </div>
    <div class="col-md-6">
      <label for="location" class="form-label">Ort:</label>
      <input type="text" id="location" name="location" class="form-control" placeholder="Ort" required>
    </div>
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary">Erfassen</button>
    </div>
  </form>
</div>

<style>
  /* Farbverlauf für den Titel */
  .gradient-text {
    font-size: 2.5rem;
    color: transparent;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    background-clip: text;
  }


</style>