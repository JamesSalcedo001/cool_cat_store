<img src="https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/99d5deab-279c-4cf7-a77c-9d4c338622ed" width="200" height="200" />


# Cool Cat Store 


![image](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![image](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)


Welcome to Cool Cat's online shop! You shop here and you're GUARANTEED to be a cool cat too!

## Installation/Preparation

This project uses Ruby on Rails for the back end API, Stripe API for the purchases and secure checkout, and React + Vite for the front end, as well as Redux for state management. Clone this repository, cd into it, and then run:

```bash
bundle install
```

afterwards, open up two more tabs in the terminal, the first for non-server use, the second for running:

```bash
rails db:migrate
rails s
```

and finally the third, cd into the client directory, and then run:

```bash
npm install
npm run dev
```

I am using Render for deployment, and also using Stripe, both of which requires one to set up an account. There is a free development section for demonstration purposes in the Stripe dashboard, however one can also set up real payments and sell real products which will cost money. 

To use the Stripe dashboard for development purposes, set up an account, navigate to the developer section, and use the API secret key in the back end, and the publishable key in the front end. Make sure to securely store these values so they aren't committed to your GitHub. I stored mine as environment variables in my Render dashboard, they need to be stored with the current names given. The variables in an initializer named stripe.rb are used for production and development, and the values are stored in the master.key file/Render dashboard. The publishable key is stored in an .env file locally and in the Render dashboard. 

In the Stripe dashboard, one can create products, and once these are created, the product is given a Stripe Price ID. Stripe uses these to identify the products, so I have included the stripe_id field in my Products model. 



## Usage

Here is a video recording of myself demonstrating the functionality of my app: [Cool Cat Video](https://youtu.be/RcYWU72wMy0)

Additionally, here is the deployed app I am hosting on Render: [Cool Cat Site](https://cool-cat-store.onrender.com)

When the application starts up in your browser, you start at the login/signup page. You can sign up if you are a new user with an avatar URL, a username, and a password. A username and password are required, but the avatar is optional. After you log in, you are navigated to the user profile landing page. At the top there is a header, where you can navigate around the site. There is a Products route, a Cart route, and a User Profile route, and you can log out from the site when you are finished.


![Screen Shot 2023-09-07 at 4 09 59 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/b4453e47-3fc2-4f4b-91fd-f73bd898154c)

![Screen Shot 2023-09-07 at 4 10 26 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/b14f62e3-9e5f-45a4-876f-6d4a879eee89)

![Screen Shot 2023-09-07 at 4 11 11 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/5d1eec20-dd0c-40b2-adee-bd107302c1ea)

![Screen Shot 2023-09-07 at 4 11 33 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/b71695ca-24e3-4c0c-a6f3-087435135852)

![Screen Shot 2023-09-07 at 4 12 04 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/e3c59c90-15ce-4196-8e83-e96fd19a4b1a)

![Screen Shot 2023-09-07 at 4 12 30 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/188a06c1-750a-4e99-af15-0e5115f11f84)

![Screen Shot 2023-09-07 at 4 13 41 PM](https://github.com/JamesSalcedo001/cool_cat_store/assets/107723341/423a9de2-752b-4164-a85f-02e2ce2ac222)




## Models and Relationships

```python
# Models

"User"

"Product"

"Cart"

"CartItem"



#Relationships

1: User:
"has_one Cart"

2: Product:
"has_many CartItems"
"has_many Carts through CartItems"

3: CartItem:
"belongs_to a Product"
"belongs_to a Cart"

4: Cart:
"belongs_to a User"
"has_many CartItems"
"has_many Products through CartItems"


```

## Client-Side Routes 

```python
Routing:

1: home route:
"/"

2: login route
"/log_in"

3: signup route
"/sign_up"

4. products route
"/products_list"

5. cart route
"/cart"

6. profile edit route
"/edit_profile"

7. cancel route
"/cancel"

8. success route
"/success"

```

## Credit

The product images are not owned by me, these are from Google Images and for demonstration purposes only. The Cool Cat icon is from a site called Flaticon, made by an artist named Vlad Szirka. [Flaticon](https://www.flaticon.com/free-icons/bad-luck)

## Contributing


Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License

[MIT](https://choosealicense.com/licenses/mit/)
