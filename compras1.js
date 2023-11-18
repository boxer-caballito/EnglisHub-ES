window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})

function change() {
    window.location.href= "principal.html"
}

const Req = (node) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Proceso ejecutando...")
        },2000)
    })
}

const Req1 = (node) => {
    new Promise(resolve => {
        setTimeout(() => {
            resolve("Proceso ejecutando...")
        },1000)
    })
}

async function moving () {
    try {
        let procesing = await Req1();
        alert("procesando peticion");
        alert("puerto 3000 HTTP GITHUB HOST")
        let Click = await Req();
        alert("seccion en construccion...")
    }catch (err){
        console.log(err)
    }
}
