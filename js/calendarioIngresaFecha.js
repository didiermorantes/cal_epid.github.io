var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var dia_text = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab","Sem","Per"];

/*
 * @param String name
 * @return String
 Funcion para extraer información de la URL usando expresiones regulares

 La función getParameterByName recibe un parámetro del tipo String (cadena de texto) que va a ser utilizado para evaluar por medio de una expresión regular 
 que busque todo el contenido entre el final de la cadena recibida seguido por un símbolo de igual (=) y el final de la cadena a donde buscar (location.search) 
 o hasta encontrar el símbolo «et» también conocido como «ampersand» (&).
  Al final dicho texto encontrado decodificado y devuelto. En el remoto caso de no encontrar coincidencias, devolverá una cadena vacía.
 */
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



/*

estructurar();




function estructurar() {

let divInicio = document.createElement("div");
divInicio.id ="imprimirPdf";
divInicio.idName ="imprimirPdf";
divInicio.name="imprimirPdf";

divInicio.innerText="probando impresion";
document.body.appendChild(divInicio);

//invocamos el año ingresado por caja de texto 
var anoStorage = localStorage.ano;
let tituloCalendario = document.createElement("div");
tituloCalendario.className="tituloAno";
tituloCalendario.innerText = anoStorage ;
document.body.appendChild(tituloCalendario);

  for (m = 0; m <= 11; m++) {


    //Mes
    let mes = document.createElement("div");
    mes.className = "mes";
    document.body.appendChild(mes);
    //Tabla
    let tabla_mes = document.createElement("table");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);
    //Título
    let titulo = document.createElement("caption");
    titulo.className = "titulo";
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);
    //Cabecera
    let cabecera = document.createElement("thead");
    tabla_mes.appendChild(cabecera);
    let fila = document.createElement("tr");
    cabecera.appendChild(fila);
//Titulos de los dias de la semana- Hasta 9 porque incluimos semana y periodo
    for (d = 0; d < 9; d++) {
      let dia = document.createElement("th");
      dia.innerText = dia_text[d];
      fila.appendChild(dia);
    }//fin dia
    //Cuerpo
    let cuerpo = document.createElement("tbody");
    tabla_mes.appendChild(cuerpo);
    for (f = 0; f < 6; f++) {
      let fila = document.createElement("tr");
      cuerpo.appendChild(fila);
      //pintamos hasta 9 cada td para mostrar semana y periodo
      for (d = 0; d < 9; d++) {
        let dia = document.createElement("td");
        dia.innerText = "";
        fila.appendChild(dia);
      }     
    }    
  }//fin mes
}


*/


estructurar();




function estructurar() {


//invocamos el año ingresado por caja de texto 
var anoStorage = localStorage.ano;




let tituloCalendario = document.createElement("div");


tituloCalendario.className="tituloAno style='width:100%; height:auto;'";
/* año del calendario a mano izquierda
tituloCalendario.innerText = anoStorage ;
*/
document.body.appendChild(tituloCalendario);

     //¿CREAMOS DIV GENERAL?
     let div_general = document.createElement("div");
    div_general.id="div_calendario_epidemiologico";
    div_general.className="div_general";
      //añadimos al body el recien creado
      document.body.appendChild(div_general);


//generamos un contenedor genérico para almacenar cada subtabla que se generará con el ciclo for

let tabla_general = document.createElement("table");
    //el nombre general de la tabla
    tabla_general.id="calendario_epidemiologico";
    tabla_general.className="tabla_general";
  //añadimos al body la tabla recien creada
    document.body.appendChild(tabla_general);


        //Título Tabla General. Le colocamos como titulo el año procesado
        let tituloTablaGeneral = document.createElement("caption");
        tituloTablaGeneral.className = "titulo";
        tituloTablaGeneral.innerText = anoStorage;
        tabla_general.appendChild(tituloTablaGeneral);



//AGREGAMOS AL DIV GENERAL LA TABLA GENERAL??
//div_general.appendChild(tabla_general);

  for (m = 0; m <= 11; m++) {
//Se genera una tabla por cada més

    //Mes
    let mes = document.createElement("div");
    mes.className = "mes col-sm-6";
    mes.style="height:auto;background-color:lightblue; background-image: url('/img/logo-ins_blanco_negro_125.jpg'); background-repeat: no-repeat;  background-position: left center; position: relative;";
    document.body.appendChild(mes);
    //Tabla
    let tabla_mes = document.createElement("table");

    //el nombre de la tabla variará , pues cada tabla generada se corresponde con un mes
    var nombreTabla = "calendario_epidemiologico";
    //el id de cada tabla será el nombre genérico otorgado a la tabla, concatenado con la variación de m que controla el for
    //así la tabla calendario_epidemiologico0 será enero, calendario_epidemiologico1 será febrero, y así sucesivamente
    tabla_mes.id=nombreTabla.concat(m);
    tabla_mes.className = "tabla_mes table table-bordered table-condensed";



               /* CREAMOS UN ELEMENTO DE IMAGEN */
               let imagen = document.createElement("img");
               imagen.src="/img/logo-ins_blanco_negro_125.jpg";
               mes.appendChild(imagen);
               
              /*CREAMOS UN TEXTO PARA QUE SALGA EL FONDO
              let texto = document.createElement("p");
              texto.innerText=".";
              mes.appendChild(texto);
                */


        //unimos la tabla generada al div (SI SE QUIERE VISUALIZAR BIEN PERO NO DESCARGAR EN EXCEL)
   // mes.appendChild(tabla_mes);

            //unimos a la tabla general la tabla de cada mes generado (SI SE QUIERE DESCARGAR EL EXCEL PERO NO VISUALIZAR BIEN)
            //tabla_general.appendChild(tabla_mes);
           //unimos a cada div la tabla de cada mes generado (SI SE QUIERE VISUALIZAR BIEN PERO NO GENERAR EXCEL)
           mes.appendChild(tabla_mes);
            //agregamos el div mes a la tabla general
           div_general.appendChild(mes);


           
          

    //Título
    let titulo = document.createElement("caption");
    titulo.className = "titulo";
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);
    //Cabecera
    let cabecera = document.createElement("thead");
    tabla_mes.appendChild(cabecera);
    let fila = document.createElement("tr");
    cabecera.appendChild(fila);
//Titulos de los dias de la semana- Hasta 9 porque incluimos semana y periodo
    for (d = 0; d < 9; d++) {
      let dia = document.createElement("th");
      dia.innerText = dia_text[d];
      fila.appendChild(dia);
    }//fin dia
    //Cuerpo
    let cuerpo = document.createElement("tbody");
    tabla_mes.appendChild(cuerpo);
    for (f = 0; f < 6; f++) {
      let fila = document.createElement("tr");
      cuerpo.appendChild(fila);
      //pintamos hasta 9 cada td para mostrar semana y periodo
      for (d = 0; d < 9; d++) {
        let dia = document.createElement("td");
        dia.innerText = "";
        fila.appendChild(dia);
      }     
    }    
  }//fin mes
}



numerar();

