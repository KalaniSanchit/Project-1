const users = [];

getUsers = (req, res) => {
  res.status(200).json(users);
};
createUsers = (req, res) => {
  const reqData = req.body;
  users.push(reqData);
  res.status(201).json("sucssesfully added user");
};

module.exports = { getUsers, createUsers };
