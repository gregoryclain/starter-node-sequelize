const { DataTypes } = require("sequelize/dist")

module.exports = (sequelize, Datatypes) => {
  const Post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
      description: {
      type: DataTypes.TEXT,
    },
  })

  return Post;
}