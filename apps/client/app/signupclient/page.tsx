'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonXL } from "ui/components/buttons/Button";
import CheckBox from "ui/components/checkbox/Checkbox";
import Dropdown from "ui/components/dropdown/Dropdown";
import FooterShadowBox from "ui/components/footer/FooterShadowBox";
import Logo from "ui/components/logo/Logo";
import Tag from "ui/components/tag/Tag";
import TextInput from "ui/components/textinput/TextInput";

type FormValues = {
    
}

const SignupClient = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues :{
            
        },
        mode: "onChange"
    })

    const genderOptions = ["수컷", "암컷"]
    const [gender, setGender] = useState<string>("")

    const onClickSubmit = async (data: FormValues) => {
        console.log("data", data);   
    }

    console.log(gender)

    return (
       <form onSubmit={handleSubmit(onClickSubmit)}>
            <section>
                <div className="mobile:flex mobile:justify-center mobile:mt-[8.0625rem] mobile:mb-[4rem]">
                    <Logo size="lg"/>
                </div>
            </section>
            {/* 입력 란 */}
            <section>
                <div className="m-auto mobile:h-[85.5rem] w-[30rem]">
                    <div className="mobile:h-[4.375rem] mobile:pt-[0.625rem] mobile:pl-[2rem] mobile:text-[1.25rem] mobile:font-bold mobile:border-b-2">회원가입</div>
                    <div className="mt-[3rem]">
                        <div className="grid pl-[6%] mobile:h-[5.75rem]">
                            <div>이메일</div>
                            <div className="flex gap-x-3">
                                <TextInput control={control} placeholder="이메일을 입력하세요" borderRadius={true} name={'email'}/>
                                <Tag mode="gray" isFlat={true}>중복 확인</Tag>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[5.75rem]">
                            <div>비밀번호</div>
                            <div className="">
                                <TextInput control={control} state="password" placeholder="비밀번호를 입력하세요" borderRadius={true} name={'password'}/>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[5.75rem]">
                            <div>비밀번호 확인</div>
                            <div className="">
                                <TextInput control={control} state="password" placeholder="비밀번호를 재입력하세요" borderRadius={true} name={'pwcheck'}/>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[5.75rem]">
                            <div>이름</div>
                            <div className="">
                                <TextInput control={control} placeholder="이름을 입력하세요" borderRadius={true} name={'name'}/>
                            </div>
                        </div>
                        <div className="flex justify-between p-[6%] mobile:h-[5.75rem]">
                            <div>성별</div>
                            <div>
                                <Dropdown options={genderOptions} defaultText="" setValue={setGender}/>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[5.75rem]">
                            <div>생년월일</div>
                            <div className="flex gap-x-3">
                                <TextInput control={control} placeholder="yyyy.mm.dd" borderRadius={true} name={'birth'}/>
                                <Tag mode="gray" isFlat={true}>달력</Tag>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[5.75rem]">
                            <div>전화번호</div>
                            <div className="">
                                <TextInput control={control} placeholder="번호를 입력하세요" borderRadius={true} name={'phone'}/>
                            </div>
                        </div>
                        <div className="grid px-[6%] mobile:h-[7rem]">
                            <div>주소</div>
                            <div className="grid gap-y-2 mt-[0.625rem]">
                                <div className="flex gap-x-3">
                                    <TextInput control={control} placeholder="주소를 입력하세요" borderRadius={true} name={'address'}/>
                                    <Tag mode="gray" isFlat={true}>입력</Tag>
                                </div>
                                <div>
                                    <TextInput control={control} placeholder="상세주소를 입력하세요" borderRadius={true} name={'detail'}/>
                                </div>
                                <span className="text-xs pl-2">동네 기반으로 니어동물, 봉사활동을 추천할 때 필요해요</span>
                            </div>
                        </div>
                        <div className="m-auto grid gap-y-2 mobile:w-[26.25rem] mobile:h-[16rem] mobile:mt-[5rem]">
                            <div className="border-b-2 h-[2.5rem]">
                                <CheckBox control={control} labelType="singletext" name={"all"} type="checkbox" label="전체동의"/>
                            </div>
                            <div className="grid gap-y-4">
                                <CheckBox control={control} labelType="singletext" name={"all"} type="checkbox" label="(필수) 개인 회원 약관에 동의"/>
                                <CheckBox control={control} labelType="singletext" name={"all"} type="checkbox" label="(필수) 개인정보 수집 및 이용 동의"/>
                                <CheckBox control={control} labelType="singletext" name={"all"} type="checkbox" label="(필수) 위치기반 서비스 이용에 동의"/>
                                <CheckBox control={control} labelType="singletext" name={"all"} type="checkbox" label="(선택) 마케팅 정보 수신 동의 및 마케팅"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <FooterShadowBox>
                    <ButtonXL type="submit">가입완료</ButtonXL>
                </FooterShadowBox>
            </section>
       </form>
    )
}

export default SignupClient;
