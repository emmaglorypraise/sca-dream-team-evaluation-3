const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const dropdownItem = document.querySelector('.dropdown-item');
const searchForm = document.querySelector('.form1');
const searchIcon = document.querySelector('i');
const searchButton = document.querySelector('.button2');
const searchResultDiv = document.querySelector('.results');
const hero = document.querySelector('.hero');
let searchQuery = ' ';
let getValue = ' ';


// event handler for search icon
searchIcon.addEventListener('click', (e) => {
  e.preventDefault();
  searchQuery = input1.value;
  console.log('search-result:', searchQuery);
  searchImg();
})

// event handler for form activities
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('.input1').value;
  console.log("search-result1:", searchQuery);
  searchImg();
});

// event handler for search button in navbar
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchQuery = input2.value;
  console.log("searchQuery2:", searchQuery);
  searchImg();  
})



// fetching data from API
fetch(`https://pixabay.com/api/?key=19344624-3e6894d47d1f9627a45f24b0a&per_page=100`)
.then(response => response.json())
.then(data => generateHTML(data.hits))


// displaying data from API on browser
function generateHTML (results){
  let generatedHTML = ' ';
  results.map((result) => {
    generatedHTML += 
   ` <div class="img-container">
          <img src="${result.largeImageURL}" alt="images">
          <div class="img-items">
            <p>tags: <span>${result.tags}</span></p>
            <div class="d-flex">
              <i class="fa fa-download" aria-hidden="true"></i><span>${result.downloads}</span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span>${result.likes}</span>
            </div>
          </div>
         </div>
   `
  })
  searchResultDiv.innerHTML = generatedHTML;
}


// gets photos by search query
function searchImg() {
  fetch(`https://pixabay.com/api/?key=19344624-3e6894d47d1f9627a45f24b0a&q=${searchQuery}&per_page=100`)
 .then(response => response.json())
.then(data => generateHTML(data.hits))
}

// event handler for dropdown items
function clickMe() {
  getValue = document.getElementById('link').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe1() {
  getValue = document.getElementById('link1').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe2() {
  getValue = document.getElementById('link2').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe3() {
  getValue = document.getElementById('link3').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe4() {
  getValue = document.getElementById('link4').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe5() {
  getValue = document.getElementById('link5').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe6() {
  getValue = document.getElementById('link6').text;
  console.log('getValue:', getValue);
  category();
 }
 function clickMe7() {
  getValue = document.getElementById('link7').text;
  console.log('getValue:', getValue);
  category();
 }
function category() {
  fetch(`https://pixabay.com/api/?key=19344624-3e6894d47d1f9627a45f24b0a&q=${getValue}&per_page=150&category=${getValue}`)
  .then(response => response.json())
  .then(data => generateHTML(data.hits))
  hero.remove();
}










