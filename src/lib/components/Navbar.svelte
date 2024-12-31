<script>
  // Logik oder Props können hier später hinzugefügt werden
</script>

<nav class="navbar navbar-light bg-light border-bottom">
  <div class="container d-flex justify-content-between align-items-center">
    <!-- Logo -->
    <a class="navbar-brand" href="/">
      <img src="/Logo.png" alt="Logo" height="40" class="d-inline-block align-text-top">
      Party Planner
    </a>

    <!-- Navigationslinks -->
    <div class="nav-links d-flex justify-content-center flex-grow-1">
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item px-3">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="/info">Info</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="/events">Event erfassen</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="/djs">Djs</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="/kontakt">Kontakt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbar-brand img {
    border-radius: 50%; /* Rundes Logo */
  }

  .nav-links {
    flex-grow: 1; /* Links nehmen den verfügbaren Platz zwischen Logo und Ende der Navbar ein */
  }

  .nav-link {
    font-weight: bold;
    color: #333; /* Standardfarbe */
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: blue; /* Hover-Farbe */
  }
</style>