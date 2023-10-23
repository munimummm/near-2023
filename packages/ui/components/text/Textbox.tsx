'use client'

interface TextboxProps {
    id:string
    money: string
    surgery: string
    inoculation: string
    test: string
}

const Textbox = ({ id, money, surgery, inoculation, test } :TextboxProps) => {
    return (
        <div className={'flex justify-center flex-col items-center w-[31rem] h-[22.438rem] md:w-[48rem] lg:w-[90rem]'}>
            <div className={'flex flex-col w-[28.5rem] h-[5.5rem] px-10 py-5 md:w-[31rem] lg:w-[48rem]'}>
                <span>입양 시 입양비 {money}이 발생합니다.</span>
                <span>({surgery}+{inoculation}+{test})</span>
            </div>
            <div className={'bg-white w-[28.5rem] h-[5.5rem] px-10 py-8 text-center rounded-lg shadow-lg mt-8 mb-4 md:w-[31rem] lg:w-[48rem]'}>
                이미 <span className={'font-bold'}>{id}</span>으로 가입된 아이디가 있습니다.
            </div>
            <div className={'bg-blue-200 w-[28.5rem] h-[3.5rem] px-10 py-4 md:w-[31rem] lg:w-[48rem]'}>
                <span>신청 결과는 담당 보호소의 검토 후 회신 됩니다.</span>
            </div>
        </div>
    )
}

export default Textbox