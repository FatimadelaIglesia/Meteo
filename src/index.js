function searchCity(city) {
  let apiKey = "0d877aa762b4511ceo3e2a4a1bta01f6";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
