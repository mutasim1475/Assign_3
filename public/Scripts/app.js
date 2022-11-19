// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started")

        let deleteButtons = document.querySelectorAll('.fa-delete2')
    for(button of deleteButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure? "))
            {
                event.preventDefault()
                window.location.assign('/Standings')
            }
        });

    }
    }
    window.addEventListener("load",Start)
})()