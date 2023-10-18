'use client'

interface InformationProps {
    shelter: string
}

const Information = ({ shelter }: InformationProps) => {
    return (
        <div className={'w-[414px] h-[24px] flex justify-between md:w-[768px] md:pl-20 md:flex md:flex-col lg:w-[1440px]'}>
            <div>
                <span>보호소 명</span>
            </div>
            <div>
                <span className={'font-bold'}>{shelter} 보호소</span>
            </div>
        </div>
    )
}

export default Information