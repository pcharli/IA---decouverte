function ajouterLieu() {

  const lieu = document.getElementById("lieu").value

  const li = document.createElement("li")
  li.textContent = lieu
  li.className = "places__item"

  document.getElementById("liste").appendChild(li)

}

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault()
  alert("Merci pour votre message !")
})