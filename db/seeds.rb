# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(
  first_name: "Bonnie",
  last_name: "Thunders",
  email: "skater1@gotham.com",
  birth_date: "1983-09-06",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "Lady",
  last_name: "Trample",
  email: "skater@victorian.com",
  birth_date: "1991-06-04",
  gender: "f",
  country: "New Zealand",
  password: "starwars"
)

User.create!(
  first_name: "Scald",
  last_name: "Eagle",
  email: "skater@denver.com",
  birth_date: "1990-03-24",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "Miracle",
  last_name: "Whips",
  email: "skater@montreal.com",
  birth_date: "1992-01-22",
  gender: "f",
  country: "Canada",
  password: "starwars"
)

User.create!(
  first_name: "Brawn",
  last_name: "Swanson",
  email: "skater@rosecity.com",
  birth_date: "1988-10-08",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "Freight",
  last_name: "Train",
  email: "skater@texas.com",
  birth_date: "1989-11-18",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "Miss Tea",
  last_name: "Maven",
  email: "skater2@gotham.com",
  birth_date: "1991-08-12",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "Optimus",
  last_name: "Grime",
  email: "skater@glasgow.com",
  birth_date: "1987-05-20",
  gender: "m",
  country: "Scotland",
  password: "starwars"
)

User.create!(
  first_name: "Metal",
  last_name: "Monk",
  email: "me@me.com",
  birth_date: "1989-12-04",
  gender: "f",
  country: "United States",
  password: "starwars"
)

User.create!(
  first_name: "V",
  last_name: "Diva",
  email: "skater3@gotham.com",
  birth_date: "1985-03-29",
  gender: "f",
  country: "United States",
  password: "starwars"
)
