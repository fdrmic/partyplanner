<script>
  let title = "Hello Party People!";

  let images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg"
  ];
</script>

<div class="container mt-5">
  <!-- Begrüssung / Beschreibung -->
  <div class="intro-text text-center mb-5">
    <h1 class="gradient-text">{title}</h1>
    <p>
      Willkommen auf der ultimativen Plattform für Party-Veranstalter! Hier kannst du alle kommenden 
      Events erfassen. So hast du alles auf einen Blick. 
    </p>
  </div>

  <!-- Bilder-Karussell -->
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-track">
        {#each images as image}
          <img src={image} alt="" />
        {/each}
        <!-- Füge eine Kopie der Bilder hinzu, um einen nahtlosen Übergang zu schaffen -->
        {#each images as image}
          <img src={image} alt="" />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }
</style>
