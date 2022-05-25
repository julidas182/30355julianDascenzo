document.write("<h1>Probando js</h1>")

// let puntaje = "69"


// if (puntaje >= 70) {
//     console.log("buen puntaje, sigue mejorando");
// } else if (puntaje >= 40) {
//     console.log("te falta practicar mas");
// }
// else {
//     console.log("sos horrible!!")
// }




// generador de nombres de usuario
/*
for (let i = 1; i <= 200; i++) {

    let ingresoNombre = prompt("Ingrese su Nombre")
    alert("su nombre de usuario es " + ingresoNombre + i);

}


let nombreUsuario = prompt("ingrese nombre de usuario")

while(nombreUsuario != "juliandasc"){
    alert("el usuario " + nombreUsuario + " es incorrecto" )
    nombreUsuario = prompt("ingrese nombre de usuario correcto")
}
*/


//ENTREGABLE OBLIGATORIO 1



const productomat = {
    nombre : "Mat de Yoga",
    codigo : 122345,
    descripcion : "mat de yoga de 1.8m de goma espuma",
    precio : 3200}

const productocalza = {
     nombre : "Calza para Yoga",
    codigo : 122332,
    descripcion : "calza talle M",
    precio : 4300 }

const productoladrillo = {
    nombre : "Ladrillo de goma",
    codigo : 122558,
    descripcion : "elemento ladrillo de goma",
    precio : 1600 }


    let compra = prompt("ingrese nombre de producto");

    switch (compra) {
        case "productomat":
            console.log('compraste el mat de yoga, el total es '+ (productomat.precio))
            break
        case "productocalza":
            console.log('compraste el calza de yoga, el total es '+ (productocalza.precio))   
            break
        case "productoladrillo":
            console.log('compraste ladrillo de goma, el total es '+ (productoladrillo.precio))   
            break
        default :
        console.log('ingrese producto valido')    
        
        }