function numerar() {
//invocamos el año ingresado por caja de texto para dibujar el calendario
  var anoStorage = localStorage.ano;
  //variable para imprimir años anteriores , actuales y futuros
  var anoImprimir = anoStorage;
//variable para almacenar el año anterior
  var anoStorageAnterior =parseInt(anoStorage) - 1;
  //variable para almacenar el año siguiente
  var anoStorageSiguiente =parseInt(anoStorage) + 1;
  //variable para almacenar la variable epidemiologica calculada
  var semanaEpidemiologicaCalculada=0;
//variable para almacenar el periodo
  var periodo = 1;
        //variable que detirmina si el año es bisiesto usando la función
        var ano_bisiesto = es_bisiesto(anoStorage);
                //variable que detirmina si el año  anterior es bisiesto usando la función
                var ano_bisiesto_anterior = es_bisiesto(anoStorageAnterior);

        //variable para limitar el limite del ciclo for para los dias

        //ESTE VALOR ES 366 Y NO 365 O DE LO CONTRARIO NO SE PINTA EN EL CALENDARIO EL 31 DE DICIEMBRE
        //CONTROLA LA CANTIDAD DE NUMEROS QUE PINTA EL CALENDARIO
        var limite_ciclo = 366;

        //variable para evaluar los limites de los meses evaluados
  var limiteMesEvaluado =0;

      if(ano_bisiesto){
      
        //alert("El año es bisiesto. Tiene 366 dias");
        //aumentamos en uno el limite del ciclo, pues el año es bisiesto y no tiene 365 sino 366 dias
        limite_ciclo = 367;
      }

      

/* DIFERENCIA ENTRE VAR Y LET

La diferencia es el alcance de las variables. let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando
 var define una variable global o local en una función sin importar el ámbito del bloque.

function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // misma variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}
 
function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // variable diferente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
 */

 //concatenamos la fecha completa para enviarla al json
 //string.concat(string1, string2, ..., stringX)
 //usamos el guion como separador de fechas
 var separador ="-";
 //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
var fechaConcatenada = "";
 //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
 var fechaConcatenadaFinSemana = "";
  //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
  var fechaConcatenadaInicioSemana = "";

//objeto para construir el json con cada dato
var miObjetoCalendario = new Object();

//arreglo para almacenar cada iteración
var arregloJsonCalendario = new Array();

//variable que almacenará la tabla que finalmente se va a imprimir
var miCalendarioTablaImprimir ="";

//variable que almacenará la tabla que finalmente se va a imprimir2
var miCalendarioTablaImprimir2 ="";

//variables para almacenar inicio y fin de semana
 var inicioSemanaEpid =0;
 var finSemanaEpid = 0;


 //variable para el dia del fin de semana
 var diaFinSemana =0;
//Variable para el mes del fin de semana
 var mesFinSemana =0;


  //variable para el dia del inicio de semana
  var diaInicioSemana =0;
  //Variable para el mes del inicio de semana
   var mesInicioSemana =0;

 //flag para determinar que estamos en semana cero y calcular datos para el json
 var flagSemanaCero =0 ;
//flag para determinar si el año contiene una semana del año anterior
 var anoConSemanaAnoAnterior=0;
 //flag para determinar que estamos en semana cero del otro año y calcular datos para el json
 var  flagSemanaUltimaOtroAño =0;

 //flag para determinar si estamos en la semana 13
var flagSemana13=0;

var tempInicioSemanaEpid=0;
var tempFinSemanaEpid=0;


 //variable para llevar el resto del día que finaliza la semana
 var restoDiaFinSemana2_2 =0;
//variable para llevar el resto del día que inicia la semana
var restoDiaInicioSemana2_2 =0;
  
  for (i = 1; i < limite_ciclo; i++) {
    let fecha = fechaPorDia(anoStorage, i);
    let mes = fecha.getMonth();

    let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
    let dia = fecha.getDate()
    let dia_semana = fecha.getDay();
    //inicializamos el flag de la semana del otro año en cero, cada vez que inicia el ciclo
    flagSemanaUltimaOtroAño = 0;

    //en la fecha concatenada tenemos que sumar 1 al mes, pues rcordemos que .getMonth() trae los meses como si fueran indices de arreglos, comenzando en cero
    fechaConcatenada = anoStorage.concat(separador,mes+1,separador,dia);
    semanaEpidemiologicaCalculada=calcularSemanasCalendario(anoStorage,mes,dia);


    
                                             //Validamos si la primera semana es cero
                                             //la semana epidemiologica da cero cuando es la ultima semana del año anterior
                                             if(semanaEpidemiologicaCalculada == 0){
                                               //activamos el flag de Semana Cero, pues luego se modificará el valor de la semana epidemiológica calculada
                                               //el flag se activa cuando estamos procesando la ultima semana del año anterior
                                              flagSemanaCero = 1;
                                              //el flag se activa cuando el año tiene una semana del año anterior
                                              anoConSemanaAnoAnterior=1;
                                              //es necesario llamar la función del año anterior para calcular el periodo
                                              semanaEpidemiologicaCalculada = calcularSemanasAnoAnteriorCalendar(anoStorage);
                                              //si es la ultima semana, el ultimo periodo siempre es 13
                                              periodo = 13;
                                              //almacenamos el año anterior, pues la semana epidemiológica y el periodo pertenecen al año anterior
                                               //convertimos a int anoStorage2 porque viene de localStorage que es String
                                              anoStorageAnterior = parseInt(anoStorage) - 1;

                                              /*
                                              Esta instruccion no es necesaria ahora, ya que el calculo de dias anteriores se hace en otro lado mediante if, antes si era necesaria
                                              //hacemos el año que se va a imprimir como el año anterior
                                              anoImprimir= anoStorageAnterior;
                                              */

                                             anoImprimir= anoStorage;

                                              //¿Recalculamos fecha concatenada? porque se calculo anteriormente
                                                    //convertimos a String anoImprimr
                                              fechaConcatenada = String(anoImprimir).concat(separador,mes+1,separador,dia);
                                               
             
                                            } 
                                            //validamos si es la primera semana para corregir el valor normal del periodo , de lo contrario, contaria periodo desde el valor anterior
                                            else if(semanaEpidemiologicaCalculada == 1 ){
                                              //corregimos periodo y año
                                              periodo = 1;
                                              anoImprimir= parseInt(anoStorageAnterior) + 1;

                                              



                                              //corregimos el flag a su valor natural
                                              flagSemanaCero = 0;
                                                //validacion adicional, por si es semana 1 , pero del siguiente año.
                                                //tendremos que validar si i es mayor que 300 (cualquier numero grande antes del limite del ciclo) y superior a 10 (la primera semana del año)
                                                if(i > 300){
                                                  //significa que es la primera semana pero del siguiente año, no del año en curso
                                                                                                //corregimos periodo y año
                                                     
                                                      anoImprimir= parseInt(anoStorage) + 1;
                                                      flagSemanaUltimaOtroAño = 1;
                                                }


                                            }



      

//dia ==1 significa el primer dia de cada mes, ahi se inicializa la variable sem de nuevo
    if (dia == 1) {var sem = 0;}
    //children[2] accede al body de la tabla .children[sem] a la semana, y .children[dia_semana] al dia de la semana
    select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
    //Almacenamos la semana epidemiológica
    select_tabla.children[2].children[sem].children[7].innerText = semanaEpidemiologicaCalculada;
    select_tabla.children[2].children[sem].children[7].style.color ="magenta";



                                             //Validamos si la primera semana es cero, es decir la ultima semana del año anterior
                                             if(semanaEpidemiologicaCalculada == 0){
                                              //restamos dos a la semana actual , para que de cero el periodo, es decir, no cuenta
                                              //nunca entrará por aqui porque existe un if que ya valida si la semanaEpidemiologica es cero anteriormente
                                              periodo = 0;
                                            } 
                                            
                                             //validamos si la ultimo periodo epidemiologico es 14
                                         
                                                   if(periodo == 14){
                                                    //si el ultimo periodo epidemiológico es igual a 14, significa que pertenece a la primera semana del siguiente año
                                                    periodo = 1;
                                                    //corregimos el siguiente año a imprimir
                                                    anoImprimir= parseInt(anoStorage) + 1;
                                                  } 
    //Almacenamos el periodo
    select_tabla.children[2].children[sem].children[8].innerText = periodo;
    select_tabla.children[2].children[sem].children[8].style.color ="lightblue";







                                            //CREAMOS UN JSON QUE CONTENDRÁ TODA LA INFORMACIÓN DEL CALENDARIO, PARA LUEGO GENERAR UNA TABLA CON LOS PARÁMETROS NECESARIOS PARA SIVIGILA ESCRITORIO
                                           //SALIDA TABULAR. El objeto debe definirse fuera de la estructura de repetición para que mantenga valores
                                            
                                            miObjetoCalendario.fechaGenerada = fechaConcatenada;
                                            miObjetoCalendario.semanaEpidemiologica = semanaEpidemiologicaCalculada;
                                            miObjetoCalendario.periodoEpidemiologico = periodo;
                                            miObjetoCalendario.anoEpidemiologico = anoImprimir;
                                            miObjetoCalendario.inicioSemana = inicioSemanaEpid;
                                            miObjetoCalendario.finSemana = finSemanaEpid;

//VALIDAMOS EL INICIO DE SEMANA
                                            //encontramos inicio  de semana para poder almacenar en el objeto (el primer domingo del año)
                                                    //dia_semana == 0 es domingo, 
                                                    //el primer domingo que encuentre


                               
                                                      //VALIDAMOS SI ESTAMOS EN LA SEMANA 13
                                                      if (flagSemanaUltimaOtroAño == 1){
                                                       // alert ("FLAG ULTIMA SEMANA OTRO AÑO");
                                                        flagSemana13=1;
                                                         }

                                             
                                            if(dia_semana==0){


                                                //sumamos uno al mes, para encontrar el mes correcto pues viene en formato de array
                                                mesFinSemana= mes+1;

                                             // alert("entra por dia_semana==0, osea domingo");
                                             // alert(mesFinSemana);




                                                         //VALIDAMOS SI ESTAMOS EN LA SEMANA 13
                                                        if (periodo == 1 && flagSemanaUltimaOtroAño == 1){
                                                        //  alert ("FLAG SEMANA 13");

                                                         

                                              //la fecha concatenada se modifica en linea 318 si estamos en semana 0
                                              inicioSemanaEpid = fechaConcatenada;
                                              miObjetoCalendario.inicioSemana = inicioSemanaEpid ;

                                              tempInicioSemanaEpid = inicioSemanaEpid;

                                                          
                                                        }
                  
      


                                              //la fecha concatenada se modifica en linea 318 si estamos en semana 0
                                              inicioSemanaEpid = fechaConcatenada;



                                                                                                      //VALIDAMOS SI EL FLAG ESTA ENCENDIDO, PUES LA SEMANA 13 CAMBIA SU VALOR A 1 EN OTRA PARTE DEL PROGRAMA
                                                                                                      if (flagSemana13 == 1){

                                                                                                        //asignamos a la variable inicioSemanaEpid el valor calculado incialmente cuando se encendio el flg
                                                                                                        inicioSemanaEpid = tempInicioSemanaEpid;
                                                                 
                                                                                                                  }
                                              miObjetoCalendario.inicioSemana = inicioSemanaEpid ;
                                              
                                              //en la fecha concatenada de fin semana tenemos que sumar 1 al mes, pues rcordemos que .getMonth() trae los meses como si fueran indices de arreglos, comenzando en cero
                                              //tambien tenemos que sumar 6 al día para encontrar correctamente el dia de fin de semana

                                                //VALIDAMOS QUE LA SUMA DE DIA NO SUPERE 31

                                                //sumamos 6 al día actual para encontrar el día de fin de semana
                                                diaFinSemana= dia+6;




        //Asignamos variable de evaluación
        let mesEvaluadoActual = mes;

        //evaluamos mes
        switch(mesEvaluadoActual){
          //meses comunes con 31 dias
          case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
              // code block
              
                  limiteMesEvaluado = 31;
              break;
            case 1:
              // code block
                //validamos si es bisiesto
                      if(ano_bisiesto){
             
                    limiteMesEvaluado= 29;
                      }
                      else{
        
                    limiteMesEvaluado= 28;
                      }//fin else
              break;
              //meses comunes con 30 dias
            case 3:
            case 5:
            case 8: 
            case 10:
        
                    limiteMesEvaluado=  30;
              break;
            default:
              // code block
        
        }//fin switch







//CONFIGURACIÓN DE LOS ÚLTIMOS DÍAS DE CADA MES
                                                if(diaFinSemana>limiteMesEvaluado){
                                                  //incrementamos el mes en 1
                                                  mesFinSemana=mes+2;
                                                  let restoDiaFinSemana = 0;

                                                  //validamos los meses para hacer los restos adecuados
                                                  switch(mes) {
                                                    //meses comunes con 31 dias
                                                    case 0:
                                                    case 2:
                                                    case 4:
                                                    case 6:
                                                    case 7:
                                                    case 9:
                                                    case 11:
                                                      // code block
                                                      //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                      restoDiaFinSemana = diaFinSemana - 31;
                                                      break;
                                                    case 1:
                                                      // code block
                                                        //validamos si es bisiesto
                                                              if(ano_bisiesto){
                                                       //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                                restoDiaFinSemana = diaFinSemana - 29;
                                                              }
                                                              else{
                                                   //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                                restoDiaFinSemana = diaFinSemana - 28;
                                                              }
                                                      break;
                                                      //meses comunes con 30 dias
                                                    case 3:
                                                    case 5:
                                                    case 8: 
                                                    case 10:
                                              //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                        restoDiaFinSemana = diaFinSemana - 30;
                                                      break;
                                                    default:
                                                      // code block
                                                  }//fin switch mes


//hacemos el dia de fin de semana con el resto encontrado
                                                  diaFinSemana = restoDiaFinSemana;

                                                }//fin diaSemana > 31



                                                //llevamos el valor actual del mesFinSemana
                                                let mesFinSemanaTemp =  mesFinSemana;


                                                        //ANTES DE CONCATENAR LA FECHA DE FIN DE SEMANA, VALIDAMOS SI EL MES ES IGUAL A 13, PARA CAMBIARLO MANUALMENTE A 1
                                                        //SI EL MES ES UNO, EL AÑO ES EL SIGUIENTE. SE CAMBIAN ESOS DOS PARÁMETROS DENTRO DE LA VALIDACIÓN
                                                        if (mesFinSemana == 13){

                                                        
                                                          //SIGNIFICA QUE ESTAMOS EN ENERO DEL OTRO AÑO, RESTAMOS 12 PARA NO FORZAR LA VARIABLE
                                                          //es aqui donde sirve el flagSemana13 pues, cambiaremos el mesFinSemana, y cambiarán todos los cálculos
                                                          mesFinSemana =mesFinSemana - 12;
                                                          //si eel mes fin semana es 1, el año es el siguiente
                                                          anoImprimir = anoStorageSiguiente;


                                              //concatenamos la nueva fecha del fin de semana
                                            //convertimos a String anoImprimr
                                              fechaConcatenadaFinSemana = String(anoImprimir).concat(separador,mesFinSemana,separador,diaFinSemana);
                                                            //guardamos la fecha con el fin de semana epidemiologico calculado en tempFinSemanaEpid para usarlo cuando el flagSemana13 esté activo
                                                      tempFinSemanaEpid = fechaConcatenadaFinSemana;
                                                          
                                                        }else{

                                                          mesFinSemana = mesFinSemanaTemp;
                                                        }

                                                        
        

 

//concatenamos la nueva fecha del fin de semana
//convertimos a String anoImprimr
                                              fechaConcatenadaFinSemana = String(anoImprimir).concat(separador,mesFinSemana,separador,diaFinSemana);
                                              //hacemos la variable finSemanaEpid como la fecha concatenada
                                              finSemanaEpid = fechaConcatenadaFinSemana;
                                              //enviamos el valor al objeto que finalmente se imprimira

                                              if(flagSemana13==1){
                                                finSemanaEpid= tempFinSemanaEpid;
                                              }


                                              miObjetoCalendario.finSemana = finSemanaEpid ;




                                               } //fin diaSemana ==0 , fin del primer domingo que encontró
                                               else{
                                                 //validacion para encontrar el inicio y el fin de semana de los dias antes del primer domingo del año

    

 //VALIDAMOS PRIMERA SEMANA DEL AÑO PARA ASIGNAR LOS INICIOS Y FIN DE SEMANA CORRECTOS
                                              //Validamos si la primera semana es cero, lo que significa que es del año anterior
                                              //el flag se activa cuando estamos procesando la ultima semana del año anterior
                                              if(flagSemanaCero == 1 && flagSemana13==0){ 
                                             //   alert("entra por la ULTIMA SEMANA del año anterior. flag semana cero = 1");
                                                

                                               //colocamos el año anterior pues es la semana cero
                                               anoImprimir= anoStorageAnterior;

                                               //sumamos 1 porque el mes está en formato array, y se supone que termina en enero
                                               mesFinSemana = mes+1; 
                                               
                                               
                   

                                               //el mes de inicio de semana le asignamos 12 porque se supone que es diciembre
                                               mesInicioSemana = 12;     
                                               
                                               
                                              // hallamos el 31 de diciembre del año anterior
                                              
                                              let fecha2_2 = fechaPorDia(anoStorageAnterior, 365);
                                              
                                            
                                              //verificamos si el año anterior es bisiesto
                                              if(ano_bisiesto_anterior){
                                                fecha2_2 = fechaPorDia(anoStorageAnterior, 366);
                                               
                                               
                                              }

                                              //obtenemos el dia de la semana
                                              //1 es lunes, 2 martes, ojo, no es notación array
                                              let dia_semana2_2 = fecha2_2.getDay();
                                           

                                              //calculamos lo que le falta para llegar a sábado
                                              //el resto es el ultimo dia de la semana

                                                      //si el 31 cae lunes (lunes es 1 ), entonces , 6 - 1 da 5, el sábado cae 5
                                                     //si el 31 cae martes (martes es 2), entonces, 6-2 da 4, el sábado cae 4
                                                     //si el 31 cae domingo (domingo es 0), entonces, 6-0 da 6, el sábado cae 6


                                              let restoDiaFinSemana2_2 = 6 - dia_semana2_2;

                                              //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                              //el resto es el primer dia de la semana
                                              //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana


                                                     //si el 31 cae lunes (lunes es 1), entonces , 31-1 da 30, el inicio de la semana es el 30
                                                     //si el 31 cae martes (martes es 2), entonces, 31-2 da 29, el inicio de la semana es el 29
                                                     //si el 31 cae domingo (domingo es 0), entonces, 31-0 da 31, el inicio de la semana es el 31
                                              let restoDiaInicioSemana2_2 = 31 - dia_semana2_2 ;



                                              //dato para la fecha concatenada
                                              diaInicioSemana = restoDiaInicioSemana2_2;
                                            //convertimos a String anoImprimr
                                            fechaConcatenadaInicioSemana = String(anoImprimir).concat(separador,mesInicioSemana,separador,diaInicioSemana);

                                              inicioSemanaEpid = fechaConcatenadaInicioSemana;
                                              miObjetoCalendario.inicioSemana = inicioSemanaEpid ;

                                          
                                                
     
//concatenamos la nueva fecha del fin de semana
                                            diaFinSemana = restoDiaFinSemana2_2;
//el año del fin de semana si es el año actual
                                                fechaConcatenadaFinSemana = anoStorage.concat(separador,mesFinSemana,separador,diaFinSemana);
                                              //hacemos la variable finSemanaEpid como la fecha concatenada
                                              finSemanaEpid = fechaConcatenadaFinSemana;
                                              //enviamos el valor al objeto que finalmente se imprimira
                                              miObjetoCalendario.finSemana = finSemanaEpid; 







                                           





                                              } // fin if flagSemanaCero == 1

                                                    //se valida si el año tiene semanas del año anterior, para calcular de manera diferente la semana y el periodo
                                                      //Aqui no interesa el 31 de diciembre porque el año tiene la ultima semana del año anterior, entonces la primera semana se calcularia de otroa forma

                                                      else if(semanaEpidemiologicaCalculada == 1 && anoConSemanaAnoAnterior==1 && flagSemana13==0 ){

 // alert("entra por if else 2. Estamos en la primera semana del año con días de enero en la ultima semana del año anterior..");





    

                                                      }
                                                   
                                                      //se valida que el año no tenga semanas del año anterior o cambia todo  el procedimiento
                                                      //aqui si interesa el 31 de diciembre del año anterior, porque hace parte de la primera semana del año
                                                      else if(semanaEpidemiologicaCalculada == 1 && anoConSemanaAnoAnterior==0 && flagSemana13==0 ){


                                                        
                                                      //    alert("entra por if else 3. Estamos en la primera semana del año sin días de enero en la ultima semana del año anterior ");
                                                      


                                              









                                                    //si el flag de la semana cero no está activo

                                                      //validamos la semana 0, pero que si pertenece al año actual, por eso validamos el periodo 1

      //HACEMOS LO MISMO QUE CON EL FLAG EN UNO PERO AJUSTANDO EL AÑO Y EL MES ADECUADO


      

/*
        //colocamos el año anterior pues es la semana cero
        anoImprimir= anoStorageAnterior;

        //dejamos el mes actual y sumamos 1 porque el mes está en formato array, y se supone que termina en enero
        mesFinSemana = mes+1;  




        //el mes de inicio de semana le asignamos 1 porque se supone que es ENERO
        mesInicioSemana = 1;     
        
        
       // hallamos el 31 de diciembre del año anterior
       let fecha2_2 = fechaPorDia(anoImprimir, 365);
       
     
       //verificamos si el año es bisiesto, pero DEBE VERIFICARSE EL AÑO ANTERIOR, NO EL ACTUAL
       if(ano_bisiesto_anterior){
        fecha2_2 = fechaPorDia(anoImprimir, 366);
         
        
       }//fin ano bisiesto

       //obtenemos el dia de la semana
       //1 es lunes, 2 martes, ojo, no es notación array
       let dia_semana2_2 = fecha2_2.getDay();
    

       //calculamos lo que le falta para llegar a sábado
       //el resto es el ultimo dia de la semana

       let restoDiaFinSemana2_2 = 6 - dia_semana2_2;

       //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
       //el resto es el primer dia de la semana
       //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana
       let restoDiaInicioSemana2_2 = 31 - dia_semana2_2 ;



       //dato para la fecha concatenada
       diaInicioSemana = restoDiaInicioSemana2_2;
     //convertimos a String anoImprimr
     fechaConcatenadaInicioSemana = String(anoStorage).concat(separador,mesInicioSemana,separador,diaInicioSemana);

       inicioSemanaEpid = fechaConcatenadaInicioSemana;
       miObjetoCalendario.inicioSemana = inicioSemanaEpid ;


//concatenamos la nueva fecha del fin de semana
     diaFinSemana = restoDiaFinSemana2_2;
//el año del fin de semana si es el año actual
         fechaConcatenadaFinSemana = anoStorage.concat(separador,mesFinSemana,separador,diaFinSemana);
       //hacemos la variable finSemanaEpid como la fecha concatenada
       finSemanaEpid = fechaConcatenadaFinSemana;
       //enviamos el valor al objeto que finalmente se imprimira
       miObjetoCalendario.finSemana = finSemanaEpid; 

*/

/*
if(dia_semana==0){
  inicioSemanaEpid = fechaConcatenada;
  miObjetoCalendario.inicioSemana = inicioSemanaEpid ;
 //sumamos 6 al día actual para encontrar el día de fin de semana
 diaFinSemana= dia+6;
//limite para el mes de enero
limiteMesEvaluado = 31;

if(diaFinSemana>limiteMesEvaluado){
  //incrementamos el mes en 1
  mesFinSemana=mes+2;
  let restoDiaFinSemana = 0;
  //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
  restoDiaFinSemana = diaFinSemana - 31;
//hacemos el dia de fin de semana con el resto encontrado
diaFinSemana = restoDiaFinSemana;

}//fin diaSemana > 31

//concatenamos la nueva fecha del fin de semana
//convertimos a String anoImprimr
fechaConcatenadaFinSemana = String(anoImprimir).concat(separador,mesFinSemana,separador,diaFinSemana);
//hacemos la variable finSemanaEpid como la fecha concatenada
finSemanaEpid = fechaConcatenadaFinSemana;
//enviamos el valor al objeto que finalmente se imprimira
miObjetoCalendario.finSemana = finSemanaEpid ;

 } //fin diaSemana ==0
*/


                                                     // hallamos el 31 de diciembre del año anterior
                                                      //366 en vez de 365 para eliminar corrimientos de un día de más
                                                     let fecha2_2  = fechaPorDia(anoStorageAnterior, 365);
                                                     
                                                   
                                                     //verificamos si el año es bisiesto
                                                     if(ano_bisiesto_anterior){
                                                      fecha2_2 = fechaPorDia(anoStorageAnterior, 366);
                                                       
                                                      
                                                     }//fin ano bisiesto
       
                                                     //obtenemos el dia de la semana del 31 de diciembre
                                                     //domingo es 0, 1 es lunes, 2 martes, ojo, no es notación array
                                                     let dia_semana2_2 = fecha2_2 .getDay();

                                                     //el primer dia del año es el 31 + 1
                                                     let primer_dia_año2_2 =  dia_semana2_2 + 1;



   
                                                    //si el 31 de diciembre del año anterior cae sabado (sabado == 6), significa que el primero de enero es domingo , primer dia de la semana
                                                   //si el primer dia del año es 7  el año a imprimir es el año actual. Es 7 porque si el 31 fue sabado (sabado ==6), dia_semana2_2 + 1 daria 7
                                             if( primer_dia_año2_2 == 7){
                                              
                                                      //si el primer dia del año cae domingo
                                                       //significa que la primera semana no tiene dias del año anterior, y por tanto, el inicio de la semana es de este año
                                                      anoImprimir= anoStorage;

                                                      //significa que la semana inicia este año en enero y no en diciembre
                                                      mesInicioSemana = 1; 



                                                             
                                                     //calculamos lo que le falta para llegar a sábado
                                                     //el resto es el ultimo dia de la semana

                                                     //si el 31 cae sabado(sabado es 6 ), entonces , 6 - 6 daría 0,  el sábado no es cero
                                                     //debe ajustarse el restoDiafinSemana2_2
                                                     //si  el 31 cae sabado, significa que el primero es domingo, y por tanto el otro sabado es 7


       
                                                     restoDiaFinSemana2_2 = 7 ;
       
                                                     //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana

                                                     //si el 31 cae sabado (sabado es 6), entonces, 31-6 da 25, el inicio de la semana no es el 25
                                                     //si el 31 cae sabado, significa que el primero es domingo, y por tanto, el inicio de la semana es 1
                                                     restoDiaInicioSemana2_2 = 1 ;
                                        
                                                      
                                                    

                                             }
                                             else{
                                                      //colocamos el año anterior pues es la semana cero  y debe tener dias del año anterior en esta semana
                                                      anoImprimir= anoStorageAnterior;
                                                             //el mes de inicio de semana le asignamos 12 porque se supone que es diciembre
                                                             mesInicioSemana = 12;    
                                                             
                                                             

                                                                                                               
       
                                                     //calculamos lo que le falta para llegar a sábado
                                                     //el resto es el ultimo dia de la semana

                                                     //si el 31 cae lunes (lunes es 1 ), entonces , 6 - 1 da 5, el sábado cae 5
                                                     //si el 31 cae martes (martes es 2), entonces, 6-2 da 4, el sábado cae 4
                                                     //si el 31 cae domingo (domingo es 0), entonces, 6-0 da 6, el sábado cae 6


       
                                                     restoDiaFinSemana2_2 = 6 - dia_semana2_2;
       
                                                     //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana

                                                     //si el 31 cae lunes (lunes es 1), entonces , 31-1 da 30, el inicio de la semana es el 30
                                                     //si el 31 cae martes (martes es 2), entonces, 31-2 da 29, el inicio de la semana es el 29
                                                     //si el 31 cae domingo (domingo es 0), entonces, 31-0 da 31, el inicio de la semana es el 31
                                                     restoDiaInicioSemana2_2 = 31 - dia_semana2_2 ;




                                             }

       
                                                      //sumamos 1 porque el mes está en formato array, y se supone que termina en enero
                                                      mesFinSemana = mes+1;  
       

                                                      

       
       
                                                     //dato para la fecha concatenada
                                                     diaInicioSemana = restoDiaInicioSemana2_2;
                                                   //convertimos a String anoImprimr
                                                   fechaConcatenadaInicioSemana = String(anoImprimir).concat(separador,mesInicioSemana,separador,diaInicioSemana);
       
                                                     inicioSemanaEpid = fechaConcatenadaInicioSemana;
                                                     miObjetoCalendario.inicioSemana = inicioSemanaEpid ;
       
                                                 
                                                       
            
       //concatenamos la nueva fecha del fin de semana
                                                   diaFinSemana = restoDiaFinSemana2_2;
       //el año del fin de semana si es el año actual
                                                       fechaConcatenadaFinSemana = anoStorage.concat(separador,mesFinSemana,separador,diaFinSemana);
                                                     //hacemos la variable finSemanaEpid como la fecha concatenada
                                                     finSemanaEpid = fechaConcatenadaFinSemana;
                                                     //enviamos el valor al objeto que finalmente se imprimira
                                                     miObjetoCalendario.finSemana = finSemanaEpid; 


            

}//fin if semanaEpidemiologicaCalculada == 1








                                                                                                   //despues del calculo, volvemos a la normalidad el año imprimir
                                                                                                   anoImprimir= anoStorage;                                    
                                              


                                               } //fin else diaSemana ==0
                                     


                                           
                                            

   /*SIRVE                                       
                                                                                           //Convert a JavaScript object into a string with JSON.stringify().
                                                                                          // convertimos a string el objeto
                                                                                           miCalendarioTablaImprimir = JSON.stringify(miObjetoCalendario);

                                            //enviamos al arreglo el string para mantener los datos anteriores
                                        
                                            arregloJsonCalendario.push(miCalendarioTablaImprimir);


   SIRVE        */                                 

                                                                                    //convertimos el objeto en string, y luego en objeto javascript, para poder almacenarlo corrrectamente en el array
                                                                                             //CONVERTIRMOS EL ARRAY PURO JAVASCRIPT EN ARRAY JSON (ver linea 378)
                                                                                             miCalendarioTablaImprimir = JSON.parse(JSON.stringify(miObjetoCalendario));

                                                                                             //enviamos el elemento al arreglo, para luego, al final del for, convertir todo en string (ver linea 419)
                                            arregloJsonCalendario.push(miCalendarioTablaImprimir);


                                          

//convertimos en JSON el arreglo AL FINAL DEL FOR


                                    




    if (dia_semana == 6) { sem = sem + 1; }
    
    //incrementamos cada periodo despues del sabado (==6)
    if(dia_semana==6){

                  //como los periodos son de 4 semanas, aumentamos 1 cada vez que lleguemos al multiplo de 4
              if(semanaEpidemiologicaCalculada%4 == 0){


                                  //si la semana epidemiologica es cero, ese periodo no cuenta
                                  periodo= periodo + 1;


                
              
              }//fin %4
            }//fin dia == 6



  }//fin for

/*
var jsonArg1 = new Object();
    jsonArg1.name = 'calc this';
    jsonArg1.value = 3.1415;
var jsonArg2 = new Object();
    jsonArg2.name = 'calc this again';
    jsonArg2.value = 2.73;

var pluginArrayArg = new Array();
    pluginArrayArg.push(jsonArg1);
    pluginArrayArg.push(jsonArg2);


 ====>>>>>>    to convert pluginArrayArg (which is pure javascript array) into JSON array:    <<<============0

var jsonArray = JSON.parse(JSON.stringify(pluginArrayArg))

*/


/* SIRVE

//CONVERTIRMOS EL ARRAY PURO JAVASCRIPT EN ARRAY JSON
//miCalendarioTablaImprimir2 = JSON.parse(JSON.stringify(arregloJsonCalendario));
//miCalendarioTablaImprimir2 = JSON.stringify(arregloJsonCalendario);




                                               // almacenamos en localStorage


                                                localStorage.jsonMostrarTabla = arregloJsonCalendario;
 SIRVE */



 //miCalendarioTablaImprimir2 = JSON.stringify(arregloJsonCalendario);




//convertimos el arreglo en string
 var jsonConfiguradoCalendario =  JSON.stringify(arregloJsonCalendario);

                                               // almacenamos en localStorage el arreglo configurado en string
                                                localStorage.jsonMostrarTabla =  jsonConfiguradoCalendario;

  

              //validamos si el año tiene 53 semanas, para ajustar el periodo del mes de junio
              //sacamos la tabla del mes de diciembre
              let validaSemana53=document.getElementsByClassName('tabla_mes')[11];
               //children[2] accede al body de la tabla .children[4] a la semana, y .children[7] a la semana epidemiologica
              let valorSemana53 = validaSemana53.children[2].children[4].children[7].innerText;
              if(valorSemana53 == 53){
                //se detecta que la semana 5 tiene el valor 53

                //llamamos a la función que numera todo nuevamente pero ajustando en el mes de junio las 5 semanas
                    numerar53();

              }
              
              


}//fin numerar














