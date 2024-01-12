import { CustomOverlayMap, MapMarker, useMap } from '@near/kakao-map';
import { MarkerData } from './NearMap';

interface MarkerListProps {
  markers: MarkerData[];
}

export const MarkerList: React.FC<MarkerListProps> = ({ markers }) => {
  const map = useMap();

  const panTo = (lat: number, lng: number) => {
    if (map) {
      const moveCoord = new kakao.maps.LatLng(lat, lng);

      map.setLevel(3);
      map.panTo(moveCoord);
    }
  };

  return (
    <div>
      {markers.map((marker, index) => (
        <div key={`${marker.title}-${index}`}>
          <MapMarker
            position={marker.position}
            onClick={() => panTo(marker.position.lat, marker.position.lng)}
            image={{
              src: '/images/shelter/marker.png',
              size: { width: 25, height: 34 },
              options: {
                offset: {
                  x: 12,
                  y: -3,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          ></MapMarker>
          <CustomOverlayMap position={marker.position} yAnchor={1}>
            <div className='rounded-2xl border border-solid border-theme-main bg-gray-100 py-1 px-2 text-lg text-theme-main_light font-bold'>
              <span>{marker.title}</span>
              {marker.cooperation && (
                <span className='ml-4 py-1 px-2 h-6 w-6 rounded-full bg-theme-main text-white'>
                  N
                </span>
              )}
            </div>
          </CustomOverlayMap>
        </div>
      ))}
    </div>
  );
};
