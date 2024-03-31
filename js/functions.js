//FUNCIONES REUTILIZABLES

//CAMBIAR FONDO
function cambiarFondo(eleccionFondo) {
  let fondo = document.createElement("div");
  fondo.classList.add("fondo");
  contenedorPadre.appendChild(fondo);

  let fondoActual;

  fondoActual = fondosTotales[eleccionFondo];
  console.log(fondoActual);

  if (eleccionFondo == "fondoPrincipal") {
    fondo.innerHTML = `
        <video src="${fondoActual}" autoplay loop muted id="fondo"></video>`;

    setTimeout(() => {
      fondo.style.transition = "2s";
      fondo.style.filter = "brightness(0.3)";
    }, 3000);
  } else {
    fondo.innerHTML = `<img src="${fondoActual}" alt="fondo" id="fondo">`;
    fondo.style.filter = "brightness(0.3)";
  }
}

//CUADRO DE ALERTA

function alertaError(mensaje, tiempo) {
  let cuadroAlerta = document.createElement("div");
  cuadroAlerta.classList.add("alerta_content");

  let mensajeAlerta = document.createElement("h2");
  mensajeAlerta.classList.add("alerta_mensaje");
  mensajeAlerta.textContent = mensaje;

  cuadroAlerta.appendChild(mensajeAlerta);

  contenorTemporal.appendChild(cuadroAlerta);
  setTimeout(() => {
    contenorTemporal.removeChild(cuadroAlerta);
  }, tiempo);
}

//CREAR BOTONES

//Boton general
function crearBtn(textoBtn, cambioEscena) {
  //Crear boton en el html
  let nuevoBtn = document.createElement("button");
  nuevoBtn.classList.add("btn");
  nuevoBtn.textContent = textoBtn;
  contenorTemporal.appendChild(nuevoBtn);

  //Evento desaparecer el contenido y cambiar a la siguiente escena
  nuevoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    desaparecer(contenorTemporal);
    cambioEscena();
  });
}

//Btn booleano
function booleanBtn(contenidoTrue, contenidoFalse,funcionSi,funcionNo) {
  let decisionBoleana;

  let botonesContent = document.createElement("div");
      botonesContent.classList.add("botones_content");
      contenorTemporal.appendChild(botonesContent);

  let btnTrue = document.createElement("button");
  btnTrue.classList.add("btn");
  btnTrue.textContent = contenidoTrue;
  btnTrue.addEventListener("click", (event) => {
    event.preventDefault();
    decisionBoleana = true;
    desaparecer(contenorTemporal)
    funcionSi()
    return decisionBoleana;
  });

  botonesContent.appendChild(btnTrue);

  let btnFalse = document.createElement("button");
  btnFalse.classList.add("btn");
  btnFalse.textContent = contenidoFalse;
  btnFalse.addEventListener("click", (event) => {
    event.preventDefault();
    decisionBoleana = false;
    desaparecer(contenorTemporal)

    funcionNo()
    return decisionBoleana;
  });

  botonesContent.appendChild(btnFalse);
}


//boton que captura datos y los manda a un objeto
//pide de parametros la lista con todos los datos y texto que va a tener el boton
function capturaBtn(listaDatos, textoBtn, direccion) {
  //este boton puede tener la etiqueta button o a cualquiera de las 2
  //forma funciona
  let nuevoCapturaBtn = document.createElement("a");
  nuevoCapturaBtn.classList.add("btn");
  //---> enlace de la siguiente pagina
  nuevoCapturaBtn.textContent = textoBtn;
  contenorTemporal.appendChild(nuevoCapturaBtn);

  nuevoCapturaBtn.addEventListener("click", (event) => {
    event.preventDefault();

    listaDatos.forEach((element) => {
      //itero la lista de datos

      //valido que los datos sean correctos

      //Valida si un dato es un array

      if (Array.isArray(element) == true) {
        //Si hay un array creo el cualidades dentro del objeto datos
        datos["cualidades"] = [];
        //itero ese elemento que contiene la lista
        element.forEach((listaElement) => {
          //y voy agregando los elementos
          datos["cualidades"].push(listaElement.value);
        });
      } else {
        //agrego cada elemento con su rescpectivo id y su valor

        datos[element.id] = element.value;
      }
    });
    console.log(datos);
    localStorage.setItem("datos", JSON.stringify(datos));
    window.location.href = direccion;
  });
}


function cambiarPaginaBtn(textoBtn, direccion) {
  let nuevoCambiarBtn = document.createElement("a");
  nuevoCambiarBtn.classList.add("btn");

  nuevoCambiarBtn.textContent = textoBtn;
  contenorTemporal.appendChild(nuevoCambiarBtn);

  nuevoCambiarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = direccion;
  });
}

