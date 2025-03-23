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
     // modal.style.display = "block";
      //backdrop.style.display = "block"; 
      //modal.className = 'open';
      modal.classList.add('open');
      backdrop.classList.add('open');

    })
}
backdrop.addEventListener("click",function(){
  //mobilenav.style.display = 'none';
  mobilenav.classList.remove('open');
  closemodal();
});
modalnobutton.addEventListener( "click",closemodal);

function closemodal(){
  //backdrop.style.display = 'none';
  //modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');

}
togglebutton.addEventListener('click',function(){
  //mobilenav.style.display = 'block';
  //backdrop.style.display = 'block';
  mobilenav.classList.add('open');
  backdrop.classList.add('open');
});



