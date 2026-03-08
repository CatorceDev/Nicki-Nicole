const discographyContainer = document.querySelector(".discography-container")
const elementNaiki = document.querySelector(".element-naiki")
const elementParteDeMi = document.querySelector(".element-parte-de-mi")
const elementAlma = document.querySelector(".element-alma")
const elementRecuerdos = document.querySelector(".element-recuerdos")



let containerPosition
let naikiPosition
let parteDeMiPosition
let almaPosition
let recuerdosPosition

function updatePositions(){
  containerPosition = discographyContainer.getBoundingClientRect().top + window.scrollY
  naikiPosition = elementNaiki.getBoundingClientRect().top + window.scrollY
  parteDeMiPosition = elementParteDeMi.getBoundingClientRect().top + window.scrollY
  almaPosition = elementAlma.getBoundingClientRect().top + window.scrollY
  recuerdosPosition = elementRecuerdos.getBoundingClientRect().top + window.scrollY
}

updatePositions() // ← se calcula inmediatamente

window.addEventListener("load", updatePositions)
window.addEventListener("resize", updatePositions)
console.log(containerPosition)
console.log(naikiPosition)



window.addEventListener("scroll", ()=>{

    let position = window.scrollY
    
    if(position < containerPosition){
        discographyContainer.style.background = `rgb(0, 0, 0)`
    }

    if(position >= containerPosition && position <= naikiPosition){

    let progress = (position - containerPosition) / (naikiPosition - containerPosition)

    const r = Math.round(11 * progress)
    const g = Math.round(52 * progress)
    const b = Math.round(73 * progress)

    discographyContainer.style.background = `rgb(${r}, ${g}, ${b})`
}

else if(position >= naikiPosition && position <= parteDeMiPosition){

    let progress = (position - naikiPosition) / (parteDeMiPosition - naikiPosition)

    const r = Math.round(11 + (100 - 11) * progress)
    const g = Math.round(52 + (1 - 52) * progress)
    const b = Math.round(73 + (2 - 73) * progress)

    discographyContainer.style.background = `rgb(${r}, ${g}, ${b})`
}


else if(position >= parteDeMiPosition && position <= almaPosition){

    let progress = (position - parteDeMiPosition) / (almaPosition - parteDeMiPosition)

    const r = Math.round(100 + (120 - 100) * progress)
    const g = Math.round(1 + (120 - 1) * progress)
    const b = Math.round(2 + (120 - 2) * progress)

    discographyContainer.style.background = `rgb(${r}, ${g}, ${b})`
}

else if(position >= almaPosition && position <= recuerdosPosition){

    let progress = (position - almaPosition) / (recuerdosPosition - almaPosition)

    const r = Math.round(120 + (124 - 120) * progress)
    const g = Math.round(120 + (105 - 120) * progress)
    const b = Math.round(120 + (31 - 120) * progress)

    discographyContainer.style.background = `rgb(${r}, ${g}, ${b})`
}
})