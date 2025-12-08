const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: `${basePath}/images/features/featureOne.svg`,
  heading: "Biryani varieties",
  subheading: "Signature blends: Hyderabadi, Lucknowi and more",
    },
    {
      imgSrc: `${basePath}/images/features/featureTwo.svg`,
  heading: "Aromatic spices",
  subheading: "Hand-roasted masalas for rich flavour",
    },
    {
      imgSrc: `${basePath}/images/features/featureThree.svg`,
  heading: "Chef Sopu",
  subheading: "Master biryani chef with decades of experience",
    },
    {
      imgSrc: `${basePath}/images/features/featureFour.svg`,
  heading: "Fresh ingredients",
  subheading: "Sourced daily for authentic taste",
    }

  ]

// data.tsx
export const galleryImages = [
  { src: `${basePath}/images/Gallery/HyderabadiBiryani.jpg`, name: 'Hyderabadi Biryani (Large)', price: 350 },
  { src: `${basePath}/images/Gallery/LucknowiBiryani.jpg`, name: 'Lucknowi Biryani (Large)', price: 360 },
  { src: `${basePath}/images/Gallery/DumBiryani.jpg`, name: 'Dum Biryani (Medium)', price: 220 },
  { src: `${basePath}/images/Gallery/VegetableBiryani.jpg`, name: 'Vegetable Biryani (Medium)', price: 180 }, 
  { src: `${basePath}/images/Gallery/ChickenBiryani.jpg`, name: 'Chicken Biryani (Large)', price: 300 },
  { src: `${basePath}/images/Gallery/MuttonBiryani.jpg`, name: 'Mutton Biryani (Large)', price: 400 },
  { src: `${basePath}/images/Gallery/SeafoodBiryani.jpg`, name: 'Seafood Biryani (Large)', price: 450 },
];
