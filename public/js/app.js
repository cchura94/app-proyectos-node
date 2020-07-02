import Swal from 'sweetalert2'
import axios from 'axios';
import Proyecto from './clases/Proyecto'

var p = new Proyecto("Cristian");
p.mostrar();
/*Swal.fire({
    title: 'Correcto!',
    text: 'Funciona!!',
    icon: 'success',
    confirmButtonText: 'Cool'
  })*/

var btnEliminarProyecto = document.getElementById("btn-eliminar-proyecto");

if(btnEliminarProyecto){
  btnEliminarProyecto.addEventListener("click", (e) =>{
    
    Swal.fire({
      title: '¿Está seguro de eliminal el proyecto?',
      text: "Si eliminas perderás tu información",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        var id = e.target.dataset.id_proyecto;
        
        axios.delete("/proyecto/"+id).then((datos) => {
          console.log(datos);
        })
        //console.log(e.target.dataset.id_proyecto)


        Swal.fire(
          'Eliminado!',
          'Tu Proyecto ha sido eliminado.',
          'success'
        )
      }
    })
    

  });
}