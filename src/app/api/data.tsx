import { imageUrl } from '@/utils/publicPath';

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: imageUrl('/images/Features/biryani.jpg'),
      heading: "Biryani varieties",
      subheading: "Signature blends: Hyderabadi, Lucknowi and more",
    },
    {
      imgSrc: imageUrl('/images/Features/aromatic-spices.jpg'),
      heading: "Aromatic spices",
      subheading: "Hand-roasted masalas for rich flavour",
    },
    {
      imgSrc: imageUrl('/images/Features/chef.jpg'),
      heading: "Chef Sopu",
      subheading: "Master biryani chef with decades of experience",
    },
    {
      imgSrc: imageUrl('/images/Features/ingredients.jpg'),
      heading: "Fresh ingredients",
      subheading: "Sourced daily for authentic taste",
    }

  ]

// data.tsx
export const galleryImages = [
  { src: imageUrl('/images/Gallery/ChickenBiryani.jpg'), name: 'Chicken Biryani', price: 99 },
  { src: imageUrl('/images/Gallery/daal_khichadi.jpg'), name: 'Dal Khichadi', price: 89 },
  { src: imageUrl('/images/Gallery/omlet.jpg'), name: 'Egg Omlet', price: 39 },
  { src: imageUrl('/images/Gallery/boiled_egg.jpg'), name: 'Boiled Egg', price: 29 },
  { src: imageUrl('/images/Gallery/raita.jpg'), name: 'Raita', price: 29 },
  { src: imageUrl('/images/Gallery/water_bottal.jpg'), name: 'Water Bottal [1L]', price: 15 },
];
