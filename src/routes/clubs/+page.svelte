<script>
  import { goto } from '$app/navigation';

  function navigateToCreateClub() {
    goto('/clubs/create');
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }

  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  .images {
    display: flex;
    flex-direction: column; /* Bilder untereinander anordnen */
    gap: 20px; /* Abstand zwischen den Bildern */
    margin-top: 20px;
    align-items: center;
  }

  .image {
    width: auto;
    max-width: 60%; /* Maximale Breite von 80% */
    height: auto;
    border-radius: 10px; /* Abgerundete Ecken */
    transition: transform 0.5s ease, filter 0.5s ease; /* Effekt für Verzerrung */
  }

  .image:hover {
    transform: rotate(-3deg) scale(1.05); /* Leichte Drehung und Vergrößerung */
    filter: brightness(1.2) contrast(1.1); /* Helligkeit und Kontrastanpassung */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Schatten hinzufügen */
  }
</style>

<div class="container">
  <p>Erfasse hier neue Clubs mit Namen und Standort, um sie der Party Community zu zeigen!</p>
  <button class="button" on:click={navigateToCreateClub}>Club erfassen</button>
  <div class="images">
    <img src="/image6.jpeg" alt="" class="image" />
    <img src="/image7.jpeg" alt="" class="image" />
    <img src="/image4.jpeg" alt="" class="image" />
  </div>
</div>
