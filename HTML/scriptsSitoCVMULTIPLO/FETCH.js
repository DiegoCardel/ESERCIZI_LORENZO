let iPiniziale = 101
let fetchButton = document.getElementById('FETCHBUTTON')
let buttonBACK = document.getElementById('BUTTONBACK')

async function getCV(ip, rete = 2) {
    //let rete = 2
    let res = await fetch('http://192.168.' + rete + '.' + ip + ':5500/cv.json')
    let cv = await res.json()
    return cv
}
async function handleButtonClick() {
    fetchButton.disabled = true
    try {
        let cv = await getCV(iPiniziale)
    }
    catch (e) {
        console.error(e)
    }
    console.log(cv)
    iPiniziale++
    fetchButton.disabled = false
}
async function buttonBacktoCV() {
    buttonBACK.disabled = true
    try {
        let cv = await getCV(iPiniziale)
    }
    catch (e) {
        console.error(e)
    }
    console.log(cv)
    buttonBACK.disabled = false
    if (iPiniziale === 101) {
        buttonBACK.disabled = true;
    } else {
        iPiniziale--;
    }
}