//Funcion para crear inputs pido el nombre del label, el tipo de input
//Pido el input, el texto del label, el placeholder y donde lo voy a guardar
function crerInputs(
  label,
  tipo,
  input,
  contenidoLabel,
  placeholder,
  contenedor
) {
  //creo el contenedor donde voy a guardar cada input
  //Nota: solo es de uso estetico gracias a esto
  //puedo poner el label arriba y el input abajo
  let contenedorInput = document.createElement("div");
  contenedorInput.classList.add("contenedor_input");

  //creo el label dentro de la variable que pedi
  label = document.createElement("label");
  //le pongo texto
  label.textContent = contenidoLabel;

  //creo el input de igual forma que el label
  input = document.createElement("input");

  //le pongo sus atributos
  input.placeholder = placeholder;
  input.type = tipo;
  input.id = contenidoLabel.toLowerCase();

  switch (input.type) {
    //valido si es numero para ponerle los attributos de rango
    //NOTA: ESTO NO ES ENCONTRA DE AMAYAS!!!!
    case "number":
      input.setAttribute("min", "1");
      input.setAttribute("max", "100");
      break;
  }

  //los guardo en el div estetico

  contenedorInput.appendChild(label);
  contenedorInput.appendChild(input);

  //y ese div lo guardo en el contenedor que pedi de parametro
  contenedor.appendChild(contenedorInput);

  return input;
}

function agregarMensaje(contenido) {
  let mensaje = document.createElement("h2");
  mensaje.textContent = contenido;
  contenorTemporal.appendChild(mensaje);
}


//Funcion para crear selects
//pide de parametros una lista con las options que va a tener el select
//el contenedor donde los quiero guardar y
//el contenido del label
function crearSelect(arrayOptions, contenedor, contenidoLabel, nombreInput) {
  //Hago un div para cada select que quiera hacer
  let contenedorSelect = document.createElement("div");
  contenedorSelect.classList.add("contenedor_input");

  //le paso el contenido del label que pedi como parametro
  let label = document.createElement("label");
  label.textContent = contenidoLabel;

  //Al select le agrego su id
  let select = document.createElement("select");
  select.id = nombreInput;

  //hago un option nuevo que es el primero en aparecer
  let optionRequaried = document.createElement("option");
  optionRequaried.setAttribute("selected", "true");
  optionRequaried.setAttribute("label", "Ingresa una opción");

  select.appendChild(optionRequaried);

  //itero la lista de options que pedi como parametro
  arrayOptions.forEach((element) => {
    //creo un option por cada elemento de la lista
    let option = document.createElement("option");
    option.setAttribute("value", element);
    option.setAttribute("label", element);

    //los voy agregando al select
    select.appendChild(option);
  });

  //agrego el label y select a div
  contenedorSelect.appendChild(label);
  contenedorSelect.appendChild(select);

  //luego agrego ese div al contenedor que pedi como parametro
  contenedor.appendChild(contenedorSelect);

  return select;
}

//DESAPARECER COSAS
function desaparecer(contenorTemporal) {
  contenorTemporal.innerHTML = "";
}




/**
 *  En base a la info de un estudiante,
 *  retorna un objeto de la casa a la que pertenece
 * @param estudiante
 * @returns casa
 */
function seleccionarCasa(estudiante) {
  const casasLinaje = buscarCasaSegunLinaje(estudiante);
  const casasValores = buscarCasaSegunValores(estudiante, casasLinaje);
  let casaOficial = casasValores[0];


  //Valida si el estudiante puede pertenecer a mas de una casa
  if (casasValores.length > 1) {

    const numAleatorio = Math.floor(Math.random() * casasValores.length);
    casaOficial = casasValores[numAleatorio];
  }

  //Valida si no se le encontro ninguna casa al estudiante y le asigna una al azar en base a su linaje
  if (casasValores.length<= 0 ) {
      const numAleatorio = Math.floor(Math.random() * casasValores.length);
      casaOficial = casasLinaje[numAleatorio];    
  }

  return casaOficial;
}

//Busca las probables casas a las que puede pertenecer el estudiante
function buscarCasaSegunValores(estudiante, casasLinaje) {
  //Recorre todas las casas
  return casasLinaje.filter((probCasas) => {
    return (
      //Recorre las cualidades de la casa
      probCasas.cualidades.some((cualidadCasa) => {
        //Recorre las cualidades del estudiante
        return estudiante.cualidades.some((cualidadEstu) => {
          //Valida si la cualidad de la casa es igual a la del estudiante
          return cualidadCasa == cualidadEstu;
        });
      }) && probCasas
    );
  });
}

//Busca las probables casas a las que puede pertenecer el estudiante
function buscarCasaSegunValores(estudiante, casasLinaje) {
  //Recorre todas las casas
  return casasLinaje.filter((probCasas) => {
    return (
      //Recorre las cualidades de la casa
      probCasas.cualidades.some((cualidadCasa) => {
        //Recorre las cualidades del estudiante
        return estudiante.cualidades.some((cualidadEstu) => {
          //Valida si la cualidad de la casa es igual a la del estudiante
          return cualidadCasa == cualidadEstu;
        });
      }) && probCasas
    );
  });
}

function buscarCasaSegunLinaje(estudiante) {
  //Recorre todas las casas
  return casas.filter((casa) => {    
    return (
      //Recorre las linaje de la casa
      casa.linaje.some((linajeCasa) => {
        console.log(linajeCasa, estudiante.linaje);
        //Valida si la cualidad de la casa es igual a la del estudiante
        return linajeCasa == estudiante.linaje;
      }) && casa
    );
  });
}
