'use client'

import {  ButtonXL, ButtonXS } from "ui/components/buttons/Button"
import ImageBox from "ui/components/imagebox/ImageBox"
import TextInput from "ui/components/textinput/TextInput"
import { useForm } from "react-hook-form";
import Tag from "ui/components/tag/Tag";
// import Tag from "ui/components/tag/Tag";

const PersonalChange = () => {
    const { control } = useForm({
        defaultValues :{
            
        },
        mode: "onChange"
    });

    // const onClickPersonalChange = () => {

    // }

    // const onClickPasswordChange = () => {

    // }

    // const onClickImageChange = () => {

    // }

    return (
        <div>
            <div></div>
            <form>
                <div className="mobile:flex mobile:flex-col mobile:justify-between mobile:items-center mobile:h-[6.25rem] mobile:mt-[8.25rem] mobile:mb-[2.5rem] 
                                tablet:h-[9.25rem] tablet:grid tablet:justify-items-start">
                    <div className="moblie:pb-[3rem] moblie:text-[1.25rem] mobile:font-bold tablet:font-bold
                                    tablet:ml-[4.0625rem]
                    ">
                        프로필
                    </div>
                    <div className="mobile:flex flex-row justify-between w-[12.5rem]
                                    tablet:ml-[2.5rem]
                    ">
                        <div className="text-slate-300">개인 정보</div>
                        <div className="text-slate-300">비밀번호 변경</div>
                    </div>
                </div> 
                <div className="mobile:flex mobile:flex-col">
                    <div className="mobile:h-[14rem] mobile:grid mobile:relative 
                                    tablet:h-[14rem] tablet:relative
                                    desktop:h-[14rem] desktop:relative">
                        <div className="mobile:flex mobile:flex-row mobile:items-end mobile:absolute top-[1.5rem] mobile:left-[1.625rem]
                                        tablet:absolute top-[2.5rem] tablet:left-[11.25rem]
                                        desktop:absolute top-[124px] desktop:left-[379px]">
                            <ImageBox size="lg"/>
                            <ButtonXS mode="outline">이미지 수정</ButtonXS>
                        </div>
                    </div>
                    <div className="mobile:h-[37.5rem] mobile:mt-[1rem] desktop:h-[760px]">
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        desktop:mb-[1.625rem]
                                        ">
                            <div>이름</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='성함을 입력하세요' name={'name'}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:justify-between mobile:items-center mobile:h-[4rem] mobile:w-[26rem] mobile:m-auto
                                        desktop:w-[43.1875rem] desktop:mb-[1.625rem]">
                            <div>성별</div>
                            <Tag mode="gray" isFlat={true}>선택</Tag>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid
                                        desktop:grid desktop:mb-[1.625rem]">
                            <div>생년월일</div>
                            <div className="mobile:flex mobile:flex-row mobile:w-[26.125rem] desktop:w-[43.1875rem]">
                                <div className="mobile:flex mobile:justify-between mobile:w-[21.8125rem] mobile:mr-[0.75rem] desktop:w-[43.1875rem]">
                                    <TextInput control={control} borderRadius= {true} placeholder='성함을 입력하세요' name={'birth'}/>
                                </div>
                                <Tag mode="gray" isFlat={true}>달력</Tag>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]">
                            <div>이메일</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='이메일을 입력하세요' name={'email'}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]">
                            <div>전화번호</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='전화번호를 입력하세요 ' name={'phone'}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[9.25rem] mobile:grid 
                                        desktop:w-[43.1875rem] desktop:m-auto">
                            <div>주소</div>
                            <div>
                                <div className="flex mobile:flex-row w-[26.125rem] mb-[0.5rem] desktop:w-[43.1875rem]">
                                    <div className="flex mobile:justify-between w-[21.8125rem] mr-[0.75rem] desktop:w-[43.1875rem]">
                                        <TextInput control={control} borderRadius= {true} placeholder='주소를 입력하세요' name={'address'}/>
                                    </div>
                                    <Tag mode="gray" isFlat={true}>입력</Tag>
                                </div>
                                <div>
                                    <TextInput control={control} borderRadius= {true} placeholder='주소를 입력하세요' name={'detailaddress'}/>
                                </div>
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

export default PersonalChange;