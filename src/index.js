//Funcion para simular la descarga de un archivo, utilizando promesas

function descargarArchivo () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ('📁📁📁📁📁 ARCHIVO DESCARGADO CON EXITO....📁📁📁📁📁📁')
        }, 5000);
    })
}

//funcion con aync
async function ejecutar() {
    try {
        console.log("⌛⌛⌛ Descarga en proceso....⌛⌛⌛⌛⌛")
        const respuesta = await descargarArchivo()
        console.log(respuesta)
    } catch (error) {
        console.error("✖️✖️✖️ Error al descargar", error)
    }   
}

ejecutar()