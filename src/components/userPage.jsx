import * as styled from "./styles";

function UserPage({ user }) {
  return (
    <div>
      {user.map((user) => (
        <styled.userBox key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.website}</h3>
        </styled.userBox>
      ))}
    </div>
  );
}

export default UserPage;
