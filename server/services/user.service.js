const userData = require("../data/user.data.json");

const getData = (req, res) => {
  res.status(200).json({
    data: userData[0],
    message: "success",
    success: true,
  });
};

const updateData = (req, res) => {
  const { userid } = req.query;
  const newData = req.body;
  userData.find((user) => {
    if ((user.id = userid)) {
      res.status(200).json({
        data: {
          ...user,
          ...newData,
        },
        message: "success",
        success: true,
      });
    }
  });
};

module.exports = {
  updateData,
  getData
};
