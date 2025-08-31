"use strict";
let Models = require("../models"); 

// finds all users
const getUsers = (res) => {
    Models.User.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
     })
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Models.User.findOne({ emailId: email });

    if (!user) {
      return res.status(401).json({ result: 401, error: 'User not found' });
    }

    const isMatch = password == user.password//await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ result: 401, error: 'Invalid password' });
    }

    // Optional: generate token here (JWT) if you're building auth
    res.status(200).json({ result: 200, data: user });
  } catch (err) {
    res.status(500).json({ result: 500, error: err.message });
  }
};


// creates a new user using JSON data POSTed in request body
const createUser = (data, res) => {
    console.log(data)
    new Models.User(data)
        .save()
        .then(data => res.send({result: 201, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

// updates the user matching the ID from the param using JSON data POSTed in request body
const updateUser = (req, res) => {
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, {new: true })
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

// deletes the user matching the ID from the param
const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id)
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
} 

module.exports = {
    getUsers,
    loginUser,
    createUser,
    updateUser,
    deleteUser
}