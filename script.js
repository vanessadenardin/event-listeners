const keyWord = document.getElementById("keyWord");
const myText = document.getElementById("myText");

const audioBtn = document.getElementById("clickme");
//AUDIO
// document.addEventListener("keydown", (e) => {
//   if (e.key === "q") {
//     const audio = new Audio("baa.mp3");
//     audio.play();
//     console.log("QUACK");
//     audioBtn.innerHTML = "Quack";
//   }
// });

//// BUBBLING VS CAPTURING

// keyWord.addEventListener("click", () => {
//   console.log("CHILD");
//   // e.stopPropagation();
// });

// myText.addEventListener("click", (e) => {
//   console.log("PARENT");
// });

//// REMOVE EVENT LISTENER

// function randomBgColor() {
//   let x = Math.floor(Math.random() * 256);
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//   button.style.backgroundColor = bgColor;
// }

// const button = document.getElementById("myButton");

// button.addEventListener("click", randomBgColor);
// let count = 0;
// button.onclick = function () {
//   count += 1;
//   if (count == 5) {
//     alert("OI, ENOUGH!");
//     button.removeEventListener("click", randomBgColor);
//     button.style.backgroundColor = "black";
//   }
// };
//

const keyDetector = document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    const userActive = document.querySelector("#user-walk .active");
    userActive.classList.remove("active");
    userActive.nextElementSibling.classList.add("active");
    setTimeout(() => {
      if (userActive.nextElementSibling.classList.contains("finish")) {
        alert("You are finished!");
        document.location.reload();
      }
    }, 0);
  }
});

//
//
//
//
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
////
//
//
// //
