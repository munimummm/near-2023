'use client'

interface TextWithButtonProps {
    onClick?: () => void;
}

const TextWithButton = ({ onClick, ...props } : TextWithButtonProps ) => {
    return (
        <div className={'relative bg-gray-300 hidden lg:flex flex-col w-[1440px] h-[318px] '}>
            <div className={'absolute right-12 top-8'}>
                <div className={'mb-10'}>
                    <span className={'text-white text-5xl font-bold'}>NEAR 임보 일기</span>
                </div>
                <div className={'flex flex-col text-right'}>
                    <span className={'text-white text-xl'}>반려 동물의 소중한 성장 과정을</span>
                    <span className={'text-white text-xl'}>임보일기로 기록해요</span>
                </div>
            </div>
            <div className={'absolute bottom-12 right-12 border-2 border-indigo-900 rounded-full w-52 h-16 font-bold '}>
                <button  
                    type="button"
                    onClick={onClick}
                    {...props}
                    className={'rounded-full rounded-full w-52 h-16 text-indigo-900'}>
                        내 임보일기 작성하기
                </button>
            </div>
        </div>
    )
}

export default TextWithButton