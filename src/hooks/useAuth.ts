import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useApi from '../components/ApiContext';
import { User } from '../schemas/User';

export default function useAuth() {
  const api = useApi();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  api.auth
    .getProfile()
    .then((res) => setUser(res.data))
    .catch((err) => {
      const userIsNotLoggedIn = err instanceof AxiosError && err.code === '401';

      toast.error(
        userIsNotLoggedIn
          ? 'Not logged in'
          : 'Cannot identify you, please log in again'
      );

      navigate('/log-in');
    });

  return user;
}
