const img = document.getElementById("qrI");
let box = document.querySelector(".box");
const input = document.querySelector("input");
document.getElementById("btn").addEventListener("click", () => {
  if (input.value === "") {
    document.querySelector("span").classList.remove("error");
    setTimeout(function () {
      document.querySelector("span").classList.add("error");
    }, 1000);
  } else {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    box.classList.add("img");
  }
});
