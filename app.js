const btns = document.querySelectorAll(".btn");
let szamlalo = document.getElementById("szamlalo");
let aktual = szamlalo.innerHTML;

btns.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("minusz")) {
            aktual--;
            if (aktual < 0) {
                szamlalo.classList.add("red");
            }
        }

        if (e.currentTarget.classList.contains("plusz")) {
            aktual++;
            if (aktual > 0) {
                szamlalo.classList.add("green");
            }
        }

        if ((e.currentTarget.classList.contains("vissza")) | (aktual == 0)) {
            szamlalo.classList.remove("green");
            szamlalo.classList.remove("red");
            aktual = 0;
        }


        szamlalo.innerText = aktual;

    })
});