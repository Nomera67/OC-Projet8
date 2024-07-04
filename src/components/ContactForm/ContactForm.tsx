import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss';

function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSociety, setContactSociety] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const contactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formParams = {
      name: contactName,
      surname: contactSurname,
      email: contactEmail,
      society: contactSociety,
      message: contactMessage,
    };

    emailjs.send('service_trvdq6k', 'template_qlk5l6c', formParams, 'Nbhs3BIADrtWphID2')
      .then((result) => {
        console.log(result.text);
        setContactName('');
        setContactSurname('');
        setContactEmail('');
        setContactSociety('');
        setContactMessage('');
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 5000);
      }, (error) => {
        console.log(error.text);
        alert('Une erreur s\'est produite lors de l\'envoi de votre message.');
      });
  };

  return (
    <div className="form__page">
      <div className="form__container">
        <h1 className="form__title">
          <span>Let's</span>
          <span>get</span>
          <span>in</span>
          <span>touch</span>
        </h1>
        <form className="form" onSubmit={contactSubmit}>
          <div className="form__item form__grid1">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nom *"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__item form__grid2">
            <label htmlFor="surname">
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Prénom *"
                value={contactSurname}
                onChange={(e) => setContactSurname(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__item form__grid3">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre email *"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__item form__grid4">
            <label htmlFor="society">
              <input
                type="text"
                id="society"
                name="society"
                placeholder="Votre société"
                value={contactSociety}
                onChange={(e) => setContactSociety(e.target.value)}
              />
            </label>
          </div>
          <div className="form__message form__grid5">
            <label htmlFor="message">
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Votre message *"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form__buttons form__grid6">
            {isMessageSent && <p className="form__success">Votre message a bien été envoyé</p>}
            <button className="form__buttons__submit buttons" type="submit" disabled={!contactName || !contactSurname || !contactEmail || !contactMessage}>
              Envoyer
            </button>
            <button className="form__buttons__cancel buttons" type="reset" onClick={() => {
              setContactName('');
              setContactSurname('');
              setContactEmail('');
              setContactSociety('');
              setContactMessage('');
            }}>
              Annuler
            </button>
          </div>
        </form>
        <span className="form__need">* : Champs obligatoires</span>
      </div>
    </div>
  );
};

export default ContactForm;
