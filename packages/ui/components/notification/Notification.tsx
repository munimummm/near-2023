'use client'

interface NotificationProps {
    time?: string
}

const Notification = ({ time } : NotificationProps) => {
    return (
        <div className={'w-[319px] h-[99px] px-4 pt-2 md:w-[720px] h-[78px] border-b border-slate-500'}>
            <div className={'md:flex justify-between'}>
                <div className={''}>
                    <div className={'w-[70px] h-[24px] font-bold text-base'}>봉사 신청</div>
                    <div className={'w-[287px] h-[24px] my-1 text-base'}>09번의 봉사 신청이 완료되었습니다.</div>
                </div>
                <div className={'md:mt-8'}>
                    <div className={'w-[257px] h-[24px] text-gray-400'}> 봉사 신청 | by 니어팀 | {time}</div>
                </div>
            </div>
        </div>
    )
}

export default Notification