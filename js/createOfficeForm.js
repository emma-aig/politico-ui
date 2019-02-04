<<<<<<< HEAD
     const OfficeNameFunction = ()=>{
     const OfficeName = document.querySelector("#OfficeName").previousElementSibling; 
     const OfficeNameSpan = document.querySelector("#OfficeNameSpan");
     }
 
            OfficeName.addEventListener("focus", ()=>{               
                OfficeNameFunction();
                OfficeNameSpan.innerHTML="Political Office Name";
                OfficeNameSpan.style.fontSize="14px";
                OfficeNameSpan.style.marginLeft = "15px";
                OfficeNameSpan.style.transition="font-size 0.3s linear 0s";
                OfficeNameSpan.style.display="inline"; 
               });

                    OfficeName.addEventListener("blur", ()=>{      
                        OfficeNameSpan.style.fontSize="0px"; 
                        OfficeNameSpan.style.transition="font-size 0.5s ease-in-out 0s";
                        OfficeNameSpan.innerHTML=""; 
                        OfficeNameSpan.removeAttribute("style");   
                    }); 
=======
     const OfficeNameFunction = ()=>{
     const OfficeName = document.querySelector("#OfficeName").previousElementSibling; 
     const OfficeNameSpan = document.querySelector("#OfficeNameSpan");
     }
 
            OfficeName.addEventListener("focus", ()=>{               
                OfficeNameFunction();
                OfficeNameSpan.innerHTML="Political Office Name";
                OfficeNameSpan.style.fontSize="15px";
                OfficeNameSpan.style.marginLeft = "7px";
                OfficeNameSpan.style.transition="font-size 0.2s linear 0s";
                OfficeNameSpan.style.display="inline"; 
               });

                    OfficeName.addEventListener("blur", ()=>{      
                        OfficeNameSpan.style.fontSize="0px"; 
                        OfficeNameSpan.style.transition="font-size 0.2s ease-in-out 0s";
                        OfficeNameSpan.innerHTML=""; 
                        OfficeNameSpan.removeAttribute("style");   
                    }); 
>>>>>>> b231b4ceea937b698008920057cf6511c8631034
     