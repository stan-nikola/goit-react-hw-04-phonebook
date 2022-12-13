import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { MdOutlineContactPhone } from 'react-icons/md';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'components/Box/Box';
import { Title, SubTitle, Message } from './App.styled';
import { Modal } from 'components/Modal/Modal';
import { ModalBtn } from './App.styled';

import data from '../../data/data.json';
export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? data
  );
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
    toggleModal();
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return visibleContacts;
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box
      minHeight={450}
      py={2}
      px={3}
      bg="primary"
      maxWidth={740}
      mx="auto"
      as="main"
      borderRadius="normal"
      mt={4}
      boxShadow="main"
    >
      <Box textAline="center" mb={30} as="section">
        <Title>PhoneBook</Title>
        <ModalBtn onClick={toggleModal} aria-label="Add contact">
          <MdOutlineContactPhone /> Add contact
        </ModalBtn>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm
              onSubmit={addContact}
              contactsArr={contacts}
              onClose={toggleModal}
            />
          </Modal>
        )}
      </Box>
      <Box as="section">
        <SubTitle>Contacts</SubTitle>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={handleFilter} />
        )}
        {contacts.length < 1 ? (
          <Message>There are no contacts in your phonebook</Message>
        ) : (
            <ContactList
              contacts={getVisibleContacts()}
              onDeleteContact={deleteContact}
            />
          ) && getVisibleContacts().length < 1 ? (
          <Message>No matches for your search</Message>
        ) : (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        )}
      </Box>
    </Box>
  );
}
