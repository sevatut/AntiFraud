export const fetchUsers = async (): Promise<any> => {
  const response = await fetch('https://dummyjson.com/users');

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};