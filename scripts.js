const paragraph = document.createElement('P');

paragraph.innerHTML  = "the DOM is the bomb";

document.body.appendChild(paragraph);
// new page
var div = document.createElement('DIV');

div.style.height = '100vh';

document.body.appendChild(div);

div.addEventListener('mousemove', function(event) {
   console.log(event);
   var x = event.clientX;
   var y = event.clientY;
   div.textContent = x + ', ' + y;
   div.style.backroundcolor = 'rgb(' + x +', ' + y +',100)';
});
