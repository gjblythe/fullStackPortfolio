module.exports = function(sequelize, DataTypes) {
  var LinkToExample = sequelize.define("LinkToExample", {
    title: DataTypes.STRING,
    href: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT
  });
  return LinkToExample;
};
