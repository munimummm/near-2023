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

export const DummyNearPets = [
  {
    cardNumber: 1,
    src: '/images/image1.jpg',
    tags: ['태그 1', '태그 2', '태그 3', '태그 4', '태그 5'],
    isLiked: false,
    petData: { lost_pet_id: 1, name: '세바스찬' },
  },
  {
    cardNumber: 2,
    src: '/images/image1.jpg',
    tags: ['태그 1', '태그 2', '태그 3', '태그 4', '태그 5'],
    isLiked: false,
    petData: { lost_pet_id: 2, name: '덕구' },
  },
  {
    cardNumber: 3,
    src: '/images/image1.jpg',
    tags: ['태그 1', '태그 2', '태그 3', '태그 4', '태그 5'],
    isLiked: false,
    petData: { lost_pet_id: 3, name: '상추' },
  },
  {
    cardNumber: 4,
    src: '/images/image1.jpg',
    tags: ['태그 1', '태그 2', '태그 3', '태그 4', '태그 5'],
    isLiked: false,
    petData: { lost_pet_id: 4, name: '제니퍼' },
  },
];

export const DummyHomeVolunteerPoster = {
  url: '/images/image1.jpg',
  text: '니어 봉사활동은 도움이 필요한 보호소에 봉사활동의 손길을 제공하고, 봉사활동 기회를 통해 유기견에 대한 긍정적 인식 전환을 바탕으로 유기동물 치료, 보호, 재입양을 목표로 합니다. 니어 봉사활동을 통해 00마리의 유기견이 새로운 가족을 찾았습니다.',
};

export const DummyHomeJoinVolunteer = [
  {
    src: '/mock/home/volunteer_thumbnail.jpg',
    id: 1,
    title: '청소봉사',
    subTitle:
      '보호소에 있는 견사와 배설물을 치우고, 배변패드 및 이불정리, 물걸레질 등이 주된 봉사내용 입니다.',
  },
  {
    src: '/mock/home/volunteer_thumbnail.jpg',
    id: 2,
    title: '산책봉사',
    subTitle:
      '종일 견사에 있는 아이들과 산책을 하는 봉사활동입니다. 산책봉사를 통해 아이들의 스트레스 해소를 돕습니다.',
  },
  {
    src: '/mock/home/volunteer_thumbnail.jpg',
    id: 3,
    title: '의료봉사',
    subTitle:
      '크고 작은 세균에 감염되거나, 때에 따라 접종과 중성화 수술 등의 검진과 치료를 담당하는 봉사활동입니다.',
  },
  {
    src: '/mock/home/volunteer_thumbnail.jpg',
    id: 4,
    title: '미용봉사',
    subTitle:
      '동물의 털 미용과 발톱 정리등을 담당해, 위생 및 청결을 책임집니다.',
  },
];

export const DummyHomeNearNews = [
  {
    id: 1,
    category: '니어 소식',
    title: '한국 유기동물 문제의 심각성',
    date: '2023.3.4',
    author: '니어팀',
    src: '/mock/home/newletter_thumbnail.jpg',
  },
  {
    id: 2,
    category: '니어 소식',
    title: '유기동물 보호소의 종류',
    date: '2023.5.21',
    author: '니어팀',
    src: '/mock/home/newletter_thumbnail.jpg',
  },
  {
    id: 3,
    category: '니어 소식',
    title: '유기동물 봉사활동은 어떤 영향을 줄 수 있나요?',
    date: '2023.8.2',
    author: '니어팀',
    src: '/mock/home/newletter_thumbnail.jpg',
  },
  {
    id: 4,
    category: '니어 소식',
    title: '유기견 봉사활동에서 하는 일',
    date: '2023.11.14',
    author: '니어팀',
    src: '/mock/home/newletter_thumbnail.jpg',
  },
];
