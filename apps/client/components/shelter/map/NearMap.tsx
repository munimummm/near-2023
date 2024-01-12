'use client';
import React, { useEffect, useState } from 'react';
import { Map } from '@near/kakao-map';
// import { useMap } from 'react-kakao-maps-sdk';
import useKakaoMap from './useKakaoMap';
import { MarkerList } from './MarkerList';

export interface MarkerData {
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
  cooperation?: boolean;
}
export interface Address {
  title: string;
  address: string;
  cooperation: boolean;
}

interface NearMapProps {
  shelters: Address[];
}

function NearMap({ shelters }: NearMapProps) {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>();
  useKakaoMap();

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
              {
                position: coord,
                title: shelter.title,
                cooperation: shelter.cooperation,
              },
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
