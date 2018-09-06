const storage = window.localStorage

const renderContacts = () => {
  const storage = window.localStorage
 const contacts = JSON.parse(storage.getItem('contacts'))

  let div = document.querySelector('.contact-list')

  if(contacts) {
    div.innerHTML = ''
    
    const ul = document.createElement('ul')
    
    contacts.forEach(contact => {
      let li = document.createElement('li')
      li.innerHTML = `
    <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
    <div class="card sm:flex sm:items-center px-6 py-4">
      <img class="image block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="img/Portrait_Placeholder.png" alt="Portrait_Placeholder">
      <div class="text-center sm:text-left sm:flex-grow">
        <div class="content mb-4">
          <p class="text-xl leading-tight">${ contact.name }</p>
          <p class="text-sm leading-tight text-grey-dark">${ contact.company }<br>
          ${ contact.notes }<br>
          ${ contact.phone } | ${ contact.email } | 
          <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
          </p>
        </div>
        <div>
          <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-grey text-grey hover:bg-grey hover:text-white"><a href="mailto:webmaster@example.com">Message</a></button>
        </div>
      </div>
    </div>
  </div>
  &nbsp;
   `
   ul.appendChild(li)
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p> You have no contacts in your address book</p>'
  }
}
    document.addEventListener('DOMContentLoaded', () => {
      renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
  
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }

      console.log(`Saving the following contact: ${JSON.stringify(contact)}`)

      //storage.setItem('contacts', JSON.stringify([contact]))
      
      let contacts = JSON.parse(storage.getItem('contacts')) || []

      contacts.push(contact)

      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset()
  
    })
  })