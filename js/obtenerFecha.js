
//your function
var obtenerFecha = function(event){
  

  //validamos si está vacío el campo
  if(document.getElementById('anoIngresado').value == "" || document.getElementById('anoIngresado').value == null ){
    alert("EL AÑO NO PUEDE QUEDAR VACÍO");
    document.getElementById('mensaje').innerHTML = "EL AÑO NO PUEDE QUEDAR VACÍO";
    //llamamos a la función que carga el año actual

    cargaAnoActual();
  }
  else{
//si hay datos

              // Check browser support
          if (typeof(Storage) !== "undefined") {

            var anoIngresadoCajaTexto = document.getElementById('anoIngresado').value;
            //alert(anoIngresadoCajaTexto);

            // Store
            localStorage.ano =anoIngresadoCajaTexto;
            // Retrieve
            document.getElementById('mensaje').innerHTML = localStorage.ano;

            //colocamos el valor digitado en la caja de texto
            //element.setAttribute(attributename, attributevalue)
            document.getElementById('anoIngresado').setAttribute('value', localStorage.ano);
            //document.getElementById('anoIngresado').value = localStorage.ano;

          } else {
              //el navegador no soporta l
            document.getElementById('mensaje').innerHTML = "Lo lamento, el navegador que usa no soporta Web Storage...";
          }
    
  //previene que se refresque
 // event.preventDefault();

  }


  };//fin obtenerFEcha

    
// your form
var form = document.getElementById("calendario");

// attach event listener
form.addEventListener("submit", obtenerFecha, true);

