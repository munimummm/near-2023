'use client';

// import Link from 'next/link';
import { createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import ShelterStatus from '../../components/shelter/shelterStatus';
import ShelterList from '../../components/shelter/shleterList';

export interface ShelterProps {
  id: number;
  shelter_name?: string;
  ceo_name?: string;
  ceo_phone?: string;
  shelter_address?: string;
  shelter_detail_address?: string;
  shelter_type?: string;
  shelter_scale?: string;
  created_at?: string;
  marketing_agree?: boolean;
  shelter_cooperation?: boolean;
  register_number?: string;
  email?: string;
}

export const dynamic = 'force-dynamic';

function ShelterTitle() {
  return (
    <div className='flex flex-col gap-1 px-8 py-8 border-b border-b-text-gray'>
      <div className='text-xs'>2023.12 기준</div>
      <div className='text-xl'>수도권 유기견 보호소 현황</div>
    </div>
  );
}

function ShelterHomePage() {
  const supabase = createClientComponentClient();
  const [shelters, setShelters] = useState<ShelterProps[]>([]);
  const [page, setPage] = useState(0);
  const [totalShelters, setTotalShelters] = useState(0);
  const [nearTotal, setNearTotal] = useState(0);

  const getFromAndTo = () => {
    const ITEM_PER_PAGE = 4;
    let from = page * ITEM_PER_PAGE;
    let to = from + ITEM_PER_PAGE;
    if (page > 0) {
      from += 1;
    }
    return { from, to };
  };

  const fetchShelterCounts = async () => {
    const { data: allShelters, error } = await supabase
      .from('shelter_profile')
      .select('*');
    if (error) {
      console.error(error);
      return;
    }

    const nearShelters = allShelters.filter(
      (shelter) => shelter.shelter_cooperation,
    );
    setTotalShelters(allShelters.length);
    setNearTotal(nearShelters.length);
  };

  const fetchData = async () => {
    const { from, to } = getFromAndTo();
    const { data, error } = await supabase
      .from('shelter_profile')
      .select('*')
      .eq('shelter_cooperation', true)
      .range(from, to);

    if (error) {
      console.error(error);
      return;
    }

    setShelters((cur) => [...cur, ...data]);
    setPage(page + 1);
  };
  const sheltersMapData = (shelters) => {
    return shelters.map((shelter) => ({
      title: shelter.shelter_name,
      address: shelter.shelter_address,
    }));
  };
  const mapData = sheltersMapData(shelters);

  useEffect(() => {
    fetchShelterCounts();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ShelterTitle />
      <div className='flex flex-col tablet:gap-9 desktop:gap-28 desktop:justify-center tablet:mt-14 desktop:mt-16'>
        <ShelterStatus
          nearTotal={nearTotal}
          shelters={mapData}
          totalShelters={totalShelters}
        />
        <ShelterList fetchData={fetchData} shelters={shelters} />
      </div>
    </div>
  );
}

export default ShelterHomePage;
