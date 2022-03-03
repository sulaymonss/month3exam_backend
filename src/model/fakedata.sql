insert into categories (category_name) values ('Milliy Taomlar');
insert into categories (category_name) values ('Fast Food');

insert into restaurants (restaurant_name, category_id) values 
    ('Rayhon', 1),
    ('Yalpiz', 1),
    ('KFC', 2),
    ('Evos', 2);

insert into foods (food_name, food_price, food_img, restaurant_id) values
    ('Osh', 35000, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/97/42/9c.jpg', 1),
    ('Qozon kabob', 48000, 'https://i.ytimg.com/vi/FbGG-8q3R9g/maxresdefault.jpg', 1),

    ('Norin', 20000, 'https://www.centralasia-travel.com/uploads/gallery/1226/naryn-01.jpg', 2),
    ('Shashlik', 10000, 'https://img-global.cpcdn.com/recipes/6a1810e72c8b80fa/400x400cq70/photo.jpg', 2),

    ('Cheeseburger', 23000, 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off', 3),
    ('Lavash', 25000, 'https://img.taste.com.au/r71km_cl/taste/2016/11/vegie-lavash-spirals-31166-1.jpeg', 3),

    ('Pizza', 32000, 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg', 4),
    ('Hamburger', 22000, 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg', 4);