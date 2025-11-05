const { response } = require('./app');
const User = require('./model');


const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json({ message: 'An error occurred!' });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  user.save()
    .then(response => {
      res.json({ message: 'User added successfully' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
}

const UpdateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { name: name })

    .then(response => {
      res.json({ message: 'User updated successfully' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};

const UserDelete = (req, res, next) => {
  const { id } = req.body;

  User.deleteOne({ id: id })
    .then(response => {
      res.json({ message: 'User deleted successfully' });
    })
    .catch(error => {
      res.json({ message: 'An error occurred!' });
    });
};


exports.getUsers = getUsers;


exports.getUsersByID = getUsersByID;
exports.addUser = addUser;
exports.UpdateUser = UpdateUser;
exports.UserDelete = UserDelete;
