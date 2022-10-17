let buyer = prompt("Bienvenidas y bienvenidos a The Collective Store. ¿Cómo te llamas?")
let correo = prompt("¿Cúal es tu correo electrónico?")
let telefono = prompt("¿A qué número te podemos contactar?")
let direccion = prompt("¿Dónde te entregamos?")
let precio = 2
let cantidad = 0
let total = 0
let compra = true
let i = 1
//funcion comprar
function comprar(){
while(compra){
    let carros = parseInt(prompt(`¿Cuáles carros desea comprar?
	1: HotWheels 1970 Pontiac Firebird $${precio}
	2: HotWheels Tooned Volkswagen Golf Mk1 $${precio}
	3: HotWheels Porsche 935 $${precio}
	4: HotWheels Sweet Driver $${precio}
	5: HotWheels Toon'd '83 Chevy Silverado $${precio}
	6: HotWheels Lolux $${precio}
	7: HotWheels 1986 Toyota Van $${precio}
	8: HotWheels Lotus Emira $${precio}
	9: HotWheels Aston Martin Vantage GTE $${precio}
	10: HotWheels '62 Corvette Gasser $${precio}
	11 = Escribe 11 para finalizar compra`))
	switch(carros){
		case 1:
			total += precio
            cantidad = i++
			console.log(`${buyer} has agregado HotWheels 1970 Pontiac Firebird con éxito. Total de productos agregados: ${cantidad}.`);
			break
		case 2:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Tooned Volkswagen Golf Mk1 con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 3:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Porsche 935 con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 4:
            total += precio
            cantidad = i++                                                    
            console.log(`${buyer} has agregado HotWheels Sweet Driver con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 5:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Toon'd '83 Chevy Silverado con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 6:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Lolux con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 7:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels 1986 Toyota Van con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 8:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Lotus Emira con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 9:
            total += precio
            cantidad = i++
            console.log(`${buyer} has agregado HotWheels Aston Martin Vantage GTE con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 10:
            total += precio
            cantidad = i++            
            console.log(`${buyer} has agregado HotWheels '62 Corvette Gasser con éxito. Total de productos agregados: ${cantidad}.`);
            break
        case 11:
            compra = false
            if(total != 0){
            console.log(`RESUMEN DE COMPRA: ${buyer} el total de compra es $${total} y llevas ${cantidad} HotWheels hoy. Te enviaremos tu compra a ${direccion} y la información de contacto en nuestra base de datos es teléfono: ${telefono} y correo electrónico: ${correo}. ¡Gracias por tu visita!`)
        }else{
            console.log(`¡${buyer}, no agregaste productos al carrito! Te esperamos la próxima.`)
        }
            break
        default: 
            console.log("Ingresa el número correspondiente para agregar al carrito.");
		}
        
}
}
comprar()