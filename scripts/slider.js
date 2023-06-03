let index = 1;
mostrar(index);

function mSlide(n) {
  mostrar(index += n);
}

function actualSlide(n) {
  mostrar(index = n);
}

function mostrar(n) {
  let i;
  let slides = document.getElementsByClassName("img-carrousel");
  
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[index-1].style.display = "block";  
  
}

