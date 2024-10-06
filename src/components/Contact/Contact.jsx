import css from './Contact.module.css';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function Contact({ name, number, id, onDeleteContact }) {
  return (
    <div className={css.contactBlock}>
      <div className={css.contactInfo}>
        <div className={css.iconsStyle}>
          <FaRegUserCircle />
          <p className={css.contactName}>{name}</p>
        </div>
        <div className={css.iconsStyle}>
          <MdOutlinePhoneInTalk />
          <a className={css.contactPhone} href="tel:{number}">{number}</a>
        </div>
      </div>
      <button className={css.contactBtn} onClick={()=> onDeleteContact(id)}>Delete</button>
    </div>
  );
}
