
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
      const isVisible = user.title.toLowerCase().includes(value) || user.description.toLowerCase().includes(value)
      user.element.classList.toggle("hide",!isVisible)
  })
})

fetch("product_dummy_data.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const title = card.querySelector("[data-title]")
      const image = card.querySelector("[data-image]")
      const dis = card.querySelector("[discount]")
      const pri = card.querySelector("[price]")
    
      header.textContent = user.title
      body.textContent = user.description
      title.textContent = user.brand
      image.src = user.images[0]
      dis.textContent = user.discountPercentage
      pri.textContent = user.price
      userCardContainer.append(card)
      return { title: user.title, description: user.description, element: card }
    })
  })
