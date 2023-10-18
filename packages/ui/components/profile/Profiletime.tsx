'use client'
import IconProfileSmallDefault from '../../assets/icons/profile/icon_profile_small_default.svg'

interface ProfiletimeProps {
    nickname: string
    time?: string
}

const Profiletime = ({ nickname, time } : ProfiletimeProps) => {
    return (
        <div className={'flex'}>
            <div className={'mr-2'}>
                <IconProfileSmallDefault/>
            </div>
            <div>
                <span className={'text-gray-300'}>{nickname}</span>
            </div>
            <div className={'mx-2'}>
            {time ? 
                (
                    <span className={'text-gray-300'}>|</span>
                ) :
                null
            }
            </div>
            {time ?
                (
                    <span className={'text-gray-300'}>{time}</span>
                ) : 
                null
            }
        </div>
    )
}

export default Profiletime