// var toggler = document.getElementById("toggleButton")
var toggler = document.getElementById('toggleMenu')
let status = false


toggler.addEventListener('click' , function(){
    var listContainer = document.getElementById('link-container')

    if (status === false){
        toggler.classList.add('open')
        listContainer.classList.add('display')
        status = true
        
    }
    else{
        toggler.classList.remove('open')
        listContainer.classList.remove('display')
        status = false   
    }
})