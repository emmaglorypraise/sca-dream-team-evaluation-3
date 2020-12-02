// FOR MAIN SEARCHBOX 
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const searchForm = document.querySelector('.form1');
const searchIcon = document.querySelector('i');
const searchButton = document.querySelector('.button2');
const searchResultDiv = document.querySelector('.results');
let searchQuery = ' ';
// const API_KEY = '19344624-3e6894d47d1f9627a45f24b0a';


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
// .then(data => console.log(data.hits))
// generateHTML (data.hits);
.then(data => generateHTML(data.hits))

function generateHTML (results){
  // container.classList.remove('initial');
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

function searchImg() {
  fetch(`https://pixabay.com/api/?key=19344624-3e6894d47d1f9627a45f24b0a&q=${searchQuery}&per_page=100`)
 .then(response => response.json())
// .then(data => console.log(data.hits))
// generateHTML (data.hits);
.then(data => generateHTML(data.hits))
}










// showData = data => {

//   data.forEach(data => {

//     const card = document.createElement('div');
//     card.className = "img-container";

//     const photo = document.createElement('img');
//     photo.src = `${data.previewURL}`;

//     const miniCard = document.createElement('div');
//     miniCard.className = "img-items";

//     const foodName = document.createElement('h3');
//     foodName.innerText = ` ${data.recipe.label}`;
    

//     const para = document.createElement('p');
//     para.innerText = `Tags: ${data.tags}`;

//     const foodUrl = document.createElement('a');
//     let link = document.createTextNode("View Recipe Here");
//     foodUrl.appendChild(link);
//     foodUrl.title = "View Recipe Here";
//     foodUrl.href = ` ${data.recipe.url}`;
    

//     card.appendChild(foodImg);
//     card.appendChild(foodName);
//     card.appendChild(foodCal);
//     card.appendChild(foodUrl);
//     dataContainer.appendChild(card);

    
//   });
// }
