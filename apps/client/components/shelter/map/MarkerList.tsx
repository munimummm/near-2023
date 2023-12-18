import { MapMarker, MarkerClusterer } from '@near/kakao-map';
// import { useState } from 'react';

export interface MarkerData {
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
}
interface MarkerListProps {
  markers: MarkerData[];
}

export const MarkerList: React.FC<MarkerListProps> = ({ markers }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const map = useMap();

  // const panTo = (lat: number, lng: number) => {
  //   if (map) {
  //     const moveCoord = new kakao.maps.LatLng(lat, lng);

  //     map.setLevel(3);
  //     map.panTo(moveCoord);
  //   }
  // };

  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {markers.map((marker, index) => (
        <MapMarker
          key={`${marker.title}-${index}`}
          position={marker.position}
          image={{
            src: '/images/shelter/marker.png',
            size: { width: 25, height: 34 },
          }}
          // onClick={() => panTo(marker.position.lat, marker.position.lng)}
          // clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          // onMouseOver={() => setIsOpen(true)}
          // onMouseOut={() => setIsOpen(false)}
        >
          {/* {isOpen && (
            <div className='shadow-sm backdrop-blur-sm rounded-xl text-theme-main_light'>
              {marker.title}
            </div>
          )} */}
        </MapMarker>
      ))}
    </MarkerClusterer>
  );
};
