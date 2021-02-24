exports.getAllUsers = (req, res) => {
  res.status(200).json({ message: 'All users' })
}

exports.createUser = (req, res) => {
  res.status(200).json({ message: 'Create User' })
}

exports.getUser = (req, res) => {
  res.status(200).json({ message: 'Get a user' })
}

exports.updateUser = (req, res) => {
  res.status(200).json({ message: 'Update User' })
}

exports.deleteUser = (req, res) => {
  res.status(200).json({ message: 'delete user' })
}
