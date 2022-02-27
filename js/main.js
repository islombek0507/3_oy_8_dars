var elform = document.querySelector(".form");
var elinput = document.querySelector(".form__input");
var elbtn = document.querySelector(".form__button");
var elnatija1 = document.querySelector(".natija1");
var elnatija2 = document.querySelector(".natija2");
var elnatija3 = document.querySelector(".natija3");
var elnatija4 = document.querySelector(".natija4");
var piyodaT=3.6, velikT=20.1, carT=70, samalyotT=800;
var  hisoblaP= function(masofa){
   var piyodaV= masofa/piyodaT;
   return piyodaV;
}
var  hisoblaV= function(masofa){
    var velikV=masofa/velikT;
    return velikV;
 }
var  hisoblaC= function(masofa){
    var carV=masofa/carT;
    return carV;
 }
var  hisoblaS= function(masofa){
    var samalyotV=masofa/samalyotT;
    return samalyotV;
 }

 elform.addEventListener("submit", function(evt){
     evt.preventDefault();
    elnatija1.textContent = Math.trunc( hisoblaP(elinput.value))+ " soat, \n" + (hisoblaP(elinput.value)*60)%60 + " minut";
    elnatija2.textContent = Math.trunc(hisoblaV(elinput.value)) + " soat, " + (hisoblaV(elinput.value)*60)%60 + " minut";
    elnatija3.textContent = Math.trunc(hisoblaC(elinput.value)) + " soat, " + (hisoblaC(elinput.value)*60)%60 + " minut";
    elnatija4.textContent = Math.trunc(hisoblaS(elinput.value)) + " soat, " + (hisoblaS(elinput.value)*60)%60 + " minut";
    document.querySelector("#masofa").value=""
 })