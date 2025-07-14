
function modalBienvenida(){
	document.getElementById("modalBienvenida").style.display="block";
	document.querySelector("img.barrelRoll").style.animationPlayState="paused";
	document.getElementById("subtituloEncabezado").style.animationPlayState="paused";
	document.getElementById("textoEncabezado").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
}

function cerrarMBB(){
	document.getElementById("modalBienvenida").style.display="none";
	document.querySelector("img.barrelRoll").style.animationPlayState="running";
	document.getElementById("subtituloEncabezado").style.animationPlayState="running";
	document.getElementById("textoEncabezado").style.animationPlayState="running";
	document.documentElement.style.overflow="auto";
}

function modalCita(){
	document.getElementById("modalCita").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var mensaje;

	mensaje = "Estimado "+ nombre + " en breve nos pondremos en contacto con usted."

	document.getElementById("mensajeCita").innerHTML = mensaje;
}

function cerrarMC(){
	document.getElementById("modalCita").style.display="none";
	
	document.getElementById("formNombre").value = "";
	document.getElementById("email").value = "";
	document.getElementById("numeroTelefono").value = "";
	document.getElementById("Consulta").value = "";
	document.documentElement.style.overflow="auto";
}

// Codigo para ocultar el menu 

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu(){

	var posActualScroll = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll) {
		document.getElementById("navMenu").style.top = "0";
	}
	else{
		document.getElementById("navMenu").style.top = "-150px";
	}
	posPreviaScroll = posActualScroll;
}


//Codigo para las pestañas de tatuadores

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".etiquetaPestañas");
  const galerias = {
    "BRAHIM": "contenedorTatuajes",
    "SAMANTHA": "contenedorTatuajes2",
    "SEFI": "contenedorTatuajes3"
  };

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      Object.values(galerias).forEach(id => {
        const galeria = document.getElementById(id);
        if (galeria) galeria.style.display = "none";
      });

      const galeriaId = galerias[boton.textContent.trim().toUpperCase()];
      const galeriaMostrar = document.getElementById(galeriaId);
      if (galeriaMostrar) galeriaMostrar.style.display = "block";

      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
	const enlaces = document.querySelectorAll("#submenu a");
	const contenedores = {
		brahim: document.getElementById("contenedorTatuajes"),
		samantha: document.getElementById("contenedorTatuajes2"),
		sefi: document.getElementById("contenedorTatuajes3")
	};

	// Definimos pestañas aquí:
	const pestañas = document.querySelectorAll(".etiquetaPestañas");

	enlaces.forEach(function (enlace) {
		enlace.addEventListener("click", function (e) {
			e.preventDefault();

			const artista = this.getAttribute("data-artista");

			// Ocultar todos los contenedores
			Object.values(contenedores).forEach(function (contenedor) {
				contenedor.style.display = "none";
			});

			// Mostrar el contenedor correspondiente
			if (contenedores[artista]) {
				contenedores[artista].style.display = "block";

				// Quitar clase activo de todas las pestañas
				pestañas.forEach(pestaña => pestaña.classList.remove("activo"));

				// Añadir clase activo a la pestaña correspondiente
				pestañas.forEach(pestaña => {
					if (pestaña.textContent.trim().toLowerCase() === artista) {
						pestaña.classList.add("activo");
					}
				});

				// Hacer scroll suave a la sección de tatuadores
				document.getElementById("equipo").scrollIntoView({
					behavior: "smooth"
				});
			}
		});
	});
});
