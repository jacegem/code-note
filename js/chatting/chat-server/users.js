const users = [];

function addUser(id, name, room) {
  const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase())

  if (existingUser) return { error: 'Username has already been taken' }
  if (!name && !room) return { error: 'Username and room are required' }
  if (!name) return { error: 'Username is required' }
  if (!room) return { error: 'Room is required' }

  const user = { id, name, room }
  users.push(user)
  return { user }
}

function getUser(id) {
  const user = users.find(user => user.id === id);
  return user;
}

function deleteUser(id) {
  const index = user.findIndex(user => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
}

function getUsers(room) {
  return users.filter(user => user.room === room)
}

module.exports = {
  addUser,
  getUser,
  deleteUser,
  getUsers,
};