import React, { useEffect, useState } from 'react';
import { Map } from '@near/kakao-map';
// import { useMap } from 'react-kakao-maps-sdk';
// import useKakaoMap from './useKakaoMap';
import { MarkerList } from './MarkerList';

export interface MarkerData {
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
}
export interface Address {
  title: string;
  address: string;
}

interface NearMapProps {
  shelters: Address[];
}

function NearMap({ shelters }: NearMapProps) {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  // const [isOpen, setIsOpen] = useState(false);

  // useKakaoMap();

  // useEffect(() => {
  //   if (!(map && shelters)) return;

  //   const geocoder = new kakao.maps.services.Geocoder();

  //   setMarkers([]);

  //   shelters.forEach((address) => {
  //     geocoder.addressSearch(address.address, (result, status) => {
  //       if (status === kakao.maps.services.Status.OK) {
  //         const coords = {
  //           lat: parseFloat(result[0].y),
  //           lng: parseFloat(result[0].x),
  //         };
  //         setMarkers((prev) => [
  //           ...prev,
  //           { position: coords, title: address.title },
  //         ]);
  //       }
  //     });
  //   });
  // }, [map, shelters]);

  const getAddressCoords = (shelters) => {
    if (!(map && shelters)) return;
    const geoCoder = new kakao.maps.services.Geocoder();
    return new Promise((resolve, reject) => {
      shelters.forEach((shelter) => {
        geoCoder.addressSearch(shelter.address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coord = {
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
            };
            const coords = new kakao.maps.LatLng(coord.lat, coord.lng);
            setMarkers((prev) => [
              ...prev,
              { position: coord, title: shelter.title },
            ]);
            resolve(coords);
          } else {
            reject(status);
          }
        });
      });
    });
  };

  useEffect(() => {
    getAddressCoords(shelters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, shelters]);
  return (
    <div>
      <Map
        style={{ width: '100%', height: '650px' }}
        center={{ lat: 37.5262411, lng: 126.99289439 }}
        level={10}
        onCreate={setMap}
      >
        <MarkerList markers={markers} />
      </Map>
    </div>
  );
}

export default NearMap;
// {markers.map((marker, index) => (
//   <MapMarker
//     key={`${marker.title}-${index}`}
//     position={marker.position}
//     image={{
//       src: '/images/shelter/marker.png',
//       size: { width: 25, height: 34 },
//     }}
//     // onClick={(marker) => map.panTo(marker.getPosition())}
//     // clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
//     // 마커에 마우스오버 이벤트를 등록합니다
//     onMouseOver={() => setIsOpen(true)}
//     onMouseOut={() => setIsOpen(false)}
//   >
//     {isOpen && (
//       <div className='shadow-sm backdrop-blur-sm rounded-xl text-theme-main_light'>
//         {marker.title}
//       </div>
//     )}
//   </MapMarker>
// ))}
