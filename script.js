document.querySelectorAll("button").forEach(boton => {
    boton.addEventListener("click", function () {
        if (this.getAttribute("data-respuesta") === "correcto") {
            this.classList.add("correct");
        } else {
            this.classList.add("blink-red");
        }
    });
});
