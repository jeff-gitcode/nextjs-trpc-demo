/**
 * This is a Next.js page.
 */
import { trpc } from '../utils/trpc';
import styled from 'styled-components';

export default function IndexPage() {
  const result = trpc.userList.useQuery();
  const health = trpc.healthcheck.useQuery();

  console.log(result.data);
  if (!result.data) {
    return (
      <div style={styles}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div style={styles}>
      <h1>health: {health.data}</h1>
      <ul>
        {result.data.map((user) => {
          return (<li key={user.id}>{user.id} - {user.name}</li>);
        })
        }
      </ul>
    </div>
  );
}

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
