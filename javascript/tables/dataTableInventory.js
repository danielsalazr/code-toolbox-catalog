// let table = new DataTable('#myTable', {


    
// });

let dataTable = document.querySelector('#myTableBody');

window.addEventListener('load', function() {
    
    // input[0].focus();
    //page = window.location.href
    const InventoryInfo = getDataTableInfo()
    // table.data = InventoryInfo
});


async function getDataTableInfo() {
    const url = 'raw-material/inventoryData/'    
    const req = await callApi(url); // Consumo de Api 

    // validar si la respuesta es ok
    if (req.res.status !== 200) {
        await swalErr('No se obtuvieron datos de inventario, por favor contacte al administrador.');
        return
    }

    // Aqui se crea el objeto de tabla en JQuery con al que se le entregan los datos para realizar 
    // el rendereo, la busqueda y el ordenamiento de los datos  
    $('#myTable').DataTable({
        "data": req.data,
        "pageLength": 25, // Set the number of records per page
        "lengthMenu": [10, 25, 50, 75, 100], // Set the available page lengths
        "columns":[
            {"data": "item_code"},
            {"data": "item_code_counterpart"},
            {"data": "item_name"},
            {"data": "cantidadesSap"},
            {"data": "available_by_und"},
            {"data": "available_by_mts"},
            {"data": "is_iva"},
        ]
    })

}