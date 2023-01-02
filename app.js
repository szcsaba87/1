let plusz = document.getElementById("plusz");
    minusz = document.getElementById("minusz");
    vissza = document.getElementById("vissza");
    szamlalo = document.getElementById("szamlalo");
    aktual = szamlalo.innerHTML;
    

plusz.addEventListener("click",() => {
    aktual++;
    szamlalo.innerText = aktual;
});

minusz.addEventListener("click",() => {
    aktual--;
    szamlalo.innerText = aktual;
});

vissza.addEventListener("click",() => {
    aktual = 0;
    szamlalo.innerText = aktual;
});