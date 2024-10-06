import css from './ContactList.module.css'

import Contact from '../Contact/Contact'

export default function ContactList({contacts, onDeleteContact}) {
    return <ul className={css.contactsList}>
        {contacts.map((contact) => {
            return <li className={css.contactItem} key={contact.id}>
                <Contact name={contact.name} number={contact.number} id={contact.id} onDeleteContact={ onDeleteContact} />
            </li>
        })}
        
    </ul>
}