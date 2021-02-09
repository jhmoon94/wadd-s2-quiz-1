// marks 20%
// use knex to write to write the following SQL query for this mock db:
//
// Tables:
//
// listings
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |host_id     |foreign key |
// |name        |string      |
// |-------------------------|
//
// hosts
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |host_url    |string      |
// |host_since  |date        |
// |-------------------------|
//
// reviews
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |listing_id  |foreign key |
// |user_id     |foreign key |
// |-------------------------|
//
// users
// |column name |type        |
// |------------|------------|
// |id          |primary key |
// |user_name   |string      |
// |friend_id   |foreign key |
// |-------------------------|
//
// Get the user_name of user with id of 10 along with all the listing names said user made a review for.
// user_name(users), 

const knex = require('./db/client');


function g() {
  // knex query here. remember to call .toString
  return knex('users')
  .select('user.user_name', 'listings.name')
  .join('reviews', 'users.id', '=', 'reviews.user_id')
  .join('listings', 'listings.id', '=', 'reviews.listing_id')
  .where('id', 10)
  .toString();
}

g();

module.exports = g;
