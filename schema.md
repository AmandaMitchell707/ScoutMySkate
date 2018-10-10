# `Database Schema`

## `users`
**column name**      | **data type** | **details**
---------------------|---------------|-----------------------
`id`                 | integer       | not null, primary key
`first_name`         | string        | not null
`last_name`          | string        | not null
`email`              | string        | not null, indexed, unique
`birth_date`         | date          | not null
`gender`             | string        | not null
`country`            | string        | not null
`password_digest`    | string        | not null
`session_token`      | string        | not null, indexed, unique
`created_at`         | datetime      | not null
`updated_at`         | datetime      | not null

* index on email, unique: true
* index on session_token, unique: true


## `routes`
**column name**      | **data type** | **details**
---------------------|---------------|-----------------------
`id`                 | integer       | not null, primary key
`map_center`         | array         | not null
`zoom`               | integer       | not null
`description`        | text          | optional
`completion_time`    | time          | optional
`author_id`          | integer       | not null, foreign key
`created_at`         | datetime      | not null
`updated_at`         | datetime      | not null

* index on author_id


## `comments`
**column name**      | **data type** | **details**
---------------------|---------------|-----------------------
`id`                 | integer       | not null, primary key
`body`               | text          | not null
`route_id`           | integer       | not null, foreign key
`author_id`          | integer       | not null, foreign key
`created_at`         | datetime      | not null
`updated_at`         | datetime      | not null

* index on route_id
* index on author_id


## `friends`
**column name**      | **data type** | **details**
---------------------|---------------|-----------------------
`id`                 | integer       | not null, primary key
`friender_id`        | integer       | not null, foreign key
`friendee_id`        | integer       | not null, foreign key
`created_at`         | datetime      | not null
`updated_at`         | datetime      | not null

* joins table for many to many relationship between users
* index on friender_id
* index on friendee_id
* [friender_id, friendee_id], unique: true
