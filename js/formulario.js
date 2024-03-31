const contenedorPadre = document.querySelector("#main");
const contenorTemporal = document.createElement("section");
contenorTemporal.classList.add("main_content");
contenedorPadre.appendChild(contenorTemporal);



console.log(location.href);
localStorage.clear();



//============== Escenas ==============

//Introduccion
function introduccion() {
  //Cambiar fondo
  cambiarFondo("fondoPrincipal");

  setTimeout(() => {
    //Texto bienvenida
    let bienvenida = document.createElement("h1");
    bienvenida.textContent = "Bienvenido a Hogwarts";

    contenorTemporal.appendChild(bienvenida);
    crearBtn("Iniciar", escena1);
  }, 3500);
}

//Escena de captura de datos
function escena1() {
  cambiarFondo("fondoSalon");

  //Parte de pedir datos
  function part1() {
    let tituloRegistro = document.createElement("h2");
    tituloRegistro.textContent =
      "Ingresa tus datos para registrarte en Hogwarts";

    contenorTemporal.appendChild(tituloRegistro);

    //Creo un boton le paso la siguiente escena/parte
    crearBtn("Siguiente", part2);
  }

  //Pedir todo
  function part2() {
    let formulario = document.createElement("form");

    let nombre, nombreInput;
    let familia, familiaInput;
    let edad, edadInput;
    let avatar, avatarInput;

    let linaje = ["Mestizo", "Sangre pura", "Muggle"];
    let cualidades = [
      "valor",
      "fuerza",
      "audacia",
      "justicia",
      "lealtad",
      "paciencia",
      "creatividad",
      "erudición",
      "inteligencia",
      "ambicion",
      "determinacion",
      "astucia",
    ];


//cada variable tendra como valor el input que se creo en la funcion crearInputs()
    nombreInput = crerInputs(
      nombre,
      "text",
      nombreInput,
      "Nombre",
      "Ingresa tu nombre",
      formulario
    );
    familiaInput = crerInputs(
      familia,
      "text",
      familiaInput,
      "Familia",
      "Ingresa tu familia",
      formulario
    );
    edadInput = crerInputs(
      edad,
      "number",
      edadInput,
      "Edad",
      "Edad",
      formulario
    );
    avatarInput = crerInputs(
      avatar,
      "url",
      avatarInput,
      "Avatar",
      "Ingresa tu avatar",
      formulario
    );

    //cada variable tendra como valor el select que se creo
    let selectLinaje = crearSelect(linaje, formulario, "Linaje","linaje");

    let selectCualidades1 = crearSelect(cualidades, formulario, "Cualidad 1","cualidad1");
    let selectCualidades2 = crearSelect(cualidades, formulario, "Cualidad 2","cualidad2");
    let selectCualidades3 = crearSelect(cualidades, formulario, "Cualidad 3","cualidad3");

    let listaCualidades = [selectCualidades1, selectCualidades2, selectCualidades3]
        //Recopilo todos los datos en una lista
    let listaDatos = [
      nombreInput,
      familiaInput,
      edadInput,
      avatarInput,
      selectLinaje,
      listaCualidades
    ];

    //agrego el formulario al contenedor temporal
    contenorTemporal.appendChild(formulario);

    //le paso la lista de los datos a la duncion capturaBTN
    //y le paso el texto del boton
    capturaBtn(listaDatos, "Ingresar datos","seleccionCasa.html");
  }

  part1();
}
introduccion();

