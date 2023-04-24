document.addEventListener('DOMContentLoaded', () =>{ 
    LeerDatos();
    Encriptar();
    Desencriptar();
    Cancelar();
})
    const arrayCifrado = []; 
    const arrayDecifrado = [];
    const mensaje = document.querySelector('.input__encrypting');
    const botonEncriptar = document.querySelector('.encriptar');
    const botonDesencriptar = document.querySelector('.desencriptar');
    
function LeerDatos(){  
    mensaje.addEventListener('input', e  =>{ // Evento que lee y guarda en un array cada letra ingresada en el textarea y las cambia si lee una vocal
        let dato = e.data; // Guardamos el valor de cada letra ingresada en la variable dato
        if(dato === null){ // Validaciones y Cifrado: ↓ 
            arrayCifrado.pop();
        }
        else if(dato === 'e' || dato === 'E'){
            arrayCifrado.push('enter');
        }
        else if(dato === 'o' || dato === 'O'){
            arrayCifrado.push('ober')
        }
        else if(dato === 'i' || dato === 'I'){
            arrayCifrado.push('imes')
        }
        else if(dato === 'a' || dato === 'A'){
            arrayCifrado.push('ai')
        }
        else if(dato === 'u' || dato === 'U'){
            arrayCifrado.push('ufat')
        }
        else{
            arrayCifrado.push(dato.toLowerCase());
        } 
        console.log(arrayCifrado);    
    }) 
}
function Encriptar(){
    // Evento cuando encriptamos un texto, en realidad lo que hace es crear los elementos del DOM y mostrarlos, el mensaje ya lo encriptamos en la funcion anterior de LeerDatos();
    botonEncriptar.addEventListener('click', e =>{ 
        e.preventDefault()

        const contenedor = document.querySelector('.encrypting__container')
        const asideNone = document.querySelector('.no__encrypting');
         
        if (mensaje.value.trim() == '' || arrayCifrado.length === 0) { // Validacion para que el usuario no pueda hacer click en el boton de encriptar sin antes ingresar valores en el input
            return window.alert('Por Favor ingrese letra por letra para poder cifrar el texto y no deje el campo de texto vacio')
        }else{ 
            asideNone.classList.add('ocultar_noEscrypting');

            const divEncrypting = document.createElement('DIV');
            divEncrypting.classList.add('encrypting');
            contenedor.appendChild(divEncrypting);

            mensaje.value = '';

            // Creamos la vista del mensaje cifraddo en el aside
            const textCif = document.createElement('INPUT');
            textCif.classList.add('elementoP');
            textCif.value = arrayCifrado.join('');
            divEncrypting.appendChild(textCif);
            textCif.setAttribute('readonly','')

            // Creamos un boton de copiar para el aside
            const btnCopy = document.createElement('BUTTON');
            btnCopy.textContent = 'Copiar';
            btnCopy.classList.add('botonCopiar');
            divEncrypting.appendChild(btnCopy);

            // Aca estamos creando el evento copiar texto Cifrado
            btnCopy.addEventListener('click', e =>{
                e.preventDefault();
                textCif.select();
                document.execCommand('copy');
            })


            botonEncriptar.setAttribute('disabled','')
            mensaje.setAttribute('readonly','')
        }

        // console.log(divEncrypting)
        
        console.log(arrayCifrado.join(''))
        
    });
}
function Desencriptar(){
    // Evento para leer y desencriptar los datos que se encuentran en el array donde estas almacenados
    botonDesencriptar.addEventListener('click', e =>{
        e.preventDefault()
        // console.log(arrayCifrado.valueOf().name)
        const arrayNuevo = arrayCifrado;
            for(i = 0; i <= arrayNuevo.length-1; i++){
                let dato = arrayNuevo[i];
    
                if( dato === undefined){
                    arrayDecifrado.pop();
                }
                else if(dato === 'enter'){
                    arrayDecifrado.push('e');
                }
                else if(dato === 'ober'){
                    arrayDecifrado.push('o')
                }
                else if(dato === 'imes'){
                    arrayDecifrado.push('i')
                }
                else if(dato === 'ai'){
                    arrayDecifrado.push('a');
                }
                else if(dato === 'ufat'){
                    arrayDecifrado.push('u')
                }
                else{
                    arrayDecifrado.push(dato);   
                }
            }
       /* 
        */
        if (arrayNuevo.length === 0) {
            return window.alert('Por Favor realiza los pasos correctamente')
        }else{
            const container = document.querySelector('.encrypting__container');

            // Creamos el div que va a contener el texto desifrado
            const divDesencrypting = document.createElement('DIV');
            divDesencrypting.classList.add('desencrypting');
            container.appendChild(divDesencrypting);

            // Borramos el contenido encriptado para mostrar el desencriptado
            const borrarDiv = document.querySelector('.encrypting');
            borrarDiv.innerHTML = '';

            // Creamos la vista del mensaje cifrado en el aside
            const textDecif = document.createElement('INPUT');
            textDecif.classList.add('elementoP');
            textDecif.value = arrayDecifrado.join('');
            divDesencrypting.appendChild(textDecif);
            textDecif.setAttribute('readonly','')

            // Creamos un boton de copiar para el aside
            const btnCopy = document.createElement('BUTTON');
            btnCopy.textContent = 'Copiar';
            btnCopy.classList.add('botonCopiar');
            divDesencrypting.appendChild(btnCopy);

            // Aca estamos creando el evento copiar texto Decifrado
            btnCopy.addEventListener('click', e =>{
                e.preventDefault();
                textDecif.select();
                document.execCommand('copy');
            })
            const botonDecencriptar = document.querySelector('.desencriptar')
            botonDecencriptar.setAttribute('disabled','')
        }
    })  
}
function Cancelar(){ // Boton para recargar la pagina y volver a utilizar el programa
    const btnRefrescar = document.querySelector('.cancel');
    btnRefrescar.addEventListener('click', e =>{
        e.preventDefault();
        location.reload(); // Funcion o Metodo para recargar la pagina

    })  
}


/*
    Nota Final: Este proyecto es muy extenso por que trate de realizarlo con las herramientas
    y conocimientos que tenia, trate de no copiarme de un paso a paso como hay en YouTube,
    si bien no esta 100% con el transcurso de el ciclo educativo tratare de mejorarlo, Muchas gracias por la revision.
 */