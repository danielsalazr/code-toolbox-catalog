function tab (){
    

}

function sendInfo(){
    console.log("Boton presionado")
}


const input = document.querySelectorAll('input');
const sendButton = document.querySelector('#sendButton');
const table = document.querySelector("tbody");
const lenInput = input.length;

window.addEventListener('load', function() {
    input[0].focus();
});

function removeRow(rowIndx){

    const tbl = rowIndx.parentNode.parentNode.parentNode;
    const row = rowIndx.parentNode.parentNode.rowIndex;
    console.log(tbl)
    console.log(row)
    tbl.deleteRow(row-1);
}

function clearInputs(){
    for (let j=0; j < lenInput; j++) {
        input[j].value ="";
    }
    input[0].focus();
}

const objeto = {
    a: "v1",
    b: "v2",
    c: "v3",
    d: "v4",
}

console.log(input.length)
for (let i = 0; i < lenInput; i++) {
    if (input[i].id == 'campBarcode' || input[i].id =='campBarcodeFinish')
    input[i].addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            if (input[i].value == "1234567890"){
                clearInputs();
                return 0
            }
        console.log('Enter key pressed')
        if (i < lenInput-1){
            input[i+1].focus();
            console.log(i)
        } else {
            sendButton.click();
            const row = table.insertRow(0);
            const template = `<tr><td>${input[0].value}</td><td>${input[1].value}</td><td>${input[2].value}</td><td>${objeto.a}</td><td>${objeto.b}</td><td>${objeto.c}</td><td><button onclick="removeRow(this)">borrar</button></td></tr>`;
            row.innerHTML += template;
            clearInputs();

            let totalRowCount = table.rows.length;
            if (totalRowCount > 50){
                table.deleteRow(20)
            }
            console.log(totalRowCount)
            
        }

        
        
        //console.log(input[i].id)
        }
    });
}