# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create!(
  first_name: "Bonnie",
  last_name: "Thunders",
  email: "skater1@gotham.com",
  birth_date: "1983-09-06",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user2 = User.create!(
  first_name: "Lady",
  last_name: "Trample",
  email: "skater@victorian.com",
  birth_date: "1991-06-04",
  gender: "f",
  country: "New Zealand",
  password: "starwars"
)

user3 = User.create!(
  first_name: "Scald",
  last_name: "Eagle",
  email: "skater@denver.com",
  birth_date: "1990-03-24",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user4 = User.create!(
  first_name: "Miracle",
  last_name: "Whips",
  email: "skater@montreal.com",
  birth_date: "1992-01-22",
  gender: "f",
  country: "Canada",
  password: "starwars"
)

user5 = User.create!(
  first_name: "Brawn",
  last_name: "Swanson",
  email: "skater@rosecity.com",
  birth_date: "1988-10-08",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user6 = User.create!(
  first_name: "Freight",
  last_name: "Train",
  email: "skater@texas.com",
  birth_date: "1989-11-18",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user7 = User.create!(
  first_name: "Miss Tea",
  last_name: "Maven",
  email: "skater2@gotham.com",
  birth_date: "1991-08-12",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user8 = User.create!(
  first_name: "Optimus",
  last_name: "Grime",
  email: "skater@glasgow.com",
  birth_date: "1987-05-20",
  gender: "m",
  country: "Scotland",
  password: "starwars"
)

user9 = User.create!(
  first_name: "Metal",
  last_name: "Monk",
  email: "me@me.com",
  birth_date: "1989-12-04",
  gender: "f",
  country: "United States",
  password: "starwars"
)

user10 = User.create!(
  first_name: "V",
  last_name: "Diva",
  email: "skater3@gotham.com",
  birth_date: "1985-03-29",
  gender: "f",
  country: "United States",
  password: "starwars"
)

SkateRoute.delete_all

SkateRoute.create!(
  author_id: user1.id,
  distance: 2.31,
  name: "Embarcadero Skate",
  city: "2001 The Embarcadero, San Francisco, CA 94133, USA",
  encoded_markers: "37.80749981626116,-122.40784103038823,37.80193896860599,-122.39960128429448,37.7805846854416,-122.38851453224834",
)

SkateRoute.create!(
  author_id: user1.id,
  distance: 2.81,
  name: "Chinatown Cruise",
  city: "1143 Pacific Ave, San Francisco, CA 94133, USA",
  encoded_markers: "37.79590518729613,-122.41411054533216,37.79787203705084,-122.40544164579603,37.798719800966964,-122.39999139707777,37.79034346668747,-122.39840352934095,37.7920730709989,-122.4158271591017",
)

SkateRoute.create!(
  author_id: user1.id,
  distance: 2.35,
  name: "Downtown Burlingame Loop",
  city: "1501 Chapin Ave, Burlingame, CA 94010, USA",
  encoded_markers: "37.576799855514444,-122.35128423945673,37.58482625077013,-122.3382379748083,37.58166341018473,-122.33270189540156,37.57496318580176,-122.34480402247675",
)
