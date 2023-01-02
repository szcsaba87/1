let plusz = document.getElementById("plusz");
    minusz = document.getElementById("minusz");
    vissza = document.getElementById("vissza");
    szamlalo = document.getElementById("szamlalo");
    aktual = szamlalo.innerHTML;
    

plusz.addEventListener("click",() => {
    aktual++;
    szamlalo.innerText = aktual;
    if (aktual == 0) {
        szamlalo.classList.remove("red");
    } else if (aktual > 0) {
        szamlalo.classList.add("green");
    }
});

minusz.addEventListener("click",() => {
    aktual--;
    szamlalo.innerText = aktual;
    if (aktual == 0) {
        szamlalo.classList.remove("green");
    } else if (aktual < 0) {
        szamlalo.classList.add("red");
    }
});

vissza.addEventListener("click",() => {
    szamlalo.classList.remove("green");
    szamlalo.classList.remove("red");
    aktual = 0;
    szamlalo.innerText = aktual;
});