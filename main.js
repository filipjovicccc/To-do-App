function init() {
    let btn = document.getElementById("button")
    btn.addEventListener("click", addArticle)
}
init()

function addArticle(event) {

    let input = document.querySelector("input");
    let wrapOne = document.getElementById("wrapOne")

    const div = document.createElement("div")

    // div.classList.add("innerdiv")

    // wrapOne.innerHTML +=
    //     `<div id="source">${input.value} <button class="innerButton"></button></div>`  

    if (input.value != "") {
        div.innerHTML += `<div class="source"> <button  class = "secondInnerButton"><i class="fas fa-trash fa-2x"></i> </button> <div class="special">${input.value}</div><button class="innerButton"><i class="fas fa-arrow-circle-right fa-2x"></i> </button></div>`
        wrapOne.appendChild(div)
    } else { alert("You cant add empty to do") }



    // let innerButton = document.getElementById("innerButton")
    // innerButton.addEventListener("click", arrowNext)

    let innerButton = document.querySelectorAll(".innerButton")



    innerButton.forEach(button => {
        button.addEventListener("click", arrowNext)
    })

    let secondInnerButton = document.querySelectorAll(".secondInnerButton")

    secondInnerButton.forEach(button => {
        for (var i = 0; i < secondInnerButton.length; i++) {
            secondInnerButton[i].addEventListener('click', function () {
                this.parentNode.remove();
            });
        }
    })



    // for (var i = 0; i < secondInnerButton.length; i++) {
    //     secondInnerButton[i].addEventListener('click', function () {
    //         this.parentNode.remove();
    //     });
    // }


    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }


}



function arrowNext(event) {


    let input = document.querySelector("input");
    let wrapThree = document.getElementById("wrapThree")

    let wrapTwo = document.getElementById("wrapTwo")

    let divTwo = document.createElement("div")
    wrapTwo.appendChild(divTwo)

    divTwo.innerHTML += `<div class="source"><button class="arrowLeft"><i class="fas fa-arrow-circle-left fa-2x"></i> </button><div class="special"> ${input.value}</div> <button class="innerButton"> <i class="fas fa-arrow-circle-right fa-2x"></i></button></div>`

    let arrowLeft = document.querySelectorAll(".arrowLeft")

    for (var i = 0; i < arrowLeft.length; i++) {
        arrowLeft[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }

    arrowLeft.forEach(button => {
        button.addEventListener("click", arrowMoove)
    })


    let innerButton = document.querySelectorAll(".innerButton")


    innerButton.forEach(button => {
        button.addEventListener("click", arrowSecond)
    })

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });

    }
}

function arrowMoove(event) {

    let wrapOne = document.getElementById("wrapOne");


    let divFour = document.createElement("div");

    wrapOne.appendChild(divFour)

    let input = document.querySelector("input");

    divFour.innerHTML += `<div class="source"> <button class = "secondInnerButton"><i class="fas fa-trash fa-2x"></i> </button> <div class="special">${input.value}</div><button class="innerButton"><i class="fas fa-arrow-circle-right fa-2x"></i></button></div>`


    let secondInnerButton = document.querySelectorAll(".secondInnerButton")

    console.log(secondInnerButton)

    let innerButton = document.querySelectorAll(".innerButton")

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });

    }


    innerButton.forEach(button => {
        button.addEventListener("click", arrowNext)
    })



    for (var i = 0; i < secondInnerButton.length; i++) {
        secondInnerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }




}

function arrowSecond(event) {

    let wrapThree = document.getElementById("wrapThree")

    let divThree = document.createElement("div")

    wrapThree.appendChild(divThree)

    let input = document.querySelector("input");

    divThree.innerHTML += `<div class="source"> <button class = "secondInnerButton"><i class="fas fa-arrow-circle-left fa-2x"></i> </button> <div class="special">${input.value}</div> <button class="innerButton"> <i class="fas fa-trash fa-2x"></i> </button></div>`

    let innerButton = document.querySelectorAll(".innerButton")
    let secondInnerButton = document.querySelectorAll(".secondInnerButton")

    for (var i = 0; i < secondInnerButton.length; i++) {
        secondInnerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }




    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });

    }

    secondInnerButton.forEach(button => {
        button.addEventListener("click", arrowMooveAgain)
    })

}

function arrowMooveAgain(event) {

    let wrapTwo = document.getElementById("wrapTwo");


    let divFive = document.createElement("div");

    wrapTwo.appendChild(divFive)

    let input = document.querySelector("input");

    divFive.innerHTML += `<div class="source"><button class = "secondInnerButton"> <i class="fas fa-arrow-circle-left fa-2x"></i></button> <div class="special">${input.value}</div><button class="innerButton"><i class="fas fa-arrow-circle-right fa-2x"></i> </button></div>`


    let secondInnerButton = document.querySelectorAll(".secondInnerButton")



    let innerButton = document.querySelectorAll(".innerButton")

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });

    }


    innerButton.forEach(button => {
        button.addEventListener("click", arrowNext)
    })





    for (var i = 0; i < secondInnerButton.length; i++) {
        secondInnerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
    secondInnerButton.forEach(button => {
        button.addEventListener("click", arrowMoove)
    })
}