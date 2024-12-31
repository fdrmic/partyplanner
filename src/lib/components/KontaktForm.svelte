<script>
  export let title = "Kontaktformular";
</script>

<div class="container mt-5">
  <!-- Überschrift -->
  <div class="intro-text text-center">
      <h1>{title}</h1>
  </div>
  <p class="text-muted text-center mb-5">
      Wir freuen uns, von Ihnen zu hören! Bitte füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
  </p>

  <!-- Kontaktformular -->
  <form method="POST" class="row g-3 mx-auto" style="max-width: 600px;">
      <!-- Name -->
      <div class="col-12">
          <label for="name" class="form-label">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            class="form-control" 
            placeholder="Ihr Name" 
            required
          >
      </div>

      <!-- Email -->
      <div class="col-12">
          <label for="email" class="form-label">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-control" 
            placeholder="Ihre Email-Adresse" 
            required
          >
      </div>

      <!-- Nachricht -->
      <div class="col-12">
          <label for="message" class="form-label">Nachricht:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            class="form-control" 
            placeholder="Ihre Nachricht" 
            required
          ></textarea>
      </div>

      <!-- Absenden-Button -->
      <div class="col-12 text-end">
          <button type="submit" class="btn btn-primary">Nachricht senden</button>
      </div>
  </form>
</div>

<style>
  .intro-text h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: transparent;
      background: linear-gradient(90deg, #ff00ff, #8000ff);
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
</style>
