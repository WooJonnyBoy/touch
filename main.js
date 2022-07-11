window.addEventListener('load', (e)=> {
(function() {
    let i = 0
    let num = document.querySelector('.box')
    let arrow = document.querySelectorAll('.arrow')
    let letter = 'абвгґдеєжзиіїйклмнопрстуфхчцшщьюя'
    let lerarr = Array.from(letter.toUpperCase())
    num.textContent = lerarr[0]
    document.addEventListener('click', addletter)
    function addletter(e) {
        if(e.target == arrow[0]) {
            e.preventDefault()
            i--
            if(i < 0) {i = 32}
            num.textContent = lerarr[i]
            num.style.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
            
        }
        if(e.target == arrow[1]) {
            e.preventDefault()
            i++
            if(i > 32) {i = 0}
            num.textContent = lerarr[i]
            num.style.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
            
        }
        }
})()

function random(min, max) {
    let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1))
    return rand
}
})

