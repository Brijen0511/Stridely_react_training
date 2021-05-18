import TextInput from 'components/TextInput';

export const fields = [
  {
    name: 'Fname',
    initialValue: '',
    component: TextInput,
    label: 'First Name',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'Lname',
    initialValue: '',
    component: TextInput,
    label: 'Last Name',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'password',
    initialValue: '',
    component: TextInput,
    label: 'Password',
    type: 'password',
    validate: value => {
      if (!value) {
        return 'required';
      }
      if (document.getElementsByName('confirmPassword')[0].value !== value) {
        return 'password not match with confirm password';
      }
      return '';
    },
  },
  {
    name: 'confirmPassword',
    initialValue: '',
    component: TextInput,
    label: 'ConfirmPassword',
    type: 'password',
    validate: value => {
      if (document.getElementsByName('password')[0].value !== value) {
        return 'password not match with confirm password';
      }
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
];

export const initialValues = fields.reduce((p, c) => ({ ...p, [c.name]: c.initialValue }), {});