
const vm=new Vue({
	el:'main',
	data: {
		label_codigo_evento: "Código Evento",
		
		campo1:true ,
		label_nombre_evento: "Nombre Evento",
		
		codigo_seleccionado_evento:null,
		
		nombre_seleccionado_evento:null,
		
		fecha_notificacion:null,
		fecha_notificacion_fija:null,
		ano_actual:null,
		ano_ingresado_calendar:null,
		semana_actual:null,
		ano_selec:null,
		semana_selec:null,
		mes_selec:null,
		dia_selec:null,
		dia_semana_selec_num:null,
		primer_dia_enero_num:null,
		primer_dia_enero_num_calendar:null,
		primer_dia_enero_num_anterior:null,
		primer_dia_enero_num_anterior_calendar:null,
		ultima_semana_diciembre:null,
		semana_anterior_ultima_semana_diciembre:null,
		semana_anterior_ultima_semana_diciembre_calendar:null,
		ano_anterior:null,
		ano_anterior_calendar:null,
		ultima_semana_diciembre_anterior:null,
		ultimo_dia_diciembre_actual_numero:null,
		ultimo_dia_diciembre_actual_numero_calendar:null,
		ultimo_dia_diciembre_anterior_numero :null,
		ultimo_dia_diciembre_anterior_numero_calendar :null,
		ano_epid:null,
		ano_epid_calendar:null,
		semana_epid:null,
		semana_epid_calendar:null,
		acarreo_semana:null,
		json_recibido_servidor:null,
		
		


			} 
			,


	methods:{
	
		calcularFecha: function(){
	


//CALCULAMOS LA FECHA ACTUAL DEL FORMULARIO APENAS CAMBIE EL CÓDIGO DEL EVENTO COLECTIVO
			var today = moment().format('YYYY-MM-DD');

			//OBTENEMOS EL AÑO ACTUAL DE LA FECHA APENAS CAMBIE EL CÓDIGO DEL EVENTO COLECTIVO
			var ano= today; 

			var anoPublicar = parseInt(ano.substr(0,4));

//almacenamos año actual en vue			
			this.ano_actual=anoPublicar;
/*
For example, in the US, the week that contains Jan 1 is always the first week. 
In the US, weeks also start on Sunday. If Jan 1 was a Monday, Dec 31 would belong to the same week as Jan 1, and thus the same week-year as Jan 1. 
Dec 30 would have a different week-year than Dec 31.

*/

//almacenamos semana actual en vue
			var semana=moment().week();
			this.semana_actual=semana;

			
//procesamos fecha seleccionada
		var fechaSeleccionada=this.fecha_notificacion;
		

		//extraemos dia, semana, mes, año
		  var diaSeleccionadoExtraido = parseInt(fechaSeleccionada.substr(8,2));
		  var dayNumber = diaSeleccionadoExtraido;
		  var weekNumber = moment(fechaSeleccionada, "YYYYMMDD").week();
		  var monthNumber= moment(fechaSeleccionada, "YYYYMMDD").month();
		  var yearNumber = moment(fechaSeleccionada, "YYYYMMDD").year();
//almacenamos semana seleccionada mes seleccionado y año seleccionado
		  this.semana_selec=weekNumber;
		  this.mes_selec=monthNumber;
		  this.ano_selec=yearNumber;
		  this.dia_selec=dayNumber;

			//Gets the ISO day of the week with 1 being Monday and 7 being Sunday.
			//extraemos el día de la semana seleccionadoen formato número
		var diaSeleccionadoNumero=  moment(fechaSeleccionada, "YYYYMMDD").weekday();
		this.dia_semana_selec_num=diaSeleccionadoNumero;

		//validamos inicio de calendario

		//obtenemos el dia de la semana del primero de enero del año seleccionado
		var anoString=String(yearNumber);
		var diaConcatenado="-01";
		var mesConcatenado="-01";
		var anoConcatenado = anoString.concat(mesConcatenado,diaConcatenado);
		var numero_primer_dia_enero = moment(anoConcatenado,"YYYYMMDD").weekday();
		this.primer_dia_enero_num=numero_primer_dia_enero;

//variable para llevar el accarreo de la primera semana
var acarreo=0;
//variable para llevar el accarreo de la primera semana del año Ant
var acarreoAnt=0;
//variable para llevar el resto de la semana ultima
var resto=0;
//variable para llevar el resto de la semana ultima del año anterior
var restoAnt=0;
//Variable para almacenar la diferencia de dias a partir del 31 de diciembre
var diferenciaDias = 0;
//Variable para almacenar la diferencia de dias a partir del 31 de diciembre del año anterior
var diferenciaDiasAnt = 0;
// variable para validar si cuenta la ultima semana de diciembre
var cuentaUltimaSemanaDiciembre = false;

		//validamos si la semana del primero de enero cuenta como semana del año en curso
		//si está entre lunes y miercoles o es domingo, dicha semana cuenta
		if((numero_primer_dia_enero <= 3) || (numero_primer_dia_enero == 7) ){
			//significa que cae miercoles o superior
			alert("La primera semana del año suma para el año seleccionado");
			 acarreo = 1;

		}
		else{
			alert("La primera semana del año NO CUENTA para el año seleccionado");
			 acarreo=0;
		}

		//validamos final de calendario

			  //obtenemos el dia de la semana del ultimo dia del año actual
		var anoEpidemiologico = yearNumber ;
		var semanaEpidemiologica=weekNumber;

// verificamos que dia de la semana cae el 31 de diciembre del año seleccionado
//anoString tiene el año seleccionado
		var diaConcatenadoDic="-31";
		var mesConcatenadoDic="-12";
		var anoConcatenadoDic = anoString.concat(mesConcatenadoDic,diaConcatenadoDic);
		var diaNumeroUltimoDiaDiciembre = moment(anoConcatenadoDic,"YYYYMMDD").weekday();
		this.ultimo_dia_diciembre_actual_numero =diaNumeroUltimoDiaDiciembre; 



		//validamos si la semana del 31 diciembre cuenta como semana del año en curso
		//si es superior o igual a miercoles, dicha semana cuenta
		if((diaNumeroUltimoDiaDiciembre >= 3) ){

			//significa que cae miercoles o superior
			cuentaUltimaSemanaDiciembre =true;

			alert("La ultima semana del año suma para el año seleccionado");
					//validacion del conteo de la semana anterior al 31 
					//solo se hace si la semana cuenta
					switch(diaNumeroUltimoDiaDiciembre) {
						case 3:
						  // code block
						  diferenciaDias = 31 - 5;
						  break;
						case 4:
						  // code block
						  diferenciaDias = 31 - 6;

						  break;
						case 5:
						  // code block
						  diferenciaDias = 31 - 7;
						  break;
						case 6:
						  // code block
						  diferenciaDias = 31 - 8;
						  break;
						default:
						  // code block
					  }
					  	  // verificamos que dia de la semana cae el dia calculado de diferencia de dias respecto al 31
						  //anoString tiene el año seleccionado, difenciaDias tiene el dia calculado
							
						  var mesConcatenadoDic="-12";
						  var anoConcatenadoDic = anoString.concat(mesConcatenadoDic,diferenciaDias);
						  var semanaAnteriorUltimoDiaDiciembre = moment(anoConcatenadoDic,"YYYYMMDD").week();
						  
						  //El problema es que esta formula SI CUENTA la primera semana del año todas las veces
						  //no tiene en cuenta la validación inicial de si la primera semana del año entra o no en el conteo

						  //validamos el valor del accareo para llevar la cuenta correctamente

						  if(acarreo==0){
							  //significa que la semana uno no cuenta, por ende , restamos uno a la semana calculada
							  resto=1;
							  semanaAnteriorUltimoDiaDiciembre= semanaAnteriorUltimoDiaDiciembre - resto;

						  }
						  this.semana_anterior_ultima_semana_diciembre =semanaAnteriorUltimoDiaDiciembre; 
						  alert("El acarreo de la primera semana es ");
						  alert(acarreo);
						  alert("La semana anterior a la ultima semana de diciembre es : ");
						  alert(semanaAnteriorUltimoDiaDiciembre);
			

		}
		else{
			alert("La ultima semana del año NO CUENTA para el año seleccionado");

		
		}






		//proceso para validar semana 53 del año anterior  o semana 1 del año actual para los primeros dias de enero


	//validamos si se escogieron los primeros dias (menor que tres) del mes	de enero (monthNumber 0)
	if ((monthNumber==0) && (dayNumber <= 3) ){

	//verificamos si  la semana calculada da uno, lo que significa que estamos en el ámbito del primero de enero 
	if (weekNumber == 1 ){
		//selecciono uno de los primeros dias de enero
		if (acarreo==0){

		//la primera semana no cuenta


			//tenemos que mostrar la semana anterior.
			//llamamos la funcion que calcula datos de años anteriores
			this.calcularSemanasAnoAnterior();










					//La primera semana no cuenta para el año seleccionado
					anoEpidemiologico = this.ano_anterior;
					this.ano_epid = anoEpidemiologico;

					var totalSemanasAnoAnterior = this.ultima_semana_diciembre_anterior;
					this.semana_epid=totalSemanasAnoAnterior;
		}
		else{
			//la primera semana si cuenta
			anoEpidemiologico = yearNumber;
			this.ano_epid = anoEpidemiologico;
			this.semana_epid=semanaEpidemiologica;
		}


		 }//fin ámbito primero de enero
			else{

								//weekNumber no dio uno, estamos en una semana diferente a la primera
								//validacion de cualquier otro dia
								if(acarreo == 0){
									//la primera semana del año no cuenta
									semanaEpidemiologica=semanaEpidemiologica-1;
									this.semana_epid=semanaEpidemiologica;
									this.ano_epid = anoEpidemiologico;
								}
								else{
									//asignamos la semana calculada normalmente
									this.semana_epid=semanaEpidemiologica;
									this.ano_epid = anoEpidemiologico;
								}
			}//fin else		

					}//fin if 
//validamos si se escogieron los ultimos dias (mayor que 24) del mes de diciembre (monthNumber 11)
//esto porque todos los calendarios digitales toman semana 1 cuando comienza el primero de enero del año en curso
else if ((monthNumber==11) && (dayNumber > 24)){

	//verificamos si  la semana calculada da uno, lo que significa que estamos en el ámbito del primero de enero del siguiente año
 if (weekNumber == 1 ){

									if((cuentaUltimaSemanaDiciembre == true) && (acarreo == 1)){  
									
										//la ultima semana de diciembre cuenta y la primera semana tambien cuenta
										semanaEpidemiologica=53;
										this.semana_epid=semanaEpidemiologica;
										this.ano_epid = anoEpidemiologico; //NUEVA VERSION DD
										
			

								}
								else if ((cuentaUltimaSemanaDiciembre == true) && (acarreo == 0)) {
									
											//la ultima semana de diciembre cuenta pero la primera semana no
											semanaEpidemiologica=52;
											this.semana_epid=semanaEpidemiologica;
											this.ano_epid = anoEpidemiologico; //NUEVA VERSION DD
											
												
								}
								else{
								// la ultima semana de diciembre no cuenta, por tanto pertenece al siguiente año epidemiológico
					//El sistema ya asignó como semana 1 a la fecha de diciembre seleccionada, por tanto solamente la almacenamos
								this.semana_epid=semanaEpidemiologica;
								//eso si, cambiamos el año epidemiológico al siguiente
								anoEpidemiologico = yearNumber + 1;
								this.ano_epid = anoEpidemiologico;
								}
 }//fin weekNumber ==1
 else{
			//weekNumber no dio uno, estamos en el ámbito de la ultima semana del año actual
			if((cuentaUltimaSemanaDiciembre == true) && (acarreo == 1)){  
										//la ultima semana de diciembre cuenta y la primera semana tambien cuenta
										semanaEpidemiologica=53;
										this.semana_epid=semanaEpidemiologica;
										this.ano_epid = anoEpidemiologico; //NUEVA VERSION DD

			}
		//tenemos cuenta de ultima semana de diciembre, pero NO CUENTA  la primera semana de enero
		//Debemos restar uno al calculo actual de la semana
		if((cuentaUltimaSemanaDiciembre == true) && (acarreo == 0)){  
							//la ultima semana de diciembre cuenta pero la primera semana de enero no cuenta
							semanaEpidemiologica=semanaEpidemiologica - 1;
							this.semana_epid=semanaEpidemiologica;
							this.ano_epid = anoEpidemiologico; //NUEVA VERSION DD

				}
			else{

				//Dejamos la semana tal y como se calculó

				this.semana_epid=semanaEpidemiologica;
				this.ano_epid = anoEpidemiologico;
			}
 }//fin else


}//fin elseIf
//validacion de cualquier otro dia
else{
	if(acarreo == 0){
		//la primera semana del año no cuenta
		semanaEpidemiologica=semanaEpidemiologica-1;
		this.semana_epid=semanaEpidemiologica;
		this.ano_epid = anoEpidemiologico;
	}
	else{
		//asignamos la semana calculada normalmente
		this.semana_epid=semanaEpidemiologica;
		this.ano_epid = anoEpidemiologico;
	}


}

	

/*validacion ultima semana diciembre
//validamos si el ultimo dia de diciembre es mayor o igual a 3 (miercoles), es decir, esa ultima semana contaria dentro del año actual
								if((diaNumeroUltimoDiaDiciembre>=3) && (acarreoSemana==1)){
									//si esa ultima semana tiene mas dias de diciembre y ademas traemos el accareo de semana, entonces contamos la semana actual como epidemiologica en el año vigente
									semanaEpidemiologica=1;
									this.semana_epid=semanaEpidemiologica;
								}// fin if (diaNumeroUltimoDiaDiciembre>=3) && (acarreoSemana==1
								else{
									var acarreoSemana= 0;
									this.acarreo_semana=acarreoSemana;
									this.ano_epid = anoEpidemiologico;
									this.semana_epid=semanaEpidemiologica;

								}//fin else

				fin vailidacion ultima semana diciembre				*/


/*
		
var diaNumeroUltimoDiaDiciembre = moment(anoConcatenadoActual,"YYYYMMDD").weekday();
 this.ultimo_dia_diciembre_actual_numero = diaNumeroUltimoDiaDiciembre;

 this.mes_selec=monthNumber;
	//validamos si se escogieron los primeros dias (menor que tres) del mes	de enero (monthNumber 0)
if ((monthNumber==0) && (dayNumber <= 3) )
{

//validamos si el numero primer dia de enero es mayor a miercoles para calcular el año epidemiologico anterior
//en este caso validamos si el numero_primer_dia_enero es superor a miercoles (3), si es asi, la semana epidemiologica pertenece al año anterior
if(numero_primer_dia_enero > 3){


	var anoEpidemiologico = yearNumber - 1;
	this.ano_epid = anoEpidemiologico;

	//calculamos la semana epidemiologica de ese primer dia de enero que no cae miercoles
	//verificamos si el ultimo dia de diciembre cae  en un dia superior a miercoles (3), si es asi, la semana epidemiologica es la ultima del año
			  if(diaNumeroUltimoDiaDiciembre >=3 ){


				  var semanaUltimoDiaDiciembre = moment(anoConcatenadoActual,"YYYYMMDD").week();

				  //cambiamos la salida del calendario, si el retorno es 1, por tener la semana el primero de enero del siguiente año, corregimos dicho valor en la salida
				  if(semanaUltimoDiaDiciembre == 1){
					semanaUltimoDiaDiciembre =52;

				  }
				  
					  //si la ultima semana de diciembre no da 1, procedemos a guardar el dato calculado en la variable de la semana epidemiologica
					this.ultima_semana_diciembre=semanaUltimoDiaDiciembre;
					semanaEpidemiologica= semanaUltimoDiaDiciembre;
				   this.semana_epid=semanaEpidemiologica;

				  

		  
				  }//fin diaNumeroUltimodiaDiciembre
				  
/* comentario interno

//validamos si el dia seleccionado está entre 1 y 3		  	
if( dayNumber  < 4)
{
	//obtenemos el dia de la semana del ultimo dia del año anterior
var anoStringAnterior=String(anoEpidemiologico);
var diaConcatenadoAnterior="-31";
var mesConcatenadoAnterior="-12";
var anoConcatenadoAnterior = anoStringAnterior.concat(mesConcatenadoAnterior,diaConcatenadoAnterior);

//validamos si el ultimo día de diciembre  cae sabado para mantener las semanas normales, de lo contrario, restamos 1 porque en USA el primer dia del año siempre es semana 1
var diaNumeroUltimoDiaDiciembreAnterior = moment(anoConcatenadoAnterior,"YYYYMMDD").weekday();

if(diaNumeroUltimoDiaDiciembreAnterior == 6){

var semanaUltimoDiaDiciembreAnterior = moment(anoConcatenadoAnterior,"YYYYMMDD").week();
this.ultima_semana_diciembre_anterior=semanaUltimoDiaDiciembreAnterior;
	semanaEpidemiologica= semanaUltimoDiaDiciembreAnterior;
   this.semana_epid=semanaEpidemiologica;

}
else{

	semanaEpidemiologica= 52;
   this.semana_epid=semanaEpidemiologica;

  
}

}//fin validamos si el dia está entre 1 y 3
comentario interno */

/*

}//fin validacion primer dia miercoles
else{
	// el primer dia del año no es superior a miercoles (3), es decir que esa primera semana epidemiologica pertenece al año en curso, y debemos sumarle el acarreo
	var acarreoSemana=1;
	//verificamos si el ultimo dia de diciembre cae  en un dia superior a miercoles (3), si es asi, la semana epidemiologica es la ultima del año
	if(diaNumeroUltimoDiaDiciembre >=3 ){

	var semanaUltimoDiaDiciembre = moment(anoConcatenadoActual,"YYYYMMDD").week();


				  //cambiamos la salida del calendario, si el retorno es 1, por tener la semana el primero de enero del siguiente año, corregimos dicho valor en la salida
				  if(semanaUltimoDiaDiciembre == 1){
					semanaUltimoDiaDiciembre =52;

				  }
				  //como se cumplieron las condiciones anteriores, sumamos el accarreo
				  semanaUltimoDiaDiciembre=semanaUltimoDiaDiciembre+acarreoSemana;
				  
					  //si la ultima semana de diciembre no da 1, procedemos a guardar el dato calculado en la variable de la semana epidemiologica
					this.ultima_semana_diciembre=semanaUltimoDiaDiciembre;
					semanaEpidemiologica= semanaUltimoDiaDiciembre;
				   this.semana_epid=semanaEpidemiologica;

	}//fin diaNumeroUltimoDiaDiciembre
}

}//fin validacion seleccion primeros dia del mes de enero
else{

	this.ano_epid = anoEpidemiologico;
	this.semana_epid=semanaEpidemiologica;

}





*/

		},//fin funcion calcular_fecha

		calcularSemanasAnoAnterior: function(){

/* -----------------------------------------------------*/
var carreoAnt=0;
var diferenciaDiasAnt=0;
var yearNumberAnt = this.ano_selec;



	//obtenemos el dia de la semana del primero de enero del año anterior

var anoAnterior = yearNumberAnt - 1;

//almacenamos el ano anterior en el modelo 
this.ano_anterior = anoAnterior;
//obtenemos el dia de la semana del primero de enero del año anterior
//todo debe ser string para usar la funcion concat
var anoAnteriorString=String(anoAnterior);
var diaConcatenadoAnt="-01";
var mesConcatenadoAnt="-01";
var anoConcatenadoAnt = anoAnteriorString.concat(mesConcatenadoAnt,diaConcatenadoAnt);
var numero_primer_dia_enero_ant = moment(anoConcatenadoAnt,"YYYYMMDD").weekday();
this.primer_dia_enero_num_anterior=numero_primer_dia_enero_ant;

	//validamos si la semana del primero de enero cuenta como semana del año en anterior
//si está entre lunes y miercoles o es domingo, dicha semana cuenta
if((numero_primer_dia_enero_ant <= 3) || (numero_primer_dia_enero_ant == 7) ){
//significa que cae miercoles o superior
alert("La primera semana del año  anterior cuenta para el año");
acarreoAnt = 1;

}
else{
alert("La primera semana del año anterior NO CUENTA para el año");
acarreoAnt=0;
}


// verificamos que dia de la semana cae el 31 de diciembre del año anterior
var diaConcatenadoDicAnt="-31";
var mesConcatenadoDicAnt="-12";
var anoConcatenadoDicAnt = anoAnteriorString.concat(mesConcatenadoDicAnt,diaConcatenadoDicAnt);
var diaNumeroUltimoDiaDiciembreAnt = moment(anoConcatenadoDicAnt,"YYYYMMDD").weekday();
this.ultimo_dia_diciembre_anterior_numero =diaNumeroUltimoDiaDiciembreAnt; 

//validacion del conteo de la semana anterior al 31 
		//solo se hace si la semana cuenta
		switch(diaNumeroUltimoDiaDiciembreAnt) {
			case 3:
			// code block
			diferenciaDiasAnt = 31 - 5;
			break;
			case 4:
			// code block
			diferenciaDiasAnt = 31 - 6;

			break;
			case 5:
			// code block
			diferenciaDiasAnt = 31 - 7;
			break;
			case 6:
			// code block
			diferenciaDiasAnt = 31 - 8;
			break;
			default:
			// code block
		}
				// verificamos que dia de la semana cae el dia calculado de diferencia de dias respecto al 31
			//anoAnterior tiene el año seleccionado, difenciaDias tiene el dia calculado
				
			var mesConcatenadoDicAnt="-12";
			var anoConcatenadoDicAnt = anoAnteriorString.concat(mesConcatenadoDicAnt,diferenciaDiasAnt);
			var semanaAnteriorUltimoDiaDiciembreAnt = moment(anoConcatenadoDicAnt,"YYYYMMDD").week();
			
			//El problema es que esta formula SI CUENTA la primera semana del año todas las veces
			//no tiene en cuenta la validación inicial de si la primera semana del año entra o no en el conteo

			//almacenamos la semana anterior a la ultima semana de diciembre del año anterior.
			this.semana_anterior_ultima_semana_diciembre =semanaAnteriorUltimoDiaDiciembreAnt;

			//sumamos 1 a la semana anterior al ultimo dia de diciembre para encontrar el valor de la ultima semana
			var ultimaSemanaDiciembreAnt= semanaAnteriorUltimoDiaDiciembreAnt + 1;
//validamos el valor del accareo para llevar la cuenta correctamente
			if(acarreoAnt==0){
				//significa que la semana uno no cuenta, por ende , restamos uno a la semana calculada
				restoAnt=1;
				ultimaSemanaDiciembreAnt= ultimaSemanaDiciembreAnt - restoAnt;

			}
			
			this.ultima_semana_diciembre_anterior =ultimaSemanaDiciembreAnt;
			alert("El acarreo de la primera semana del año anterior  es ");
			alert(acarreoAnt);
			alert("La semana anterior a la ultima semana de diciembre del año anterior es : ");
			alert(ultimaSemanaDiciembreAnt);






/*-------------------------------*/



		},//fin calcularSemanas Anterior


	
		}, //fin methods






})//fin objeto vue



