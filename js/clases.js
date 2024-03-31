const contenedorPadre = document.querySelector("#main");
const contenorTemporal = document.createElement("section");
contenorTemporal.classList.add("main_content");
contenedorPadre.appendChild(contenorTemporal);

const datosLocales = JSON.parse(localStorage.getItem("datos"));

datosLocales["animalPatronus"] = "No tiene";
localStorage.setItem("datos", JSON.stringify(datosLocales));

console.log(datosLocales);

let cont = 0;



function crearTablaClases() {
  let table = document.createElement("table");

  function crearFilas(titulos) {
    let thead = document.createElement("thead");

    let trTitulos = document.createElement("tr");

    titulos.forEach((element) => {
      let th = document.createElement("th");
      console.log(element);
      th.textContent = element;
      trTitulos.appendChild(th);
    });
    thead.appendChild(trTitulos);
    table.appendChild(thead);
  }

  function crearColumna() {
    let tbody = document.createElement("tbody");

    for (let dato in clases) {
      let tr = document.createElement("tr");

      let tdNombreClase = document.createElement("td");
      tdNombreClase.textContent = clases[dato].nombreClase;
      tr.appendChild(tdNombreClase);

      let tdNombreProfesor = document.createElement("td");
      tdNombreProfesor.textContent = clases[dato].nombreProfesor;

      tr.appendChild(tdNombreProfesor);

      let tdHorario = document.createElement("td");
      tdHorario.textContent = clases[dato].horario;
      tr.appendChild(tdHorario);

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
  }
  const titulos = ["Clase", "Profesor", "Horario"];
  crearFilas(titulos);

  crearColumna();
  contenorTemporal.appendChild(table);
}

function irClase() {
  cambiarFondo("fondoEscaleras");
  function clasesTotales(clasesDisponible, funcionClase, contenedor) {
    let claseCard = document.createElement("div");
    claseCard.classList.add("clase_card");
    contenedor.appendChild(claseCard);

    let tituloClase = document.createElement("h3");
    tituloClase.textContent = clasesDisponible;
    claseCard.appendChild(tituloClase);

    let btnClase = document.createElement("button");
    btnClase.classList.add("btn");
    btnClase.textContent = "Ir a clase";
    btnClase.addEventListener("click", (event) => {
      event.preventDefault();
      desaparecer(contenorTemporal);
      funcionClase();
    });
    claseCard.appendChild(btnClase);
  }

  function claseTransformacion() {
    cambiarFondo("fondoClase");
    clases.transformaciones.hechizos["rastrearTransformacion"] = function () {
      let num = Math.floor(Math.random() * 2);
      let detectorBoggart;

      if (num == 0) {
        detectorBoggart = true;
      } else if (num == 1) {
        detectorBoggart = false;
      } else {
        console.log("ERROR NUM");
      }

      return detectorBoggart;
    };

    clases.transformaciones.hechizos["realizarTransformacionRiddikulus"] =
      function () {
        agregarMensaje("RIDDIKULUS!!!!");
      };
      

    clases.transformaciones.hechizos["enfrentarBoggart"] = function (boggart) {
      let hayBoggart =
        clases.transformaciones.hechizos.rastrearTransformacion();
      console.log("Entro");

      switch (hayBoggart) {
        case true:
          console.log("Entro 2");
          console.log(hayBoggart);

          function parteTrue0() {
            agregarMensaje(
              `Ha aparecido un boggart con la forma de ${boggart}`
            );
            crearBtn("Siguiente", parteTrue1);
          }

          function parteTrue1() {
            cambiarFondo("fondoBoggart");
            agregarMensaje(`Usa el encatamiento Riddikulus`);
            crearBtn("Di el encantamiento", encantamiento);
          }

          function encantamiento() {
            clases.transformaciones.hechizos.realizarTransformacionRiddikulus();
            crearBtn("Siguiente", parteTrue2);
          }
          function parteTrue2() {
            cambiarFondo("fondoBoggartRiddikulus");
            agregarMensaje(`El boggart se ha tranformado en algo gracioso`);
            crearBtn("Salir de clase", escena3part1);
          }

          parteTrue0();

          localStorage.setItem("clases", JSON.stringify(clases));

          break;

        case false:
          function parteFalse0() {
            agregarMensaje(
              `No ha aparecido ningun boggart y se termina la clase`
            );
            crearBtn("Salir de clase", escena3part1);
          }

          parteFalse0();

          break;
      }
    };

    function boggartEjemplo() {
      let boggart = "Tu mayor miedo";
      clases.transformaciones.hechizos.enfrentarBoggart(boggart);
    }

    boggartEjemplo();
  }

  function dementor() {
    cambiarFondo("fondoDementor");

    function part0() {
      agregarMensaje("Ha aparecido un dementor");
      crearBtn("Siguiente", enfrentarDementor);
    }

    function enfrentarDementor() {
      function enfrentarDementor() {
        console.log(datosLocales.animalPatronus);
        if (datosLocales.animalPatronus != "No tiene") {
          function subParte0() {
            agregarMensaje("Decides enfrentar al dementor");
            crearBtn("Lanzar hechizo", subParte1);
          }

          function subParte1() {
            agregarMensaje(
              `${clases.defensaContraLasArtesOscuras.hechizos.patronus.toLocaleUpperCase()}!!!!`
            );
          localStorage.setItem("clases", JSON.stringify(clases));

            crearBtn("Siguiente", subParte2);
          }

          function subParte2() {
            agregarMensaje(`Tu ${datosLocales.animalPatronus} lo ha derrotado`);
            crearBtn("Salir de clase", escena3part1);
          }

          subParte0();
        } else {
          function subParte0() {
            agregarMensaje("Decides enfrentar al dementor");
            crearBtn("Siguiente", subParte1);
          }

          function subParte1() {
            agregarMensaje("Terminas en el hospital por no poder defenderte");
            crearBtn("Salir del hospital", escena3part1);
          }

          subParte0();
        }
      }

      function noEnfrentarDementor() {
        agregarMensaje("Decides no enfrentarlo como un cobarde");
        crearBtn("Huir de la clase", escena3part1);
      }

      agregarMensaje("Quieres enfrentarlo?");

      booleanBtn(
        "Enfrentarlo",
        "No enfrentarlo",
        enfrentarDementor,
        noEnfrentarDementor
      );
    }

    part0();
  }

  function claseDefensa() {
    cambiarFondo("fondoClaseDefensa");

    function generarAnimalPatronus() {
      let numRandom = Math.floor(Math.random() * animalesPatronus.length);

      return animalesPatronus[numRandom];
    }
    console.log(datosLocales.hasOwnProperty("animalPatronus"));


    if (datosLocales.animalPatronus == "No tiene") {
      function part0() {
        agregarMensaje("No tienes un Animal Patronus");
        crearBtn("Siguiente", part1);
      }

      function part1() {
        //Decision si tener un animal patronus
        function si() {
          cambiarFondo("fondoAnimalPatronus");

          let nuevoAnimalPatronus = generarAnimalPatronus();
          datosLocales.animalPatronus = nuevoAnimalPatronus;
          localStorage.setItem("datos", JSON.stringify(datosLocales));

          console.log(datosLocales.animalPatronus);
          agregarMensaje(
            `Felicidades tu animal patronus es un ${datosLocales.animalPatronus}`
          );
          clases.defensaContraLasArtesOscuras.hechizos["patronus"] =
            "Expecto Patronum";

          localStorage.setItem("clases", JSON.stringify(clases));

          crearBtn("Siguiente", dementor);
        }

        //Decision no tener un animal patronus
        function no() {
          agregarMensaje(`Decides no tener un animal patronus`);
          crearBtn("Siguiente", dementor);
        }

        agregarMensaje("Quieres tener un animal patronus?");

        booleanBtn("Si", "No", si, no);
      }

      part0();
      
    } else {
      cambiarFondo("fondoClaseDefensaHechizo");
      agregarMensaje("Aprendés más hechizos de defensa");
      crearBtn("Salir de clase", escena3part1);
    }
  }

  function clasePociones() {
    cambiarFondo("fondoPociones");

    clases.pociones.pocionesAprendidas["felixFelicis"] = {
      nombrePocion: "Felix Felicis",
      ingredientes: {
        crisopos: 0,
        tallo: 0,
        tirmpo: 0,
      },
    };
          localStorage.setItem("clases", JSON.stringify(clases));


    console.log(clases.pociones.pocionesAprendidas.felixFelicis.ingredientes);

    function parte0() {
      agregarMensaje(
        `Tienes que preparar la pocion ${clases.pociones.pocionesAprendidas.felixFelicis.nombrePocion}`
      );
      crearBtn("Siguiente", parte1);
    }

    function parte1() {
      agregarMensaje(`Necesitas 2 Crisopos y 1 Tallo de Descurainia Sophia`);
      crearBtn("Siguiente", parte2);
    }

    function parte2() {
      agregarMensaje(
        `Actualmente tienes ${clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.crisopos} crisopos, ${clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.tallo} Tallo de Descurainia Sophia`
      );
      crearBtn("Siguiente", crisopos);
    }
    function crisopos() {
      function buscarCrisopos() {
        agregarMensaje(`Haz encontrado 2 crisopos`);
        clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.crisopos = 2;
        console.log(
          clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.crisopos
        );
        crearBtn("Siguiente", tallo);
      }

      function noBuscarCrisopos() {
        agregarMensaje("Decidiste no buscar los Crisopos");
        crearBtn("Siguiente", tallo);
      }
      agregarMensaje("Quieres buscar 2 Crisopos?");
      booleanBtn("Si", "No", buscarCrisopos, noBuscarCrisopos);
    }

    function tallo() {
      function buscarTallo() {
        agregarMensaje("Haz encontrado 1 Tallo de Descurainia Sophia?");
        clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.tallo = 1;
        localStorage.setItem("clases", JSON.stringify(clases));

        console.log(
          clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.tallo
        );
        crearBtn("Siguiente", preparacion);
      }

      function noBuscarTallo() {
        agregarMensaje("Decidiste no buscar el Tallo Descurainia Sophia");
        crearBtn("Siguiente", preparacion);
      }

      agregarMensaje("Quieres buscar un Tallo Descurainia Sophia?");
      booleanBtn("Si", "No", buscarTallo, noBuscarTallo);
    }

    function tiempoPreparacion() {
      let contTiempo = 0;
      function parte0() {
        agregarMensaje("Empiezas a hacer la pocion");
        contTiempo++;
        crearBtn("Siguiente", parte1);
      }

      function parte1() {
        agregarMensaje(`Ha pasado ${contTiempo} minuto, Quieres seguir?`);
        booleanBtn("Si", "No", parte2, fallo);
      }

      function parte2() {
        agregarMensaje("........");
        contTiempo += 2;
        booleanBtn("Si", "No", parte3, fallo);
      }

      function parte3() {
        agregarMensaje(`Han pasado ${contTiempo} minutos`);
        booleanBtn("Si", "No", parte4, fallo);
      }

      function parte4() {
        agregarMensaje("........");
        contTiempo += 2;
        booleanBtn("Si", "No", parte5, fallo);
      }

      function parte5() {
        agregarMensaje(
          `Han pasado ${contTiempo} minutos, terminaste la pocion`
        );
        crearBtn("Siguiente", escena3part1);
      }

      function fallo() {
        agregarMensaje("Fallaste la pocion y te envenenaste");
        crearBtn("Siguiente", escena3part1);
      }

      parte0();
    }

    function preparacion() {
      if (
        clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.crisopos ==
        0
      ) {
        agregarMensaje("No tienes suficientes crisopos para la pocion");
        crearBtn("Busca los crisopos vago", crisopos);
      } else if (
        clases.pociones.pocionesAprendidas.felixFelicis.ingredientes.tallo == 0
      ) {
        agregarMensaje("No tienes el tallo para la pocion");
        crearBtn("Busca el tallo vago", crisopos);
      } else {
        tiempoPreparacion();
      }
    }

    parte0();
  }

  let clasesContent = document.createElement("div");
  clasesContent.classList.add("clases_content");
  contenorTemporal.appendChild(clasesContent);

  clasesTotales("Transformaciones", claseTransformacion, clasesContent);

  clasesTotales("Pocciones", clasePociones, clasesContent);

  clasesTotales(
    "Defensa contra las artes oscuras",
    claseDefensa,
    clasesContent
  );
}

function escena3() {
  cambiarFondo("fondoEscaleras");

  agregarMensaje("Tus clases");
  crearTablaClases();

  crearBtn("Siguiente", escena3part1);
}

function escena3part1() {

  cont++;
  switch (cont) {
    case 1:
      agregarMensaje(`Día ${cont}`);
      agregarMensaje("Empieza tu primer dia de clase");
      irClase();
      break;

    case 2:
      agregarMensaje(`Día ${cont}`);
      agregarMensaje("Empieza tu segundo dia de clase");
      irClase();
      break;

    case 3:
      agregarMensaje(`Día ${cont}`);
      agregarMensaje("Empieza tu tercer dia de clase");
      irClase();
      break;

    case 4:
      desaparecer(contenorTemporal);
      agregarMensaje("Fin de clases");
      cambiarPaginaBtn("Ver tu perfil", "perfil.html");
      break;
  }
}

escena3();
