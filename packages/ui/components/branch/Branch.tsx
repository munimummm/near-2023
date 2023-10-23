'use client'

interface BranchProps {
    count? : string
}

const Branch = ({ count } : BranchProps) => {
    return (
        <div className={'w-[238px] h-[83px] pl-8'}>
            <div className={'w-24 h-[83px]'}>
                <div className={'mb-2.5'}>
                    <span>전국</span>
                </div>
                <div>
                    <span className={'font-bold text-5xl text-indigo-900'}>{count}</span>
                    <span className={'font-semibold'}>지점</span>
                </div>
            </div>
        </div>
    )
}

export default Branch