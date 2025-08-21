// Darkmode for the win (IF darkmode = Sun or ELSE its Moon)
// functional code, no touch -Lene ♥
function changeLight() {
document.body.classList.toggle('darkmode')  //this toggles the darkmode
if(document.body.classList.contains('darkmode')){ //this reads if its toggled and checks if it is true
  document.getElementById('lightToggle').src= 'Images/sun.png' //if true it shows this image (sun)
}else{
  document.getElementById('lightToggle').src= 'Images/moon.png'//if false (or else) it shows this image (moon)
}
// console.log('heihei')
}


// Toggle inventory visibility - changes text from show to hide -Janssen
    function toggleInventory() {
      const box = document.getElementById('inventory-box');
      const btn = document.getElementById('toggle-btn');

      box.classList.toggle('visible');

if (box.classList.contains('visible')){
  btn.textContent = 'Hide Inventory';
} else {
  btn.textContent = 'Show Inventory';
}
}    
