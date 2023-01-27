const liczby = document.querySelectorAll(".liczba");
const operator = document.querySelectorAll(".operator");
const usun = document.querySelector(".usun");
const rownosc = document.querySelector(".rownosc");
const wyczysc = document.querySelector(".wyczysc");
let dzialanie = document.querySelector("#dzialanie");
var pierwszaLiczba = null;
var pierwszeDzialanie = null;
var drugaLiczba = null;

liczby.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", () => {
    let tekstGuzika = currentBtn.innerText;

    if (dzialanie.innerText.includes(".") && tekstGuzika == ".") {
      return;
    }

    let text = document.createTextNode(tekstGuzika);
    dzialanie.appendChild(text);
  });
});

wyczysc.addEventListener("click", function () {
  dzialanie.innerHTML = "";
});

usun.addEventListener("click", function () {
  let tekstDzialania = dzialanie.innerHTML;
  let tekstUciety = tekstDzialania.slice(0, -1);
  dzialanie.innerHTML = tekstUciety;
});

operator.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", () => {
    let tekstOperacji = currentBtn.innerText;
    pierwszaLiczba = dzialanie.innerHTML;
    pierwszeDzialanie = tekstOperacji;
    wyczyszczenieDzialania();
  });
});

function wyczyszczenieDzialania() {
  dzialanie.innerHTML = "";
}

rownosc.addEventListener("click", function () {
  drugaLiczba = dzialanie.innerHTML;
  console.log(pierwszeDzialanie);
  if (
    pierwszeDzialanie == "+" ||
    pierwszeDzialanie == "-" ||
    pierwszeDzialanie == "/" ||
    pierwszeDzialanie == "*"
  ) {
    dzialanie.innerHTML = eval(
      pierwszaLiczba + pierwszeDzialanie + drugaLiczba
    );
  } else {
    switch (pierwszeDzialanie) {
      case "√":
        dzialanie.innerHTML = Math.sqrt(drugaLiczba);
        break;
      case "^":
        dzialanie.innerHTML = Math.pow(pierwszaLiczba, drugaLiczba);
        break;
      case "%":
        dzialanie.innerHTML = (pierwszaLiczba / 100) * drugaLiczba;
        break;
      case "log":
        dzialanie.innerHTML = Math.log(drugaLiczba);
        break;

      default:
        "blad";
        break;
    }
  }
});
