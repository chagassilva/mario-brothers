
const formcontact = document.querySelector(".form-content")
const showform = document.querySelector(".btn-orc")
const hiddenform = document.querySelector(".closed-form")



showform.addEventListener("click", () => {


        if (formcontact.style.visibility === "hidden" || formcontact.style.visibility === "") {

                formcontact.style.visibility = "visible"
                formcontact.style.marginLeft = "1000px"
                formcontact.style.transition = "all 0.5s"
                formcontact.style.top = "450px"

        } else{

                formcontact.style.visibility = "hidden"
                formcontact.style.marginLeft = "-300px"
                formcontact.style.transition = "all 0.5s"

        }

})






// hiddenform.addEventListener("click", () => {

//         formcontact.style.visibility = "hidden"
//         formcontact.style.marginLeft = "-300px"
//         formcontact.style.transition = "all 0.5s"


// })