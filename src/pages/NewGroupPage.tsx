import { Button, Container, MenuItem, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import SBTextField from '../components/SBTextField';
import { GroupCreation, GroupCreationSchema } from '../schemas/GroupCreation';

export default function NewGroupPage() {
  return (
    <Container>
      <Typography variant="h1">New Group</Typography>
      <Formik<GroupCreation>
        initialValues={{
          name: '',
          kind: 'expense',
        }}
        validationSchema={GroupCreationSchema}
        onSubmit={console.log}
      >
        <Form>
          <Stack gap={2}>
            <SBTextField label="Name" name="name" />
            <SBTextField label="Kind" name="kind" select>
              {['income', 'expense'].map((kind) => (
                <MenuItem key={kind} value={kind}>
                  {kind[0].toUpperCase() + kind.substring(1)}
                </MenuItem>
              ))}
            </SBTextField>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
}
