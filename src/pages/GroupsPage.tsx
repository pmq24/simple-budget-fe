import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../components/ApiContext';
import { Group } from '../schemas/Group';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export default function GroupsPage() {
  const api = useApi();
  const navigate = useNavigate();

  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    api.groups
      .getAll()
      .then((res) => setGroups(res.data))
      .catch((err) => {
        if (err instanceof AxiosError && err.code === '401') {
          navigate('/log-in');
        } else {
          toast.error(err.message);
        }
      });
  }, [api, navigate]);

  return (
    <Container>
      <Typography variant="h1">Groups</Typography>
      <List>
        <ListItemButton onClick={() => navigate('/groups/new')}>
          <ListItemText primary="NEW GROUP" />
        </ListItemButton>
        {['income', 'expense'].map((kind) => (
          <>
            <ListSubheader>
              {kind[0].toUpperCase() + kind.substring(1)}
            </ListSubheader>
            {groups
              .filter((g) => g.kind === kind)
              .map((group) => (
                <ListItem key={group.id}>
                  <ListItemText primary={group.name} />
                </ListItem>
              ))}
          </>
        ))}
      </List>
    </Container>
  );
}
