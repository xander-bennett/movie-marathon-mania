const searchButton = document.getElementById('search-button');
const spinner = document.getElementById('spinner');

searchButton.addEventListener('click', () => {
  spinner.classList.remove('d-none');
  // Your search code here
  // Once search is complete, hide the spinner
  spinner.classList.add('d-none');
});