//funcion para numerar correctamente la semana 53
function numerar53() {
  //invocamos el año ingresado por caja de texto para dibujar el calendario
    var anoStorage2 = localStorage.ano;

      //variable para imprimir años anteriores , actuales y futuros
  var anoImprimir2 = anoStorage2 ;

  //variable para almacenar el año anterior
  var anoStorageAnterior2 =parseInt(anoStorage2) - 1;

    //variable para almacenar el año siguiente
    var anoStorageSiguiente2 =parseInt(anoStorage2) + 1;

    //variable para almacenar la variable epidemiologica calculada
    var semanaEpidemiologicaCalculada2=0;
    //variable temporal de semana epidemiologica
    var semanaEpidemiologicaCalculadaTemp2=0;
  //variable para almacenar el periodo
    var periodo2 = 1;
    //variable para almacenar temporalmente el periodo mientras se hace un cambio
    var tempPeriodo2=0;
    //flag de acarreo de la semana 53
    var acarreoSemana53=0;
    //variable para llevar el acarreo de dos en dos
    var acarreo2En2 = 0;
        //variable para llevar el acarreo de dos en dos par
        var acarreo2En2Par = 0;

        //variable que detirmina si el año es bisiesto usando la función
  var ano_bisiesto2 = es_bisiesto(anoStorage2);
  //variable para limitar el limite del ciclo for para los dias
                  //variable que detirmina si el año  anterior es bisiesto usando la función
                  var ano_bisiesto_anterior2 = es_bisiesto(anoStorageAnterior2);

                //ESTE VALOR ES 366 Y NO 365 O DE LO CONTRARIO NO SE PINTA EN EL CALENDARIO EL 31 DE DICIEMBRE    
  var limite_ciclo2 = 366;
//variable para evaluar los limites de los meses evaluados
  var limiteMesEvaluado2 =0;

  //variable para llevar el resto del dia del fin de semana
  var restoDiaFinSemana22 =0;
//variable para llevar el resto del día de inicio de semana
  var restoDiaInicioSemana22 =0;
  

if(ano_bisiesto2){

 // alert("El año es bisiesto. Tiene 366 dias");
  //aumentamos en uno el limite del ciclo, pues el año es bisiesto y no tiene 365 sino 366 dias
  limite_ciclo2 = 367;
}

 //concatenamos la fecha completa para enviarla al json
 //string.concat(string1, string2, ..., stringX)
 //usamos el guion como separador de fechas
 var separador2 ="-";
 //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
var fechaConcatenada2 = "";


 //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
 var fechaConcatenadaFinSemana2 = "";
  //El año por ahora es una cadena vacia, que se irá llenando con el ciclo for
var fechaConcatenadaInicioSemana2 = "";


//objeto para construir el json con cada dato
var miObjetoCalendario2 = new Object();

//arreglo para almacenar cada iteración
var arregloJsonCalendario2 = new Array();

//variable que almacenará la tabla que finalmente se va a imprimir
var miCalendarioTablaImprimir2 ="";


//variables para almacenar inicio y fin de semana
var inicioSemanaEpid2 =50000;
var finSemanaEpid2 = 80000;


//variable para el dia del fin de semana
var diaFinSemana2 =0;
//Variable para el mes del fin de semana
var mesFinSemana2 =0;


 //variable para el dia del inicio de semana
 var diaInicioSemana2 =0;
 //Variable para el mes del inicio de semana
  var mesInicioSemana2 =0;

//flag para determinar que estamos en semana cero y calcular datos para el json
var flagSemanaCero2 =0 ;

//flag para indicar que el año tiene una semana del año anterior
var anoConSemanaAnoAnterior2 =0;

 //flag para determinar que estamos en semana cero del otro año y calcular datos para el json
 var  flagSemanaUltimaOtroAño2 =0;

 //flag para determinar si estamos en la semana 13
var flagSemana13_2=0;

var tempInicioSemanaEpid2 =0;

var tempFinSemanaEpid2 =0;




 //flag para determinar que estamos en semana cero del otro año y calcular datos para el json
 var  flagSemanaUltimaOtroAño2 =0;

        //iteramos para los 366 dias del año
    for (i2 = 1; i2 < limite_ciclo2; i2++) {
      let fecha2 = fechaPorDia(anoStorage2, i2);
      let mes2 = fecha2.getMonth();
  
      let select_tabla2 = document.getElementsByClassName('tabla_mes')[mes2];
      let dia2 = fecha2.getDate()
      let dia_semana2 = fecha2.getDay();
      //inicializamos en cero este flag a lo que comienza el ciclo
      flagSemanaUltimaOtroAño2 =0;

  
      //en la fecha concatenada tenemos que sumar 1 al mes, pues rcordemos que .getMonth() trae los meses como si fueran indices de arreglos, comenzando en cero
      fechaConcatenada2 = anoStorage2.concat(separador2,mes2+1,separador2,dia2);
            //calculamos las semanas epidemiológicas de acuerdo al dia de la iteración
      semanaEpidemiologicaCalculada2=calcularSemanasCalendario(anoStorage2,mes2,dia2);
      
  
      
                                             //Validamos si la primera semana es cero
                                             if(semanaEpidemiologicaCalculada2 == 0){
                                              //activamos el flag de Semana Cero, pues luego se modificará el valor de la semana epidemiológica calculada
                                              flagSemanaCero2 = 1;
                                              //el flag se activa cuando el año tiene una semana del año anterior
                                              anoConSemanaAnoAnterior2=1;
                                              //es necesario llamar la función del año anterior para calcular el periodo
                                              semanaEpidemiologicaCalculada2 = calcularSemanasAnoAnteriorCalendar(anoStorage2);
                                              //si es la ultima semana, el ultimo periodo siempre es 13
                                              periodo2 = 13;
                                              //almacenamos el año anterior, pues la semana epidemiológica y el periodo pertenecen al año anterior
                                              //convertimos a int anoStorage2 porque viene de localStorage que es String
                                              anoStorageAnterior2 = parseInt(anoStorage2) - 1;

                                              /*
                                              Esta instrucción ya no es necesaria ya que el cálculo de los días anteriores se hace en otro lado, mediante if. Antes si se necesitaba
                                              //hacemos el año que se va a imprimir como el año anterior
                                              anoImprimir2= anoStorageAnterior2;

                                              */
                                             anoImprimir2= anoStorage2;
                                                                                            //¿Recalculamos fecha concatenada? porque se calculo anteriormente
                                                    //convertimos a String anoImprimr
                                                    fechaConcatenada2 = String(anoImprimir2).concat(separador2,mes2+1,separador2,dia2);
                                            } 
                                            //validamos si es la primera semana para corregir el valor normal del periodo , de lo contrario, contaria periodo desde el valor anterior
                                            else if(semanaEpidemiologicaCalculada2 == 1 ){
                                              //corregimos periodo y año
                                              periodo2 = 1;
                                               //convertimos a int anoStorage2 porque viene de localStorage que es String
                                              anoImprimir2= parseInt(anoStorageAnterior2) + 1;


                                              

                                                                                        //corregimos el flag a su valor natural
                                                                                        flagSemanaCero2 = 0;
                                                                                        //validacion adicional, por si es semana 1 , pero del siguiente año.
                                                                                        //tendremos que validar si i es mayor que 300 (cualquier numero grande antes del limite del ciclo) y superior a 10 (la primera semana del año)
                                                                                        if(i2 > 300){
                                                                                          //significa que es la primera semana pero del siguiente año, no del año en curso
                                                                                                                                        //corregimos periodo y año
                                                                                             
                                                                                              anoImprimir2= parseInt(anoStorage2) + 1;
                                                                                              //activamos el flag de la semana cero del año sigiente
                                                                                              flagSemanaUltimaOtroAño2 = 1;
                                                                                        }//fin if
                                        
                                        
                                                                                    }//fin else if
                                        


                                           



        
  
      if (dia2 == 1) {var sem2 = 0;}
      //children[2] accede al body de la tabla .children[sem] a la semana, y .children[dia_semana] al dia de la semana
      select_tabla2.children[2].children[sem2].children[dia_semana2].innerText = dia2;
      //Almacenamos la semana epidemiológica
      select_tabla2.children[2].children[sem2].children[7].innerText = semanaEpidemiologicaCalculada2;
      select_tabla2.children[2].children[sem2].children[7].style.color ="magenta";


        

  

                                                   //Validamos si la primera semana es cero
                                                   if(semanaEpidemiologicaCalculada2 == 0){
                                                    //si la primera semana es cero, significa que ese periodo no cuenta
                                                    periodo2 = 0;
                                                  } //fin if

                                                  //validamos si la ultimo periodo epidemiologico es 14

                                                                                                  
                                                   if(periodo2 == 14){
                                                    //si el ultimo periodo epidemiológico es igual a 14, significa que pertenece a la primera semana del siguiente año
                                                    periodo2 = 1;
                                                  //corregimos el siguiente año a imprimir
                                                  anoImprimir2= parseInt(anoStorage2) + 1;
                                                    
                                                  } //fin if


                                                  /*  
                                                  ESTA PORCION DE CÓDIGO SE USABA CUANDO SE CREIA QUE LA SEMANA SOBRANTE SE INCRUSTABA EN EL PERIODO 7
                                                  SE AJUSTA POR LA PORCION DE CODIGO DE LA LINEA 1200 
                                                  //como el año tiene 53 semanas , ajustamos la semana 29 epidemiológica para que pertenezca al periodo 7 en vez de al periodo 8
                                                  //variable temporal para mantener el periodo en que se iba
                                                  tempPeriodo2= periodo2;
                                                  
                                                  if((semanaEpidemiologicaCalculada2 == 29)){
                                                    
                                                    //semana 29 no pertenece al periodo 8 sino al periodo anterior, por eso asignamos el valor de 7
                                                    periodo2 = 7;

                                                  }else{
                                                    //si no es semana 29, sigue con el calculo del periodo anterior almacenado en variable temporal
                                                    periodo2=tempPeriodo2;
                                                  }//fin else

                                                  //si la semana es 30, continuamos con el conteo normal (periodo = 8) pero sumandole el acarreo de la semana 53
                                                  if(semanaEpidemiologicaCalculada2 == 30){
                                                    
                                                    
                                                    //activamos el flag de acarreo de la semana 53
                                                    acarreoSemana53 = 1;
                                                    periodo2= 8;
                                                    
                                                
                                                  }//fin if

                                          

                                                   



                                                 
                                                  */




                                                  //si la semana epidemiologica es 53, el periodo al que pertenece es al ultimo
                                                  if(semanaEpidemiologicaCalculada2 == 53){
                                                    periodo2=13;

                                                  }



                                          
                                                  


      //Almacenamos el periodo
      select_tabla2.children[2].children[sem2].children[8].innerText = periodo2;
      select_tabla2.children[2].children[sem2].children[8].style.color ="lightblue";




                                      //CREAMOS UN JSON QUE CONTENDRÁ TODA LA INFORMACIÓN DEL CALENDARIO, PARA LUEGO GENERAR UNA TABLA CON LOS PARÁMETROS NECESARIOS PARA SIVIGILA ESCRITORIO
                                           //SALIDA TABULAR. El objeto debe definirse fuera de la estructura de repetición para que mantenga valores
                                            
                                           miObjetoCalendario2.fechaGenerada = fechaConcatenada2;
                                           miObjetoCalendario2.semanaEpidemiologica = semanaEpidemiologicaCalculada2;
                                           miObjetoCalendario2.periodoEpidemiologico = periodo2;
                                           miObjetoCalendario2.anoEpidemiologico = anoImprimir2;
                                           miObjetoCalendario2.inicioSemana = inicioSemanaEpid2;
                                           miObjetoCalendario2.finSemana = finSemanaEpid2;





                                                                          
                                                      //VALIDAMOS SI ESTAMOS EN LA SEMANA 13
                                                      if (flagSemanaUltimaOtroAño2 == 1){
                                                      //  alert ("FLAG ULTIMA SEMANA OTRO AÑO NUM 53");
                                                        flagSemana13_2=1;
                                                         }


                                                                                       //encontramos inicio y fin de semana para poder almacenar en el objeto
                                                    //dia_semana == 0 es domingo
                                                    if(dia_semana2==0){

                                            //sumamos uno al mes, para encontrar el mes correcto pues viene en formato de array
                                                      mesFinSemana2= mes2+1;

                                                   //   alert(" entra por dia_semana2==0 de numerar 53, osea domingo");
                                                 
                                                      //VALIDAMOS SI ESTAMOS EN LA SEMANA 13
                                                      if (periodo2 == 1 && flagSemanaUltimaOtroAño2 == 1){
                                                  //      alert ("FLAG SEMANA 13 NUM 53");

                                                        flagSemana13_2=1;

                                                      //la fecha concatenada se modifica en linea 318 si estamos en semana 0
                                                      inicioSemanaEpid2 = fechaConcatenada2;
                                                      miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;

                                                      tempInicioSemanaEpid2 = inicioSemanaEpid2;

                                                        
                                                      }




                                                      //miObjetoCalendario2.inicioSemana = fechaConcatenada2 ;
//este valor depende de la linea 1097 si se recalcula la fecha concatenada
                                                      inicioSemanaEpid2 = fechaConcatenada2;

                                                      
                                                                                                      //VALIDAMOS SI EL FLAG ESTA ENCENDIDO, PUES LA SEMANA 13 CAMBIA SU VALOR A 1 EN OTRA PARTE DEL PROGRAMA
                                                                                                      if (flagSemana13_2 == 1){

                                                                                                        //asignamos a la variable inicioSemanaEpid el valor calculado incialmente cuando se encendio el flg
                                                                                                        inicioSemanaEpid2 = tempInicioSemanaEpid2;
                                                                 
                                                                                                                  }
                                                      miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;
                                                      
                                                      //en la fecha concatenada de fin semana tenemos que sumar 1 al mes, pues rcordemos que .getMonth() trae los meses como si fueran indices de arreglos, comenzando en cero
                                                      //tambien tenemos que sumar 6 al día para encontrar correctamente el dia de fin de semana
        

                                                        //sumamos 6 al día actual para encontrar el día de fin de semana
                                                        diaFinSemana2= dia2+6;
        

        //CONFIGURACIÓN DE LOS ÚLTIMOS DÍAS DE CADA MES

                                                        //VALIDAMOS QUE LA SUMA DE DIA NO SUPERE 31
                                                        // TENDREMOS QUE HACER VALIDACION DE SUMA PARA CADA MES, PUES 31 ES PARA LA MAYORIA PERO NO PARA TODOS
        //Asignamos variable de evaluación
let mesEvaluadoActual2 = mes2;

//evaluamos mes
switch(mesEvaluadoActual2){
  //meses comunes con 31 dias
  case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      // code block
      
          limiteMesEvaluado2 = 31;
      break;
    case 1:
      // code block
        //validamos si es bisiesto
              if(ano_bisiesto2){
     
            limiteMesEvaluado2= 29;
              }
              else{

            limiteMesEvaluado2= 28;
              }//fin else
      break;
      //meses comunes con 30 dias
    case 3:
    case 5:
    case 8: 
    case 10:

            limiteMesEvaluado2=  30;
      break;
    default:
      // code block

}//fin switch



                                                        if(diaFinSemana2>limiteMesEvaluado2){
                                                          //incrementamos el mes en 1, osea el mes siguiente del mes actual (por eso mes + 2)
                                                          mesFinSemana2=mes2+2;
                                                          let restoDiaFinSemana2 = 0;
        
                                                          //validamos los meses para hacer los restos adecuados
                                                          switch(mes2) {
                                                            //meses comunes con 31 dias
                                                            case 0:
                                                            case 2:
                                                            case 4:
                                                            case 6:
                                                            case 7:
                                                            case 9:
                                                            case 11:
                                                              // code block
                                                              //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                              restoDiaFinSemana2 = diaFinSemana2 - 31;
                                                              break;
                                                            case 1:
                                                              // code block
                                                                //validamos si es bisiesto
                                                                      if(ano_bisiesto2){
                                                               //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                                        restoDiaFinSemana2 = diaFinSemana2 - 29;
                                                                      }
                                                                      else{
                                                           //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                                        restoDiaFinSemana2 = diaFinSemana2 - 28;
                                                                      }//fin else
                                                              break;
                                                              //meses comunes con 30 dias
                                                            case 3:
                                                            case 5:
                                                            case 8: 
                                                            case 10:
                                                      //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
                                                                restoDiaFinSemana2 = diaFinSemana2 - 30;
                                                              break;
                                                            default:
                                                              // code block
                                                          }//fin switch mes
        
        
        //hacemos el dia de fin de semana con el resto encontrado
                                                          diaFinSemana2 = restoDiaFinSemana2;
        
                                                        }//fin diaSemana > 31
        
                                                         //llevamos el valor actual del mesFinSemana
                                                let mesFinSemanaTemp2 =  mesFinSemana2;

                                                        //ANTES DE CONCATENAR LA FECHA DE FIN DE SEMANA, VALIDAMOS SI EL MES ES IGUAL A 13, PARA CAMBIARLO MANUALMENTE A 1
                                                        //SI EL MES ES UNO, EL AÑO ES EL SIGUIENTE. SE CAMBIAN ESOS DOS PARÁMETROS DENTRO DE LA VALIDACIÓN
                                                        if (mesFinSemana2 == 13){

                                                        
                                                          //SIGNIFICA QUE ESTAMOS EN ENERO DEL OTRO AÑO, RESTAMOS 12 PARA NO FORZAR LA VARIABLE
                                                          //es aqui donde sirve el flagSemana13 pues, cambiaremos el mesFinSemana, y cambiarán todos los cálculos
                                                          mesFinSemana2 =mesFinSemana2 - 12;

                                                      //si eel mes fin semana es 1, el año es el siguiente
                                                        anoImprimir2 = anoStorageSiguiente2;



                                              //concatenamos la nueva fecha del fin de semana
                                            //convertimos a String anoImprimr
                                              fechaConcatenadaFinSemana2 = String(anoImprimir2).concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
                                                            //guardamos la fecha con el fin de semana epidemiologico calculado en tempFinSemanaEpid para usarlo cuando el flagSemana13 esté activo
                                                      tempFinSemanaEpid2 = fechaConcatenadaFinSemana2;
                                                          
                                                        }else{

                                                          mesFinSemana2 = mesFinSemanaTemp2;
                                                        }
        
         
        
        //concatenamos la nueva fecha del fin de semana
        //convertimos a String anoImprimr
                                                      fechaConcatenadaFinSemana2 = String(anoImprimir2).concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
                                                      //hacemos la variable finSemanaEpid como la fecha concatenada
                                                      finSemanaEpid2 = fechaConcatenadaFinSemana2;
                                                      //enviamos el valor al objeto que finalmente se imprimira

                                                      if(flagSemana13_2 ==1){

                                                        finSemanaEpid2= tempFinSemanaEpid2;
                                                      }
                                                      miObjetoCalendario2.finSemana = finSemanaEpid2 ;

        
                                                       }//fin dia_semana2 ==0
                                                       else{

                                    
                                                        //validacion para encontrar el inicio y el fin de semana de los dias antes del primer domingo del año
       
           
       
        //VALIDAMOS PRIMERA SEMANA DEL AÑO PARA ASIGNAR LOS INICIOS Y FIN DE SEMANA CORRECTOS
                                                     //Validamos si la primera semana es cero, lo que significa que es del año anterior
                                                     if(flagSemanaCero2 == 1 && flagSemana13_2==0){ 

                                                //      alert("entra por flag semanaCero2 == 1 numerar 53, es decir estamos en la ultima semana del año anterior");

                                                      
                                     
                                                      //desactivamos el flag para futuros calculos
                                                      flagSemanaCero2 = 0;
                                                    
                                                      //colocamos el año anterior pues es la semana cero
                                                      anoImprimir2= anoStorageAnterior2;
       
                                                      //sumamos 1 porque el mes está en formato array, y se supone que termina en enero
                                                      mesFinSemana2 = mes2+1;  
       
                                                      //el mes de inicio de semana le asignamos 12 porque se supone que es diciembre
                                                      mesInicioSemana2 = 12;     
                                                      
                                                      
                                                     // hallamos el 31 de diciembre del año anterior
                                                     let fecha22 = fechaPorDia(anoStorageAnterior2, 365);
                                                     
                                                   
                                                     //verificamos si el año anterior es bisiesto
                                                     if(ano_bisiesto_anterior2){
                                                       fecha22 = fechaPorDia(anoStorageAnterior2, 366);
                                                       
                                                      
                                                     }//fin ano bisiesto
       
                                                     //obtenemos el dia de la semana
                                                     //1 es lunes, 2 martes, ojo, no es notación array
                                                     let dia_semana22 = fecha22.getDay();
                                                  
       
                                                     //calculamos lo que le falta para llegar a sábado
                                                     //el resto es el ultimo dia de la semana

                                                     //si el 31 cae lunes (lunes es 1 ), entonces , 6 - 1 da 5, el sábado cae 5
                                                     //si el 31 cae martes (martes es 2), entonces, 6-2 da 4, el sábado cae 4
                                                     //si el 31 cae domingo (domingo es 0), entonces, 6-0 da 6, el sábado cae 6
       
                                                     let restoDiaFinSemana22 = 6 - dia_semana22;
       
                                                     //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana


                                                      //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana

                                                     //si el 31 cae lunes (lunes es 1), entonces , 31-1 da 30, el inicio de la semana es el 30
                                                     //si el 31 cae martes (martes es 2), entonces, 31-2 da 29, el inicio de la semana es el 29
                                                     //si el 31 cae domingo (domingo es 0), entonces, 31-0 da 31, el inicio de la semana es el 31
                                                     let restoDiaInicioSemana22 = 31 - dia_semana22 ;
       
       
       
                                                     //dato para la fecha concatenada
                                                     diaInicioSemana2 = restoDiaInicioSemana22;
                                                   //convertimos a String anoImprimr
                                                   fechaConcatenadaInicioSemana2 = String(anoImprimir2).concat(separador2,mesInicioSemana2,separador2,diaInicioSemana2);
       
                                                     inicioSemanaEpid2 = fechaConcatenadaInicioSemana2;
                                                     miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;
       
                                                 
                                                       
            
       //concatenamos la nueva fecha del fin de semana
                                                   diaFinSemana2 = restoDiaFinSemana22;
       //el año del fin de semana si es el año actual
                                                       fechaConcatenadaFinSemana2 = anoStorage2.concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
                                                     //hacemos la variable finSemanaEpid como la fecha concatenada
                                                     finSemanaEpid2 = fechaConcatenadaFinSemana2;
                                                     //enviamos el valor al objeto que finalmente se imprimira
                                                     miObjetoCalendario2.finSemana = finSemanaEpid2; 
       
       
       
                                                     }//fin flagSemanaCero2





                                                     
                                                      //se valida si el año tiene semanas del año anterior, para calcular de manera diferente la semana y el periodo
                                                      //Aqui no interesa el 31 de diciembre porque el año tiene la ultima semana del año anterior, entonces la primera semana se calcularia de otroa forma

                                                     else if(semanaEpidemiologicaCalculada2 == 1 && anoConSemanaAnoAnterior2==1 && flagSemana13_2==0 ){


  //  alert("entra por el segundo if_else numerar 53, es decir en la primera semana del año con dias del año anterior");

                                                     }
                                                  
                                                     //se valida que el año no tenga semanas del año anterior o cambia todo  el procedimiento
                                                     //aqui si interesa el 31 de diciembre del año anterior, porque hace parte de la primera semana del año
                                                     else if(semanaEpidemiologicaCalculada2 == 1 && anoConSemanaAnoAnterior2==0  && flagSemana13_2==0 ){

                                                 //     alert("entra por el tercer if_else numerar 53, es dcier la primera semana del año sin días del año anterior");

                                                      //si el flag de la semana cero no está activo

                                                      //validamos la semana 0, pero que si pertenece al año actual, por eso validamos el periodo2==1

      //HACEMOS LO MISMO QUE CON EL FLAG EN UNO PERO AJUSTANDO EL AÑO Y EL MES ADECUADO


      
/*

ESTO NO HACE NADA EN LA FUNCION NUMERAR53()

                                           //colocamos el año anterior pues es la semana cero
                                           anoImprimir2= anoStorage2;
       
                                           //dejamos el mes actual y sumamos 1 porque el mes está en formato array, y se supone que termina en enero
                                           mesFinSemana2 = mes2+1;  

                                           //el mes de inicio de semana le asignamos 12 porque se supone que es enero
                                           mesInicioSemana2 = 1;     
                                           
                                           
                                          // hallamos el 31 de diciembre del año anterior
                                          let fecha22 = fechaPorDia(anoImprimir2, 365);
                                          
                                        
                                          //verificamos si el año es bisiesto
                                          if(ano_bisiesto_anterior2){
                                            fecha22 = fechaPorDia(anoImprimir2, 366);
                                            
                                           
                                          }//fin ano bisiesto

                                          //obtenemos el dia de la semana
                                          //1 es lunes, 2 martes, ojo, no es notación array
                                          let dia_semana22 = fecha22.getDay();
                                       

                                          //calculamos lo que le falta para llegar a sábado
                                          //el resto es el ultimo dia de la semana

                                          let restoDiaFinSemana22 = 6 - dia_semana22;

                                          //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                          //el resto es el primer dia de la semana
                                          //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana
                                          let restoDiaInicioSemana22 = 31 - dia_semana22 ;



                                          //dato para la fecha concatenada
                                          diaInicioSemana2 = restoDiaInicioSemana22;
                                        //convertimos a String anoImprimr
                                        fechaConcatenadaInicioSemana2 = String(anoImprimir2).concat(separador2,mesInicioSemana2,separador2,diaInicioSemana2);

                                          inicioSemanaEpid2 = fechaConcatenadaInicioSemana2;
                                          miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;

                                      
                             if(flagSemanaCeroAnoSiguiente2 == 1){

                              mesFinSemana2 = 69;
                             }               
 
//concatenamos la nueva fecha del fin de semana
                                        diaFinSemana2 = restoDiaFinSemana22;
//el año del fin de semana si es el año actual
                                            fechaConcatenadaFinSemana2 = anoStorage2.concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
                                          //hacemos la variable finSemanaEpid como la fecha concatenada
                                          finSemanaEpid2 = fechaConcatenadaFinSemana2;
                                          //enviamos el valor al objeto que finalmente se imprimira
                                          miObjetoCalendario2.finSemana = finSemanaEpid2; 

                                          
*/




/*
//if(dia_semana2==0){
  inicioSemanaEpid2 = fechaConcatenada2;
  miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;
 //sumamos 6 al día actual para encontrar el día de fin de semana
 diaFinSemana2= dia2+6;
//limite para el mes de enero
limiteMesEvaluado2 = 31;

if(diaFinSemana2>limiteMesEvaluado2){
  //incrementamos el mes en 1
  mesFinSemana2=mes2+2;
  let restoDiaFinSemana2 = 0;
  //encontramos el valor del siguiente mes restanddo el dia de fin de semana que cae (32,33,34, 35...) menos el valor limite del mes (28,29,30,31)
  restoDiaFinSemana2 = diaFinSemana2 - 31;
//hacemos el dia de fin de semana con el resto encontrado
diaFinSemana2 = restoDiaFinSemana2;

}//fin diaSemana > 31

//concatenamos la nueva fecha del fin de semana
//convertimos a String anoImprimr
fechaConcatenadaFinSemana2 = String(anoImprimir2).concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
//hacemos la variable finSemanaEpid como la fecha concatenada
finSemanaEpid2 = fechaConcatenadaFinSemana2;
//enviamos el valor al objeto que finalmente se imprimira
miObjetoCalendario2.finSemana = finSemanaEpid2 ;

// } //fin diaSemana ==0
*/




                                                     // hallamos el 31 de diciembre del año anterior
                                                     let fecha22 = fechaPorDia(anoStorageAnterior2, 365);

                                                                                                          //verificamos si el año es bisiesto
                                                                                                          if(ano_bisiesto_anterior2 ){
                                                                                                            fecha22 = fechaPorDia(anoStorageAnterior2, 366);
                                                                                                            
                                                                                                           
                                                                                                          }//fin ano bisiesto

                                                                                                 //obtenemos el dia de la semana
                                                     //domingo es 0, 1 es lunes, 2 martes, ojo, no es notación array
                                                     let dia_semana22 = fecha22.getDay();

                                                     //el primer dia del año es 31 + 1                                                         
                                                     let primer_dia_año22 =  dia_semana22 + 1;
                                                     
                                                    //si el 31 de diciembre del año anterior cae sabado (sabado == 6), significa que el primero de enero es domingo , primer dia de la semana
                                                   //si el primer dia del año es 7  el año a imprimir es el año actual. Es 7 porque si el 31 fue sabado (sabado ==6), dia_semana22 + 1 daria 7
                                                    if( primer_dia_año22 == 7){
                                                                                                
                                                                                                       //si el primer dia del año cae domingo
                                                       //significa que la primera semana no tiene dias del año anterior, y por tanto, el inicio de la semana es de este año
                                                    anoImprimir2= anoStorage2;

                                                          //significa que la semana inicia este año en enero y no en diciembre
                                                    mesInicioSemana2 = 1;


                                                                                                         //calculamos lo que le falta para llegar a sábado
                                                     //el resto es el ultimo dia de la semana

                                                     //si el 31 cae sabado(sabado es 6 ), entonces , 6 - 6 daría 0,  el sábado no es cero
                                                     //debe ajustarse el restoDiafinSemana2_2
                                                     //si  el 31 cae sabado, significa que el primero es domingo, y por tanto el otro sabado es 7


       
                                                     restoDiaFinSemana22 = 7 ;
       
                                                     //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana

                                                     //si el 31 cae sabado (sabado es 6), entonces, 31-6 da 25, el inicio de la semana no es el 25
                                                     //si el 31 cae sabado, significa que el primero es domingo, y por tanto, el inicio de la semana es 1
                                                     restoDiaInicioSemana22 = 1 ;
                                        


                                                                  }
//significa que la semana del 31 no pertenece al año actuakl
                                                                  else{

                                                    //colocamos el año anterior pues es la semana cero  y debe tener dias del año anterior en esta semana
                                                    anoImprimir2= anoStorageAnterior2;

                                                            //el mes de inicio de semana le asignamos 12 porque se supone que es diciembre
                                                            mesInicioSemana2 = 12;     



                                                                                                        //calculamos lo que le falta para llegar a sábado
                                                     //el resto es el ultimo dia de la semana

                                                    //si el 31 cae lunes (lunes es 1 ), entonces , 6 - 1 da 5, el sábado cae 5
                                                     //si el 31 cae martes (martes es 2), entonces, 6-2 da 4, el sábado cae 4
                                                     //si el 31 cae domingo (domingo es 0), entonces, 6-0 da 6, el sábado cae 6
       
                                                     restoDiaFinSemana22 = 6 - dia_semana22;
       
                                                     //calculamos lo que le falta para llegar a domingo, el primer dia de la semana
                                                     //el resto es el primer dia de la semana
                                                     //le restamos al ultimo dia de la semana el dia de la semana que es para llegar al primer dia de la semana

                                                      //si el 31 cae lunes (lunes es 1), entonces , 31-1 da 30, el inicio de la semana es el 30
                                                     //si el 31 cae martes (martes es 2), entonces, 31-2 da 29, el inicio de la semana es el 29
                                                     //si el 31 cae domingo (domingo es 0), entonces, 31-0 da 31, el inicio de la semana es el 31
                                                     restoDiaInicioSemana22 = 31 - dia_semana22 ;



                                                                  }
       
                                                      //sumamos 1 porque el mes está en formato array, y se supone que termina en enero
                                                      mesFinSemana2 = mes2+1;  
       
                                                          
                                                      
                                                      
        
       

                                                      
       
       
       
                                                     //dato para la fecha concatenada
                                                     diaInicioSemana2 = restoDiaInicioSemana22;
                                                   //convertimos a String anoImprimr
                                                   fechaConcatenadaInicioSemana2 = String(anoImprimir2).concat(separador2,mesInicioSemana2,separador2,diaInicioSemana2);
       
                                                     inicioSemanaEpid2 = fechaConcatenadaInicioSemana2;
                                                     miObjetoCalendario2.inicioSemana = inicioSemanaEpid2 ;
       
                                                 
                                                       
            
       //concatenamos la nueva fecha del fin de semana
                                                   diaFinSemana2 = restoDiaFinSemana22;
       //el año del fin de semana si es el año actual
                                                       fechaConcatenadaFinSemana2 = anoStorage2.concat(separador2,mesFinSemana2,separador2,diaFinSemana2);
                                                     //hacemos la variable finSemanaEpid como la fecha concatenada
                                                     finSemanaEpid2 = fechaConcatenadaFinSemana2;
                                                     //enviamos el valor al objeto que finalmente se imprimira
                                                     miObjetoCalendario2.finSemana = finSemanaEpid2; 
       








 }//fin if semanaEpidemiologicaCalculada2 == 1


                                                                                                          //despues del calculo, volvemos a la normalidad el año imprimir
                                                                                                          anoImprimir2= anoStorage2;     
                                                                                                          
        
                                                    

                                        }//fin else dia_semana2 ==0
       
       

                                          
                                           

  /*SIRVE                                       
                                                                                          //Convert a JavaScript object into a string with JSON.stringify().
                                                                                         // convertimos a string el objeto
                                                                                          miCalendarioTablaImprimir = JSON.stringify(miObjetoCalendario);

                                           //enviamos al arreglo el string para mantener los datos anteriores
                                       
                                           arregloJsonCalendario.push(miCalendarioTablaImprimir);


  SIRVE        */                                 

                                                                                   //convertimos el objeto en string, y luego en objeto javascript, para poder almacenarlo corrrectamente en el array
                                                                                            //CONVERTIRMOS EL ARRAY PURO JAVASCRIPT EN ARRAY JSON (ver linea 378)
                                                                                            miCalendarioTablaImprimir2 = JSON.parse(JSON.stringify(miObjetoCalendario2));

                                                                                            //enviamos el elemento al arreglo, para luego, al final del for, convertir todo en string (ver linea 419)
                                           arregloJsonCalendario2.push(miCalendarioTablaImprimir2);


                                         

//convertimos en JSON el arreglo AL FINAL DEL FOR








  
  //si el da de la semana es igual a 6 (sabado) , incrementamos en uno la variable que lleva la semana
      if (dia_semana2 == 6) { sem2 = sem2 + 1; }
      
      //incrementamos cada periodo despues del sabado (==6)
      if(dia_semana2==6){

        //si no llevamos acarreo de semana 53, pintamos el periodo de forma normal
        if(acarreoSemana53 == 0){

                              //como los periodos son de 4 semanas, aumentamos 1 cada vez que lleguemos al multiplo de 4
                              if(semanaEpidemiologicaCalculada2%4 == 0){
                               
                                periodo2= periodo2 + 1;
              
              
            
                              
                              }//fin %4

        }//fin acarreoSemana53
//si llevamos el acarreo de la semana 53 pintamos el periodo de forma diferente

else { //si llevamos acarreo de semana 53 pintamos el periodo de forma diferente, lo pintamos al inicio de la semana
                                                 
  //el patron ahora es de dos en dos , comenzando en semana 30 y cambiando cada 4 semanas....34,38,42

  //restamos uno a la semana epidemiológica calculada, con el propósito de asignar correctamente los periodos, ya que la semana 29 fue asignada manualmente y no correspondia por lo calculado por el sistema
  semanaEpidemiologicaCalculada2 = semanaEpidemiologicaCalculada2 -1 ;
         
  //Verificamos el patron de dos en dos
                      if(semanaEpidemiologicaCalculada2%2 == 0){
                        //cuando el acarreo de dos en dos haya cambiado dos veces, incrementamos el periodo
                       acarreo2En2 =  acarreo2En2 +1;

                       //verificamos si el acarreo de dos en dos cambio dos veces
                                       if(acarreo2En2 == 2){




                                        /*
                                            // como activamos el flag en semana 30, no incrementamos el periodo si estamos en semana 30
                                            if(semanaEpidemiologicaCalculada2 != 30){
                                              //si la semana epidemiologica es diferente de 30 incrementamos el periodo
                                               periodo2= periodo2 +1 ;

                                            }else{
                                              //si la semana es semana 30 no hacemos nada, no incrementamos el periodo o si no no cuadran las cuentas
                                            
                                            }
                                               */
                                                    
                                                    
                                          //reiniciamos la variable de acarreo
                                         acarreo2En2=0;
                                                  
                                                }
                                          


                                        }//fin %2
                        
      
      
      
      
                      
                      }//fin acarreo semana 53



              }//fin dia == 6
  
  
  
    }//fin for
  

       //convertimos el arreglo en string
 var jsonConfiguradoCalendario2 =  JSON.stringify(arregloJsonCalendario2);

 // almacenamos en localStorage el arreglo configurado en string
  localStorage.jsonMostrarTabla =  jsonConfiguradoCalendario2;         
                
  
  
  }//fin numerar53



