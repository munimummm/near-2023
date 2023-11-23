export interface TopData {
  id: number;
  imageurl: string;
  name: string;
}

export interface BottomData extends TopData {
  text: string;
}

export const TopData: TopData[] = [
  {
    id: 1,
    imageurl: '/images/image1.jpg',
    name: 'Product 1',
  },
  {
    id: 2,
    imageurl: '/images/image2.jpg',
    name: 'Product 2',
  },
  {
    id: 3,
    imageurl: '/images/image3.jpg',
    name: 'Product 3',
  },
  {
    id: 4,
    imageurl: '/images/image4.jpg',
    name: 'Product 4',
  },
];

export const BottomData: BottomData[] = [
  {
    id: 1,
    imageurl: '/images/home/History.png',
    name: 'History',
    text: `2017년부터 2021년까지 매년 10만 마리 이상의 동물들이 유기되고 있어요.

    공설 보호소의 경우 개체수 조절을 위해 안락사를 진행하고, 
    
    사설 보호소는 열악한 환경 속에서 봉사자들의 
    도움과 후원으로 겨우 운영이 되고 있습니다.`,
  },
  {
    id: 2,
    imageurl: '/images/home/Goal.png',
    name: 'Goal',
    text: `니어는 두가지 목표를 가지고 있어요. 
    첫째, 투명하게 정보를 공유할 수 있는 안전한 플랫폼
    둘째, 한번에 유기 동물 정보를 확인할 수 있는 편리한 플랫폼
     
    우리 주변의 모든 동물들이 행복해질 수 있도록.`,
  },
  {
    id: 3,
    imageurl: '/images/home/OutCome.png',
    name: 'OutCome',
    text: `그래서 우리는 세가지 기능을 만들었어요.

    근처동물에서 편하게 통합된 유기동물 정보를 확인하세요.
    
    NEAR 봉사에서 안전하게 유기동물 봉사를 신청하세요.
    
    임보일기에서 임보중인 동물과의 추억을 기록하세요.`,
  },
];

// export const images: string[] = [image1, image2, image3, image4];

// const imageByIndex = (index: number): string => images[index % images.length];

// export default imageByIndex;
