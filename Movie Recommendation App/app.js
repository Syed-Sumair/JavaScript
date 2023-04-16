const recommendationsDiv = document.getElementById("recommendations");

function displayRecommendations(recommendations) {
  // Clear previous recommendations
  recommendationsDiv.innerHTML = "";
  
  // Display new recommendations
  recommendations.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.textContent = `${movie.title} (${movie.Year}) - ${movie.genre} - ${movie.rating}/10`;
    recommendationsDiv.appendChild(movieDiv);
  });
}

function getRecommendations() {
  let genre = document.getElementById("genre").value;
  let rating = document.getElementById("rating").value;
  let year = document.getElementById("year").value;
  let language = document.getElementById("language").value;

  let filteredMovies = movies.filter(movie => {
    return movie.genre === genre &&
           movie.rating >= rating &&
           movie.releaseYear == year &&
           movie.language === language;
  });

  displayRecommendations(filteredMovies);
}

  const request = new XMLHttpRequest();
request.open('GET', 'data.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
    // Do something with the data
  } else {
    console.log('Error loading JSON file');
  }
};

request.onerror = function() {
  console.log('Error loading JSON file');
};

request.send();

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
  })
  .catch(error => {
    console.error('Error loading movie data:', error);
  });
