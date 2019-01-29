        
     const partyNameFunction = ()=>{
     const partyName = document.querySelector("#partyName").previousElementSibling; 
     const partyNameSpan = document.querySelector("#partyNameSpan");
     }

     const hqAddressFunction = ()=>{
     const hqAddress = document.querySelector("#hqAddress").previousElementSibling; 
     const hqAddressSpan = document.querySelector("#hqAddressSpan"); 
     }

            partyName.addEventListener("focus", ()=>{
               
                partyNameFunction();
                partyNameSpan.innerHTML="Political Party Name";
                partyNameSpan.style.fontSize="14px";
                partyNameSpan.style.marginLeft = "15px";
                partyNameSpan.style.transition="font-size 0.3s linear 0s";
                partyNameSpan.style.display="inline"; 
               });

                    partyName.addEventListener("blur", ()=>{      
                        partyNameSpan.style.fontSize="0px"; 
                        partyNameSpan.style.transition="font-size 0.3s ease-in-out 0s";
                        partyNameSpan.innerHTML=""; 
                        partyNameSpan.removeAttribute("style");   
                    });

                    hqAddress.addEventListener("focus", ()=>{
                    hqAddressFunction();
                    hqAddressSpan.innerHTML="Head Quarter Address";
                    hqAddressSpan.style.fontSize="14px";
                    hqAddressSpan.style.marginLeft = "15px";
                    hqAddressSpan.style.transition="font-size 0.3s linear 0s"; 
                    });

                    hqAddress.addEventListener("blur", ()=>{
                        hqAddressSpan.innerHTML="";
                        hqAddressSpan.style.fontSize="0px"; 
                        hqAddressSpan.style.transition="font-size 0.3s ease-out 0s";
                        hqAddressSpan.innerHTML=""; 
                        hqAddressSpan.removeAttribute("style");  
                    });
     