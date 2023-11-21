'use client'

import TextInput from 'ui/components/textinput/TextInput';
import Button, { ButtonXL } from 'ui/components/buttons/Button';
import Logo from 'ui/components/logo/Logo';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { useForm } from "react-hook-form";
import Tag from 'ui/components/tag/Tag';


const SignupShelter = () => {
    const {  control } = useForm({
        defaultValues :{
            
        },
        mode: "onChange"
    })

    return (
        <form>
            <div className='w-[30rem] m-auto'>
                <div className='pt-[8.0625rem]'>
                    <div className='flex justify-center'>
                        <Logo size='lg'/>
                    </div>
                    <div className='m-auto mt-[4rem]'>
                        <div className='pt-[0.625rem] h-[4.375rem] pl-[2rem] font-bold border-b-4'>
                            회원가입
                        </div>
                    </div>
                    <div className='mt-[1rem] h-[46rem] grid'>
                        {/* <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem]'>
                            <div className='flex'>
                                <div className='mb-[1rem]'>
                                    보호소 등록 번호
                                </div>
                                <Tooltips content=''/>
                            </div>
                                <div className='flex flex-row justify-between'>
                                    <TextInput control={control} placeholder='4~20자리/영문,숫자 사용' borderRadius= {true} name={'register'}/>
                                    <Tag mode='gray' isFlat={true}>검색</Tag>
                                </div>
                        </div> */}
                        <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                보호소 명
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'sheltername'}/>
                            </div>
                        </div>
                        <div className=' flex flex-row justify-between pt-[2rem] pl-[2rem] h-[5.75rem]' >
                            <div className='mb-[1rem]'>
                                보호소 유형
                            </div>
                            <Tag mode='gray' isFlat={true}>검색</Tag>
                        </div>
                        <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                대표자 이름
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'ceoname'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                대표자 전화번호
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} name={'ceophone'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem]'>
                            <div className='mb-[1rem]'>
                                비밀번호
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} type='password' name={'password'}/>
                            </div>
                        </div>
                        <div className='pt-[0.5rem] pl-[2rem] h-[5.75rem] mb-[1rem]'>
                            <div className='mb-[1rem]'>
                                비밀번호 확인
                            </div>
                            <div className='flex flex-row'>
                                <TextInput control={control} placeholder='텍스트를 입력하세요' borderRadius= {true} type='password' name={'passwordcheck'}/>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between h-[4rem] pl-[2rem]'>
                            <div>등록증을 첨부해 주세요</div>
                            <Button mode='outline' children="파일 업로드"/>
                        </div>
                    </div>
                    <div className='m-auto w-[26.25rem] h-[16rem] mt-[3rem]'>
                        <div className='w-[26.25rem] h-[1.25rem] flex flex-row mb-[1.5rem]'>
                            <div className='mt-[0.125rem]'>
                                <Checkbox name="checkbox" type='checkbox' control={control} labelType='singletext'/>  
                            </div>
                            <label>전체 동의</label>
                        </div>
                        <div className='border-t-2 h-[13.25rem]'>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name="member" control={control} labelType='singletext'/>
                                </div>
                                <label>(필수) 개인 회원 약관에 동의</label>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name="personel" control={control} labelType='singletext'/>
                                </div>
                                <label>(필수) 개인정보 수집 및 이용 동의</label>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name="position" control={control} labelType='singletext'/>
                                </div>
                                <label>(필수) 위치기반 서비스 이용에 동의</label>
                            </div>
                            <div className='h-[1.5rem] flex flex-row mt-[1.5rem]'>
                                <div className='mt-[0.125rem]'>
                                    <Checkbox name="marketing" control={control} labelType='singletext'/>
                                </div>
                                <label>(선택) 마케팅 정보 수신 동의 및 마케팅</label>
                            </div>
                        </div>
                    </div>
                    <div className='h-[7.875rem] mt-[8.0625rem] pt-[2.125rem] pl-[1.875rem]'>
                        <ButtonXL mode='main' children="가입완료"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignupShelter;