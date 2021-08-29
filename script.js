        var bgColor = document.querySelector(".js-bg-color")
        var textColor = document.querySelector(".js-text-color")
        var fontSize = document.querySelector(".js-font-size")
        var body = document.querySelector("body")

        bgColor.addEventListener('keyup',function(event){
            
            body.style.backgroundColor = event.target.value
        });

        textColor.addEventListener('keyup', function(event){
            
           body.style.color = event.target.value
        })

        body.addEventListener('keyup', function(event){

            body.style.fontSize = event.target.value +"px"
        })