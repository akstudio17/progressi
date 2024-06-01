document.addEventListener('DOMContentLoaded', function () {
  const goals = [
    "Goal 1",
    "Goal 2",
    "Goal 3",
    "Goal 4",
    "Goal 5",
    "Goal 6",
    "Goal 7",
    "Goal 8",
    "Goal 9",
    "Goal 10",
    "Goal 11",
    "Goal 12",
    "Goal 13",
    "Goal 14",
    "Goal 15",
    "Goal 16",
    "Goal 17",
    "Goal 18",
    "Goal 19",
    "Goal 20"
  ];

  const goalImages = [
    "https://via.placeholder.com/50", // Replace with actual URLs
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50"
  ];

  const goalsTable = document.getElementById('goalsTable');

  const alessioData = [];
  const lorenzoData = [];

  goals.forEach((goal, index) => {
    const row = document.createElement('tr');

    const imageCell = document.createElement('td');
    const goalImage = document.createElement('img');
    goalImage.src = goalImages[index];
    goalImage.alt = goal;
    goalImage.classList.add('goal-icon');
    imageCell.appendChild(goalImage);
    row.appendChild(imageCell);

    const goalCell = document.createElement('td');
    goalCell.textContent = goal;
    row.appendChild(goalCell);

    const alessioCell = document.createElement('td');
    const alessioInput = document.createElement('input');
    alessioInput.type = 'number';
    alessioInput.value = 0;
    alessioInput.dataset.index = index;
    alessioInput.addEventListener('input', updateChart);
    alessioCell.appendChild(alessioInput);
    row.appendChild(alessioCell);

    const lorenzoCell = document.createElement('td');
    const lorenzoInput = document.createElement('input');
    lorenzoInput.type = 'number';
    lorenzoInput.value = 0;
    lorenzoInput.dataset.index = index;
    lorenzoInput.addEventListener('input', updateChart);
    lorenzoCell.appendChild(lorenzoInput);
    row.appendChild(lorenzoCell);

    goalsTable.appendChild(row);

    alessioData.push(0);
    lorenzoData.push(0);
  });

  const ctx = document.getElementById('progressChart').getContext('2d');
  const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: goals,
      datasets: [
        {
          label: 'Alessio',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: alessioData
        },
        {
          label: 'Lorenzo',
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          data: lorenzoData
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  function updateChart(event) {
    const index = event.target.dataset.index;
    if (event.target.parentElement.parentElement.children[2].contains(event.target)) {
      alessioData[index] = Number(event.target.value);
    } else if (event.target.parentElement.parentElement.children[3].contains(event.target)) {
      lorenzoData[index] = Number(event.target.value);
    }
    progressChart.update();
  }
});
