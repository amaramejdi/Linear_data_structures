var heart = document.querySelectorAll(".bi-heart");
var remove = document.querySelectorAll(".btn-danger");
var plusBtn = document.querySelectorAll(".plusBtn");
var minusBtn = document.querySelectorAll(".minusBtn");
var qte = document.querySelectorAll(".qte");
var price = document.querySelectorAll(".price");

   

/* heart color */
Array.from(heart).map((i) => {
    i.addEventListener("click", () => {
      i.classList.toggle("bi-heart-red");
    });
  });

  /* delete item */
Array.from(remove).map((i) => {
  i.addEventListener("click", () => {
    i.parentElement.parentElement.remove();
  });
});

/* Add qte and price */
Array.from(plusBtn).map((plus) => {
    plus.addEventListener("click", () => {
      plus.nextElementSibling.innerHTML++;
      plus.parentElement.parentElementparentElement.parentElement.parentElement.lastElementChild.innerHTML =
        parseInt(
          plus.parentElement.parentElement.parentElement.firstElementChild
            .lastElementChild.innerHTML
        ) + parseInt(plus.previousElementSibling.innerHTML);
    });
  });

  /* Minus qte and price */
/* Add qte and price */
Array.from(minusBtn).map((moins) => {
    moins.addEventListener("click", () => {
      if (moins.previousElementSibling.innerHTML > 0) {
        moins.previousElementSibling.innerHTML--;
      }
      if (
        moins.parentElement.parentElement.parentElement.firstElementChild
          .lastElementChild.innerHTML > 0
      ) {
        moins.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML =
          parseInt(
            moins.parentElement.parentElement.parentElement.firstElementChild
              .lastElementChild.innerHTML
          ) -
          parseInt(
            moins.previousElementSibling.previousElementSibling
              .previousElementSibling.innerHTML
          );
      }
    });
  });

  
  
                 
                 
                 
                 
                 
                 
                 
                 
                
             /*    
                 
                 var nombreDepart=0;
                   
                   function addFunction() {
                    
                       var prec = document.getElementById('prec').value;
                       var suiv = document.getElementById('suiv').value;
                        
                       document.getElementById('suiv').value = parseInt(suiv) +parseInt(1);
                       document.getElementById('priceT').innerHTML = "Total Price: " +document.getElementById('suiv').value * document.getElementById('prix1').value+ " DT."
                   }
                 
                   document.getElementById('prec').value = nombreDepart;
                   document.getElementById('prec').value = nombreDepart;
                 
                   function redFunction() {
                    
                     document.getElementById('suiv').value -= parseInt(-1);
                     
                 }
                 */
                