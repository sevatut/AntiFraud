export interface StoredUser {
  login: string;
  password: string;
}

export interface CurrentUser {
  login: string;
}

export function getUsers(): StoredUser[] {
  const users = localStorage.getItem("users");

  return users ? JSON.parse(users) : [];
}

export function registerUser(login: string, password: string): boolean {
  const users = getUsers();

  const userExists = users.some((user) => user.login === login);

  if (userExists) {
    return false;
  }

  users.push({login, password});

  localStorage.setItem("users", JSON.stringify(users));

  return true;
}

export function login(login: string, password: string): boolean {
  const users = getUsers();

  const user = users.find(
    (user) => user.login === login && user.password === password
  );

  if (!user) {
    return false;
  }

  localStorage.setItem("currentUser", user.login);

  return true;
}

export function logout() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser(): string | null {
  const user = localStorage.getItem("currentUser");

  return user;
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}