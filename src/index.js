function promesaSimple() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('hola bienvenido al ejercicio1 saludando con 8 segundos despues')
        }, 8000);
    })
}

 async function ejetuar() {
    try {
        console.log("en proceso el saludo")
        const respuesta = await promesaSimple()
        console.log(respuesta)
    } catch (error) {
        console.log("✖️✖️✖️ Error al saludar", error)
    }
 }

 ejetuar()