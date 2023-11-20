'use client'

import { useForm } from "react-hook-form";
import TextInput from "ui/components/textinput/TextInput"
import {  ButtonXL } from "ui/components/buttons/Button" 

const PasswordChange = () => {
    const { control } = useForm({
        defaultValues :{
            
        },
        mode: "onChange"
    });

    return (
        <div>
            <div></div>
            <form>
                <div className="mobile:flex mobile:flex-col mobile:justify-between mobile:items-center mobile:h-[6.25rem] mobile:mt-[8.25rem] mobile:mb-[2.5rem] 
                                tablet:h-[9.25rem] tablet:grid tablet:justify-items-start">
                    <div className="moblie:pb-[3rem] moblie:text-[1.25rem] mobile:font-bold tablet:font-bold
                                    tablet:ml-[4.0625rem]">
                        프로필
                    </div>
                    <div className="mobile:flex flex-row justify-between w-[12.5rem]
                                    tablet:ml-[2.5rem]">
                        <div className="text-slate-300">개인 정보</div>
                        <div className="text-slate-300">비밀번호 변경</div>
                    </div>
                </div>
                <div className="mobile:flex mobile:flex-col">
                    <div className="mobile:h-[37.5rem] mobile:mt-[1rem] desktop:h-[760px]">
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        tablet:mb-[1.5rem]
                                        desktop:mb-[1.625rem]">
                            <div>현재 비밀번호</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='현재 비밀번호를 입력하세요' name={'currentpw'}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        tablet:mb-[1.5rem]
                                        desktop:mb-[1.625rem]">
                            <div>변경 비밀번호 입력</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='변경할 비밀번호를 입력하세요' name={'currentpw'}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        desktop:mb-[1.625rem]">
                            <div>변경 비밀번호 확인</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='변경할 비밀번호를 입력하세요' name={'currentpw'}/>
                            </div>
                        </div>
                    </div>
                    <div className="mobile:flex mobile: mobile:h-[8rem] mobile:items-center mobile:justify-center
                                    desktop:relative">
                        <div className="desktop:absolute right-[5.0625rem]">
                            <ButtonXL>변경하기</ButtonXL>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default PasswordChange;