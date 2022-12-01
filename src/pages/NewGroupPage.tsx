import {
  Backdrop,
  CircularProgress,
  Button,
  Container,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import SBTextField from '../components/SBTextField';
import { GroupCreation, GroupCreationSchema } from '../schemas/GroupCreation';
import { useEffect, useState } from 'react';
import useApi from '../components/ApiContext';
import { Group } from '../schemas/Group';
import * as y from 'yup';

export default function NewGroupPage() {
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    api.groups.getAll().then((res) => setGroups(res.data));
  }, [api]);

  return (
    <Container>
      <Backdrop sx={{ zIndex: 999999 }} open={loading}>
        <CircularProgress />
      </Backdrop>
      <Typography variant="h1">New Group</Typography>
      <Formik<GroupCreation>
        initialValues={{
          name: '',
          kind: 'expense',
        }}
        validationSchema={GroupCreationSchema.concat(
          y.object({
            name: y.string().notOneOf(groups.map((g) => g.name)),
          })
        )}
        onSubmit={async (data) => {
          setLoading(true);
          await api.groups.create(data);
          setLoading(false);
        }}
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
