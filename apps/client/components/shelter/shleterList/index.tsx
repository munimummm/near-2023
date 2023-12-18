import Link from 'next/link';
import MoreListButton from '../moreListButton';
import { Icon } from 'ui';

interface ShelterListProps {
  path: string;
  shelterName: string;
  cooperation: boolean;
}
function ShleterListItem({ path, shelterName, cooperation }: ShelterListProps) {
  return (
    <div className='flex justify-between px-5 py-4 rounded-xl bg-[#FBFBFB] shadow-[0px_1px_4px_0px] shadow-text-gray'>
      <Link href={path} className='text-lg font-semibold'>
        {shelterName}
      </Link>
      {cooperation && (
        <div className='text-base font-semibold text-theme-main_light'>
          NEAR 제휴
        </div>
      )}
    </div>
  );
}
function ShelterList({ shelters, fetchData }) {
  return (
    <section>
      <div className='px-8 py-8 text-xl font-bold border-b border-b-text-gray'>
        <div>니어 보호소 목록</div>
      </div>
      <div className='flex justify-end px-3 py-4'>드롭다운</div>
      <div className='grid desktop:grid-cols-2 gap-4 px-[13px] w-full '>
        {shelters.map((shelter, index) => (
          <ShleterListItem
            shelterName={shelter.shelter_name || '보호소'}
            key={index}
            path={`/shelter/detail/${shelter.id}`}
            cooperation={shelter.shelter_cooperation || false}
          />
        ))}
      </div>
      <MoreListButton onClick={fetchData} text='더 많은 보호소 보기'>
        <Icon icon='ic_add' sizes='sm' state='mild' />
      </MoreListButton>
    </section>
  );
}

export default ShelterList;
