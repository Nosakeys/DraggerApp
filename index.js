document.title = "Dragger App";
const cartoon = document.querySelector(".cartoon");
const squares = document.querySelectorAll(".square");

let cartoonPiece;

cartoon.addEventListener("dragstart", (e) => {
    cartoonPiece = e.target;
})

squares.forEach((square) => {
    square.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    square.addEventListener("drop", (e) =>{
        e.target.append(cartoonPiece)
    })
})































// squares.forEach((square) => {
//   square.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   square.addEventListener("drop", (e) => {
//     e.target.append(cartoonPiece);
//   });
// });
