const addBook = document.getElementById("add-book");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close");

const on = () => {
    document.getElementById("overlay").style.display = "block";
};
  
const off = () => {
    document.getElementById("overlay").style.display = "none";
};

addBook.addEventListener("click",on); /* turn on overlay */
closeButton.addEventListener("click",off); /* turn off */
