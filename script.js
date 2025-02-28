

let redbtn = document.getElementById('redbtn');
// console.log(redbtn);

let safariContainer = document.getElementById('container2');


redbtn.onclick = function(){
    safariContainer.style.display="none";
}


/*TO make safari move*/ 

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



