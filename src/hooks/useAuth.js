import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return { user: null, login: () => {}, logout: () => {}, loading: true };
  }
  return context;
};

export default useAuth;