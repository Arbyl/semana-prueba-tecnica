'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import axios from 'axios';
import { auth, signInWithGoogle } from '../../../firebaseConfig';
import styles from './Users.module.css';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (firebaseUser) {
      axios
        .get('https://dummyjson.com/users', {
          headers: { 'app-id': process.env.NEXT_PUBLIC_APP_ID || '' },
        })
        .then((response) => setUsers(response.data.users))
        .catch((error) => console.error('Error fetching users:', error));
    }
  }, [firebaseUser]);

  if (loading) return <p>Loading...</p>;
  if (!firebaseUser) {
    return (
      <div className={styles.loginContainer}>
        <p>Acceso denegado, por favor inicia sesion para continuar</p>
        <button onClick={signInWithGoogle} className={styles.loginButton}>
          Iniciar con Google
        </button>
      </div>
    );
  }

  return (
    console.log('user entrou'),
    <div className={styles.usersContainer}>
      
      <h1>Users</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="50" className={styles.userImage} />
            <p>{user.firstName} {user.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
