import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { MdOutlineContactPhone } from 'react-icons/md';
import { mask } from 'constants/phoneValidate';
import { toast } from 'react-toastify';
import { Notification } from 'components/Notifications/Notifications';
import { toastOptions } from 'settings/toastOptions';
import { FiX } from 'react-icons/fi';
import { schema } from '../../constants/schema';

import {
  PbForm,
  ModalTitle,
  Label,
  LabelName,
  InputField,
  ErrorMessageField,
  SubmitBtn,
  InputMaskField,
  ErrorIcon,
  CloseModalBtn,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

export const ContactForm = ({ onSubmit, contactsArr, onClose }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameArr = contactsArr.map(contact => contact.name.toLowerCase());
    if (nameArr.includes(name.toLowerCase())) {
      return toast.warn(`${name} is already in contacts.`, toastOptions);
    }
    onSubmit(name, number);
    resetForm();
  };
  return (
    <>
      <CloseModalBtn type="button" onClick={onClose}>
        <FiX />
      </CloseModalBtn>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <PbForm>
          <ModalTitle>Enter name and phone number</ModalTitle>
          <Label>
            <LabelName>Name</LabelName>
            <InputField type="text" name="name" placeholder="Bruce Lee" />
            <ErrorMessage name="name" component="div">
              {msg => (
                <ErrorMessageField>
                  {<ErrorIcon />}
                  {msg}
                </ErrorMessageField>
              )}
            </ErrorMessage>
          </Label>
          <Label>
            <LabelName>Number</LabelName>
            <InputField name="number">
              {({ field }) => (
                <InputMaskField
                  {...field}
                  mask={mask}
                  placeholder="(012)-345-6789"
                  type="tel"
                />
              )}
            </InputField>

            <ErrorMessage name="number" component="div">
              {msg => (
                <ErrorMessageField>
                  {<ErrorIcon />}
                  {msg}
                </ErrorMessageField>
              )}
            </ErrorMessage>
          </Label>
          <SubmitBtn type="submit">
            <MdOutlineContactPhone />
            Add contact
          </SubmitBtn>
        </PbForm>
      </Formik>
      <Notification />
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsArr: PropTypes.array.isRequired,
};
