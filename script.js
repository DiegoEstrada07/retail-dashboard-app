// Función para obtener los datos del back end
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();

      createChart(data);
    }

    function createChart(data) {
      const labels = data.map(item => item.label);
      const values = data.map(item => item.value);

      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Stock Data',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Llamar a la función al cargar la página
    fetchData();