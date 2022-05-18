//grafica2
var nombredeldepartamento = [];
var resguardoalquepertenece = [];

let url2= 'https://www.datos.gov.co/resource/hx5x-ykxm.json';
fetch(url2)

//Then necesita una promesa, y esa promesa se resuelve
.then(datos_obtenidos => datos_obtenidos.json())

//datos_obtenidos es el resultado de la promesa repuesta
.then(function transformar (datos_obtenidos){
    //iteramos sobre cada dato
    datos_obtenidos.forEach (function agregar (datos_obtenidos)
    {
        if (datos_obtenidos.resguardo_al_que_pertenece != undefined && datos_obtenidos.nombre_del_departamento != undefined){
            nombredeldepartamento.push(datos_obtenidos.nombre_del_departamento);
            resguardoalquepertenece.push(datos_obtenidos.resguardo_al_que_pertenece);
        }
    });
    
    var graf2 = {
      x : resguardoalquepertenece,
      y : nombredeldepartamento,
      mode: 'lines+markers',
      connectgaps: true
    };
    
    var datos = [graf2];
    
    var layout = {
      title: 'Comunidades que están ubicadas dentro de los resguardos indígenas a nivel Nacional 2020',
      showlegend: false
    };
    Plotly.newPlot('grafica2', datos, layout);

});