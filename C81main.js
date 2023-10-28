canvas = document.getElementById("myCanvas");


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.linewidth = 1;
ctx.rect(150, 143, 430 ,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 10;
ctx.arc(250, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 10;
ctx.arc(350, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 10;
ctx.arc(450, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.linewidth = 10;
ctx.arc(300, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 10;
ctx.arc(400, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();