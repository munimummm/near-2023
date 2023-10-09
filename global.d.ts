export {}

   export interface AdoptApplicationDetailProps {
        adopt_experience: boolean
        application_id: number
        care_experience: boolean
        comment: string
        education_completation: boolean
        family_type: string
        residence_type: string
        user_id: string | null
    }

    export interface CareApplicationDetailProps {
        adopt_experience: boolean
        care_application_id: number
        care_experience: boolean
        comment: string
        education_completation: boolean
        family_type: string
        residence_type: string
        user_id: string | null
    }

    export interface CareDiaryProps {
        aritcle: string
        care_diary_id: number
        created_at: string
        related_first_tag: number
        related_lost_pet_id: number
        related_second_tag: number
        related_third_tag: number
        subject: string
        user_id: string | null
    }

    export interface CareDiaryImgProps {
        are_diary_img_id: number
        img_path_1: string | null
        img_path_2: string | null
        img_path_3: string | null
        img_path_4: string | null
        related_care_diary_id: number
        user_id: string
    }

    export interface LostPetImgProps {
        lost_img_path_1: string | null
        lost_img_path_2: string | null
        lost_img_path_3: string | null
        lost_img_path_4: string | null
        lost_pet_img_id: number
        related_lost_pet_id: number
        user_id: string
    }

    export interface LostPetInformationProps {
        dmission_date: string
        created_at: string
        gender: string
        lost_pet_id: number
        race: string
        race_detail: string
        recue_date: string
        related_first_tag: number | null
        related_fourth_tag: number | null
        related_second_tag: number | null
        related_third_tag: number | null
        rescue_spot: string
        state_of_health: string
        user_id: string
    }

    export interface NewsletterProps {
        article: string
        created_at: string
        like: string
        newsletter_id: number
        subheading_1: string
        subheading_2: string
        subheading_3: string
        subject: string
    }

    export interface NewsletterImgProps {
        newsletter_img_id: number
        related_newsletter_id: number
        sub_img_path_1: string | null
        sub_img_path_2: string | null
        sub_img_path_3: string | null
        sub_img_path_4: string | null
    }

    export interface ShelterProfileProps {
        ceo_name: string
        ceo_phone: string
        created_at: string
        id: string
        marketing_agree: boolean
        register_number: string
        shelter_address: string
        shelter_cooperation: boolean
        shelter_detail_address: string
        shelter_name: string
        shelter_scale: string
        shelter_type: string
    }

    export interface ShelterProfileDetailProps {
        related_shelter_name: string
        relationship_with_shelter: string | null
        shelter_intargram: string | null
        shelter_site_url: string | null
        user_id: string
    }

    export interface ShleterProfileImgProps {
        shelter_img_path_1: string | null
        shelter_img_path_2: string | null
        shelter_img_path_3: string | null
        shelter_img_path_4: string | null
        shelter_profile_img_id: number
        user_id: string
    }

    export interface TagGroupProps {
        tag_id: number
        tag_name: string
        tag_type: string
    }

    export interface UserPetProfileProps {
        user_id: string
        user_pet_birth: string
        user_pet_gender: string
        user_pet_id: number
        user_pet_img_path: string | null
        user_pet_introduce: string
        user_pet_name: string
        user_pet_race: string
        user_pet_size: number
        user_pet_type: string
    }

    export interface UserProfileProps {
        address: string | null
        birth: string | null
        created_at: string
        detail_address: string | null
        email: string | null
        id: string
        level: string | null
        marketing_agree: string | null
        name: string | null
        password: string | null
        phone: string | null
        provider: string | null
        user_id: string | null
        user_img_path: string | null
    }

    export interface VolunteerParticipantsListProps {
        agree_state: boolean
        comment: string
        normal_id: string
        reject_reason: string
        related_volunteer_recruitment_id: number
        user_id: string
        volunteer_participants_list_id: number
    }

    export interface VolunteerRecruitmentProps {
        created_at: string
        number_of_people: string
        related_first_tag: number | null
        related_fourth_tag: number | null
        related_second_tag: number | null
        related_third_tag: number | null
        shelter_manager_contact: string
        shelter_manager_name: string
        transportation: string
        user_id: string
        volunteer_article: string
        volunteer_deadline: string
        volunteer_end_date: string
        volunteer_level: string
        volunteer_recruitment_id: number
        volunteer_start_date: string
        volunteer_subject: string
        volunteer_type: string
    }

    export interface VolunteerRecruitmentImgProps {
        related_volunteer_recruitment_id: number
        user_id: string
        volunteer_img_path_1: string | null
        volunteer_img_path_2: string | null
        volunteer_img_path_3: string | null
        volunteer_img_path_4: string | null
        volunteer_recruitment_img_id: number
    }

    export interface VolunteerReviewProps {
        created_at: string
        like: number
        related_volunteer_recruitment_id: number
        review_content: string
        review_title: string
        user_id: string
        view: number
        volunteer_review_id: number
    }

    export interface VolunteerReviewImgProps {
        img_path_1: string | null
        img_path_2: string | null
        img_path_3: string | null
        img_path_4: string | null
        related_volunteer_review_id: number
        user_id: string
        volunteer_review_img_id: number
    }





