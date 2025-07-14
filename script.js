// Get the select element from the page
const breedSelect = document.getElementById('breed-select');

// Fetch the list of dog breeds from the Dog API
fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    // Convert the response to JSON
    return response.json();
  })
  .then(function(data) {
    // The breeds are in data.message as an object
    const breeds = data.message;

    // Loop through each breed in the object
    for (const breed in breeds) {
      // Create a new option element for each breed
      const option = document.createElement('option');
      // Set the value and text of the option
      option.value = breed;
      option.textContent = breed;
      // Add the option to the select menu
      breedSelect.appendChild(option);
    }
  });