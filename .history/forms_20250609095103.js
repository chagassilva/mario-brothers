

const formshow = document.querySelector('.form-slide-left')
const buttonshow = document.querySelector('.btn-buttonshow')




buttonshow.addEventListener('click', function() {


if(formshow.style.visibility === 'hidden' || formshow.style.visibility === '') {

    formshow.style.visibility = "visible"
    formshow.style.transition = "all 0.5s"
    formshow.style.marginLeft = "300px"
    

}else{


    formshow.style.visibility === "hidden"
    formshow.style.marginLeft = "-300px"
    formshow.style.transition = "all 0.5s"

}


})


console()