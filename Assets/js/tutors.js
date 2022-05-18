/*function to prompt users to pay inorder to book*/
function promptpay(){
    var payup = prompt("Kindly provide your M-PESA number")
    if (payup == null || payup == ""){
        txt = "NO details provided"
    } else {
        txt = "Waiting for confirmation"
    }
    alert (txt);
}