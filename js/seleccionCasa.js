const contenedorPadre = document.querySelector("#main");
const contenorTemporal = document.createElement("section");
contenorTemporal.classList.add("main_content");
contenedorPadre.appendChild(contenorTemporal);

const datosLocales = JSON.parse(localStorage.getItem("datos"));

console.log(datosLocales);
console.log("===========================");

function casasImganes(casas) {
  let contenedorCasas = document.createElement("div");
  contenedorCasas.classList.add("imagenes_content");
  contenorTemporal.appendChild(contenedorCasas);

  casas.forEach((element) => {
    contenedorCasas.innerHTML += `
            <img src = "${element.img}" >
        `;
  });
}

function imagenCasa(casaSeleccionada) {
  let contenedorCasas = document.createElement("div");
  contenedorCasas.classList.add("imagenes_content");
  contenorTemporal.appendChild(contenedorCasas);

  const casaImgaenEncontrada = casas.find(
    (casaIndividual) => casaIndividual.nombre == casaSeleccionada
  );
  contenedorCasas.innerHTML = `
    <img src = "${casaImgaenEncontrada.img}" >
  `;
}

//Validar datos

function validarDatos(datos, direccion) {
  let banderaValidar = true;

  for (const dato in datos) {
    datosLocales[dato] = datos[dato];

    if (datos[dato] == "") {
      banderaValidar = false;
    }
  }
  console.log(banderaValidar);
  switch (banderaValidar) {
    case true:
      console.log("Datos validos");
      //Empezar todo
      escena2();
      break;

    case false:
      cambiarFondo("fondoSalon");
      alertaError("Los datos no son validos ingresa nuevamente", 4000);
      setTimeout(() => {
        window.location.href = direccion;
      }, 4000);

      break;
  }
}

function escena2() {
  function bienvenida() {
    cambiarFondo("fondoSalon");
    agregarMensaje(
      `Bienvenid@ ${datosLocales.nombre} ${datosLocales.familia} `
    );
    crearBtn("Siguiente", parte0);
  }

  function parte0() {
    agregarMensaje("Inicia un nuevo día");
    crearBtn("Siguiente", parte1);
  }

  function parte1() {
    agregarMensaje("Es el día del sombrero seleccionador¡¡");
    crearBtn("Siguiente", parte2);
  }

  function parte2() {
    agregarMensaje("Hay una gran cena de bienvenida");
    crearBtn("Siguiente", parte3);
  }

  function parte3() {
    agregarMensaje("Estas tú con todos tus compas");
    crearBtn("Siguiente", parte4);
  }

  function parte4() {
    casasImganes(casas);
    agregarMensaje(
      "Según tu linaje y cualidades, el sombrero seleccionador te asignará una casa."
    );
    crearBtn("Siguiente", parte5);
  }

  function parte5() {
    cambiarFondo("fondoSombrero");
    agregarMensaje("Te pones el sombrero seleccionador");
    crearBtn("Siguiente", parte6);
  }

  function parte6() {
    agregarMensaje(
      `Sombrero seleccionador: Interesante tienes ${datosLocales.cualidades.join(
        " - "
      )}`
    );
    crearBtn("Siguiente", parte7);
  }

  function parte7() {
    let casa = seleccionarCasa(datosLocales);
    datosLocales["casa"] = casa;
    localStorage.setItem("datos", JSON.stringify(datosLocales));
    console.log(casa);

    imagenCasa(casa.nombre);
    agregarMensaje(`Tu casa es ${datosLocales.casa.nombre}!!!!`);

    cambiarPaginaBtn("Ir a clases", "clases.html");
  }

  bienvenida();
}
validarDatos(datosLocales, "index.html");
