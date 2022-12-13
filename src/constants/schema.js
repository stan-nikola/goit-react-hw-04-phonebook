import * as yup from 'yup';
import { phoneRegExp } from 'constants/phoneValidate';
export const schema = yup.object({
  name: yup
    .string()
    .min(4, 'Name must be at least 4 letters long')
    .max(16, 'Name must be not longer than 16 letters')
    .required(
      "Please enter name. For example Adrian, Jacob Mercer, Charles de Batz, Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please enter phone number')
    .matches(phoneRegExp, 'Phone number is not valid'),
});
