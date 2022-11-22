import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { MdOutlineContactPhone } from 'react-icons/md';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'components/Box/Box';
import { Title, SupTitle, Message } from './App.styled';
import data from '../../data/data.json';
import { Modal } from 'components/Modal/Modal';
import { ModalBtn } from './App.styled';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
    showModal: false,
  };
  componentDidMount() {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    this.toggleModal();
  };
  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return visibleContacts;
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { contacts, filter, showModal } = this.state;

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
          <ModalBtn onClick={this.toggleModal} aria-label="Add contact">
            <MdOutlineContactPhone /> Add contact
          </ModalBtn>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <ContactForm
                onSubmit={this.addContact}
                onChange={contacts}
                contactsArr={contacts}
                onClose={this.toggleModal}
              />
            </Modal>
          )}
        </Box>
        <Box as="section">
          <SupTitle>Contacts</SupTitle>
          {contacts.length > 1 && (
            <Filter value={filter} onChange={this.handleFilter} />
          )}
          {contacts.length < 1 ? (
            <Message>There are no contacts in your phonebook</Message>
          ) : (
              <ContactList
                contacts={this.getVisibleContacts()}
                onDeleteContact={this.deleteContact}
              />
            ) && this.getVisibleContacts().length < 1 ? (
            <Message>No matches for your search</Message>
          ) : (
            <ContactList
              contacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Box>
      </Box>
    );
  }
}
