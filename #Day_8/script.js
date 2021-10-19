const canvas=document.querySelector('#draw');

const inputs = document.querySelectorAll('.controls input');
const btn=document.querySelector('.btn')

const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle='';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=10;
let isDrawing=false;
let lastX=0;
let lastY=0;


function draw(e){
if(!isDrawing) return ;
ctx.beginPath();
// start from
ctx.moveTo(lastX, lastY);
// go to
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
[lastX, lastY] = [e.offsetX, e.offsetY];

}
function handleUpdate() {
    
  ctx.strokeStyle=`${this.value}`;
  ctx.lineWidth=`${this.value}`;
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
canvas.addEventListener('mousedown',(e)=>{
isDrawing=true;
[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);