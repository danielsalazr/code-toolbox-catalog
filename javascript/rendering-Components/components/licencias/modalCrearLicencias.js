const  modalCrearLicencias = () => {
    const modalLicencia = `
    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
          
            <div class="modal-content">
            <form action="/" method="get" id="apiForm">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registrar un Traslado</h5>
                <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="row">

                    <div class="col-sm-6">
                        <label for="activo" class="form-label">Licencia</label>
                        <input type="text" class="form-control" name="licencia"  id="licencia" placeholder="" value="" required>
                    </div>
                    <div class="col-sm-6">
                        <label for="Tipo_licencia" class="form-label">Tipo_licencia</label>
                        <input type="text" class="form-control" name="tipo_licencia" id="tipo_licencia" placeholder=""
                            value="" >
                    </div>
                    <div class="col-sm-6">
                        <label for="vendedor" class="form-label">vendedor</label>
                        <input type="text" class="form-control" name="vendedor" id="vendedor" placeholder=""
                            value="" >
                    </div>
                    <div class="col-sm-6">
                        <label for="precio" class="form-label">precio</label>
                        <input type="number" class="form-control" name="precio" id="precio" placeholder=""
                            value="" >
                    </div>
                    <div class="col-sm-6">
                        <label for="cantidad" class="form-label">cantidad Licencias</label>
                        <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="" value="" >
                    </div>
                <div class="modal-footer">
                <button type="button" onclick="removeModal()" class="btn btn-secondary" data-bs-dismiss="modal" id="cancelButton">Close</button>
                <button type="submit" class="btn btn-primary" id="activoConfirmation">Guardar</button>
                </div>
            </form>
            </div>
            </div>
        </div>`;

          return modalLicencia
}