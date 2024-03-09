const body = document.querySelector("body");

const openOverlay = document.getElementById("open-overlay");
const overlay = document.getElementById("overlay");

const closeButton = document.getElementById("close");
const submitBook = document.getElementById("submit-book");

const myLibrary = [];
let shelfElement;
function createBook(name,author,pages,color,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.color = color;
    this.read = read;

    this.createBookBox = function() {
        const bookBox = document.createElement('button');
        bookBox.style.padding = "0px";
        bookBox.style.borderStyle = "none";
        bookBox.style.backgroundColor = "transparent";
        bookBox.className = "book";
        bookBox.innerHTML = this.color;
        bookBox.innerHTML += `<div class="text">${this.name}</div>`;
        myLibrary.push(this.name);

        /* readStatus */
        let readStatus;
        if (this.read == false) readStatus = 'No';
        else readStatus = "Yes";

        /* modal */
        const modal = document.createElement('dialog');
        modal.id = 'modal';
        modal.innerHTML = `
        <div>Book Name: ${this.name}</div>
        <div>Author: ${this.author}</div>
        <div>Pages: ${this.pages}</div>
        <div>Have You Read It?: ${readStatus}</div>
        `
        const closeModal = document.createElement('button');
        closeModal.id = 'close-button';
        closeModal.innerHTML = 'Close';

        modal.appendChild(closeModal);

        bookBox.addEventListener('click',()=> {
            body.appendChild(modal);
            modal.style.display = "block";
            modal.showModal();
        })
        closeModal.addEventListener('click',()=> {
            modal.close();
            body.removeChild(modal);
        })
        return bookBox
    }
}

function createShelf(number) {
    this.number = number;

    this.createShelfBox = function() {
        const shelfBox = document.createElement('div');
        const books = document.createElement('div');
        const woodenShelf = document.createElement('div');
        woodenShelf.innerHTML = `<svg width="900" height="70" viewBox="0 0 897 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_i_1_15)"><rect x="33" y="4" width="830" height="60" fill="#623D13"/><rect x="38" y="9" width="820" height="50" stroke="#3E2303" stroke-opacity="0.42" stroke-width="10"/><circle cx="34.5" cy="35.5" r="34.5" fill="#623D13"/><circle cx="34.5" cy="35.5" r="29.5" stroke="#3E2303" stroke-opacity="0.42" stroke-width="10"/><circle cx="862.5" cy="34.5" r="34.5" fill="#623D13"/><circle cx="862.5" cy="34.5" r="29.5" stroke="#3E2303" stroke-opacity="0.42" stroke-width="10"/></g><defs><filter id="filter0_i_1_15" x="0" y="0" width="897" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_15"/></filter></defs></svg>`;
        shelfBox.className = "bookshelf";
        books.className = 'books';
        woodenShelf.className = "wooden-shelf";
        shelfBox.appendChild(books);
        shelfBox.appendChild(woodenShelf);
        return shelfBox;
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
    if (myLibrary.length % 10 == 0) {
        const myShelf = new createShelf(myLibrary.length/10 +1);
        shelfElement = myShelf.createShelfBox();

        body.appendChild(shelfElement);
    }
    const bookElement = myBook.createBookBox();
    shelfElement.firstChild.appendChild(bookElement);
});