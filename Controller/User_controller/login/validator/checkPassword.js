const checkPassword = (user, password) => {
  if (user.password === password) {
    return true;
  } else {
    false;
  }
};

module.exports = {
  checkPassword,
};
