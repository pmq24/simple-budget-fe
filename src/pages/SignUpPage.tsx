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
import ServerError from '../schemas/ServerError';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const api = useApi();
  const navigate = useNavigate();
  const [isCreating, setCreating] = useState(false);

  return (
    <Formik<UserCreation>
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={UserCreationSchema}
      onSubmit={async (formData) => {
        setCreating(true);
        try {
          const res = await api.auth.signUp(formData);
          toast.info(`Signed up successfully as ${res.data.email}!`);

          await api.auth.logIn(formData);
          toast.info(`Logged in successfully as ${res.data.email}!`);

          navigate('/transactions');
        } catch (error) {
          throw new ServerError(error);
        } finally {
          setCreating(false);
        }
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
