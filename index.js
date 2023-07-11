window.addEventListener('scroll',function(){
    let head = document.getElementById('header');
    let scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    let threshold = 600;
    if(scrollHeight > threshold){
        head.classList.add("bg-black");
    }
    else{
        head.classList.remove("bg-black");
    }
})