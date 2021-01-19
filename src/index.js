document.addEventListener('DOMContentLoaded', e => {
  const domController = new DOMController
  allPups()
})

// STEP 2: ADD PUPS TO DOG BAR
function allPups() {
  fetch('http://localhost:3000/pups')
  .then(response => response.json())
  .then((pupObj) => {
    let pupSpan = document.createElement('span')
    // query div and set it equal to a variable
    let dogBar = document.querySelect('#dog-bar')
    dogBar.append(pupSpan)
  })
}

const pupSpan = document.querySelect('span')

pupSpan.addEventListener('click', function () {
  let dogInfo = document.querySelect('#dog-info')

  let img = document.createElement('img')
  let h2 = document.createElement('h2')
  let button = document.createElement('button')

  img.src = dog_image_url
  h2.name = dog_name

  if(isGoodDog) {
    button.innerText = "Good Dog!"
  } else {
    button.innerText = "Bad Dog!"
  }

  dogInfo.append(img)
  dogInfo.append(h2)
  dogInfo.append(button)


})