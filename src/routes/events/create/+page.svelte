<script>
  let title = "Event erstellen";

  import { goto } from '$app/navigation';

  function goBack() {
      goto('/events'); // Navigiert zurück zur Events-Seite
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
      Erfassen Sie hier neue Events, indem Sie den Club, den Namen, ein Datum, eine kurze Beschreibung und DJs angeben.
    </p>
  </section>

  <!-- Formular -->
  <form method="POST" class="row g-3 mx-auto" style="max-width: 600px;">
    <!-- Club Name -->
    <div class="col-md-6">
      <label for="clubname" class="form-label">Club-Name:</label>
      <input 
        type="text" 
        id="clubname" 
        name="club_name" 
        class="form-control" 
        placeholder="Name des Clubs" 
        required
      >
    </div>

    <!-- Club Ort -->
    <div class="col-md-6">
      <label for="clublocation" class="form-label">Club-Ort:</label>
      <input 
        type="text" 
        id="clublocation" 
        name="club_location" 
        class="form-control" 
        placeholder="Ort des Clubs" 
        required
      >
    </div>

    <!-- Event Name -->
    <div class="col-md-6">
      <label for="eventname" class="form-label">Event-Name:</label>
      <input 
        type="text" 
        id="eventname" 
        name="name" 
        class="form-control" 
        placeholder="Event-Name" 
        required
      >
    </div>

    <!-- Datum -->
    <div class="col-md-6">
      <label for="date" class="form-label">Datum:</label>
      <input 
        type="date" 
        id="date" 
        name="date" 
        class="form-control" 
        required
      >
    </div>

    <!-- Beschreibung -->
    <div class="col-12">
      <label for="description" class="form-label">Beschreibung:</label>
      <textarea 
        id="description" 
        name="description" 
        class="form-control" 
        rows="3" 
        placeholder="Beschreibung des Events"
        required
      ></textarea>
    </div>

    <!-- DJs -->
    <div class="col-12">
      <label for="djs" class="form-label">DJs (durch Komma getrennt):</label>
      <input 
        type="text" 
        id="djs" 
        name="djs" 
        class="form-control" 
        placeholder="DJ1, DJ2, DJ3"
      >
    </div>

    <!-- Absenden-Button -->
    <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary">Event erstellen</button>
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

  form .form-label {
    font-weight: bold;
    color: #333;
  }

  form .form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  form .form-control:focus {
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
  }

  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004494;
  }

  .text-muted {
    font-size: 1rem;
    color: #333;
  }

</style>