let box = document.querySelector('.box')


box.addEventListener('touchstart', move)
box.addEventListener('touchend', remove)
    
function move() {
    document.addEventListener('touchmovee', cly)
}

function remove ()  {
    document.removeEventListener('touchmove', cly)
}

function cly (e) {
    let {clientX: x, clientY: y} = e
    box.style.top = `${y - 80}px`
    box.style.left = `${x - 80}px`
}

