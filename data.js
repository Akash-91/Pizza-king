// ============================================================
//  PIZZA KING — DATA FILE  (data.js)
//
//  ✅ EDIT THIS FILE to update anything on the website.
//  Change prices, add items, update hours, swap gallery photos.
//  Save & commit to GitHub → site updates automatically!
// ============================================================

const SITE = {

  name:        "Pizza King",
  tagline:     "Where Every Slice Tells a Story",
  description: "Handcrafted pizzas, burgers, wraps, pasta & more — delivered hot to your door in Doiwala, Uttarakhand.",
  address:     "Dehradun Road, Doiwala, Uttarakhand",
  phone1:      "9760110526",
  phone2:      "9557657708",
  whatsapp:    "919760110526",
  whatsappMsg: "Hi Pizza King! I'd like to place an order.\n\n",
  mapsLink:    "https://maps.google.com/?q=Doiwala+Uttarakhand",
  freeDelivery: true,
  deliveryArea: "Dehradun Road, Doiwala Area",

  hours: [
    { day: "Monday – Friday",  time: "10:00 AM – 10:00 PM", open: true  },
    { day: "Saturday",         time: "10:00 AM – 11:00 PM", open: true  },
    { day: "Sunday",           time: "11:00 AM – 10:00 PM", open: true  },
  ],

  gallery: [
    { src: "images/pizza.jpg",   label: "Signature Pizzas",   tall: true,  emoji: "🍕" },
    { src: "images/burger.jpg",  label: "Juicy Burgers",      tall: false, emoji: "🍔" },
    { src: "images/chinese.jpg", label: "Chinese Delights",   tall: false, emoji: "🍜" },
    { src: "images/drinks.jpg",  label: "Smoothies & Drinks", tall: false, emoji: "🥤" },
    { src: "images/wraps.jpg",   label: "Wraps & Subs",       tall: false, emoji: "🌯" },
  ],

  features: [
    { icon: "🚀", title: "Free Home Delivery",     desc: "Hot food delivered right to your doorstep — no extra charge." },
    { icon: "🌱", title: "Veg & Non-Veg Options",  desc: "Something for everyone — pure veg delights to non-veg feasts." },
    { icon: "👑", title: "Freshly Made Every Day", desc: "Fresh ingredients every day to ensure every bite is perfect." },
  ],

  menu: [

    {
      id: "pizza-veg", label: "Pizza Veg", icon: "🌿", type: "pizza",
      tiers: [
        {
          name: "Simply Veg", tag: "veg",
          prices: { regular: 130, medium: 240, large: 360 },
          items: [
            { name: "Cheese & Mushroom",  desc: "Single Cheese with Mushroom" },
            { name: "Cheese & Paneer",    desc: "Single Cheese with Paneer" },
            { name: "Margherita",         desc: "Single Cheese Loaded" },
          ]
        },
        {
          name: "Classic Veg", tag: "veg",
          prices: { regular: 200, medium: 340, large: 480 },
          items: [
            { name: "Farm Fresh",         desc: "Onion, Mushroom, Tomato & Corn" },
            { name: "Country Veggie",     desc: "Onion, Capsicum & Tomato" },
            { name: "Italian Green Wave", desc: "Onion, Capsicum, Tomato & Jalapeno" },
            { name: "Hash Brown Pizza",   desc: "Onion, Green Chilly, Tomato & Hash Brown" },
          ]
        },
        {
          name: "Premium Veg", tag: "veg",
          prices: { regular: 240, medium: 360, large: 500 },
          items: [
            { name: "Deluxe Supreme",      desc: "Onion, Capsicum, Mushroom, Corn & Paneer" },
            { name: "Exotic Paneer",       desc: "Red Paprika, Capsicum & Paneer" },
            { name: "Fresh Paradise",      desc: "Corn, Black Olive, Red Paprika with Jalapeno" },
            { name: "Chilly Paneer Pizza", desc: "Capsicum, Onion & Chilly Paneer" },
          ]
        },
        {
          name: "Signature Veg", tag: "veg",
          prices: { regular: 270, medium: 400, large: 530 },
          items: [
            { name: "Veg Supreme Vaganza", desc: "Onion, Capsicum, Mushroom, Tomato, Black Olive, Corn & Jalapeno" },
            { name: "Fully Veggi",         desc: "Onion, Capsicum, Mushroom, Tomato, Corn, Red Paprika & Paneer" },
          ]
        },
      ],
      extras: {
        heading: "Fun Treat — Pizza",
        items: [
          { name: "Onion",                      price: 120 },
          { name: "Capsicum",                   price: 120 },
          { name: "Tomato",                     price: 120 },
          { name: "Corn",                       price: 120 },
          { name: "Chicken Salami",             price: 150 },
          { name: "BBQ Chicken",                price: 150 },
          { name: "Spicy Chicken",              price: 150 },
          { name: "Chicken Pop",                price: 150 },
          { name: "Fun Treat Mix Combo",        price: 450 },
          { name: "Fun Treat Mix Double Combo", price: 500 },
        ]
      }
    },

    {
      id: "pizza-nonveg", label: "Pizza Non-Veg", icon: "🍗", type: "pizza",
      tiers: [
        {
          name: "Simply Non-Veg", tag: "nonveg",
          prices: { regular: 170, medium: 290, large: 420 },
          items: [
            { name: "Cheese & Spicy Chicken", desc: "Cheese with Spicy Flavor" },
            { name: "Chicken Pop Special",    desc: "Cheese & Exotic Chicken Pop" },
          ]
        },
        {
          name: "Classic Non-Veg", tag: "nonveg",
          prices: { regular: 220, medium: 340, large: 500 },
          items: [
            { name: "Bar-Be-Que Chicken",  desc: "Onion & Chicken with BBQ Flavour" },
            { name: "Spicy Chicken",       desc: "Red Paprika & Chicken with Spicy Flavour" },
            { name: "Italian Red Wave",    desc: "Onion, Red Paprika, Tomato & Spicy Chicken" },
            { name: "Chicken Feast",       desc: "Onion, Corn, Capsicum & Chicken Salami" },
          ]
        },
        {
          name: "Premium Non-Veg", tag: "nonveg",
          prices: { regular: 270, medium: 400, large: 550 },
          items: [
            { name: "Chicken Supreme",      desc: "BBQ Chicken, Spicy Chicken, Salami & Chicken Pop" },
            { name: "Keema Do Pyazaa",      desc: "Jalapeno, Onion & Chicken Keema" },
            { name: "Exotic Chicken",       desc: "Golden Corn, BBQ Chicken with Extra Cheese" },
            { name: "Kings Chicken Choice", desc: "Black Olive, Corn, Red Paprika, Capsicum & Spicy Chicken" },
          ]
        },
        {
          name: "Signature Non-Veg", tag: "nonveg",
          prices: { regular: 280, medium: 420, large: 570 },
          items: [
            { name: "Chicken Supreme Vaganza", desc: "Onion, Capsicum, Mushroom, Tomato, Olive, BBQ Chicken, Salami & Spicy Chicken" },
            { name: "Chicken Pepperoni",       desc: "Pepperoni with Extra Cheese" },
          ]
        },
      ]
    },

    {
      id: "burgers", label: "Burgers & Wraps", icon: "🍔", type: "sections",
      sections: [
        {
          heading: "Burgers & Garlic Breads",
          items: [
            { name: "Veg Burger",                   price: 60  },
            { name: "Veg Exotic Burger",            price: 80  },
            { name: "Veg Jumbo Burger",             price: 120 },
            { name: "Chicken Burger",               price: 90  },
            { name: "Exotic Chicken Burger",        price: 130 },
            { name: "Jumbo Chicken Burger",         price: 150 },
            { name: "Cheese Garlic Bread",          price: 120 },
            { name: "Veg Stuff Spicy Garlic Bread", price: 140 },
            { name: "Chicken Stuff Garlic Bread",   price: 160 },
          ]
        },
        {
          heading: "Wraps & Sandwiches",
          items: [
            { name: "Tangy Spicy Wrap (Veg)",  price: 120 },
            { name: "Egg Wrap",                price: 130 },
            { name: "Chicken Mexican Wrap",    price: 170 },
            { name: "Veg Sandwich",            price: 70  },
            { name: "Egg Sandwich",            price: 80  },
            { name: "Subwich (Veg)",           price: 110, desc: "Exotic Vegetables with Sauce" },
            { name: "Subwich (Non-Veg)",       price: 130, desc: "Chicken with Sauce" },
          ]
        }
      ]
    },

    {
      id: "pasta-chinese", label: "Pasta & Chinese", icon: "🍜", type: "sections",
      sections: [
        {
          heading: "Pasta",
          items: [
            { name: "Creamy White Pasta",   prices: [{ label: "Regular", price: 130 }, { label: "Large", price: 160 }] },
            { name: "Spicy Red Pasta",      prices: [{ label: "Regular", price: 120 }, { label: "Large", price: 140 }] },
            { name: "Tangy Tandoori Pasta", prices: [{ label: "Regular", price: 140 }, { label: "Large", price: 160 }] },
          ]
        },
        {
          heading: "Chinese Food",
          items: [
            { name: "Manchow Soup",        prices: [{ label: "Veg", price: 60 }, { label: "Non-Veg", price: 80 }] },
            { name: "Sweet Corn Soup",     prices: [{ label: "Veg", price: 60 }, { label: "Non-Veg", price: 80 }] },
            { name: "Hot & Sour Soup",     prices: [{ label: "Veg", price: 60 }, { label: "Non-Veg", price: 80 }] },
            { name: "Lung Fung Soup",      prices: [{ label: "Veg", price: 60 }, { label: "Non-Veg", price: 80 }] },
            { name: "Momos",               price: 100 },
            { name: "Fried Momos",         price: 120 },
            { name: "Spring Roll",         price: 80  },
            { name: "Honey Chilli Potato", price: 120 },
          ]
        }
      ]
    },

    {
      id: "mains", label: "Main Course", icon: "🥘", type: "sections",
      sections: [
        {
          heading: "Main Course",
          items: [
            { name: "Thoppa",                   prices: [{ label: "Veg", price: 80 }, { label: "Non-Veg", price: 100 }] },
            { name: "Manchurian",               price: 120 },
            { name: "Noodle",                   prices: [{ label: "Veg", price: 70 }, { label: "Egg", price: 90 }, { label: "Non-Veg", price: 120 }] },
            { name: "Chilly Garlic Noodle",     prices: [{ label: "Veg", price: 80 }, { label: "Egg", price: 90 }, { label: "Non-Veg", price: 120 }] },
            { name: "Hakka Noodle",             prices: [{ label: "Veg", price: 80 }, { label: "Egg", price: 90 }, { label: "Non-Veg", price: 120 }] },
            { name: "Fried Rice",               prices: [{ label: "Veg", price: 100 }, { label: "Egg", price: 120 }, { label: "Non-Veg", price: 150 }] },
            { name: "Schezwan Rice",            prices: [{ label: "Veg", price: 100 }, { label: "Egg", price: 120 }, { label: "Non-Veg", price: 150 }] },
            { name: "Chilly Garlic Fried Rice", prices: [{ label: "Veg", price: 100 }, { label: "Egg", price: 120 }, { label: "Non-Veg", price: 150 }] },
            { name: "Paneer Manchurian",        price: 250, desc: "12 pieces" },
            { name: "Chilly Paneer",            price: 250, desc: "12 pieces" },
            { name: "Chilly Chicken",           price: 250, desc: "12 pieces" },
            { name: "Chicken Manchurian",       price: 250, desc: "12 pieces" },
            { name: "Garlic Chicken",           price: 250, desc: "12 pieces" },
            { name: "Schezwan Chicken",         price: 250, desc: "12 pieces" },
            { name: "Plain Maggi",              price: 50  },
            { name: "Masala Maggi",             price: 70  },
            { name: "Plain Omelette",           price: 50  },
            { name: "Masala Omelette",          price: 70  },
          ]
        }
      ]
    },

    {
      id: "fries", label: "Fries & Snacks", icon: "🍟", type: "sections",
      sections: [
        {
          heading: "Fries & Nuggets",
          items: [
            { name: "French Fry",          price: 80  },
            { name: "Masala French Fry",   price: 100 },
            { name: "Veg Nuggets",         price: 100 },
            { name: "Chicken Nuggets",     price: 120 },
            { name: "Fry Chicken (2 pcs)", price: 150 },
            { name: "Fry Chicken (4 pcs)", price: 300 },
            { name: "Fry Chicken (6 pcs)", price: 400 },
          ]
        }
      ]
    },

    {
      id: "combos", label: "Combos", icon: "🎁", type: "sections",
      sections: [
        {
          heading: "Value Combos",
          items: [
            { name: "Exotic Veg Burger + FF + Drink",                price: 160 },
            { name: "Exotic Chicken Burger + FF + Drink",            price: 220 },
            { name: "Regular Pizza + FF + Drink (Veg)",              price: 200 },
            { name: "Regular Pizza + Exotic Burger + Drink (Veg)",   price: 210 },
            { name: "Regular Pizza + FF + Drink (Non Veg)",          price: 230 },
            { name: "Regular Pizza + Chicken Exotic Burger + Drink", price: 250 },
          ]
        },
        {
          heading: "Fun Treat Combos",
          items: [
            { name: "Fun Treat Veg Combo",            price: 400, desc: "Onion, Capsicum, Corn & Cheese" },
            { name: "Fun Treat Veg Double Combo",     price: 500, desc: "Paneer, Onion, Capsicum, Tomato, Red Paprika, Corn & Cheese" },
            { name: "Fun Treat Non Veg Combo",        price: 550, desc: "BBQ Chicken, Chicken Salami & Spicy Chicken" },
            { name: "Fun Treat Non Veg Double Combo", price: 600, desc: "Chicken Pop, BBQ Chicken, Spicy Chicken, Salami, Corn & Red Paprika" },
          ]
        }
      ]
    },

    {
      id: "beverages", label: "Beverages", icon: "🥤", type: "sections",
      sections: [
        {
          heading: "Drinks & Smoothies",
          items: [
            { name: "Soft Drink",             price: 30  },
            { name: "Oreo Shake",             price: 100 },
            { name: "Cold Coffee",            price: 100 },
            { name: "Mango Smoothie",         price: 100 },
            { name: "Strawberry Smoothie",    price: 100 },
            { name: "Pineapple Smoothie",     price: 100 },
            { name: "Butter Scotch",          price: 110 },
            { name: "Black Current Smoothie", price: 110 },
            { name: "Chocolate Smoothie",     price: 110 },
          ]
        }
      ]
    },

  ]

};
