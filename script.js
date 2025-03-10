

let redbtn = document.getElementById('redbtn');
// console.log(redbtn);

let safariContainer = document.getElementById('container2');

const pixelCursor = document.querySelector(".pixelCursor");

redbtn.onclick = function(){
    safariContainer.style.display="none";
    pixelCursor.style.display="none";

}


// console.log(pixelCursor);


let appleLogo = document.getElementById("appleBTN");

console.log(appleLogo)
appleLogo.addEventListener('click',function(){
    if(safariContainer.style.display == "none" && pixelCursor.style.display == "none")
    safariContainer.style.display = "block"
    pixelCursor.style.display="block"
})



let safariclone = safariContainer.cloneNode(true);

let plusTabbtn = document.getElementById('plus');


let i = 6;
let newTab = document.createElement('div');
newTab.id = 'temp';
document.body.appendChild(newTab);
plusTabbtn.addEventListener('click',function(){


if(newTab.childNodes.length < 6){
    newTab.appendChild(safariclone)
    safariclone.setAttribute('style',`transform:translate(${i}vw,0vh)`);
    safariclone.setAttribute('class',`safariclone`)
}

safariclone.childNodes[0]

let safariStatusClone = safariclone.childNodes[1];
let redBtnClone = safariStatusClone.childNodes[1].childNodes[1];

redBtnClone.addEventListener('click',function(){
safariclone.remove();
})


},false)




/*TO make safari move----------------------*/ 

let mousePosition;
let offset = [0,0];
let isDown = false;

safariContainer.addEventListener('mousedown',function(e){
    isDown = true;
    offset = [
        safariContainer.offsetLeft - e.clientX,
        safariContainer.offsetTop - e.clientY
    ];
},true);

document.addEventListener('mouseup',function(){
    isDown = false;
},true);

document.addEventListener('mousemove',function(event){
    event.preventDefault();
    if(isDown){
        mousePosition = {
            x:event.clientX,
            y:event.clientY
        };
        safariContainer.style.left = (mousePosition.x + offset[0]) + 'px';
        safariContainer.style.top = (mousePosition.y + offset[1]) + 'px';

    }
},true);



