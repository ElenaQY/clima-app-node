const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dbac7930bc180794d3cad45f11713b18&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}