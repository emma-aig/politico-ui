<<<<<<< HEAD
const petitionFunction = ()=>{
    const petition = document.querySelector("#petition").previousElementSibling; 
    const petitionSpan = document.querySelector("#petitionSpan");
    }

           petition.addEventListener("focus", ()=>{               
               petitionFunction();
               petitionSpan.innerHTML="Your Petition";
               petitionSpan.style.fontSize="14px";
               petitionSpan.style.marginLeft = "12px";
               petitionSpan.style.transition="font-size 0.2s linear 0s";
               petitionSpan.style.display="inline"; 
              });

                   petition.addEventListener("blur", ()=>{      
                       petitionSpan.style.fontSize="0px"; 
                       petitionSpan.style.transition="font-size 0.2s ease-in-out 0s";
                       petitionSpan.innerHTML=""; 
                       petitionSpan.removeAttribute("style");   
                   }); 
=======
const petitionFunction = ()=>{
    const petition = document.querySelector("#petition").previousElementSibling; 
    const petitionSpan = document.querySelector("#petitionSpan");
    }

           petition.addEventListener("focus", ()=>{               
               petitionFunction();
               petitionSpan.innerHTML="Your Petition";
               petitionSpan.style.fontSize="15px";
               petitionSpan.style.marginLeft = "7px";
               petitionSpan.style.transition="font-size 0.2s linear 0s";
               petitionSpan.style.display="inline"; 
              });

                   petition.addEventListener("blur", ()=>{      
                       petitionSpan.style.fontSize="0px"; 
                       petitionSpan.style.transition="font-size 0.2s ease-in-out 0s";
                       petitionSpan.innerHTML=""; 
                       petitionSpan.removeAttribute("style");   
                   }); 
>>>>>>> b231b4ceea937b698008920057cf6511c8631034
    