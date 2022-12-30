const btn = document.querySelector(".btn");
const textArea = document.querySelector(".text-area");
const url = "https://icanhazdadjoke.com/";

const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const emoji = document.querySelector(".wrap");

// generate random colors
const generateNum = () => {
  return Math.floor(Math.random() * color.length);
};

function changeColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += color[generateNum()];
  }
  btn.style.color = hex;
}

// change text color at interval
setInterval(() => {
  changeColor();
}, 1000);

// generate joke

btn.addEventListener("click", () => {
  // generateJoke()
    fetchJoke();
});

// Fetch API Method

const fetchJoke = () => {
  textArea.textContent = "Loading...";
  fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      textArea.textContent = `${data.joke} `;
        emoji.style.display = "initial"

        // console.log("successful", data.joke);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

//   Async await function

// async function generateJoke(){
// textArea.textContent = "Loading...";

// try {

//     const response = await fetch(url,{
//         headers: {
//           Accept: "application/json",
//           "User-Agent": "learning app",
//         },
//       });
//   console.log(response)

//       const data = await response.json();
//       textArea.textContent = data.joke;

//     console.log(data.joke)
// } catch (error) {
//     textArea.textContent = "OOOps! There is an error"
//     console.log("unable to fetch",error.message)
// }
// }
