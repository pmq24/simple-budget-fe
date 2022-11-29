import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import useApi from '../components/ApiContext';
import SBTextField from '../components/SBTextField';
import { UserCreation, UserCreationSchema } from '../schemas/UserCreation';
import { toast } from 'react-toastify';

export default function SignUpPage() {
  const api = useApi();
  const [isCreating, setCreating] = useState(false);

  return (
    <Formik<UserCreation>
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={UserCreationSchema}
      onSubmit={(formData) => {
        setCreating(true);
        setTimeout(() => {
          api.auth
            .signUp(formData)
            .then(() => {
              toast.info('Welcome <name>!');
            })
            .catch(() => {
              toast.error(
                'Oh no! Aliens has invaded the earth and destroyed out server!'
              );
            })
            .finally(() => {
              setCreating(false);
            });
        }, 3000);
      }}
    >
      <Form>
        <Backdrop sx={{ zIndex: 999999 }} open={isCreating}>
          <CircularProgress />
        </Backdrop>
        <Container>
          <Stack gap={2}>
            <Typography variant="h1">Sign up</Typography>
            <SBTextField label="Email" name="email" />
            <SBTextField label="Password" type="password" name="password" />
            <SBTextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <Button type="submit" variant="contained">
              Sign up
            </Button>
          </Stack>
        </Container>
      </Form>
    </Formik>
  );
}
