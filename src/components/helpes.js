export function calcularTotal(cantidad, plazo) {
    //Cantidades
    //0 - 50000 = 36%    
    //50001 - 200000 = 28
    //200001 - 500000 = 22% 
    //500001 - 900000 = 18%
    //900001 - 1700000 = 16%     
    //+1700000 = 10%           

    let totalCantidad;
    if (cantidad <= 50000) {
        totalCantidad = cantidad * .36;
    } else if (cantidad > 50000 && cantidad < 200000) {
        totalCantidad = cantidad * .28
    } else if (cantidad > 200000 && cantidad < 500000) {
        totalCantidad = cantidad * .22
    } else if (cantidad > 500000 && cantidad < 900000) {
        totalCantidad = cantidad * .18
    } else if (cantidad > 900000 && cantidad < 1800000) {
        totalCantidad = cantidad * .16
    } else if (cantidad > 1800000) {
        totalCantidad = cantidad * .10
    }

    //Plazos
    //3 = 7%
    //6 = 12%
    //12 = 15%
    //24 = 20%
    //48 = 30%
    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .07;
            break;

        case 6:
            totalPlazo = cantidad * .12;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .20;
            break;
        case 48:
            totalPlazo = cantidad * .30;
            break;

        default:
            break;
    }
    return totalPlazo + totalCantidad + cantidad;

}