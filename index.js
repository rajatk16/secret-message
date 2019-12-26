const {
  hash
} = window.location;


const message = atob(hash.replace('#', ''))

if (message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')
  document.querySelector('h1').innerText = message;
}


document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#message-input')
  const encrypted = btoa(input.value)

  document.querySelector('#link-form').classList.remove('hide')
  document.querySelector('#message-form').classList.add('hide')

  const secret = document.querySelector('#link-input')
  secret.value = `${window.location}#${encrypted}`

  secret.select()
})