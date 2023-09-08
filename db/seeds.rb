# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Product.destroy_all

Product.create!(title: "Sunglasses", description: "Cool Shades", stripe_id: "price_1NiXnrIBnVrhy9EW9a3soJOj", image: "https://m.media-amazon.com/images/I/51x7nqTd3vS._AC_SL1500_.jpg", price: 999)

Product.create!(title: "Cool Hat", description: "Stylish black dad hat!", stripe_id: "price_1NiuAqIBnVrhy9EWsHBKQl3m", image: "https://n.nordstrommedia.com/id/sr3/943c7f7d-ddb2-4ae5-a7c8-0701a35873cc.jpeg?h=365&w=240&dpr=2", price: 999)


Product.create!(title: "Skateboard", description: "only cool cats ride skateboards", stripe_id: "price_1NnHWaIBnVrhy9EWxppzCkMr", image: "https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?cs=srgb&dl=pexels-khoa-hu%E1%BB%B3nh-165236.jpg&fm=jpg", price: 2999 )

Product.create!(title: "Warlock Guitar", description: "the coolest cats can shred on skateboards AND guitars", stripe_id: "price_1NnHcVIBnVrhy9EWg3h9zp6e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDgc9QW1s46sHqM6i3aJAhn1f_cer5R6STSYcWoicIe-oRh9S5FlUXLf8YoeoySwjaPo&usqp=CAU", price: 29999)

Product.create!(title: "White shoes", description: "cool kicks for cool cats", stripe_id: "price_1NnQmDIBnVrhy9EWvH2jmPs5", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1611947358-the-court-sneaker-everlane-1611947348.jpg?crop=1.00xw:0.668xh;0,0.165xh&resize=980:*", price: 3999)

Product.create!(title: "Watch", description: "Stylish watch", stripe_id: "price_1NnQygIBnVrhy9EW6sUyQnc0", image: "https://m.media-amazon.com/images/I/81ZP4QF1qCL._AC_UX679_.jpg", price: 8999)

# Product.create!(title: "", description: "", stripe_id: "", image: "", price: )
# Product.create!(title: "", description: "", stripe_id: "", image: "", price: )
# Product.create!(title: "", description: "", stripe_id: "", image: "", price: )
# Product.create!(title: "", description: "", stripe_id: "", image: "", price: )