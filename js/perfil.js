const contenedorPadre = document.querySelector("#main");
const contenorTemporal = document.createElement("section");
contenorTemporal.classList.add("main_content");
contenedorPadre.appendChild(contenorTemporal);

cambiarFondo("fondoPerfil");

const datosLocalesEstudiante = JSON.parse(localStorage.getItem("datos"));
console.log(datosLocalesEstudiante);

const datosClases = JSON.parse(localStorage.getItem("clases"));
console.log(datosClases);

//Contenedor del perfil
const contenedorPerfil = document.createElement("div");
contenedorPerfil.classList.add("perfil_content");
contenorTemporal.appendChild(contenedorPerfil);

//COntenedor img
const contenedorImg = document.createElement("div");
contenedorImg.classList.add("img_content");
contenedorPerfil.appendChild(contenedorImg);

const img = document.createElement("img");
img.src = `${datosLocalesEstudiante.avatar}`;
img.alt = "Imagen de perfil";
contenedorImg.appendChild(img);

//contenedor info
const contenedorInfo = document.createElement("div");
contenedorInfo.classList.add("info_content");
contenedorPerfil.appendChild(contenedorInfo);

const nombre = document.createElement("h3");
nombre.textContent = `Nombre: ${datosLocalesEstudiante.nombre} ${datosLocalesEstudiante.familia}`;
contenedorInfo.appendChild(nombre);

const edad = document.createElement("h3");
edad.textContent = `Edad: ${datosLocalesEstudiante.edad} años`;
contenedorInfo.appendChild(edad);

const linaje = document.createElement("h3");
linaje.textContent = `Linaje: ${datosLocalesEstudiante.linaje}`;
contenedorInfo.appendChild(linaje);

const casa = document.createElement("h3");
casa.textContent = `Casa: ${datosLocalesEstudiante.casa.nombre}`;
contenedorInfo.appendChild(casa);

const cualidades = document.createElement("h3");
cualidades.textContent = `Cualidades: ${datosLocalesEstudiante.cualidades.join(" - ")}`;
contenedorInfo.appendChild(cualidades);


const patronus = document.createElement("h3");
patronus.textContent = `Animal Patronus: ${datosLocalesEstudiante.animalPatronus}`;
contenedorInfo.appendChild(patronus);

cambiarPaginaBtn("Volver a empezar", "index.html")