function fechaPorDia(año, dia) {
  var date = new Date(año, 0);
  return new Date(date.setDate(dia));
}



verAno();

function verAno(){
  //buscar la información después de la palabra "ano ingresado"
  var ano = getParameterByName('anoIngresado');
 // alert("Dato obtenido por URL: ");
 // alert(ano);
 // alert("Dato obtenido por LocalStorage: ");
  //microsoft edge necesita emular servidor con live-server para visualizar el localStorage
  var anoStorage = localStorage.ano;
//  alert(anoStorage );
  document.getElementById('mensaje').innerHTML = localStorage.ano;

}


/* -------- FUNCIONES PARA CALCULAR SEMANAS Y PERIODOS EN EL CALENDARIO -------------------- */
	 function calcularSemanasCalendario(param_ano, param_mes, param_dia){
	
			


			/*
			For example, in the US, the week that contains Jan 1 is always the first week. 
			In the US, weeks also start on Sunday. If Jan 1 was a Monday, Dec 31 would belong to the same week as Jan 1, and thus the same week-year as Jan 1. 
			Dec 30 would have a different week-year than Dec 31.
			
			*/
			

			
					//almacenamos los parametros pasados en variables
          var dayNumberCalendar= param_dia;
          //le sumamos 1 porque el mes viene con formato array, y enero sería el mes 0
          var monthNumberCalendar= param_mes+1;
          var yearNumberCalendar=param_ano;

          //convertimos a string para usar la funcion moment
          var anoString=String(yearNumberCalendar);
          var mesString=String(monthNumberCalendar);
          var diaString=String(dayNumberCalendar);

//concatenamos los parametros para encontrar la fecha seleccionada
          var fechaSeleccionada = anoString.concat("-",mesString,"-",diaString);

//calculamos la semana epidemiologica
          var weekNumberCalendar = moment(fechaSeleccionada, "YYYYMMDD").week();


    
          //Gets the ISO day of the week with 1 being Monday and 7 being Sunday.
          //extraemos el día de la semana seleccionadoen formato número
      
    
        //validamos inicio de calendario
    
        //obtenemos el dia de la semana del primero de enero del año seleccionado
        var anoStringCalendar=String(yearNumberCalendar);
        var diaConcatenadoCalendar="-01";
        var mesConcatenadoCalendar="-01";
        var anoConcatenadoCalendar = anoStringCalendar.concat(mesConcatenadoCalendar,diaConcatenadoCalendar);
        var numero_primer_dia_enero_calendar = moment(anoConcatenadoCalendar,"YYYYMMDD").weekday();
        
    
    //variable para llevar el accarreo de la primera semana
    var acarreoCalendar=0;
    //variable para llevar el accarreo de la primera semana del año Ant
    var acarreoCalendarAnt=0;
    //variable para llevar el restoCalendar de la semana ultima
    var restoCalendar=0;
    //variable para llevar el restoCalendar de la semana ultima del año anterior
    var restoCalendarAnt=0;
    //Variable para almacenar la diferencia de dias a partir del 31 de diciembre
    var diferenciaDiasCalendar = 0;
    //Variable para almacenar la diferencia de dias a partir del 31 de diciembre del año anterior
    var diferenciaDiasCalendarAnt = 0;
    // variable para validar si cuenta la ultima semana de diciembre
    var cuentaUltimaSemanaDiciembreCalendar = false;
    
        //validamos si la semana del primero de enero cuenta como semana del año en curso
        //si está entre lunes y miercoles o es domingo, dicha semana cuenta
        if((numero_primer_dia_enero_calendar <= 3) || (numero_primer_dia_enero_calendar == 7) ){
          //significa que cae miercoles o superior
  
           acarreoCalendar = 1;
    
        }
        else{
          
           acarreoCalendar=0;
        }
    
        //validamos final de calendario
    
        //asignamos valores originales del año epidemiológico y semana epidemiológica
        var anoEpidemiologicoCalendario = yearNumberCalendar ;
        var semanaEpidemiologicaCalendar=weekNumberCalendar;

            //obtenemos el dia de la semana del ultimo dia del año actual
    
    // verificamos que dia de la semana cae el 31 de diciembre del año seleccionado
    //anoString tiene el año seleccionado
        var diaConcatenadoDicCalendar="-31";
        var mesConcatenadoDicCalendar="-12";
        var anoConcatenadoDicCalendar = anoStringCalendar.concat(mesConcatenadoDicCalendar,diaConcatenadoDicCalendar);
        var diaNumeroUltimoDiaDiciembreCalendar = moment(anoConcatenadoDicCalendar,"YYYYMMDD").weekday();

    
    
    
        //validamos si la semana del 31 diciembre cuenta como semana del año en curso
        //si es superior o igual a miercoles, dicha semana cuenta
        if((diaNumeroUltimoDiaDiciembreCalendar >= 3) ){
    
          //significa que cae miercoles o superior
          cuentaUltimaSemanaDiciembreCalendar =true;
    
              //validacion del conteo de la semana anterior al 31 
              //solo se hace si la semana cuenta
              switch(diaNumeroUltimoDiaDiciembreCalendar) {
                case 3:
                  // code block
                  diferenciaDiasCalendar = 31 - 5;
                  break;
                case 4:
                  // code block
                  diferenciaDiasCalendar = 31 - 6;
    
                  break;
                case 5:
                  // code block
                  diferenciaDiasCalendar = 31 - 7;
                  break;
                case 6:
                  // code block
                  diferenciaDiasCalendar = 31 - 8;
                  break;
                default:
                  // code block
                }
                  // verificamos que dia de la semana cae el dia calculado de diferencia de dias respecto al 31
                  //anoString tiene el año seleccionado, difenciaDias tiene el dia calculado
                  
                  var mesConcatenadoDicCalendar="-12";
                  var anoConcatenadoDicCalendar = anoStringCalendar.concat(mesConcatenadoDicCalendar,diferenciaDiasCalendar);
                  var semanaAnteriorUltimoDiaDiciembreCalendar = moment(anoConcatenadoDicCalendar,"YYYYMMDD").week();
                  
                  //El problema es que esta formula SI CUENTA la primera semana del año todas las veces
                  //no tiene en cuenta la validación inicial de si la primera semana del año entra o no en el conteo
    
                  //validamos el valor del accareo para llevar la cuenta correctamente
    
                  if(acarreoCalendar==0){
                    //significa que la semana uno no cuenta, por ende , restamos uno a la semana calculada
                    restoCalendar=1;
                    semanaAnteriorUltimoDiaDiciembreCalendar= semanaAnteriorUltimoDiaDiciembreCalendar - restoCalendar;

                    
                  }
                
          
    
        }
        else{
//no hace nada, porque no mostramos mensaje
    
        
        }
    
    
    
    
    
    
        //proceso para validar semana 53 del año anterior  o semana 1 del año actual para los primeros dias de enero
    
    
      //validamos si se escogieron los primeros dias (menor que tres) del mes	de enero (monthNumber 0)
      if ((monthNumberCalendar==0) && (dayNumberCalendar <= 3) ){
    
      //verificamos si  la semana calculada da uno, lo que significa que estamos en el ámbito del primero de enero 
      if (weekNumberCalendar == 1 ){
        //selecciono uno de los primeros dias de enero
        if (acarreoCalendar==0){
    
        //la primera semana no cuenta
    
    
          //tenemos que mostrar la semana anterior.
          //llamamos la funcion que calcula datos de años anteriores
          var totalSemanasAnoAnteriorCalendar = calcularSemanasAnoAnteriorCalendar(yearNumberCalendar);

    
          semanaEpidemiologicaCalendar = totalSemanasAnoAnteriorCalendar;
    
    
    

    
               
        }
        else{
          //la primera semana si cuenta
          anoEpidemiologicoCalendar = yearNumberCalendar;
          semanaEpidemiologicaCalendar=weekNumberCalendar;
          
        }
    
    
         }//fin ámbito primero de enero
          else{
    
                    //weekNumber no dio uno, estamos en una semana diferente a la primera
                    //validacion de cualquier otro dia
                    if(acarreoCalendar == 0){
                      //la primera semana del año no cuenta
                      semanaEpidemiologicaCalendar=semanaEpidemiologicaCalendar-1;

                      
                      anoEpidemiologicoCalendar = yearNumberCalendar;
                    }
                    else{
                      //asignamos la semana calculada normalmente
                      anoEpidemiologicoCalendar = yearNumberCalendar;
                      semanaEpidemiologicaCalendar=weekNumberCalendar;
                    }
          }//fin else		
    
              }//fin if 
    //validamos si se escogieron los ultimos dias (mayor que 23) del mes de diciembre (monthNumber 11)
    //Aqui toca evaluar monthNumber como 12 ya que se le sumo uno al inicio de la función
    //esto porque todos los calendarios digitales toman semana 1 cuando comienza el primero de enero del año en curso
    else if ((monthNumberCalendar==12) && (dayNumberCalendar > 23)){
    
      //verificamos si  la semana calculada da uno, lo que significa que estamos en el ámbito del primero de enero del siguiente año, segun lo que calcula .week(); de moments
     if (weekNumberCalendar == 1 ){
    
                      if((cuentaUltimaSemanaDiciembreCalendar == true) && (acarreoCalendar == 1)){  
                      
                        //la ultima semana de diciembre cuenta y la primera semana tambien cuenta
                        semanaEpidemiologicaCalendar=53;
                       
                        
          
    
                    }
                    else if ((cuentaUltimaSemanaDiciembreCalendar == true) && (acarreoCalendar == 0)) {
                      
                          //la ultima semana de diciembre cuenta pero la primera semana no
                          semanaEpidemiologicaCalendar=52;
                        
                          
                            
                    }
                    else{
                    // la ultima semana de diciembre no cuenta, por tanto pertenece al siguiente año epidemiológico
              //El sistema ya asignó como semana 1 a la fecha de diciembre seleccionada, por tanto solamente la almacenamos
              semanaEpidemiologicaCalendar=weekNumberCalendar;
                    //eso si, cambiamos el año epidemiológico al siguiente
                    anoEpidemiologicoCalendar = yearNumberCalendar + 1;
                   
                    }
     }//fin weekNumber ==1
     else{
          //weekNumber no dio uno, estamos en el ámbito de la ultima semana del año actual
          if((cuentaUltimaSemanaDiciembreCalendar == true) && (acarreoCalendar == 1)){  
                        //la ultima semana de diciembre cuenta y la primera semana tambien cuenta
                        semanaEpidemiologicaCalendar=53;
                        
    
          }
        //tenemos cuenta de ultima semana de diciembre, pero NO CUENTA  la primera semana de enero
        //Debemos restar uno al calculo actual de la semana
        if((cuentaUltimaSemanaDiciembreCalendar == true) && (acarreoCalendar == 0)){  
                  //la ultima semana de diciembre cuenta pero la primera semana de enero no cuenta
                  semanaEpidemiologicaCalendar=semanaEpidemiologicaCalendar - 1;
                  
    
            }
/*
            
            //la ultima semana de diciembre del año actual no cuenta, porque es del otro año, y la primera semana del año no cuenta, porque unos dias de enero quedaron en el calendario anterior
            if ((cuentaUltimaSemanaDiciembreCalendar == false) && (acarreoCalendar == 0 )){ 
              //esto sucede especialmente en el año 2000
              //restamos uno porque los calendarios se estaban generando como semana 53 en vez de 52

              semanaEpidemiologicaCalendar=semanaEpidemiologicaCalendar - 1;

               }
               */
               
          else{
    
            //Dejamos la semana tal y como se calculó
    
                      //asignamos la semana calculada normalmente
                      anoEpidemiologicoCalendar = yearNumberCalendar;
                      //la semana es 52 porque ya se contemplaron todas las posibilidades donde la semana era 53
                      semanaEpidemiologicaCalendar=52;
          }
     }//fin else
    
    
    }//fin elseIf
    //validacion de cualquier otro dia
    else{
      if(acarreoCalendar == 0){
        //la primera semana del año no cuenta
        semanaEpidemiologicaCalendar=semanaEpidemiologicaCalendar-1;
        anoEpidemiologicoCalendar = yearNumberCalendar;
      }
      else{
        //asignamos la semana calculada normalmente
                      //asignamos la semana calculada normalmente
                      anoEpidemiologicoCalendar = yearNumberCalendar;
                      semanaEpidemiologicaCalendar=weekNumberCalendar;
      }
    
    
    }
    
    return semanaEpidemiologicaCalendar ;  
    
    
        }//fin funcion calcularSemanasCalendario




        function calcularSemanasAnoAnteriorCalendar(param_ano_actual){
          var acarreoAntCalendar=0;
          var diferenciaDiasAntCalendar=0;
          var semanaEpidemiologicaAntCalendar=0;
          var rrestoCalendarAnt = 0;
          /* -----------------------------------------------------*/
          
          var yearNumberAntCalendar = param_ano_actual;
          
          
          
            //obtenemos el dia de la semana del primero de enero del año anterior
          
          var anoAnteriorCalendar = yearNumberAntCalendar - 1;
          
          
          //obtenemos el dia de la semana del primero de enero del año anterior
          //todo debe ser string para usar la funcion concat
          var anoAnteriorCalendarString=String(anoAnteriorCalendar);
          var diaConcatenadoAntCalendar="-01";
          var mesConcatenadoAntCalendar="-01";
          var anoConcatenadoAntCalendar = anoAnteriorCalendarString.concat(mesConcatenadoAntCalendar,diaConcatenadoAntCalendar);
          var numero_primer_dia_enero_ant_calendar = moment(anoConcatenadoAntCalendar,"YYYYMMDD").weekday();
         
          
            //validamos si la semana del primero de enero cuenta como semana del año en anterior
          //si está entre lunes y miercoles o es domingo, dicha semana cuenta
          if((numero_primer_dia_enero_ant_calendar <= 3) || (numero_primer_dia_enero_ant_calendar == 7) ){
          //significa que cae miercoles o superior
         
          acarreoAntCalendar = 1;
          
          }
          else{
       
          acarreoAntCalendar=0;
          }
          
          
          // verificamos que dia de la semana cae el 31 de diciembre del año anterior
          var diaConcatenadoDicAntCalendar="-31";
          var mesConcatenadoDicAntCalendar="-12";
          var anoConcatenadoDicAntCalendar = anoAnteriorCalendarString.concat(mesConcatenadoDicAntCalendar,diaConcatenadoDicAntCalendar);
          var diaNumeroUltimoDiaDiciembreAntCalendar = moment(anoConcatenadoDicAntCalendar,"YYYYMMDD").weekday();
          
          
          //validacion del conteo de la semana anterior al 31 
              //solo se hace si la semana cuenta
              switch(diaNumeroUltimoDiaDiciembreAntCalendar) {
                case 3:
                // code block
                diferenciaDiasAntCalendar = 31 - 5;
                break;
                case 4:
                // code block
                diferenciaDiasAntCalendar = 31 - 6;
          
                break;
                case 5:
                // code block
                diferenciaDiasAntCalendar = 31 - 7;
                break;
                case 6:
                // code block
                diferenciaDiasAntCalendar = 31 - 8;
                break;
                default:
                // code block
              }
                  // verificamos que dia de la semana cae el dia calculado de diferencia de dias respecto al 31
                //anoAnteriorCalendar tiene el año seleccionado, difenciaDias tiene el dia calculado
                  
                var mesConcatenadoDicAntCalendar="-12";
                var anoConcatenadoDicAntCalendar = anoAnteriorCalendarString.concat(mesConcatenadoDicAntCalendar,diferenciaDiasAntCalendar);
                var semanaAnteriorUltimoDiaDiciembreAntCalendar = moment(anoConcatenadoDicAntCalendar,"YYYYMMDD").week();
                
                //El problema es que esta formula SI CUENTA la primera semana del año todas las veces
                //no tiene en cuenta la validación inicial de si la primera semana del año entra o no en el conteo
          
                
          
                //sumamos 1 a la semana anterior al ultimo dia de diciembre para encontrar el valor de la ultima semana
                var ultimaSemanaDiciembreAntCalendar= semanaAnteriorUltimoDiaDiciembreAntCalendar + 1;
                semanaEpidemiologicaAntCalendar =  ultimaSemanaDiciembreAntCalendar;
          //validamos el valor del accareo para llevar la cuenta correctamente
                if(acarreoAntCalendar==0){
                  //significa que la semana uno no cuenta, por ende , restamos uno a la semana calculada
                  restoCalendarAnt=1;
                  ultimaSemanaDiciembreAntCalendar= ultimaSemanaDiciembreAntCalendar - restoCalendarAnt;
                  semanaEpidemiologicaAntCalendar =  ultimaSemanaDiciembreAntCalendar;
                }

          return semanaEpidemiologicaAntCalendar;
          
          
          
          
          /*-------------------------------*/
          
          
          
              }//fin funcion calcularSemanasAnoAnteriorCalendar

              
              // Función que determina si un año es bisiesto o no
