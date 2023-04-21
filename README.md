[![Nanas Soaps banner](banner.png)](https://main--musing-goldberg-c3d5b7.netlify.app/)

# Nana's Soaps

Welcome to Nana's Soaps, your one-stop shop for all of your soap needs. Our soaps are made using the finest natural ingredients and are carefully crafted to leave your skin feeling clean and refreshed.

## Features

- Wide selection of soaps made with natural ingredients
- Easy-to-use online store
- Secure payment options
- Fast and reliable shipping

## How to Navigate this Codebase

There are 3 major components to this codebase

1. Store Front UI

   - This is the UI that the customer interacts with. The customer can add items to card, edit their cart, and submit orders.
   - This was created using ReactJS.
   - To run in local, execute the following command:

   `npm run start`

2. Dashboard UI

   - This is what the business owner interacts with. From this dashboard, the business owner can manage the website content and existing orders.
   - This was created using ReactJS.
   - To run in local, execute the following command:

   `npm run start`

3. Server

   - This is a REST API created using Express. The API interacts with data stored in a PostgreSQL database.
   - To run in local:

     1. set up and run PostgreSQL database

        - Install [pgAdmin](https://www.pgadmin.org/) on your local machine, create a new database.
        - set up the following variables in a `.env` file in the `/server` directory: `POSTGRES_USERNAME`, `POSTGRES_PASSWORD`, `POSTGRES_DB`
        - run migrations `npm run migrate`
        - run seeds `npm run seed`
        - Please note: we are using a default database port of **5432**

     2. Run API

        - `npm run start`

## Contact Us

If you have any questions or concerns, please don't hesitate to contact us. You can reach us by email at mkotik97@gmail.com

We look forward to serving you!
