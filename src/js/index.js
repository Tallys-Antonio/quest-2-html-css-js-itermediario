const input = document.querySelectorAll(".input")
const botao = document.querySelector(".botao")
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
console.log(campoObrigatorio)

input.forEach((input, posicao) => {
    input.addEventListener("change", function () {
        if (input.value !== "") {
            input.classList.add("borda-verde")

            campoObrigatorio[posicao].classList.remove("errado")
            input.classList.remove("borda-vermelha")
        } else {
            input.classList.remove("borda-verde")
        }
    })
})

botao.addEventListener('click', (e) => {
    e.preventDefault()
    
    input.forEach((input, posicao) => {
        if (input.value == "") {
            campoObrigatorio[posicao].classList.add("errado")
            input.classList.add("borda-vermelha")
        } else {
            campoObrigatorio[posicao].classList.remove("errado")
            input.classList.remove("borda-vermelha")
        }
    })
})