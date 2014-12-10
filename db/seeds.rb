# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_1 = User.create(username: 'thinhthinh', password: 'flatiron')
user_2 = User.create(username: 'flatironschool', password: 'flatiron')
user_3 = User.create(username: 'joshuabamboo', password: 'flatiron')
user_4 = User.create(username: 'shinee', password: 'flatiron')
user_5 = User.create(username: 'lovelace', password: 'flatiron')

#User 1 Secrets
user_1.secrets.create(address: '11 Broadway, New York, NY', message: 'I always want to experiment with hellos. How about a graze of the face?', song: 'https://soundcloud.com/pearlywhite/solitude2')
user_1.secrets.create(address: 'Kyoto, Japan', message: 'A story like mine has never been told. Memoirs of a Geisha stole that from me.')

#User 2 Secrets
user_2.secrets.create(address: 'Princeton University, Princeton, NJ', message: 'I once stole a golf cart while on shrooms. I drove and spoke to the cart all night.')
user_2.secrets.create(address: 'Eiffel Tower, Anatole France Avenue, Paris, France', message: 'I though I would catch the lovebug is Paris. I caught something an STD instead.')

#User 3 Secrets
user_3.secrets.create(address: '11 Broadway, New York, NY', message: 'I sometimes wear a hoody and t-shirt to feel smarter.')

#User 4 Secrets
user_4.secrets.create(address: 'Leaning Tower of Pisa, Piazza del Duomo, Pisa, Italy', message: 'I am such a bad cook but love to eat. I was so hungry when I got here, forgot to take a photo.')
user_4.secrets.create(address: '11 Broadway, New York, NY', message: 'I want to write a love letter to myself. It will be in binary.', song: 'https://soundcloud.com/thisnao/nao-take-control-of-you')

#User 5 Secrets
user_5.secrets.create(address: '11 Broadway, New York, NY', message: 'I slept here three nights in a row. I wore the same shirt and no one noticed. I wish someone had.', song: 'https://soundcloud.com/tokimonsta/lupe-fiasco-x-tokimonsta-superstar-remix')
user_5.secrets.create(address: 'Kaffe 1668, Greenwich Street, New York, NY', message: 'I would rather give up sex than coffee. What does that say about my sex life?', song: 'https://soundcloud.com/harrisonsalive/comfort_cruise')
