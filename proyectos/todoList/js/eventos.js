'use strict'

window.addEventListener('load', () => {


    //Array
    let tareas = [];
    


    let entrada = document.querySelector(".campo_texto");

    let salida = document.querySelector(".saved");

    
    
    entrada.addEventListener("keydown", (pulsado)=> {
        if(pulsado.key === "Enter" && entrada.value.trim() !== ""){
            //Añadir valor al array
            tareas.push(entrada.value);
            
            
            //Crea el elemento div
            let nuevaTarea = document.createElement("div");
            nuevaTarea.classList.add("tarea"); 

            //Crea el span para poder dar estilos al texto
            let textoTarea = document.createElement("span");
            textoTarea.textContent = entrada.value;
            textoTarea.classList.add("texto");

            // Crear checkbox
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            
            // Evento para tachar texto al marcar el checkbox
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    textoTarea.classList.add("tachado");
                    nuevaTarea.style.backgroundColor = "white";
                } else {
                    textoTarea.classList.remove("tachado");
                    nuevaTarea.style.backgroundColor = "lightblue";
                }
                actualizarContadores();
            });

            // ********************************************
            //Crea el elemento botón Eliminar
            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = ("Eliminar");
            botonEliminar.classList.add("eliminar");

            //Le da la propiedad de borrar al elemento Eliminar

            botonEliminar.addEventListener("click", ()=>{
                
                //Elimina el div
                nuevaTarea.remove();

                //Buscar indice
                const indice= tareas.indexOf(textoTarea.textContent);

                
                if(indice !== -1){
                    tareas.splice(indice,1);
                }

                console.log(tareas);
                actualizarContadores();
            });


            // ********************************************
            

            //Añade el nuevo div
            salida.appendChild(nuevaTarea);
            
            // Añadie un checkbox
            nuevaTarea.appendChild(checkbox);
            //Añade el texto
            nuevaTarea.appendChild(textoTarea);
            //Añade el botón eliminar
            nuevaTarea.appendChild(botonEliminar);

            //Resetea el valor del campo de texto
            entrada.value="";
            actualizarContadores();
            // ******************
            console.log(tareas);
        }
    })
    
    function actualizarContadores(){
        const totalTareas = document.querySelectorAll(".tarea").length;
        const tareasAcabadas = document.querySelectorAll(".tarea input[type='checkbox']:checked").length;

        document.querySelector(".pendientes").textContent = totalTareas - tareasAcabadas;
        document.querySelector(".acabadas").textContent = tareasAcabadas;
    }

});

