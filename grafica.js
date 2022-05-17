//Gráfica 1
var nombreLengua = [];
var numeroHablantes = [];

//consumo de la API
let url= 'https://www.datos.gov.co/resource/734h-gxtn.json';
fetch(url)


//Then necesita una promesa, y esa promesa se resuelve
.then(datos_obtenidos => datos_obtenidos.json())

//datos_obtenidos es el resultado de la promesa repuesta
.then(function transformar (datos_obtenidos){
    //iteramos sobre cada dato
    datos_obtenidos.forEach (function agregar (datos_obtenidos)
    {
        if (datos_obtenidos.n_mero_de_hablantes != undefined && datos_obtenidos.nombre_de_lengua != undefined){
            nombreLengua.push(datos_obtenidos.nombre_de_lengua);
            numeroHablantes.push(datos_obtenidos.n_mero_de_hablantes);
        }
    });

    //variables para las graficas
    var graf1={
        values : numeroHablantes,
        labels: nombreLengua,
        font:{
            family: 'Raleway, sans-serif'
          },
        type: 'pie'
    };

    var datosGraficas = [graf1];

    //Estilos de la gráfica
    var layout = {
        title: 'Mapa Sonoro - Lenguas Nativas de Colombia',
        height: 500,
        width: 600
    };

    Plotly.newPlot('grafica1', datosGraficas, layout);
    

});
