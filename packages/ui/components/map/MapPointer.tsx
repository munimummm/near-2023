'use client'
import Pointer from '../../assets/icons/map/icon_pointer.svg'

interface MapPointerProps {
    count?: string
}

const MapPointer = ( { count } : MapPointerProps) => {
    return (
        <div className='w-20 h-33'>
            {count ? (
                    <div className={'w-20 h-11 bg-slate-100 mb-2 text-center pt-0.5'}>
                        <span className={'text-3xl font-bold  text-indigo-900'}>{count}</span>
                    </div>
                ) :
                    null
            }
            <Pointer className={'ml-2.5'}/>
        </div>
    )
}

export default MapPointer