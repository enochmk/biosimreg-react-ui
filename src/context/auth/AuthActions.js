import users from '../../data/Users';

// Search for users with login name
export const login = async ({ username, password }) => {
  const user = users.find((user) => {
    return (
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
    );
  });

  return user ? user : null;
};
