//------
const botonEncriptar = document.querySelector(".boton__encriptar");
const encriptaTxt = document.querySelector(".encripta");
const alerta = document.querySelector(".alerta__error");
const textoAlerta = document.querySelector(".texto__alerta");
const mensaje = document.querySelector(".area__texto");
const diseño = document.querySelector(".cuadro__texto");
const botonCopiar = document.querySelector(".copiar__texto");
const botonDesencriptar = document.querySelector(".boton__desencriptar");
//------

// boton encriptador.
botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = encriptaTxt.value;
  // expresion regular.
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  console.log(txt);

  // alerta
  if (texto == "") {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "😲 El area de texto no debe estar vacia ";
    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
    textoAlerta;
  } else if (texto !== txt) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "😓 No debe tener acentos ni caracteres especiales ";
    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
    setTimeout(() => {
      alerta.removeAttribute("textContent");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "🙄 El texto debe ser en minuscula ";
  }
  //Encriptado.
  
  // La letra "e" es convertida para "enter"
  // La letra "i" es convertida para "imes"
  // La letra "a" es convertida para "ai"
  // La letra "o" es convertida para "ober"
  // La letra "u" es convertida para "ufat"
  else {
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    mensaje.innerHTML = texto;
    diseño.remove();
  }
});

// boton desencriptador.

botonDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = encriptaTxt.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
  console.log(txt);

  if (texto == "") {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "😲 El area de texto no debe estar vacia ";
    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "😓 No debe tener acentos y caracteres especiales ";
    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    alerta.style.background = "#0A3871";
    alerta.style.color = "#FFFF";
    alerta.style.fontweight = "800";
    alerta.textContent = "🙄 El texto debe ser en minuscula ";

    setTimeout(() => {
      alerta.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    mensaje.innerHTML = texto;
    diseño.remove();
  }
});

//boton copiar.

botonCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = mensaje;
  copiar.select();
  document.execCommand("copy");
});
