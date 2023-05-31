const Blog = require("../model/model");

module.exports.get = async function () {
  let blog = await Blog.find({});
  console.log("hello");
  return blog;
};
module.exports.getById = async function (id) {
  try {
    let blog = await Blog.findOne({ id: id });
    return blog;
  } catch (err) {
    console.log(err);
  }
};

module.exports.create = async function (newone) {
  let blog = new Blog(newone);
  try {
    await blog.save();
    return true;
  } catch (err) {
    return false;
  }
};

module.exports.deleted = async function (id) {
  try {
    await Blog.deleteOne({ id: id });
    return true;
  } catch (err) {
    return false;
  }
};

module.exports.update = async function (id, updateone) {
  let blog = Blog.findOne({ id: id });
  blog = {
    id: blog.id,
    ...updateone,
  };
  await blog.save();
};
