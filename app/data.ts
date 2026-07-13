// Central content for Pocket Play Cafe (sourced from information.md & style.md)

export const brand = {
  name: 'Pocket Play Cafe',
  tagline: 'Good Food • Good Mood',
  phone: '+91 95994 42499',
  phoneHref: 'https://wa.me/919599442499',
  address:
    '1st Floor, above Grand Biryani, Dira Par, Trimurti Chowk, Opposite Mangal Talab, Near Baal Leela, Bihar Sharif, Bihar.',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pocket+Play+Cafe+Bihar+Sharif',
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
      { item: 'Leg', price: '₹80', image: '/Grill_chicken_leg_on_plate_202607130959.jpeg' },
      { item: 'Chest', price: '₹80', image: '/Grilled_chicken_chest_delicious_._202607131041.jpeg' },
      { item: 'Wings', price: '₹75', image: '/Grilled_chicken_wings_delicious_._202607131039.jpeg' },
      { item: 'Bone', price: '₹65', image: '/Grilled_chicken_bone_delicious_food_202607131043.jpeg' },
    ],
  },
  {
    key: 'fried_chicken',
    label: 'Fried Chicken',
    items: [
      { item: 'Chicken Fry', price: '₹55', image: '/Fried_chicken_on_decorated_plate_202607131044.jpeg' },
      { item: 'Strip', price: '₹65', image: '/Fried_chicken_strip_delicious_2K_202607131048.jpeg' },
      { item: 'Leg', price: '₹85', image: '/Fried_chicken_leg_delicious_2K_202607131051.jpeg' },
      { item: 'Wings', price: '₹75', image: '/Fried_chicken_wings_delicious_food_202607131058.jpeg' },
      { item: 'Popcorn Chicken', price: '₹70', image: '/Popcorn_chicken_on_plate_202607131100.jpeg' },
      { item: 'Chest', price: '₹80', image: '/Fried_chicken_chest_delicious_wh._202607131103.jpeg' },
    ],
  },
  {
    key: 'fries',
    label: 'French Fries',
    items: [
      { item: 'Fries', price: '₹60' },
      { item: 'Peri Peri Fries', price: '₹80' },
      { item: 'Cheese Fries', price: '₹110' },
      { item: 'Veg Nuggets (12 pcs)', price: '₹90' },
    ],
  },
  {
    key: 'momos',
    label: 'Momos',
    items: [
      { item: 'Veg Momos (8 pcs)', price: '₹60' },
      { item: 'Chicken Momos (8 pcs)', price: '₹80' },
      { item: 'Corn Cheese Momos', price: '₹60' },
      { item: 'Crispy Momos', price: '₹120' },
      { item: 'Veg Fried Momos', price: '₹80' },
      { item: 'Chicken Fried Momos', price: '₹160' },
    ],
  },
  {
    key: 'pizza',
    label: 'Pizza',
    items: [
      { item: 'Veg Pizza', price: '₹140' },
      { item: 'Non-Veg Pizza', price: '₹170' },
      { item: 'Paneer Pizza', price: '₹150' },
      { item: 'Corn Pizza', price: '₹120' },
    ],
  },
  {
    key: 'pasta',
    label: 'Pasta',
    items: [
      { item: 'Chicken Cheese Pasta', price: '₹130' },
      { item: 'Red Sauce Pasta', price: '₹90' },
      { item: 'White Sauce Pasta', price: '₹120' },
      { item: 'Cheese Chilli Pasta', price: '₹120' },
      { item: 'Nachos Corn Pasta', price: '₹130' },
    ],
  },
  {
    key: 'garlic_bread',
    label: 'Garlic Bread',
    items: [
      { item: 'Garlic Bread', price: '₹70' },
      { item: 'Cheese Garlic Bread', price: '₹90' },
      { item: 'Corn Cheese Garlic Bread', price: '₹120' },
      { item: 'Chicken Cheese Garlic Bread', price: '₹130' },
    ],
  },
  {
    key: 'toast',
    label: 'Toast Sandwiches',
    items: [
      { item: 'Veg Toast Sandwich', price: '₹50' },
      { item: 'Veg Cheese Toast Sandwich', price: '₹70' },
      { item: 'Tandoori Cheese Toast', price: '₹80' },
      { item: 'Paneer Tandoori Toast', price: '₹100' },
    ],
  },
  {
    key: 'grill',
    label: 'Grilled Sandwiches',
    items: [
      { item: 'Veg Grill', price: '₹90' },
      { item: 'Veg Cheese Grill', price: '₹110' },
      { item: 'Chicken Grill', price: '₹130' },
      { item: 'Chicken Cheese Grill', price: '₹150' },
      { item: 'Tandoori Cheese Grill', price: '₹120' },
    ],
  },
  {
    key: 'burgers',
    label: 'Burgers',
    items: [
      { item: 'Aloo Tikki Burger', price: '₹60' },
      { item: 'Veg Burger', price: '₹70' },
      { item: 'Veg Cheese Burger', price: '₹90' },
      { item: 'Chicken Burger', price: '₹110' },
      { item: 'Chicken Cheese Burger', price: '₹130' },
      { item: 'Schezwan Burger', price: '₹90' },
      { item: 'Schezwan Cheese Burger', price: '₹110' },
      { item: 'Paneer Burger', price: '₹90' },
      { item: 'Paneer Cheese Burger', price: '₹110' },
    ],
  },
  {
    key: 'maggie',
    label: 'Maggie',
    items: [
      { item: 'Double Masala Maggie', price: '₹70' },
      { item: 'Peri Peri Maggie', price: '₹70' },
      { item: 'Vegetable Maggie', price: '₹80' },
      { item: 'Paneer Maggie', price: '₹90' },
      { item: 'Corn Cheese Maggie', price: '₹110' },
      { item: 'Chicken Juicy Maggie', price: '₹130' },
    ],
  },
  {
    key: 'cold_coffee',
    label: 'Cold Coffee',
    items: [
      { item: 'Cold Coffee', price: '₹60' },
      { item: 'Cold Coffee with Ice Cream', price: '₹80' },
      { item: 'Thick Cold Coffee', price: '₹100' },
    ],
  },
  {
    key: 'milk_shake',
    label: 'Milk Shakes',
    items: [
      { item: 'Chocolate Shake', price: '₹60' },
      { item: 'Oreo Shake', price: '₹70' },
      { item: 'Butter Scotch Shake', price: '₹70' },
      { item: 'Kit Kat Shake', price: '₹80' },
      { item: 'Oreo with Ice Cream', price: '₹90' },
      { item: 'Choco Crunchy Shake', price: '₹100' },
    ],
  },
  {
    key: 'fruit_shake',
    label: 'Fresh Fruit Shakes',
    items: [
      { item: 'Strawberry Shake', price: '₹70' },
      { item: 'Banana Peanut Butter Shake', price: '₹70' },
      { item: 'Mango Shake', price: '₹80' },
      { item: 'Coconut Shake', price: '₹90' },
    ],
  },
  {
    key: 'mojito',
    label: 'Mojitos & Refreshers',
    items: [
      { item: 'Fresh Lime Soda', price: '₹50' },
      { item: 'Jeera Soda', price: '₹60' },
      { item: 'Blue Cracko', price: '₹70' },
      { item: 'Virgin Mojito', price: '₹70' },
      { item: 'Mint Mojito', price: '₹70' },
      { item: 'Kala Khatta', price: '₹70' },
      { item: 'Pineapple Soda', price: '₹70' },
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
