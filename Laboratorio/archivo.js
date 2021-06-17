
function MostrarValoración()
{ 
  var val= document.getElementById("valor").value;
  alert ("Ha valorado con " + val+ " puntos");
  }

function mostrarCuenta()
{
    var pais= document.getElementById("país").value;
    var iban= document.getElementById("ciban").value;
    var ent= document.getElementById("entidad").value;
    var suc= document.getElementById("sucursal").value;
    var dc= document.getElementById("dc").value;
    var cuent= document.getElementById("cuenta").value;

    var ncuenta= document.getElementById("cuenta").value= (pais, iban, ent, suc, dc, cuent);
	alert ("Le informamos que su cuenta bancaria es: " + pais+ iban+ ent+ suc+ dc+ cuent);
}


function mostrarFecha()
{ 
    
  var fecha= new Date( document.getElementById("fecha").value);
  var dia = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
 
   
	alert ("La fecha seleccionada es " + dia[fecha.getDay()]); 
 
} 
 
 
 
 



 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 