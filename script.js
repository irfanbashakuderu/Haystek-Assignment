window.addEventListener('DOMContentLoaded', () => {
  const personNameElement = document.getElementById('person-name');
  const personLocationElement = document.getElementById('person-location');
  const nextButton = document.getElementById('next-button');
  const personCountElement = document.getElementById('person-count');

  let currentPersonIndex = 0;
  let peopleData = [];

  loadInitialData();

  nextButton.addEventListener('click', () => {
     currentPersonIndex++;
     if (currentPersonIndex >= peopleData.length) {
        alert('No more people!');
        return;
     }
     loadPersonData();
  });

  function loadInitialData() {
     fetch('get_data.php')
        .then(response => response.json())
        .then(data => {
           peopleData = data;
           loadPersonData();
        })
        .catch(error => {
           console.error('Error loading data:', error);
        });
  }

  function loadPersonData() {
     const personData = peopleData[currentPersonIndex];
     personNameElement.textContent = "Name: " + personData.name;
     personLocationElement.textContent = "Location: " + personData.location;
     updatePersonCount();
  }

  function updatePersonCount() {
     personCountElement.textContent = `${currentPersonIndex + 1}`;
  }
});