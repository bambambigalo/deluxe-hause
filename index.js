// cards project//
const Mycard = cardHome()




// modal window//
const Mymodal = modal();
const modalOpen = document.getElementById('btn_main');
modalOpen.onclick = function () {
    Mymodal.open();
}
const sendRequest = document.getElementById('btn_form');
sendRequest.onclick = () => {
   
    Mymodal.setContent();
    
    
}