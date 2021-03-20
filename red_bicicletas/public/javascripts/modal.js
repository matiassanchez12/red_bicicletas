
var buttons = document.getElementsByName("button");

// Con estas lineas logro que el index de mi array de botones
// Tenga el mismo valor que el Id de cada bicicleta

var arrayButtons = [];

var index = 0;

buttons.forEach(element => {
    
    index = element.className[0];

    arrayButtons[index] = element;

});

for (let i = 0; i < arrayButtons.length; i++) {

    configurarButton(i);

}

function configurarButton(index){
    
    var buttonElement = document.getElementsByClassName(index);
    
    
    if(buttonElement[0] != undefined){
        // Llave que diferencia los buttons
        var key = buttonElement[0].className[0];

        var modal = document.getElementById(`modal-form-${key}`);
        
        var closeButton = document.getElementById(`close-${key}`);

        buttonElement[0].onclick = function() {
            modal.style.display = "block";
        }

        closeButton.onclick = function(){
            modal.style.display = "none";
        }
    }
}


 
// // ID de la Bici
// var keyButton;
// console.log(button);
// for (let index = 0; index < button.length; index++) {
    
//     keyButton = button[index].className;
//     console.log(button.length);
//     console.log("key: ", keyButton);

//     // Get the button that opens the modal
//     var btn = document.getElementById(`modal-button-${keyButton}`);

//     // Get the modal
//     var modal = document.getElementById(`modal-form-${keyButton}`);

//     // Get the <span> element that closes the modal
//     // var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on the button, open the modal 
//     btn.onclick = function() {
//         if(modal.style.display == "block"){
//             modal.style.display = "none";
//         }else{
//             modal.style.display = "block";
//         }
//     }

//     // When the user clicks on <span> (x), close the modal
//     // span.onclick = function() {
//     //     modal.style.display = "none";
//     // }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//     }
// }

