import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

type Props = TextFieldProps & { name: string };

export default function SBTextField(props: Props) {
  const [field, meta] = useField(props.name);
  const errorMessage = meta.touched && meta.error;
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorMessage}
      error={!!errorMessage}
    />
  );
}
