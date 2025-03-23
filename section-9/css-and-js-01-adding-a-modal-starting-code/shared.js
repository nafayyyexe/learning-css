var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalnobutton = document.querySelector(".modal__action--negative");
var selectbutton = document.querySelectorAll(".plan button");
var togglebutton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');

//console.dir(backdrop);
/*console.dir(selectbutton);*/
for ( var i = 0;i<selectbutton.length;i++){
    selectbutton[i].addEventListener("click", function(){
      modal.style.display = "block";
      backdrop.style.display = "block"; 
    })
}
backdrop.addEventListener("click",function(){
  mobilenav.style.display = 'none';
  closemodal();
});
modalnobutton.addEventListener( "click",closemodal);

function closemodal(){
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}
togglebutton.addEventListener('click',function(){
  mobilenav.style.display = 'block';
  backdrop.style.display = 'block';
});



