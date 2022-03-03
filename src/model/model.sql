create extension "uuid-ossp";

-- create table categories(
--     category_id uuid default uuid_generate_v4() primary key,
--     category_name text not null
-- );

-- create table restaurants(
--     restaurant_id uuid default uuid_generate_v4() primary key,
--     restaurant_name text not null,
--     category_id uuid references categories(category_id)
-- );

-- create table foods(
--     food_id uuid default uuid_generate_v4() primary key,
--     food_name text not null,
--     food_price bigint not null,
--     restaurant_id uuid references restaurants(restaurant_id)
-- );

create table categories(
    category_id serial primary key,
    category_name text not null
);

create table restaurants(
    restaurant_id serial primary key,
    restaurant_name text not null,
    category_id int references categories(category_id)
);

create table foods(
    food_id serial primary key,
    food_name text not null,
    food_price bigint not null,
    food_img text not null,
    restaurant_id int references restaurants(restaurant_id)
);