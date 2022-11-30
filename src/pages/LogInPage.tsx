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
import { toast } from 'react-toastify';
import useApi from '../components/ApiContext';
import SBTextField from '../components/SBTextField';
import { LogInData, LogInDataSchema } from '../schemas/LogInData';

export default function LogInPage() {
  const api = useApi();
  const [isLoggingIn, setLoggingIn] = useState(false);

  return (
    <Formik<LogInData>
      initialValues={{ email: '', password: '' }}
      validationSchema={LogInDataSchema}
      onSubmit={(formData) => {
        setLoggingIn(true);
        api.auth
          .logIn(formData)
          .then(() => toast.info(`Logged in successfully!`))
          .catch((error) => toast.error(error.message))
          .finally(() => setLoggingIn(false));
      }}
    >
      <Form>
        <Backdrop sx={{ zIndex: 999999 }} open={isLoggingIn}>
          <CircularProgress />
        </Backdrop>
        <Container>
          <Stack gap={2}>
            <Typography variant="h1">Log In</Typography>
            <SBTextField name="email" label="Email" />
            <SBTextField name="password" label="Password" type="password" />
            <Button type="submit" variant="contained">
              Log in
            </Button>
          </Stack>
        </Container>
      </Form>
    </Formik>
  );
}
