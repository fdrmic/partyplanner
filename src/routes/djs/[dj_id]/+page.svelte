<script>
    export let data;
  </script>
  
  <div class="container mt-4">
    <h1 class="gradient-text text-center">Event-Details für</h1>
  
    <div class="event-details mt-4">
      <p><strong>DJ:</strong> {data.djName}</p>
      <p><strong>Event:</strong> {data.event.eventName}</p>
      <p><strong>Club:</strong> {data.event.clubName} ({data.event.clubLocation})</p>
      <p><strong>Datum:</strong> {new Date(data.event.eventDate).toLocaleDateString()}</p>
      <p><strong>Beschreibung:</strong> {data.event.description}</p>
    </div>
  
    <a href="/djs" class="btn btn-primary mt-4">Zurück zur DJ-Liste</a>
  </div>
  
  <style>
    .gradient-text {
      font-size: 2rem;
      font-weight: bold;
      color: transparent;
      background: linear-gradient(90deg, #ff6f61, #6f86ff);
      -webkit-background-clip: text;
      background-clip: text;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  
    .event-details {
      background: #f9f9f9;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      font-size: 1.2rem;
    }
  
    .btn-primary {
      display: inline-block;
      background-color: #6f86ff;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
  
    .btn-primary:hover {
      background-color: #ff6f61;
    }
  </style>
  