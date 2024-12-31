<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<!-- Layout-Container mit Bootstrap-Klassen -->
<div class="d-flex flex-column min-vh-100">
  <Navbar />
  
  <!-- Platz für Inhalte der untergeordneten Seiten -->
  <main class="flex-fill container my-4">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  /* Main Content Styling */
  main {
    max-width: 1200px; /* Begrenze die Breite des Inhalts */
  }
</style>