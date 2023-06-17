console.log("Hola mundo");
const nombre=document.querySelector('#nombre');
const enviar=document.querySelector('#enviar');
const resultados=document.querySelector('.resultados')
const fvalida=document.querySelector('.fvalida')
// const check1=document.querySelector('#check1');
// const check2=document.querySelector('#check2');
// const check3=document.querySelector('#check3');
// const check4=document.querySelector('#check4');
const correo=document.querySelector('#correo');
const edad=document.querySelector('#edad');
const telefono=document.querySelector('#telefono')
const interes=document.querySelector('.interes')
const direccion=document.querySelector('#direccion')
enviar.addEventListener('click',valida_envia);
function valida_envia()
{
 if (nombre.value.length<=5)
 {
 resultados.innerHTML="Debes escribir un nombre con al menos 6 caracteres";
 nombre.focus(); //ubica el cursor en la caja nombre
 return 0; //no avanza a commit
 }
 var n=nombre.value;
 var er_nombre = /^([a-zA-Z\s]{3,20})$/;
 if (!er_nombre.test(n))
 {
    resultados.innerText="Campo nombre no valido.";
    nombre.focus();
    return 0; 
 }

var s = correo.value;
var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if (!filtro.test(s))
 {
 resultados.innerHTML='Introduzca un email válido';
 correo.focus();
 return 0;
 }
 var t = telefono.value;
var er_tlfono = /^([0-9]{10})+$/;
//comprueba campo teléfono de formulario
//usa el método test de expresión regular
if(!er_tlfono.test(t))
{
resultados.innerHTML="Campo telefono no válido.";
return 0; //no submit
}
if (direccion.value.length<=5)
{
resultados.innerHTML="Debes escribir una direccion con al menos 4 caracteres";
direccion.focus(); //ubica el cursor en la caja direccion
return 0; 
}
var t=direccion.value;
var er_direccion = /^([a-zA-Z0-9\_\.\-\#]{3,20})$/;
if (er_direccion.test(t))
{
   resultados.innerText="Campo de direccion no valido.";
   direccion.focus();
   return 0; 
}
 //Direccion__________________________________________________
 //Direccion__________________________________________________
 if (interes.selectedIndex==0){
    resultados.innerHTML="Debe seleccionar algun metodo de pago";
    interes.focus()
    return 0;
    }
 resultados.style.backgroundColor = 'green';
 resultados.innerHTML="Muchas gracias por enviar el formulario";
 //el formulario se envia usando el método submit() activándolo desde aquí
 function greetings(){ fvalida.submit();}
 //Agregamos un tiempo de espera para simular la que se va la informacion
 setTimeout(greetings, 2000);


}