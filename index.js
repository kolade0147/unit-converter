let inpEl = document.getElementById("inp-el")
let btnEl = document.getElementById("btn-el")
const metrEl = document.getElementById("metr-el")
const litrEl = document.getElementById("litr-el")
const kilsEl = document.getElementById("kils-el")

btnEl.addEventListener("click", function() {
  let meter = (inpEl.value * 0.3048).toFixed(3)
  let feet = (inpEl.value * 3.280839895).toFixed(3)
  let liter = (inpEl.value * 3.78541).toFixed(3)
  let gallons = (inpEl.value * 0.264172).toFixed(3)
  let kilos = (inpEl.value * 0.453592).toFixed(3)
  let pounds = (inpEl.value * 2.20462).toFixed(3)


  metrEl.textContent = `${inpEl.value} meters = ${feet} feet | ${inpEl.value} feet = ${meter}meter`
  litrEl.textContent = `${inpEl.value} liters = ${gallons} gallons | ${inpEl.value} feet = ${liter}liter`
  kilsEl.textContent = `${inpEl.value} kilos = ${pounds} pounds | ${inpEl.value} pounds = ${kilos}kilos`
})


