// Central content for Pocket Play Cafe (sourced from information.md & style.md)

export const brand = {
  name: 'Pocket Play Cafe',
  tagline: 'Good Food • Good Mood',
  owner: 'Rahul Kumar',
  ownerTitle: 'Founder & Owner',
  phone: '+91 95994 42499',
  phoneHref: 'https://wa.me/919599442499',
  address:
    '1st Floor, above Grand Biryani, Dira Par, Trimurti Chowk, Opposite Mangal Talab, Near Baal Leela, Patna City, Bihar.',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pocket+Play+Cafe+Patna+City',
  swiggy: '#',
  zomato: '#',
}

export const games: {
  key: string
  title: string
  tag: string
  desc: string
  price: string
  image: string
  featured?: boolean
}[] = [
  {
    key: 'pool',
    title: 'Pool',
    tag: 'Billiards',
    desc: 'Classic 8-ball on a professional table — the centrepiece of the lounge.',
    price: '₹200 / hour',
    image: '/gallery/g1.jpeg',
    featured: true,
  },
  {
    key: 'snooker',
    title: 'Snooker',
    tag: 'Premium',
    desc: 'The ultimate cue sport. Challenge your crew across 2 or 4 player frames.',
    price: '₹4/min (2P) · ₹5.5/min (4P)',
    image: '/gallery/g2.jpeg',
    featured: true,
  },
  {
    key: 'ps5',
    title: 'PlayStation 5',
    tag: 'Next-Gen',
    desc: 'Sink into the sofa and fire up the latest titles on a 4K setup.',
    price: 'Available',
    image: '/gallery/g3.jpeg',
  },
  {
    key: 'ps4',
    title: 'PlayStation 4',
    tag: 'Multiplayer',
    desc: 'Couch co-op and competitive classics for you and your squad.',
    price: 'Available',
    image: '/gallery/g4.jpeg',
  },
  {
    key: 'tt',
    title: 'Table Tennis',
    tag: 'Quick Match',
    desc: 'Fast, friendly rallies between rounds of food and fun.',
    price: 'Available',
    image: '/gallery/g5.jpeg',
  },
  {
    key: 'carrom',
    title: 'Carrom',
    tag: 'All Ages',
    desc: 'A timeless board battle — perfect for families and groups.',
    price: 'Available',
    image: '/gallery/g6.jpeg',
  },
  {
    key: 'bigscreen',
    title: 'Big Screen Viewing',
    tag: 'Live',
    desc: 'Billboard gaming & live sports on the big screen. Match nights, sorted.',
    price: 'Available',
    image: '/gallery/g7.jpeg',
  },
]

export type MenuItem = {
  item: string
  price: string
  image?: string
}

