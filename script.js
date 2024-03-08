const openOverlay = document.getElementById("open-overlay");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close");
const submitBook = document.getElementById("submit-book")
const shelf = document.getElementById("books");


const myLibrary = [];

function createBook(name,author,pages,color,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.color = color;
    this.read = read;

    this.createBookDiv = function() {
        const bookDiv = document.createElement('div');
        bookDiv.className = "book";
        bookDiv.innerHTML = this.color;
        bookDiv.innerHTML += `<div id="deneme" style=" width:238px; position: absolute; top: 15px; left: 25px; transform: rotate(90deg); transform-origin: bottom left;">${this.name}</div>`;
        return bookDiv
    }
}

const on = () => {
    document.getElementById("overlay").style.display = "block";
};
  
const off = () => {
    document.getElementById("overlay").style.display = "none";
};

openOverlay.addEventListener("click",on); /* turn on overlay */
closeButton.addEventListener("click",(event)=> {
    event.preventDefault();
    off();
}); /* turn off */
/* submitBook.addEventListener("click",createBook); */
submitBook.addEventListener("click",function(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name").value;
    let authorInput = document.getElementById("author").value;
    let pageInput = document.getElementById("pages").value;
    let colorInput = document.getElementById("colors").value;
    let readInput = document.getElementById('read').checked;
    let fillColor;
    
    switch(colorInput) {
        case "blue":
            fillColor = "#224D8C";
            break;
        case "red":
            fillColor = "red";
            break
        case "pink":
            fillColor = "#6A1488";
            break;
        case "green":
            fillColor = "#14886C";
            break;
    }
    let colorSVG = `<svg width="70" height="311" viewBox="0 0 70 311" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9.00001C0 7.89544 0.895431 7 2 7H68C69.1046 7 70 7.89543 70 9V304.874C70 305.837 69.3051 306.665 68.3581 306.84C41.7271 311.75 26.3585 312.962 1.5215 306.912C0.630872 306.695 0 305.893 0 304.976V9.00001Z" fill="${fillColor}"/><path d="M2 7.5H68C68.8284 7.5 69.5 8.17157 69.5 9V304.874C69.5 305.594 68.9792 306.217 68.2674 306.348C41.6733 311.251 26.3822 312.453 1.63983 306.426C0.973027 306.264 0.5 305.662 0.5 304.976V9.00001C0.5 8.17158 1.17158 7.5 2 7.5Z" stroke="black" stroke-opacity="0.65"/><path d="M69.5 8C69.5 8.39402 69.3275 8.81955 68.9164 9.27877C68.5026 9.74101 67.869 10.2108 67.0118 10.6741C65.298 11.6002 62.7851 12.4499 59.6373 13.1694C53.3498 14.6066 44.639 15.5 35 15.5C25.361 15.5 16.6502 14.6066 10.3627 13.1694C7.21491 12.4499 4.70199 11.6002 2.98819 10.6741C2.13097 10.2108 1.49742 9.74101 1.0836 9.27877C0.672481 8.81955 0.5 8.39402 0.5 8C0.5 7.60598 0.672481 7.18045 1.0836 6.72123C1.49742 6.25899 2.13097 5.78916 2.98819 5.32592C4.70199 4.39977 7.21491 3.55007 10.3627 2.83057C16.6502 1.39343 25.361 0.5 35 0.5C44.639 0.5 53.3498 1.39343 59.6373 2.83057C62.7851 3.55007 65.298 4.39977 67.0118 5.32592C67.869 5.78916 68.5026 6.25899 68.9164 6.72123C69.3275 7.18045 69.5 7.60598 69.5 8Z" fill="#D9D9D9" stroke="black"/><path d="M0.976583 7.5L6.0207 0.5H63.1758L68.9405 7.5H0.976583Z" fill="#D9D9D9" stroke="black"/><path d="M1.95312 7H67.8878L69 8H1L1.5 7.5L1.73047 7.25L1.95312 7Z" fill="#D9D9D9"/><rect x="15" y="27" width="41" height="238" fill="white" fill-opacity="0.6"/></svg>`;
    const myBook = new createBook(nameInput,authorInput,pageInput,colorSVG,readInput);
    const bookElement = myBook.createBookDiv();

    shelf.appendChild(bookElement);
});