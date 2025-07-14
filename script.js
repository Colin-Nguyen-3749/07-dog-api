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

// Get the gallery div from the page
const gallery = document.getElementById('gallery');

// Listen for changes on the breed select menu
breedSelect.addEventListener('change', function() {
  // Get the selected breed
  const selectedBreed = breedSelect.value;

  // If no breed is selected, clear the gallery and stop
  if (!selectedBreed) {
    gallery.innerHTML = '';
    return;
  }

  // Build the URL for fetching 9 random images of the selected breed
  const imageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/9`;

  // Fetch 9 random images for the selected breed
  fetch(imageUrl)
    .then(function(response) {
      // Convert the response to JSON
      return response.json();
    })
    .then(function(data) {
      // Get the array of image URLs from the response
      const dogImages = data.message;

      // Clear the gallery before adding new images
      gallery.innerHTML = '';

      // Loop through each image URL and create an img element
      dogImages.forEach(function(dogImage) {
        // Create a div for each gallery item
        const item = document.createElement('div');
        item.className = 'gallery-item';

        // Create an img element to show the dog image
        const img = document.createElement('img');
        img.src = dogImage;
        img.alt = `A ${selectedBreed} dog`;

        // Add the img to the gallery item div
        item.appendChild(img);

        // Add the gallery item to the gallery
        gallery.appendChild(item);
      });
    });
});