import NearMap from '../map/NearMap';

interface ShelterNumberProps {
  total: number;
  nearTotal: number;
}

function ShelterNumber({ total, nearTotal }: ShelterNumberProps) {
  return (
    <div className='flex py-2.5 my-4'>
      <div className='flex flex-col gap-2.5 border-r border-r-text-gray pl-8 pr-28'>
        <div className='text-base'>전체</div>
        <div className='flex items-end gap-1'>
          <div className='text-5xl font-bold text-theme-main_light'>
            {total}
          </div>
          <div className='text-lg font-semibold'>지점</div>
        </div>
      </div>
      <div className='flex flex-col gap-2.5 pl-8  pr-28'>
        <div className='text-base'>NEAR</div>
        <div className='flex items-end gap-1'>
          <div className='text-5xl font-bold text-theme-main_light'>
            {nearTotal}
          </div>
          <div className='text-lg font-semibold'>지점</div>
        </div>
      </div>
    </div>
  );
}

function ShelterStatus({ totalShelters, nearTotal, shelters }) {
  return (
    <section>
      <ShelterNumber
        total={totalShelters.length}
        nearTotal={nearTotal.length}
      />
      <div className=''>
        <NearMap shelters={shelters} />
      </div>
    </section>
  );
}

export default ShelterStatus;
