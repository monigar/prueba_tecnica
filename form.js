const form = document.getElementById('formulario');
const usuario = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('pswd');
const cliente = document.getElementById('cliente');
const info = document.getElementById('nombre');
const edad = document.getElementById('edad');
const modelo = document.getElementById('modelo');
const precio = document.getElementById('precio');
const imagen = document.getElementById('imagen');


form.addEventListener('submit', validarForm);
function validarForm(e){
  e.preventDefault();  //evita enviar formulario hasta comprobar
  let error = 0;

  /*-----comprobar id usuario ----------*/
  if(usuario.value.length === 0 || isNaN(usuario.value)){
    error++;
    document.getElementById('control-usuario').classList.add('form-control-error');
  }else{
    document.getElementById('control-usuario').classList.remove('form-control-error');
    document.getElementById('control-usuario').classList.add('form-control-success');
  }
  /*-----comprobar email ----------*/
  if(!!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email) || email.value.length === 0){
    error++;
    document.getElementById('control-email').classList.add('form-control-error');
  }else{
    document.getElementById('control-email').classList.remove('form-control-error');
    document.getElementById('control-email').classList.add('form-control-success');
  }
  /*-----comprobar id cliente ----------*/
  if(cliente.value.length === 0 || isNaN(cliente.value)){
    error++;
    document.getElementById('control-cliente').classList.add('form-control-error');
  }else{
    document.getElementById('control-cliente').classList.remove('form-control-error');
    document.getElementById('control-cliente').classList.add('form-control-success');
  }
  /*-----comprobar información ----------*/
  if(info.value.length === 0){
    error++;
    document.getElementById('control-info').classList.add('form-control-error');
  }else{
    document.getElementById('control-info').classList.remove('form-control-error');
    document.getElementById('control-info').classList.add('form-control-success');
  }
  /*-----comprobar edad ----------*/
  if(edad.value.length === 0 || isNaN(edad.value) || edad.value < 18){
    error++;
    document.getElementById('control-edad').classList.add('form-control-error');
  }else{
    document.getElementById('control-edad').classList.remove('form-control-error');
    document.getElementById('control-edad').classList.add('form-control-success');
  }
  /*-----comprobar modelo vehículo ----------*/
  if(modelo.value.length === 0){
    error++;
    document.getElementById('control-modelo').classList.add('form-control-error');
  }else{
    document.getElementById('control-modelo').classList.remove('form-control-error');
    document.getElementById('control-modelo').classList.add('form-control-success');
  }
  /*-----comprobar precio ----------*/
  if(precio.value.length === 0 || isNaN(precio.value)){
    error++;
    document.getElementById('control-precio').classList.add('form-control-error');
  }else{
    document.getElementById('control-precio').classList.remove('form-control-error');
    document.getElementById('control-precio').classList.add('form-control-success');
  }
  /*-----comprobar selección ----------*/
  if(!document.querySelector('input[name="vehiculo"]:checked')) {
    error++;
    document.getElementById('control-tipo').classList.add('form-control-error');
    }else{
    document.getElementById('control-tipo').classList.remove('form-control-error');
    document.getElementById('control-tipo').classList.add('form-control-success');
  }
  if(error === 0){
    e.target.submit();
  }else{
    alert('todavía hay campos incorrectos');
  }
}



