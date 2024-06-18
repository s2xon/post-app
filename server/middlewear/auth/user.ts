interface User {
  id?: string;
  token?: string;
  refresh_token?: string;
  email?: string;
  displayName?: string;
}

let user: User = {
  id: undefined,
  token: undefined,
  refresh_token: undefined,
  email: undefined,
  displayName: undefined,
};

export function getUser() {
  return user;
}

export function authUser(
  id: string,
  token: string,
  refresh_token: string,
  email: string,
  displayName: string,
): User {
  user.id = id;
  user.token = token;
  user.refresh_token = refresh_token;
  user.email = email;
  user.displayName = displayName;
  return {
    id: id,
    token: token,
    refresh_token: refresh_token,
    email: email,
    displayName: displayName,
  };
}
