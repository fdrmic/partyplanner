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
  /* Text Styling */
  .intro-text h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: transparent;
    background: linear-gradient(90deg, #ff00ff, #8000ff);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .intro-text p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 15px;
  }

  /* Carousel Styling */
  .carousel-container {
    margin: 20px auto;
    max-width: 1200px;
  }

  .carousel {
    overflow: hidden;
    width: 100%;
    height: 450px;
    position: relative;
    border: 2px solid #ddd;
    border-radius: 10px;
  }

  .carousel-track {
    display: flex;
    gap: 10px;
    padding-right: 10px;
    animation: slide 15s linear infinite;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .carousel img {
    width: calc(100% / 3 - 10px);
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 5px;
  }

  /* Animation */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% - 10px));
    }
  }
</style>