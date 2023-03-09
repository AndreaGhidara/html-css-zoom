    let i=1;
    while(i<35)
        {
let Element= document.getElementById("profile");
let clone = Element.cloneNode(true);
clone.id="coppia"+1;
Element.after(clone);
i=i+1
}