var images = []
function startSideShow(){
    images = document.getElementsByClassName("project");
    var index =0;
    var time = 3000;
    images[index].classList.add("active");

    setInterval(()=> {
        images[index].classList.remove("active")
        index++
        if (index === images.length)index = 0;
        images[index].classList.add("active")

    },time)


    //console.log(images);
}

startSideShow()
