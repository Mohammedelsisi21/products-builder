import type { IProduct } from "../interfaces";


import shoes_1 from './../assets/shoes-1.jpg'
import shoes_2 from './../assets/shoes-2.jpg'
import shoes_3 from './../assets/shoes-3.jpg'
import shoes_4 from './../assets/shoes-4.jpg'
import shoes_5 from './../assets/shoes-5.jpg'
import shoes_6 from './../assets/shoes-6.jpg'
import shoes_7 from './../assets/shoes-7.jpg'
import shoes_8 from './../assets/shoes-8.jpg'
import shoes_9 from './../assets/shoes-9.jpg'
import shoes_10 from './../assets/shoes-10.jpg'
import shoes_11 from './../assets/shoes-11.jpg'


export const shoesApi: IProduct[] = [
  {
    id: "1",
    title: "Running Shoes",
    description:
      "Lightweight running shoes designed for speed, comfort, and breathability. Made with mesh fabric and cushioned soles, ideal for both daily training and long-distance running.",
    image: shoes_1,
    price: "$120",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#1E90FF", "#FFD700"],
    category: {
      name: "Sports",
      image: shoes_1,
    },
  },
  {
    id: "2",
    title: "Casual Sneakers",
    description:
      "Stylish sneakers perfect for everyday wear. Crafted with soft materials and flexible rubber outsoles, ensuring comfort and durability throughout your daily activities.",
    image: shoes_2,
    price: "$90",
    colors: ["#1E90FF", "#00FA9A", "#FF6347", "#2E8B57"],
    category: {
      name: "Casual",
      image: shoes_2,
    },
  },
  {
    id: "3",
    title: "Basketball Shoes",
    description:
      "High-top basketball shoes that provide stability, ankle support, and responsive cushioning. Designed with grip soles for better traction during intense court games.",
    image: shoes_3,
    price: "$150",
    colors: ["#FFD700", "#000000", "#FFFFFF", "#228B22", "#8B0000"],
    category: {
      name: "Sports",
      image: shoes_1,
    },
  },
  {
    id: "4",
    title: "Formal Leather Shoes",
    description:
      "Elegant leather shoes built with premium materials and classic design. Perfect for formal occasions, business meetings, and events requiring a professional appearance.",
    image: shoes_4,
    price: "$200",
    colors: ["#654321", "#000000", "#4B3621"],
    category: {
      name: "Formal",
      image: shoes_4,
    },
  },
  {
    id: "5",
    title: "Hiking Boots",
    description:
      "Durable hiking boots designed for rough terrains and outdoor adventures. Featuring water-resistant materials, strong soles, and ankle support for maximum protection.",
    image: shoes_5,
    price: "$180",
    colors: ["#808080", "#2F4F4F", "#8B4513", "#A0522D"],
    category: {
      name: "Outdoor",
      image: shoes_3,
    },
  },
  {
    id: "6",
    title: "Slip-On Shoes",
    description:
      "Comfortable slip-on shoes with an easy-wear design. Lightweight, breathable, and perfect for quick outings, casual walks, and everyday relaxed style.",
    image: shoes_6,
    price: "$70",
    colors: ["#8B4513", "#A52A2A", "#D2691E", "#CD853F"],
    category: {
      name: "Casual",
      image: shoes_2,
    },
  },
  {
    id: "7",
    title: "Loafers",
    description:
      "Classic loafers designed with soft leather and elegant details. Suitable for both casual and semi-formal settings, providing all-day comfort and style.",
    image: shoes_7,
    price: "$110",
    colors: ["#FF4500", "#1E90FF", "#2E8B57", "#000000", "#B22222"],
    category: {
      name: "Formal",
      image: shoes_4,
    },
  },
  {
    id: "8",
    title: "Sandals",
    description:
      "Breathable sandals perfect for summer and hot weather. Made with lightweight straps and cushioned soles, providing comfort during long walks and casual outings.",
    image: shoes_8,
    price: "$50",
    colors: ["#6B4226", "#8B4513", "#DEB887"],
    category: {
      name: "Casual",
      image: shoes_2,
    },
  },
  {
    id: "9",
    title: "Soccer Cleats",
    description:
      "Firm-ground soccer cleats designed for stability and traction. Lightweight upper materials and durable studs provide excellent grip and ball control on the field.",
    image: shoes_9,
    price: "$130",
    colors: ["#2E2E2E", "#556B2F", "#8B7765", "#A9A9A9", "#DC143C"],
    category: {
      name: "Sports",
      image: shoes_1,
    },
  },
  {
    id: "10",
    title: "Winter Boots",
    description:
      "Insulated winter boots built to keep your feet warm and dry. Featuring waterproof materials, thick soles, and fleece lining for maximum comfort in cold weather.",
    image: shoes_10,
    price: "$160",
    colors: ["#000000", "#654321", "#4B3621", "#A0522D"],
    category: {
      name: "Outdoor",
      image: shoes_3,
    },
  },
  {
    id: "11",
    title: "Skate Shoes",
    description:
      "Durable skate shoes with strong grip and cushioning for tricks and skating sessions. Designed with reinforced sides and flexible soles for performance and safety.",
    image: shoes_11,
    price: "$95",
    colors: ["#00CED1", "#2E2E2E", "#FF4500"],
    category: {
      name: "Sports",
      image: shoes_1,
    },
  },
  {
    id: "12",
    title: "High Heels",
    description:
      "Elegant high-heel shoes crafted with premium materials and sleek design. Perfect for parties, weddings, and events where you want to stand out with style.",
    image: shoes_5,
    price: "$140",
    colors: ["#1A1A1A", "#FFFFFF", "#FF5733", "#C70039", "#900C3F", "#581845", "#DAF7A6", "#FFD700"],
    category: {
      name: "Fashion",
      image: shoes_5,
    },
  },
  {
    id: "13",
    title: "Trail Running Shoes",
    description:
      "Shoes built for trail running with rugged soles for grip and breathable mesh for ventilation. Perfect for uneven terrains and outdoor athletes.",
    image: shoes_1,
    price: "$125",
    colors: ["#006400", "#FF4500", "#8B4513", "#000000"],
    category: {
      name: "Sports",
      image: shoes_1,
    },
  },
  {
    id: "14",
    title: "Oxford Shoes",
    description:
      "Classic Oxford shoes with polished leather and timeless design. Ideal for business, weddings, and any formal occasion requiring sophistication.",
    image: shoes_4,
    price: "$210",
    colors: ["#000000", "#4B3621", "#8B4513"],
    category: {
      name: "Formal",
      image: shoes_4,
    },
  },
  {
    id: "15",
    title: "Beach Flip-Flops",
    description:
      "Light and comfortable flip-flops perfect for the beach or poolside. Water-friendly and designed with soft straps for casual summer wear.",
    image: shoes_8,
    price: "$40",
    colors: ["#FFD700", "#FF6347", "#00CED1", "#2E8B57"],
    category: {
      name: "Casual",
      image: shoes_2,
    },
  },
];
