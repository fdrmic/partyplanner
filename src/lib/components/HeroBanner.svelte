<script>
    export let title = "Hello Party People!";
    export let subtitle = "Willkommen auf der ultimativen Plattform für Party-Veranstalter!";
    export let images = [];
  </script>
  
  <section class="hero-banner">
    <div class="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div class="carousel">
      <div class="carousel-track">
        {#each images.concat(images) as image} <!-- Wiederhole die Bilder für nahtlosen Übergang -->
          <img src={image} alt="" />
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .hero-banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(90deg, #ff00ff, #8000ff);
      color: white;
      padding: 50px 20px;
      text-align: center;
    }
  
    .hero-content h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      color: white;
    }
  
    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      color: #f9f9f9;
    }
  
    .carousel {
      overflow: hidden;
      width: 100%;
      max-width: 1200px;
      height: 300px;
      position: relative;
      border: 2px solid #fff;
      border-radius: 10px;
    }
  
    .carousel-track {
      display: flex;
      animation: slide 20s linear infinite;
    }
  
    .carousel img {
      width: calc(100% / 3 - 10px);
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 10px;
    }
  
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-200%)); /* Nahtloser Übergang über zweimal die Breite */
      }
    }
  </style>
  