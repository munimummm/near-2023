'use client'

import TextInput from 'ui/components/textinput/TextInput';
import Button, { ButtonXL } from 'ui/components/buttons/Button';
import Logo from 'ui/components/logo/Logo';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { useForm } from "react-hook-form";
import Tag from 'ui/components/tag/Tag';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import Dropdown from 'ui/components/dropdown/Dropdown';
import { useState } from 'react';

type FormValues = {
    sheltername?:string,
    ceoname?:string,
    ceophone?:string,
    password?:string,
    pwcheck?:string,
    all?:boolean,
    member?:boolean,
    site?:boolean,
    personel?:boolean,
    marketing?:boolean
    file?:string[]
}

const SignupShelter = () => {
    // const fileRef = useRef<HTMLInputElement | null>(null);
    const {  control, handleSubmit } = useForm<FormValues>({
        defaultValues :{
            sheltername:"",
            ceoname:"",
            ceophone:"",
            password:"",
            pwcheck:"",
            all:false,
            member:false,
            site:false,
            personel:false,
            marketing:false,
            file:[]
        },
        mode: "onChange"
    })

    const [type, setType] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const shleterType = ["시보호소", "사설보호소"]

    const onClickSubmit = async (data: FormValues) => {
        console.log("data", data);   
    }

    const onClickType = () => {
        setIsOpen(true)
    }

    console.log(type);

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            <div className='w-[30rem] m-auto h-[95rem]'>
                <div className='pt-[8.0625rem]'>
                    <div className='flex justify-center'>
                        <Logo size='lg'/>
                    </div>
                    <div className='m-auto mt-[4rem]'>
                        <div className='pt-[0.625rem] h-[4.375rem] pl-[2rem] font-bold border-b-4'>
                            회원가입
                        </div>
                    </div>
                    <div className='mt-[1rem] h-[46rem] px-[1rem]'>
                        <div className='pt-[0.5rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                보호소 명
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'sheltername'}/>
                            </div>
                        </div>
                        <div className=' flex flex-row justify-between pt-[2rem] h-[5.75rem]' >
                            <div className='mb-[1rem]'>
                                보호소 유형
                            </div>
                            {isOpen === false ? (
                                <Tag mode='gray' isFlat={true} handleTagClick={onClickType}>검색</Tag>
                            ) : null}
                            {isOpen && (
                                <Dropdown options={shleterType} setValue={setType} defaultText=''/>
                            )}
                        </div>
                        <div className='pt-[0.5rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                대표자 이름
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'ceoname'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                대표자 전화번호
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'ceophone'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                비밀번호
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} type='password' name={'password'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] h-[5.75rem] mb-[1rem]'>
                            <div className='mb-[1rem]'>
                                비밀번호 확인
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} type='password' name={'pwcheck'}/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between h-[4rem]'>
                            <div className='flex flex-col w-[250px]'>
                                <div className='py-[0.8125rem]'>등록증을 첨부해 주세요</div>
                                <TextInput isDisabled control={control} borderRadius= {true} type='file' name={'pwcheck'}/>
                            </div>
                            <div className='pt-[20px]'>
                                <Button mode='outline' children="파일 업로드"/>
                            </div>
                        </div>
                    </div>
                    <div className='m-auto w-[26.25rem] h-[16rem] mt-[2rem]'>
                        <div className='w-[26.25rem] h-[1.25rem] flex flex-row mb-[1.5rem]'>
                            <div className='mt-[0.125rem]'>
                                <Checkbox name={"all"} control={control} labelType='singletext' label="전체 동의"/>  
                            </div>
                        </div>
                        <div className='border-t-2 h-[13.25rem]'>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name={"member"} control={control} labelType='singletext' label="(필수) 개인 회원 약관에 동의"/>
                                </div>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name={"personel"} control={control} labelType='singletext' label="(필수) 개인정보 수집 및 이용 동의"/>
                                </div>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name={"site"} control={control} labelType='singletext' label="(필수) 위치기반 서비스 이용에 동의"/>
                                </div>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name={"marketing"} control={control} labelType='singletext' label="(선택) 마케팅 정보 수신 동의 및 마케팅"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <FooterShadowBox>
                        <ButtonXL type="submit">가입완료</ButtonXL>
                    </FooterShadowBox>
                </div>
            </div>
        </form>
    )
}

export default SignupShelter;