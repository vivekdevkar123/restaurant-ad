import { imageUrl } from '@/utils/publicPath';

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: imageUrl('/images/features/featureOne.svg'),
  heading: "Biryani varieties",
  subheading: "Signature blends: Hyderabadi, Lucknowi and more",
    },
    {
      imgSrc: imageUrl('/images/features/featureTwo.svg'),
  heading: "Aromatic spices",
  subheading: "Hand-roasted masalas for rich flavour",
    },
    {
      imgSrc: imageUrl('/images/features/featureThree.svg'),
  heading: "Chef Sopu",
  subheading: "Master biryani chef with decades of experience",
    },
    {
      imgSrc: imageUrl('/images/features/featureFour.svg'),
  heading: "Fresh ingredients",
  subheading: "Sourced daily for authentic taste",
    }

  ]

// data.tsx
export const galleryImages = [
  { src: imageUrl('/images/Gallery/HyderabadiBiryani.jpg'), name: 'Hyderabadi Biryani (Large)', price: 350 },
  { src: imageUrl('/images/Gallery/LucknowiBiryani.jpg'), name: 'Lucknowi Biryani (Large)', price: 360 },
  { src: imageUrl('/images/Gallery/DumBiryani.jpg'), name: 'Dum Biryani (Medium)', price: 220 },
  { src: imageUrl('/images/Gallery/VegetableBiryani.jpg'), name: 'Vegetable Biryani (Medium)', price: 180 }, 
  { src: imageUrl('/images/Gallery/ChickenBiryani.jpg'), name: 'Chicken Biryani (Large)', price: 300 },
  { src: imageUrl('/images/Gallery/MuttonBiryani.jpg'), name: 'Mutton Biryani (Large)', price: 400 },
  { src: imageUrl('/images/Gallery/SeafoodBiryani.jpg'), name: 'Seafood Biryani (Large)', price: 450 },
];
