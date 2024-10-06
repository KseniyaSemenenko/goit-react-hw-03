import { useState, useEffect } from 'react';

import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from '../src/components/SearchBox/SearchBox';
import ContactList from '../src/components/ContactList/ContactList';

import contactsData from './contacts.json'
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;

    return parsedContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContact = newContact => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    }
    setContacts(prevContacts => {
      return [...prevContacts, finalContact];
    });
  };
  const onDeleteContact = (contactId) => {
    const updateContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updateContacts);
}
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onChange={onAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={ onDeleteContact} />
    </div>
  );
};

export default App;
