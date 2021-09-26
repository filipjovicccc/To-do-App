
(function () {
    let btn = document.getElementById("button")

    btn.addEventListener("click", addArticle)
})()

let input = document.querySelector("input");
let btn = document.getElementById("button")

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        btn.click()
    }
})

let dataValue = ""

function addArticle(event) {

    let wrapOne = document.getElementById("wrapOne")

    const div = document.createElement("div")

    if (input.value != "") {
        div.innerHTML += `<div class="source"> <button  class =
         "secondInnerButton"><i class="fas fa-trash fa-2x"></i> 
        </button> <div class="special"  > ${dataValue = input.value}
        </div><button class="innerButton">
        <i class="fas fa-arrow-circle-right fa-2x"></i>
         </button></div>`
        wrapOne.appendChild(div)
    } else { alert("You cant add empty to do") }


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

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}

function arrowNext(event) {

    let wrapTwo = document.getElementById("wrapTwo")

    let divTwo = document.createElement("div")
    wrapTwo.appendChild(divTwo)

    divTwo.innerHTML +=
        `<div class="source"><button class="arrowLeft"
    ><i class="fas fa-arrow-circle-left fa-2x"></i> 
    </button><div class="special"> ${dataValue}</div> 
    <button class="innerBt"> <i class="fas fa-arrow-circle-right fa-2x">
    </i></button></div>`


    let arrowLeft = document.querySelectorAll(".arrowLeft")

    for (var i = 0; i < arrowLeft.length; i++) {
        arrowLeft[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }

    arrowLeft.forEach(button => {
        button.addEventListener("click", arrowMoove)
    })

    let innerBt = document.querySelectorAll(".innerBt")
    console.log(innerBt)


    innerBt.forEach(button => {
        button.addEventListener("click", arrowSecond)
    })

    for (var i = 0; i < innerBt.length; i++) {
        innerBt[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}

function arrowMoove(event) {

    let wrapOne = document.getElementById("wrapOne");

    let divFour = document.createElement("div");

    wrapOne.appendChild(divFour)

    divFour.innerHTML +=
        `<div class="source"> <button class = 
    "deleteButton"><i class="fas fa-trash fa-2x"></i>
     </button> <div class="special">${dataValue}
     </div><button class="innerButton">
     <i class="fas fa-arrow-circle-right fa-2x">
     </i></button></div>`

    let deleteButton = document.querySelectorAll(".deleteButton")

    let innerButton = document.querySelectorAll(".innerButton")

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });

    }
    innerButton.forEach(button => {
        button.addEventListener("click", arrowNext)
    })


    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }
}

function arrowSecond(event) {

    let wrapThree = document.getElementById("wrapThree")

    let divThree = document.createElement("div")

    wrapThree.appendChild(divThree)

    // let input = document.querySelector("input");

    divThree.innerHTML += `<div class="source"> <button class = 
    "secondDeleteBtn"><i class="fas fa-arrow-circle-left fa-2x">
    </i> </button> <div class="special">${dataValue}
    </div> <button class="innerButton">
     <i class="fas fa-trash fa-2x"></i>
      </button></div>`

    let innerButton = document.querySelectorAll(".innerButton")
    let secondDeleteBtn = document.querySelectorAll(".secondDeleteBtn")

    for (var i = 0; i < secondDeleteBtn.length; i++) {
        secondDeleteBtn[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }

    for (var i = 0; i < innerButton.length; i++) {
        innerButton[i].addEventListener('click', function () {
            this.parentNode.remove();
        });
    }

    secondDeleteBtn.forEach(button => {
        button.addEventListener("click", arrowMooveAgain)
    })

}

function arrowMooveAgain(event) {

    let wrapTwo = document.getElementById("wrapTwo");

    let divFive = document.createElement("div");

    wrapTwo.appendChild(divFive)

    divFive.innerHTML += `<div class="source"><button class =
     "secondInnerButton"> <i class="fas fa-arrow-circle-left fa-2x">
     </i></button> <div class="special">${dataValue}
     </div><button class="innerButton">
     <i class="fas fa-arrow-circle-right fa-2x"></i> </button></div>`

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