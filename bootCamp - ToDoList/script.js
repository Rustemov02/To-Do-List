let addBtn = document.querySelector('.btn')
let ul = document.querySelector('ul')
let t
let icon = document.querySelector('#list-input')
let input = document.querySelector('#main-input')
// let inputValue = document.querySelector('#main-input').value
let inputValue;
let arr = []
let sortBtn = document.querySelector('.sorter')


function check() {

  if (ul.children.length == 0) {
    ul.classList.add('del')
  }
}

function createNewList() {


  let li = document.createElement("li")

  li.className = 'myLi'
  li.classList.add('li')
  let input = document.querySelector('#main-input')
  inputValue = document.querySelector('#main-input').value
  let t = document.createTextNode(inputValue)
  li.appendChild(t)

  if (inputValue == "") {
    alert('You must write something :)')

  } else if (inputValue.length > 15) {
    let yazi = inputValue.substr(0, inputValue.length - (inputValue.length - 15))
    li.innerHTML = yazi
    ul.append(li)
    // arr.push(inputValue)
  } else {

    ul.append(li)
    arr.push(inputValue)

    ul.classList.remove('del')
    ul.classList.add('myUl')
  }

  input.value = ""

  //create the 'close' icon
  let span = document.createElement("span")
  span.className = 'close'
  let txt = document.createTextNode('\u00D7')
  span.appendChild(txt)
  li.append(span)

  span.onclick = () => {
    li.remove()
    check()

  }
}

sortBtn.addEventListener('click', () => {

  //  for (let i = 0; i < inputValue.length; i++) {
  //     arr[i] = inputValue[i] 
  //   }


  arr.sort()
  console.log(arr)
})

addBtn.addEventListener('click', createNewList)

