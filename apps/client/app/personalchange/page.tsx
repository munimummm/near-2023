'use client'

import { ButtonXL, ButtonXS } from "ui/components/buttons/Button"
import ImageBox from "ui/components/imagebox/ImageBox"
import TextInput from "ui/components/textinput/TextInput"
import { useForm } from "react-hook-form";
import Tag from "ui/components/tag/Tag";
import FooterShadowBox from "ui/components/footer/FooterShadowBox";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import "./datepicker/datepicker.css"
import 'react-datepicker/dist/react-datepicker.css'
import { Modal } from "antd";
import DaumPostcode from 'react-daum-postcode';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface FormValues {
    birth?:string
    address?: string
    name?: string
    phone?:string
    gender?:string
    detail_address?: string
    email?:string
}

const PersonalChange = () => {
    const supabase = createClientComponentClient();
    const router = useRouter();
    // const { id } = useParams();
    const { control, setValue, handleSubmit } = useForm<FormValues>({
        defaultValues :{
            birth:"",
            address:"",
            name:"",
            email:"",
            detail_address:"",
            phone:""
        },
        mode: "onChange"
    });

    const [color, setColor] = useState<boolean>(false)
    const [datePicker, setDatePicker] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClickPasswordChange = () => {
        router.push("/passwordchange")
        setColor(true);
    }

    const onClickDatePicker = () => {
        const date = selectedDate;
        const year = date?.getFullYear()
        const month = Number(date?.getMonth()) + 1
        const day = date?.getDate()
        const value = year + "." + month + "." + day
        
        setValue("birth", value)
        setDatePicker(!datePicker);
    }

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    }
    const handleComplete = (data: any) => {
        setValue("address", data.address);

        onToggleModal();
    } 

    const onClickSubmit = async (userData: FormValues, e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let { data:user_profile, error } = await supabase
            .from('user_profile')
            .update({ name: userData.name, 
                      birth: userData.birth,
                      phone: userData.phone,
                      gender: userData.gender,
                      address: userData.address,
                      detail_address: userData.detail_address
            })
            .eq("id","ee4cbbee-b099-47ad-bdd4-131e601fbf9d");

            if(error instanceof Error) {
                console.log(error);
            }

            if(user_profile) {
                console.log("변경");
            }
            router.push('/');
    }

    return (
        
        <form onSubmit={handleSubmit(onClickSubmit)}>
            {isOpen && (
                <Modal
                    open={isOpen}
                    onOk={onToggleModal}
                    onCancel={onToggleModal}
                >
                    <DaumPostcode
                        onComplete={handleComplete}
                    />
                </Modal>
            )}
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
                        <div className="text-indigo-900">개인 정보</div>
                        {color === false ? (
                            <div className="text-slate-300" onClick={onClickPasswordChange}>비밀번호 변경</div>
                            ) : (
                            <div className="text-indigo-900" onClick={onClickPasswordChange}>비밀번호 변경</div>
                        )}
                    </div>
                </div> 
                <div className=" m-auto mobile:flex mobile:flex-col mobile:bg-blue-200 mobile:w-[480px] mobile:h-[1000px]
                                 tablet:w-[480px] tablet:h-[902px]
                                 desktop:w-[1440px] desktop:h-[1057px]">
                    <div className="mobile:h-[14rem] mobile:relative 
                                    tablet:h-[14rem] tablet:relative
                                    desktop:h-[14rem] desktop:relative">
                        <div className="mobile:flex mobile:flex-row mobile:items-end mobile:absolute top-[3.125rem] mobile:left-[1.625rem]
                                        tablet:absolute top-[2.5rem]
                                        desktop:absolute top-[7.75rem] desktop:left-[375px]">
                            <ImageBox size="lg"/>
                            <ButtonXS mode="outline">이미지 수정</ButtonXS>
                        </div>
                    </div>
                    <div className="mobile:h-[37.5rem] mobile:mt-[1rem] desktop:h-[760px]">
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid moible:mb-[0.625rem]
                                        desktop:mb-[1.625rem]">
                            <div>이름</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='성함을 입력하세요' name={'name'} rules={{required:false}}/>
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
                                    <TextInput control={control} borderRadius= {true} placeholder='생년월일을 입력하세요' name={'birth'}/>
                                </div>
                                <Tag mode="gray" isFlat={true} handleTagClick={onClickDatePicker}>달력</Tag>
                                <DatePicker 
                                    dateFormat="yyyy년 MM월 dd일"
                                    selected={selectedDate}
                                    onChange={(date: Date) => {setSelectedDate(date); setDatePicker(false)}}
                                    open={datePicker}
                                />
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]">
                            <div>이메일</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='이메일을 입력하세요' name={'email'} rules={{required:false}}/>
                            </div>
                        </div>
                        <div className="mobile:flex mobile:justify-center mobile:h-[5.75rem] mobile:grid desktop:mb-[1.625rem]">
                            <div>전화번호</div>
                            <div className="mobile:w-[26rem] desktop:w-[43.1875rem]">
                                <TextInput control={control} borderRadius= {true} placeholder='전화번호를 입력하세요 ' name={'phone'} rules={{required:false}}/>
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
                                    <Tag mode="gray" isFlat={true} handleTagClick={onToggleModal}>입력</Tag>
                                </div>
                                <div>
                                    <TextInput control={control} borderRadius= {true} placeholder='주소를 입력하세요' name={'detail_address'} rules={{required:false}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FooterShadowBox>
                            <ButtonXL type="submit">변경하기</ButtonXL>
                        </FooterShadowBox>
                    </div>
                </div>
            </form>
     
    )
}

export default PersonalChange;