const index01 = document.getElementById('index01')
const input01 = document.getElementById('input01')
const forgot01 = document.getElementById('forgot01')
const label01 = document.getElementById('label01')
const label02 = document.getElementById('label02')
const loader01 = document.getElementById('loader01')
const index02 = document.getElementById('index02')
const index022 = document.getElementById('index022')
const bottom01 = document.getElementById('bottom01')
const input04 =  document.getElementById('input04')
const pass01 = document.getElementById('pass01') 
const loader02 = document.getElementById('loader02')
const password01 = document.getElementById('password01')
loader02.className = 'hidden'
pass01.className = 'hidden'
let PIN = 1020;
input04.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
        PIN = input04.value
        console.log(input04.value)
        input04.value = ""
        pass01.className = 'block'
        loader02.className = 'block'
        setTimeout(()=>{
            password01.className = 'hidden'
            index01.className = 'block'
        },1500)
    }

})

bottom01.className = 'hidden'

const display01 = document.getElementById('display01')  //they both use for tic tak toi game 
const icon08 = document.getElementById('icon08')

display01.className = 'hidden'

index02.className = 'hidden'
loader01.className = 'hidden'
label01.style.visibility = 'hidden'


input01.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {

        if (input01.value == PIN) {


            loader01.className = 'block'

            setTimeout(() => {
                index01.classList = 'hidden'
                input01.value = ''
                index02.classList = 'block'
                bottom01.className = 'block'
            }, 2500);



        }
        else {
            label01.style.visibility = 'visible'
            input01.value = ''
            setTimeout(() => {
                label01.style.visibility = 'hidden'
                index02.className = 'block'
            }, 1000)
        }
    }
    else {

    }
})

const forgot02 = document.getElementById('forgot02')
const input02 = document.getElementById('input02')
const input03 = document.getElementById('input03')

forgot02.style.visibility = 'hidden'
const h22 = document.getElementById('h22')


forgot01.addEventListener('click', () => {
    if (forgot02.style.visibility == 'hidden') {
        forgot02.style.visibility = 'visible'
    }
    else {
        forgot02.style.visibility = 'hidden'
    }
})
let oldvalue = 0;
let newvalue = 0;
input02.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        oldvalue = input02.value

    }
})

input03.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        newvalue = input03.value
        input03.value = ''
        input02.value = ''
        if (PIN == oldvalue) {
            PIN = newvalue
            h22.innerText = "password update"
            setTimeout(() => {
                h22.innerText = ''
            }, 1000)
        }
        else {
            h22.innerText = 'old password incorrect'
            setTimeout(() => {
                h22.innerText = ''
            }, 1000)
        }
    }
})
console.log(oldvalue, newvalue)

// new display after correct password this display show 


function updateTimeAndDate() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();

    const time = `${hours}:${minutes}`;
    const date = `${day}/${month}/${year}`;

    document.getElementById('time-date1').textContent = `${time}`;
    document.getElementById('time-date2').textContent = `${date}`;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();


// now we start prepare for tik tak toi game 



icon08.addEventListener('click',()=>{
    setTimeout(()=>{
        display01.className = 'block'
      
    },500)

    setTimeout(()=>{
        index02.className = 'hidden'
    },3500)
})
