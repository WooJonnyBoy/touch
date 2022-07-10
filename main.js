let box = document.querySelector('.box')


box.addEventListener('mousedown', move)
box.addEventListener('mouseup', remove)
    
function move() {
    document.addEventListener('mousemove', cly)
}

function remove ()  {
    document.removeEventListener('mousemove', cly)
}

function cly (e) {
    let {clientX: x, clientY: y} = e
    box.style.top = `${y - 80}px`
    box.style.left = `${x - 80}px`
}