export type MenuCategory = {
  key: string
  label: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    key: 'grill_chicken',
    label: 'Grill Chicken',
    items: [
      { item: 'Leg', price: '₹80', image: '/menu/grill_chicken/leg.jpeg' },
      { item: 'Chest', price: '₹80', image: '/menu/grill_chicken/chest.jpeg' },
      { item: 'Wings', price: '₹75', image: '/menu/grill_chicken/wings.jpeg' },
      { item: 'Bone', price: '₹65', image: '/menu/grill_chicken/bone.jpeg' },
    ],
  },
  {
    key: 'fried_chicken',
    label: 'Fried Chicken',
    items: [
      { item: 'Chicken Fry', price: '₹55', image: '/menu/fried_chicken/chicken_fry.jpeg' },
      { item: 'Strip', price: '₹65', image: '/menu/fried_chicken/strip.jpeg' },
      { item: 'Leg', price: '₹85', image: '/menu/fried_chicken/leg.jpeg' },
      { item: 'Wings', price: '₹75', image: '/menu/fried_chicken/wings.jpeg' },
      { item: 'Popcorn Chicken', price: '₹70', image: '/menu/fried_chicken/popcorn_chicken.jpeg' },
      { item: 'Chest', price: '₹80', image: '/menu/fried_chicken/chest.jpeg' },
    ],
  },
  {
    key: 'fries',
    label: 'French Fries',
    items: [
      { item: 'Fries', price: '₹60', image: '/menu/fries/fries.jpeg' },
      { item: 'Peri Peri Fries', price: '₹80', image: '/menu/fries/peri_peri_fries.jpeg' },
      { item: 'Cheese Fries', price: '₹110', image: '/menu/fries/cheese_fries.jpeg' },
      { item: 'Veg Nuggets (12 pcs)', price: '₹90', image: '/menu/fries/veg_nuggets.jpeg' },
    ],
  },
  {
    key: 'momos',
    label: 'Momos',
    items: [
      { item: 'Veg Momos (8 pcs)', price: '₹60', image: '/menu/momos/veg_momos.jpeg' },
      { item: 'Chicken Momos (8 pcs)', price: '₹80', image: '/menu/momos/chicken_momos.jpeg' },
      { item: 'Corn Cheese Momos', price: '₹60', image: '/menu/momos/corn_cheese_momos.jpeg' },
      { item: 'Crispy Momos', price: '₹120', image: '/menu/momos/crispy_momos.jpeg' },
      { item: 'Veg Fried Momos', price: '₹80', image: '/menu/momos/veg_fried_momos.jpeg' },
      { item: 'Chicken Fried Momos', price: '₹160', image: '/menu/momos/chicken_fried_momos.jpeg' },
    ],
  },
  {
    key: 'pizza',
    label: 'Pizza',
    items: [
      { item: 'Veg Pizza', price: '₹140', image: '/menu/pizza/veg_pizza.jpeg' },
      { item: 'Non-Veg Pizza', price: '₹170', image: '/menu/pizza/non_veg_pizza.jpeg' },
      { item: 'Paneer Pizza', price: '₹150', image: '/menu/pizza/paneer_pizza.jpeg' },
      { item: 'Corn Pizza', price: '₹120', image: '/menu/pizza/corn_pizza.jpeg' },
    ],
  },
  {
    key: 'pasta',
    label: 'Pasta',
    items: [
      { item: 'Chicken Cheese Pasta', price: '₹130', image: '/menu/pasta/chicken_cheese_pasta.jpeg' },
      { item: 'Red Sauce Pasta', price: '₹90', image: '/menu/pasta/red_sauce_pasta.jpeg' },
      { item: 'White Sauce Pasta', price: '₹120', image: '/menu/pasta/white_sauce_pasta.jpeg' },
      { item: 'Cheese Chilli Pasta', price: '₹120', image: '/menu/pasta/cheese_chilli_pasta.jpeg' },
      { item: 'Nachos Corn Pasta', price: '₹130', image: '/menu/pasta/nachos_corn_pasta.jpeg' },
    ],
  },
  {
    key: 'garlic_bread',
    label: 'Garlic Bread',
    items: [
      { item: 'Garlic Bread', price: '₹70', image: '/menu/garlic_bread/garlic_bread.jpeg' },
      { item: 'Cheese Garlic Bread', price: '₹90', image: '/menu/garlic_bread/cheese_garlic_bread.jpeg' },
      { item: 'Corn Cheese Garlic Bread', price: '₹120', image: '/menu/garlic_bread/corn_cheese_garlic_bread.jpeg' },
      { item: 'Chicken Cheese Garlic Bread', price: '₹130', image: '/menu/garlic_bread/chicken_cheese_garlic_bread.jpeg' },
    ],
  },
  {
    key: 'toast',
    label: 'Toast Sandwiches',
    items: [
      { item: 'Veg Toast Sandwich', price: '₹50', image: '/menu/toast/veg_toast.jpeg' },
      { item: 'Veg Cheese Toast Sandwich', price: '₹70', image: '/menu/toast/veg_cheese_toast.jpeg' },
      { item: 'Tandoori Cheese Toast', price: '₹80', image: '/menu/toast/tandoori_cheese_toast.jpeg' },
      { item: 'Paneer Tandoori Toast', price: '₹100', image: '/menu/toast/paneer_tandoori_toast.jpeg' },
    ],
  },
  {
    key: 'grill',
    label: 'Grilled Sandwiches',
    items: [
      { item: 'Veg Grill', price: '₹90', image: '/menu/grill/veg_grill.jpeg' },
      { item: 'Veg Cheese Grill', price: '₹110', image: '/menu/grill/veg_cheese_grill.jpeg' },
      { item: 'Chicken Grill', price: '₹130', image: '/menu/grill/chicken_grill.jpeg' },
      { item: 'Chicken Cheese Grill', price: '₹150', image: '/menu/grill/chicken_cheese_grill.jpeg' },
      { item: 'Tandoori Cheese Grill', price: '₹120', image: '/menu/grill/tandoori_cheese_grill.jpeg' },
    ],
  },
  {
    key: 'burgers',
    label: 'Burgers',
    items: [
      { item: 'Aloo Tikki Burger', price: '₹60', image: '/menu/burgers/aloo_tikki_burger.jpeg' },
      { item: 'Veg Burger', price: '₹70', image: '/menu/burgers/veg_burger.jpeg' },
      { item: 'Veg Cheese Burger', price: '₹90', image: '/menu/burgers/veg_cheese_burger.jpeg' },
      { item: 'Chicken Burger', price: '₹110', image: '/menu/burgers/chicken_burger.jpeg' },
      { item: 'Chicken Cheese Burger', price: '₹130', image: '/menu/burgers/chicken_cheese_burger.jpeg' },
      { item: 'Schezwan Burger', price: '₹90', image: '/menu/burgers/schezwan_burger.jpeg' },
      { item: 'Schezwan Cheese Burger', price: '₹110', image: '/menu/burgers/schezwan_cheese_burger.jpeg' },
      { item: 'Paneer Burger', price: '₹90', image: '/menu/burgers/paneer_burger.jpeg' },
      { item: 'Paneer Cheese Burger', price: '₹110', image: '/menu/burgers/paneer_cheese_burger.jpeg' },
    ],
  },
  {
    key: 'maggie',
    label: 'Maggie',
    items: [
      { item: 'Double Masala Maggie', price: '₹70', image: '/menu/maggie/double_masala_maggie.jpeg' },
      { item: 'Peri Peri Maggie', price: '₹70', image: '/menu/maggie/peri_peri_maggie.jpeg' },
      { item: 'Vegetable Maggie', price: '₹80', image: '/menu/maggie/vegetable_maggie.jpeg' },
      { item: 'Paneer Maggie', price: '₹90', image: '/menu/maggie/paneer_maggie.jpeg' },
      { item: 'Corn Cheese Maggie', price: '₹110', image: '/menu/maggie/corn_cheese_maggie.jpeg' },
      { item: 'Chicken Juicy Maggie', price: '₹130', image: '/menu/maggie/chicken_juicy_maggie.jpeg' },
    ],
  },
  {
    key: 'cold_coffee',
    label: 'Cold Coffee',
    items: [
      { item: 'Cold Coffee', price: '₹60', image: '/menu/cold_coffee/cold_coffee.jpeg' },
      { item: 'Cold Coffee with Ice Cream', price: '₹80', image: '/menu/cold_coffee/cold_coffee_ice_cream.jpeg' },
      { item: 'Thick Cold Coffee', price: '₹100', image: '/menu/cold_coffee/thick_cold_coffee.jpeg' },
    ],
  },
  {
    key: 'milk_shake',
    label: 'Milk Shakes',
    items: [
      { item: 'Chocolate Shake', price: '₹60', image: '/menu/milk_shake/chocolate_shake.jpeg' },
      { item: 'Oreo Shake', price: '₹70', image: '/menu/milk_shake/oreo_shake.jpeg' },
      { item: 'Butter Scotch Shake', price: '₹70', image: '/menu/milk_shake/butterscotch_shake.jpeg' },
      { item: 'Kit Kat Shake', price: '₹80', image: '/menu/milk_shake/kitkat_shake.jpeg' },
      { item: 'Oreo with Ice Cream', price: '₹90', image: '/menu/milk_shake/oreo_ice_cream_shake.jpeg' },
      { item: 'Choco Crunchy Shake', price: '₹100', image: '/menu/milk_shake/choco_crunchy_shake.jpeg' },
    ],
  },
  {
    key: 'fruit_shake',
    label: 'Fresh Fruit Shakes',
    items: [
      { item: 'Strawberry Shake', price: '₹70', image: '/menu/fruit_shake/strawberry_shake.jpeg' },
      { item: 'Banana Peanut Butter Shake', price: '₹70', image: '/menu/fruit_shake/banana_peanut_shake.jpeg' },
      { item: 'Mango Shake', price: '₹80', image: '/menu/fruit_shake/mango_shake.jpeg' },
      { item: 'Coconut Shake', price: '₹90', image: '/menu/fruit_shake/coconut_shake.jpeg' },
    ],
  },
  {
    key: 'mojito',
    label: 'Mojitos & Refreshers',
    items: [
      { item: 'Fresh Lime Soda', price: '₹50', image: '/menu/mojito/fresh_lime_soda.jpeg' },
      { item: 'Jeera Soda', price: '₹60', image: '/menu/mojito/jeera_soda.jpeg' },
      { item: 'Blue Cracko', price: '₹70', image: '/menu/mojito/blue_cracko.jpeg' },
      { item: 'Virgin Mojito', price: '₹70', image: '/menu/mojito/virgin_mojito.jpeg' },
      { item: 'Mint Mojito', price: '₹70', image: '/menu/mojito/mint_mojito.jpeg' },
      { item: 'Kala Khatta', price: '₹70', image: '/menu/mojito/kala_khatta.jpeg' },
      { item: 'Pineapple Soda', price: '₹70', image: '/menu/mojito/pineapple_soda.jpeg' },
    ],
  },
]

export const galleryImages: string[] = Array.from(
  { length: 31 },
  (_, i) => `/gallery/g${i + 1}.jpeg`
)

export const highlights = [
  'PS4 & PS5 GAMING',
  'PRO POOL & SNOOKER',
  'TABLE TENNIS',
  'CARROM & INDOOR GAMES',
  'BURGERS & PIZZA',
  'FRESH MOMOS',
  'COLD COFFEE & SHAKES',
  'BIG SCREEN ENTERTAINMENT',
]
