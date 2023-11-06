export {}

   export interface AdoptApplicationDetailProps {
        adopt_experience: boolean
        care_experience: boolean
        comment: string
        education_completation: boolean
        family_type: 'spouse' | 'siblings' | 'parents' | 'inmate'
        residence_type: 'apartment' |
                        'officetels' |
                        'housewithyard' |
                        'house'
    }

    export interface CareApplicationDetailProps {
        adopt_experience: boolean
        care_experience: boolean
        comment: string
        education_completation: boolean
        family_type: 'spouse' | 'siblings' | 'parents' | 'inmate'
        residence_type: 'apartment' |
                        'officetels' |
                        'housewithyard' |
                        'house'
    }

    export interface CareDiaryProps {
        aritcle: string
        related_first_tag: number
        related_second_tag: number
        related_third_tag: number
        subject: string
    }

    export interface CareDiaryImgProps {
        img_path_1: string | null
        img_path_2: string | null
        img_path_3: string | null
        img_path_4: string | null
    }

    export interface LostPetImgProps {
        lost_img_path_1: string | null
        lost_img_path_2: string | null
        lost_img_path_3: string | null
        lost_img_path_4: string | null
    }

    export interface LostPetInformationProps {
        admission_date: string
        gender: 'male' |'female'
        race: 'dog' | 'cat' | 'etc'
        // text로 요청(pm팀에)
        race_detail: string
        size: string
        recue_date: string
        related_first_tag: number | null
        related_fourth_tag: number | null
        related_second_tag: number | null
        related_third_tag: number | null
        rescue_spot: string
        state_of_health: 'good' | 'caution' | 'emergency'
    }

    export interface NewsletterProps {
        article: string
        like: string
        subheading_1: string
        subheading_2: string
        subheading_3: string
        subject: string
    }

    export interface NewsletterImgProps {
        sub_img_path_1: string | null
        sub_img_path_2: string | null
        sub_img_path_3: string | null
        sub_img_path_4: string | null
    }

    // 와이어 프레임 아직 없음
    export interface ShelterProfileProps {
        ceo_name: string
        ceo_phone: string
        marketing_agree: boolean
        register_number: string
        shelter_address: string
        shelter_cooperation: boolean
        shelter_detail_address: string
        shelter_name: string
        // shelter scale(추가 예정)
        shelter_scale: string
        // type(추가 예정)
        shelter_type: string
    }

    export interface ShelterProfileDetailProps {
        related_shelter_name: string
        relationship_with_shelter: string | null
        shelter_intargram: string | null
        shelter_site_url: string | null
    }

    export interface ShleterProfileImgProps {
        shelter_img_path_1: string | null
        shelter_img_path_2: string | null
        shelter_img_path_3: string | null
        shelter_img_path_4: string | null
    }

    export interface TagGroupProps {
        tag_name: string
        tag_type: string
    }

    export interface UserPetProfileProps {
        user_pet_birth: string
        user_pet_gender: 'male' | 'female'
        user_pet_img_path: string | null
        user_pet_introduce: string
        user_pet_name: string
        // pm팀에 text 요청(구체적 동물 종류)
        user_pet_race: string
        user_pet_size: number
        user_pet_type: 'dog' | 'cat' | 'etc'
    }

    export interface UserProfileProps {
        address: string | null
        birth: string | null
        detail_address: string | null
        email: string | null
        level: string | null
        marketing_agree: string | null
        name: string | null
        password: string | null
        phone: string | null
        user_img_path: string | null
    }

    export interface VolunteerParticipantsListProps {
        agree_state: boolean
        comment: string
        reject_reason: 'overcapacity' | 'notqualified' | 'otherreason'
    }

    export interface VolunteerRecruitmentProps {
        number_of_people: string
        related_first_tag: number | null
        related_fourth_tag: number | null
        related_second_tag: number | null
        related_third_tag: number | null
        shelter_manager_contact: string
        shelter_manager_name: string
        transportation: 'car' | 'publictransport' | 'onfoot'
        volunteer_article: string
        volunteer_deadline: string
        volunteer_end_date: string
        // level pm팀에 text 요청(봉사 난이도)
        volunteer_level: string
        volunteer_start_date: string
        volunteer_subject: string
        // type pm팀에 text 요청(봉사 종류)
        volunteer_type: string
    }

    export interface VolunteerRecruitmentImgProps {
        volunteer_img_path_1: string | null
        volunteer_img_path_2: string | null
        volunteer_img_path_3: string | null
        volunteer_img_path_4: string | null
    }

    export interface VolunteerReviewProps {
        like: number
        review_content: string
        review_title: string
        view: number 
    }

    export interface VolunteerReviewImgProps {
        img_path_1: string | null
        img_path_2: string | null
        img_path_3: string | null
        img_path_4: string | null
    }