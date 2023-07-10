
/* Este modulo corresponde al modal que aparece al presionar el boton asignar licencia en la ruta licencias*/

const  modalAsignarLicencias = (data) => {
    let valueData = false
    if (data.activo_asignado_id !== null) {
      valueData = true ;
    }
    const modalLicencia = `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

            <form action="/" method="get" id="loginForm">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Asignar licencia a un equipo</h5>
                <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="row">

                  <div class="col-sm-6">
                      <label for="activo" class="form-label">Licencia</label>
                      <input type="text" class="form-control" name="licencia"  id="licencia" placeholder="" value="${data.licencia}" required>
                  </div>
                  <div class="col-sm-6">
                      <label for="Tipo_licencia" class="form-label">Tipo_licencia</label>
                      <input type="text" class="form-control" name="tipo_licencia" id="tipo_licencia" placeholder="" value="${data.tipo_licencia}" >
                  </div>
                  <div class="col-sm-6">
                      <label for="vendedor" class="form-label">vendedor</label>
                      <input type="text" class="form-control" name="vendedor" id="vendedor" placeholder="" value="${data.vendedor}" >
                  </div>
                  <div class="col-sm-6">
                      <label for="precio" class="form-label">precio</label>
                      <input type="number" class="form-control" name="precio" id="precio" placeholder="" value="${data.precio}" >
                  </div>

                    <div class="col-sm-6">
                        <label for="activo" class="form-label">Activo a asignar</label>
                        <input type="text" class="form-control" id="activo" placeholder="" value="${(valueData) ? data.activo_asignado_id : "" }" ${ (valueData) ? "readonly" : ""}>
                    </div>
                    
                    
                    
                    
                    
              </div>
              <div class="modal-footer">
                <button type="button" onclick="removeModal()" class="btn btn-secondary" data-bs-dismiss="modal" id="cancelButton">Close</button>
                <button type="button" class="btn btn-primary" id="activoConfirmation">Guardar</button>
              </div>
              </form>
            </div>
          </div>
      </div>`

      return modalLicencia
}