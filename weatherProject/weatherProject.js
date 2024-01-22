let btn=document.getElementById('mag')
let form=document.getElementById('search')
let bod=document.querySelector('body')
let container=document.getElementById('container')
let newdiv=document.createElement('div')
let img=['url(src/img/1.jpg)','url(src/img/2.jpg)','url(src/img/3.jpg)','url(src/img/4.jpg)',
'url(src/img/5.jpg)','url(src/img/6.jpg)','url(src/img/7.jpg)','url(src/img/8.jpg)','url(src/img/9.jpg)']
function bgimg(){
    let x=Math.floor((Math.random())*9)
    console.log(x)
    bod.style.backgroundImage=img[x]
}
bgimg()
let information=[
{city:'Bojnord',temperature:'2C',humidity:'93%',wind:'8 km/h'},
{city:'Tehran',temperature:'8C',humidity:'44%',wind:'0 km/h'},
{city:'Mashhad',temperature:'4C',humidity:'78%',wind:'11 km/h'},
{city:'Tabriz',temperature:'2C',humidity:'77%',wind:'11 km/h'},
{city:'Yazd',temperature:'7C',humidity:'64%',wind:'8 km/h'}]


function search(){
    bgimg()
    newdiv.innerHTML=''
    let c=form.value
    let x=information.findIndex(function(e){
        return e.city==c
    })
    let newh2=document.createElement('h2')
    newh2.innerHTML='Weather in ' + information[x].city
    newh2.style.color='whitesmoke'
    let deg=document.createElement('h2')
    deg.innerHTML=information[x].temperature
    deg.style.color='whitesmoke'
    let h=document.createElement('h4')
    h.innerHTML='Humidity: ' + information[x].humidity
    h.style.color='whitesmoke'
    let w=document.createElement('h4')
    w.innerHTML='Wind Speed: ' + information[x].wind
    w.style.color='whitesmoke'
    newdiv.append(newh2)
    newdiv.append(deg)
    newdiv.append(h)
    newdiv.append(w)
    container.append(newdiv)
}

btn.addEventListener('click',search)
