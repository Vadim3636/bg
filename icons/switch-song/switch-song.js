let ss_el = document.querySelectorAll('switch-song');

ss_el.forEach(el => {
    el.onclick = function() {
  
        const polygons = el.querySelectorAll("polygon"),
        className = 'clicked';
    
        el.classList.toggle(className);

        if (el == undefined) {
            setTimeout(function() {
                el.click()
            }, 50);
            return;
        }
    
        
        polygons.forEach(elem => {
            elem.querySelectorAll("animate")[0].beginElement();
        });
        polygons.forEach(elem => {
            elem.querySelectorAll("animate")[1].beginElement();
        });
            
        console.log("ss js");
    }
  
});

// window.addEventListener("load", function() { setTimeout(function() { el.click(); }, 50); });