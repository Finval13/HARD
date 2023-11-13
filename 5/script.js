var countrySuggestions = [
  "Україна",
  "Польща",
  "Сполучені Штати Америки",
  "Китай",
  "Індія",
  "Бразилія",
  "Німеччина",
  "Франція",
  "Канада",
  "Італія",
];

function showSuggestions() {
  var input = document.getElementById("countryInput");
  var suggestionsContainer = document.getElementById("suggestions");
  var userInput = input.value.toLowerCase();

  var suggestions = countrySuggestions.filter((country) => country.toLowerCase().startsWith(userInput));

  suggestionsContainer.innerHTML = suggestions
    .map((suggestion) => `<div class="suggestion" onclick="selectCountry('${suggestion}')">${suggestion}</div>`)
    .join("");

  suggestionsContainer.style.display = suggestions.length > 0 ? "block" : "none";
}

function selectCountry(country) {
  var input = document.getElementById("countryInput");
  input.value = country;
  document.getElementById("suggestions").style.display = "none";
}

document.addEventListener("click", function (event) {
  var suggestionsContainer = document.getElementById("suggestions");
  if (event.target !== document.getElementById("countryInput")) {
    suggestionsContainer.style.display = "none";
  }
});
