export interface Pattern {
  id: string;
  title: string;
  image: string;
  price: number;
  category: "toys" | "clothes" | "accessories" | "home";
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
}

export const patterns: Pattern[] = [
  {
    id: "1",
    title: "Cozy Bear Plushie",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    price: 5.99,
    category: "toys",
    difficulty: "beginner",
    description: "An adorable bear that makes a perfect gift for little ones.",
  },
  {
    id: "2",
    title: "Chunky Winter Cardigan",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop",
    price: 12.99,
    category: "clothes",
    difficulty: "advanced",
    description: "A warm and stylish cardigan perfect for cold days.",
  },
  {
    id: "3",
    title: "Rainbow Baby Blanket",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=500&fit=crop",
    price: 8.99,
    category: "home",
    difficulty: "intermediate",
    description: "A colorful blanket that brightens any nursery.",
  },
  {
    id: "4",
    title: "Boho Market Bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    price: 6.99,
    category: "accessories",
    difficulty: "beginner",
    description: "A stylish and eco-friendly bag for your market runs.",
  },
  {
    id: "5",
    title: "Cute Bunny Amigurumi",
    image: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=500&h=500&fit=crop",
    price: 4.99,
    category: "toys",
    difficulty: "beginner",
    description: "A sweet little bunny to cuddle with.",
  },
  {
    id: "6",
    title: "Lace Summer Top",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&h=500&fit=crop",
    price: 9.99,
    category: "clothes",
    difficulty: "intermediate",
    description: "A breezy lace top perfect for warm weather.",
  },
  {
    id: "7",
    title: "Cozy Throw Pillow",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop",
    price: 7.99,
    category: "home",
    difficulty: "intermediate",
    description: "Add texture and warmth to your living space.",
  },
  {
    id: "8",
    title: "Flower Garden Scrunchie Set",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop",
    price: 3.99,
    category: "accessories",
    difficulty: "beginner",
    description: "A set of three floral scrunchies for everyday wear.",
  },
];

export const categories = [
  { id: "all", label: "All Patterns" },
  { id: "toys", label: "Toys" },
  { id: "clothes", label: "Clothes" },
  { id: "accessories", label: "Accessories" },
  { id: "home", label: "Home" },
];

export const difficulties = [
  { id: "all", label: "All Levels" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];
