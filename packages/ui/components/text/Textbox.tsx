'use client'

interface TextboxProps {
    id:string
}

const Textbox = ({ id } :TextboxProps) => {
    return (
        <div className={'flex justify-center flex-col items-center w-[496px] h-[359px] md:w-[768px] lg:w-[1440px]'}>
            <div className={'flex flex-col w-[456px] h-[88px] px-10 py-5 md:w-[768px] lg:w-[1440px]'}>
                <span>입양 시 입양비 20만원이 발생합니다.</span>
                <span>(중성화 수술+접종 1회+사상충 키트검사)</span>
            </div>
            <div className={'bg-white w-[456px] h-[88px] px-10 py-8 text-center rounded-lg shadow-lg mt-8 mb-4 md:w-[768px] lg:w-[1440px]'}>
                이미 <span className={'font-bold'}>{id}</span>으로 가입된 아이디가 있습니다.
            </div>
            <div className={'bg-blue-200 w-[456px] h-[56px] px-10 py-4 md:w-[768px] lg:w-[1440px]'}>
                <span>신청 결과는 담당 보호소의 검토 후 회신 됩니다.</span>
            </div>
        </div>
    )
}

export default Textbox