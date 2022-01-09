import users from "../../data/Users";

// Search for users with login name
export const login = async (form) => {
  const user = users.find((user) => {
    return user.username.toLowerCase() === form.username.toLowerCase();
  });

  if (!user) return null;

  return user;
};
