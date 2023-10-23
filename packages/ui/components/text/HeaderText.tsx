'use client'

interface HeaderTextProps {

}

const HeaderText = () => {
    return (
        <div className={'flex flex-col w-[30rem] h-[16.5rem] place-content-center md:w-[48rem] md:h-[25.313rem] lg:w-[90rem] lg:h-[12.5rem]'}>
            <div className={'text-center mb-10'}>
                <span className={'font-bold text-4xl'}>NEAR 뉴스레터</span>
            </div>
            <div className={'flex flex-col text-center'}>
                <span className={'text-xl'}>우리 근처의 유기견 이야기들을</span>
                <span className={'text-xl'}>매주 한 번 전달 해 드릴께요</span>
            </div>
        </div>
    )
}

export default HeaderText