import user from "../modells/user.js";

// Retrievs all the user from the database
export const auth = async (req, res, next) => {
  try {
    const users = await user.find();
    res.status(200).json({ status: true, data: users });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
};

// Creates a new user in the database
export const createUser = async (req, res, next) => {
  try {
    const newUser = new user(req.body);
    await newUser.save();
    res.status(200).json({ status: true, data: newUser });
  } catch (err) {
    next(err);
  }
};

// Check login info
export const checkUser = async (req, res, next) => {
  try {
    const db_user = await user
      .find({ Username: req.body.Username, Password: req.body.Password })
      .limit(1);
    console.log(db_user);
    res.status(200).json({ status: true, data: db_user });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
};
