import { Button, Container, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import SBTextField from '../components/SBTextField';
import { LogInData, LogInDataSchema } from '../schemas/LogInData';

export default function LogInPage() {
  return (
    <Formik<LogInData>
      initialValues={{ email: '', password: '' }}
      validationSchema={LogInDataSchema}
      onSubmit={console.log}
    >
      <Form>
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
