const subj = document.getElementById('subject')
const des = document.getElementById('details')
const but = document.getElementById('sub')
but.addEventListener('click',(e)=>{
  console.log(subj.value, des.value)
  let x = subj.value
  let y = des.value
  y=y + "\n TimeStamp: " + timedate()
  e.preventDefault()
  localStorage.setItem(x,y)
})


let xx =  document.getElementsByTagName('tbody')[0]
console.log(xx)
let x1 = localStorage.length
let k=0
console.log(x1)
let inn=''
for(key in localStorage){
  if(k>=x1){
    break;
  }
  inn+=`<tr>
      <td>${key}</td>
      <td>${localStorage[key]}</td>
    </tr>`
  k+=1
  console.log(k)
}
xx.innerHTML = `${inn}`
const dele = document.getElementById('dele')
const dele_all = document.getElementById('dele_all')
dele.addEventListener('click',(e)=>{
  let x = subj.value
  let y = des.value
  e.preventDefault()
  localStorage.removeItem(x)
})
dele_all.addEventListener('click',(e)=>{
  let x = subj.value
  let y = des.value
  e.preventDefault()
  localStorage.clear()
})
function timedate(){
const MonthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let AMorPM = ''
let date = new Date()
let HH = date.getHours()
let MM = date.getMinutes()
let Dates = date.getDate()
let Monts = date.getMonth()
let years =  date.getFullYear()
console.log(HH,MM,Dates,Monts,years)
if (HH>12){
  AMorPM = 'PM'
  HH = HH%12
}else{
  AMorPM = 'AM'
}
//console.log(`${HH} : ${MM} : ${AMorPM} Date: ${Dates} - ${MonthsList[Monts]}- ${years}`)
let ret = `${HH} : ${MM} : ${AMorPM} Date: ${Dates} - ${MonthsList[Monts]}- ${years}`
return ret
}
console.log(timedate())

