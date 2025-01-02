<script>
  import HeroBanner from '$lib/components/HeroBanner.svelte';

  export let title = "Hello Party People!";

  let images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg"
  ];
</script>

<div class="container mt-5">
  <!-- HeroBanner-Komponente -->
  <HeroBanner 
    title={title}
    subtitle="Willkommen auf der ultimativen Plattform für Party-Veranstalter! Hier kannst du alle kommenden Events erfassen und verwalten."
    {images}
  />
</div>

<style>
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }
</style>
