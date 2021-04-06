const { Post } = require('../models');

const postData = [
    {
        title: "The great book!",
        post_content: "This is an amazing story book",
        user_id: 3
    },
    {
        title: "Harry Potter!",
        post_content: "This is great novel",
        user_id: 1
    },
    {
        title: "Harry Potter1!",
        post_content: "This is great story book",
        user_id: 2

    },
    {
        title: "Harry Potter2!",
        post_content: "Amazing!",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;