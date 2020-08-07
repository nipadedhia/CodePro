const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  image: { type: String },
});

const Product = mongoose.model("Product", productSchema);

Product.create(
  {
    name: "HTML",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929480/CodePro/HTML_dnevok.png",
  },
  {
    name: "CSS",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/CSS3_owe731.jpg",
  },
  {
    name: "JavaScript",
    price: 500,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/JavaScript_ouobw0.png",
  },
  {
    name: "JQuery",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929481/CodePro/JQuery_e6r24f.png",
  },
  {
    name: "nodeJS",
    price: 400,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929481/CodePro/nodeJS_zohauy.jpg",
  },
  {
    name: "ReactJS",
    price: 700,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/ReactJS_kte76g.png",
  },
  {
    name: "mongoDB",
    price: 500,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/mongoDB_jnraqp.jpg",
  },
  {
    name: "Angular",
    price: 1000,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/AngularJS_azdtw2.png",
  },
  {
    name: "Java",
    price: 1000,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929480/CodePro/Java_kjvej0.jpg",
  },

  // Drop the 'coursedb' collection from the current database
  Product.db.dropCollection("products", function (err, result) {
    console.log(result);
  }),
);

module.exports = Product;
