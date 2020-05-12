const { getLugarLatLng } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// getLugarLatLng(argv.direccion)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// getClima(35, 139)
//     .then(res => console.log(`Temperatura: ${res} ºC`))
//     .catch(err => console.log(err));

const getInfo = async(direccion) => {
    let ubicacion = await getLugarLatLng(direccion);
    let temp = await getClima(ubicacion.lat, ubicacion.lng);
    return { direccion, temp };
    //También se podría hacer con un try catch para que el método recogiera los errores y siempre hubiera return de la frase a mostrar.
    //Al llamar a este método siempre habría respuesta y sólo habría que imprimirla.
}

getInfo(argv.direccion)
    .then(res => console.log(`La temperatura en la ciudad de ${res.direccion} es de ${res.temp} ºC.`))
    .catch(err => console.log(`No se ha encontrado la temperatura de la ciudad ${argv.direccion}`));