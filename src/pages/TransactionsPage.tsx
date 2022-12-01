import { Container, Typography } from '@mui/material';
import useApi from '../components/ApiContext';

export default function TransactionsPage() {
  const api = useApi();
  return (
    <Container>
      <Typography variant="h1">Transactions</Typography>
    </Container>
  );
}
