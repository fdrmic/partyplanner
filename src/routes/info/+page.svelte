<script>
    import { onMount } from "svelte";
    import { Chart, registerables } from "chart.js";
    Chart.register(...registerables);

    export let data; //Daten über page.server.js erhalten

    let chartInstance;
    let chartCanvas;
    let chartType = "pie";

    let cities = [];
    let clubCounts = [];
    let selectedCountry = "";
    let filteredData = [];

    let countries = [];

    onMount(() => {
        filteredData = data.chartData;
        cities = filteredData.map((entry) => entry.city);
        clubCounts = filteredData.map((entry) => entry.count);
        countries = Array.from(new Set(cities.map((city) => city.split("(")[1]?.split(")")[0])));
        createChart();
    });

    function filterData() {
        if (selectedCountry) {
            filteredData = data.chartData.filter((entry) =>
                entry.city.includes(selectedCountry)
            );
        } else {
            filteredData = data.chartData;
        }

        cities = filteredData.map((entry) => entry.city);
        clubCounts = filteredData.map((entry) => entry.count);
        createChart();
    }

    function createChart() {
        if (chartInstance) chartInstance.destroy();

        const ctx = chartCanvas.getContext("2d");

        chartInstance = new Chart(ctx, {
            type: chartType,
            data: {
                labels: cities,
                datasets: [
                    {
                        label: "Clubs pro Stadt",
                        data: clubCounts,
                        backgroundColor: cities.map(() => getRandomColor(0.6)),
                        borderColor: cities.map(() => getRandomColor(1)),
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw} Clubs`;
                            },
                        },
                    },
                },
            },
        });
    }

    function getRandomColor(opacity) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
</script>

<div class="container mt-5">
    <div class="text-center intro-text">
        <h1>Clubs pro Stadt</h1>
    </div>

    <p class="info-text">
        Dieses Diagramm zeigt eine visuelle Darstellung der Anzahl von Clubs in verschiedenen Städten.  
        Sie können nach Ländern filtern, um spezifische Daten anzuzeigen. 
        Wählen Sie auch zwischen verschiedenen Diagrammtypen, um die Darstellung zu ändern.
    </p>

    <div class="row g-3 align-items-center mb-4">
        <div class="col-md-6">
            <label for="country" class="form-label fw-bold">Land auswählen:</label>
            <select id="country" class="form-select" bind:value={selectedCountry} on:change={filterData}>
                <option value="">Alle Länder</option>
                {#each countries as country}
                    <option value={country}>{country}</option>
                {/each}
            </select>
        </div>
        <div class="col-md-6">
            <label for="chartType" class="form-label fw-bold">Diagrammtyp:</label>
            <select id="chartType" class="form-select" bind:value={chartType} on:change={createChart}>
                <option value="bar">Balkendiagramm</option>
                <option value="pie">Kuchendiagramm</option>
            </select>
        </div>
    </div>

    <div class="card shadow-lg">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Diagramm</h5>
        </div>
        <div class="card-body">
            <div class="chart-container">
                <canvas bind:this={chartCanvas} style="max-width: 100%; height: 400px;"></canvas>
            </div>
        </div>
    </div>
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

    .info-text {
        font-size: 1rem;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
    }

    .chart-container {
        margin: 20px auto;
        max-width: 600px;
    }

    .form-label {
        font-weight: bold;
        color: #333;
    }

    .form-select {
        border-radius: 0.375rem;
        padding: 0.5rem;
    }

    .card {
        border-radius: 0.5rem;
    }

    .card-header {
        text-align: center;
    }
</style>