function es_bisiesto(year){
	return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

//función para exortar tabla a excel

function exportTableToExcel(tableID, filename = ''){

  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  
  // Specify file name
  filename = filename?filename+'.xls':'excel_data.xls';
  
  // Create download link element
  downloadLink = document.createElement("a");
  
  document.body.appendChild(downloadLink);
  
  if(navigator.msSaveOrOpenBlob){
      var blob = new Blob(['ufeff', tableHTML], {
          type: dataType
      });
      navigator.msSaveOrOpenBlob( blob, filename);
  }else{
      // Create a link to the file
      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
  
      // Setting the file name
      downloadLink.download = filename;
      
      //triggering the function
      downloadLink.click();
  }
}


//FUNCION PARA MOSTRAR EL JSON QUE CONTIENE LOS DATOS PARA GENERAR SALIDA TABULAR

function mostrarJson(){
 
  //traemos el json del localStorage
  var jsonImprimeTabla =  localStorage.jsonMostrarTabla;

  //  alert(jsonImprimeTabla);

  var enlaceDescarga;

  enlaceDescarga = document.createElement("a");

  document.body.appendChild( enlaceDescarga);

  //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  //convertimos el string en objeto JavaScript para manipularlo
//NO NECESITO CONVERTIR EL STRIN EN OBJETO , PUES LA SALIDA SERÁ JSON
  //var ObjetoImprimeTabla = JSON.parse(jsonImprimeTabla);




enlaceDescarga.download = "jsonCalendarioEpidemiologico.json";
enlaceDescarga.href = "data:application/octet-stream," 
                     + encodeURIComponent(jsonImprimeTabla);

                           //triggering the function
      enlaceDescarga.click();

}

//FUNCION PARA CARGAR EL AÑO ACTUAL
function cargaAnoActual(){
  var fechaCalendarioActual = new Date();
  var anoCalendarioActual = fechaCalendarioActual.getFullYear();
  //alert('El año actual es: '+anoCalendarioActual);
// Check browser support
if (typeof(Storage) !== "undefined") {


  // Store
  localStorage.ano =anoCalendarioActual;
  // Retrieve
 // document.getElementById('mensaje').innerHTML = localStorage.ano;
} else {
    //el navegador no soporta l
  document.getElementById('mensaje').innerHTML = "Lo lamento, el navegador que usa no soporta Web Storage...";
}



}


