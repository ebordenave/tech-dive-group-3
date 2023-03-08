const getUser = async (req, res) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getUser,
};
