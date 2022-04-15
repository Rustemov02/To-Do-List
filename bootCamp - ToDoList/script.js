let addBtn = document.querySelector('.btn')
let ul = document.querySelector('ul')
let icon = document.querySelector('#list-input')
let input = document.querySelector('#main-input')//writed for span ???
let inputValue = document.querySelector('#main-input').value
let arr = []
let sortBtn = document.querySelector('.sorter')


function check() {

  if (ul.children.length == 0) {
    ul.classList.add('del')
  }
}



function createNewList() {

  ul.classList.remove('del')
  ul.classList.add('myUl')

  let li = document.createElement("li")

  li.className = 'myLi'
  li.classList.add('li')
  let input = document.querySelector('#main-input')//writed for span ???
  let inputValue = document.querySelector('#main-input').value
  let t = document.createTextNode(inputValue)
   li.appendChild(t)

  if (inputValue == "") {
    alert('You must write something :)')

  } else if (inputValue.length > 15) {
    let yazi = inputValue.substr(0, inputValue.length - (inputValue.length-15))
    console.log(yazi) 
    li.innerHTML = yazi
    ul.append(li)
    arr.push(inputValue)
  } else {
 
    ul.append(li)
    arr.push(inputValue)

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



  sortBtn.onclick = () => {



    arr.sort((a, b) => a - b)

    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].innerHTML = `${arr[i]} <span class='close'>\u00D7</span>`
    }

    let span = document.querySelectorAll('.close')
    span.forEach((item) => {
      item.addEventListener('click', function () {
        this.parentElement.remove()
        check()
      })
    })
  }
}


addBtn.addEventListener('click', createNewList)

