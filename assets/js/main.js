
// for(let i=1; i<35; i++){
//     let Element = document.getElementById("profile")
//     let clone = Element.cloneNode(true);
//     clone.id= "oggetto clonato";
//     Element.after(clone);
// }

let i=1;
while(i<35){
    let Element=document.getElementById("profile");
    let clone = Element.cloneNode(true);
    clone.id="clone";
    Element.after(clone);
    i=i+1;
}