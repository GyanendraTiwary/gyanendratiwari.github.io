const openBtn = document.querySelector(".js-open")
        const closeBtn = document.querySelector(".js-close")
        const likeBtn = document.querySelector(".js-like")
        var modalBg = document.querySelector(".js-modal-bg")
        var modal = document.querySelector(".js-modal")
        
        
        openBtn.addEventListener('click', function(event){
            
            
            modalBg.classList.add("active")
            modal.classList.add("active")
            
        })

        closeBtn.addEventListener('click', function(event){
            modalBg.classList.remove("active")
            modal.classList.remove("active")
        })

        likeBtn.addEventListener('click', function(event){
            modalBg.classList.remove("active")
            modal.classList.remove("active")
        })