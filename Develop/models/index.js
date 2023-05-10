// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    module: ProductTag,
    unique: false
  },
  as: 'ProductLinkInTag'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongToMany(Product, {
  through: {
    module: ProductTag,
    unique: false
  },
  as: 'TagLinkInProduct'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
