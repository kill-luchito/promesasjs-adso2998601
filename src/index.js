//Funcion para simular la descarga de un archivo, utilizando promesas

function descargarArchivo () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ('📁📁📁📁📁 ARCHIVO DESCARGADO CON EXITO....📁📁📁📁📁📁')
        }, 5000);
    })
}
console.log(descargarArchivo()
    .then((resultado) => {
        console.log(resultado)
    })
)
    
