export interface Product {
  id: number;
  imageurl: string;
  name: string;
  text: string;
}

export const Products: Product[] = [
  {
    id: 1,
    imageurl: '/images/image1.jpg',
    name: 'Product 1',
    text: '글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 글1 ',
  },
  {
    id: 2,
    imageurl: '/images/image2.jpg',
    name: 'Product 2',
    text: '글2 글2 글2 글2 글2 글2 글2 글2 글2 글2 글2 ',
  },
  {
    id: 3,
    imageurl: '/images/image3.jpg',
    name: 'Product 3',
    text: '글3 글3 글3 글3 글3 글3 글3 글3 글3 글3 글3 ',
  },
  {
    id: 4,
    imageurl: '/images/image4.jpg',
    name: 'Product 4',
    text: '글4 글4 글4 글4 글4 글4 글4 글4 글4 글4 글4 글4 글4 글4 ',
  },
];

// export const images: string[] = [image1, image2, image3, image4];

// const imageByIndex = (index: number): string => images[index % images.length];

// export default imageByIndex;
