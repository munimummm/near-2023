import { Database } from "./lib/database.types";

declare global {
    interface Database {
        public: {
            Tables: {
                adopt_application_detail: {
                    Row: {
                        adopt_experience: boolean
                        application_id: number
                        care_experience: boolean
                        comment: string
                        education_completation: boolean
                        family_type: string
                        related_user_id: string
                        residence_type: string
                      }
                }

                care_application_detail: {
                    Row: {
                        adopt_experience: boolean
                        care_application_id: number
                        care_experience: boolean
                        comment: string
                        education_completation: boolean
                        family_type: string
                        related_user_id: string
                        residence_type: string
                    }
                }

                care_diary: {
                    Row: {
                      aritcle: string
                      care_diary_id: number
                      created_at: string
                      related_first_tag: number
                      related_lost_pet_id: number
                      related_second_tag: number
                      related_third_tag: number
                      subject: string
                    }
                }

                care_diary_img: {
                    Row: {
                        care_diary_img_id: number
                        img_path_1: string | null
                        img_path_2: string | null
                        img_path_3: string | null
                        img_path_4: string | null
                        related_care_diary_id: number
                    }
                }

                lost_pet_img: {
                    Row: {
                        lost_img_path_1: string | null
                        lost_img_path_2: string | null
                        lost_img_path_3: string | null
                        lost_img_path_4: string | null
                        lost_pet_img_id: number
                        related_lost_pet_id: number
                    }
                }

                lost_pet_information: {
                    Row: {
                        admission_date: string
                        created_at: string
                        gender: string
                        lost_pet_id: number
                        race: string
                        race_detail: string
                        recue_date: string
                        related_first_tag: number | null
                        related_fourth_tag: number | null
                        related_second_tag: number | null
                        related_shelter_id: string
                        related_third_tag: number | null
                        rescue_spot: string
                        state_of_health: string
                    }
                }

                newsletter: {
                    Row: {
                        article: string
                        created_at: string
                        like: string
                        newsletter_id: number
                        subheading_1: string
                        subheading_2: string
                        subheading_3: string
                        subject: string
                    }
                }

                newsletter_img: {
                    Row: {
                        newsletter_img_id: number
                        related_newsletter_id: number
                        sub_img_path_1: string | null
                        sub_img_path_2: string | null
                        sub_img_path_3: string | null
                        sub_img_path_4: string | null
                    }
                }

                shelter_profile: {
                    Row: {
                        ceo_name: string
                        ceo_phone: string
                        created_at: string
                        marketing_agree: boolean
                        shelter_address: string
                        shelter_cooperation: boolean
                        shelter_detail_address: string
                        shelter_id: string
                        shelter_name: string
                        shelter_scale: string
                        shelter_type: string
                    }
                }

                shelter_profile_detail: {
                    Row: {
                        related_shelter_name: string
                        relationship_with_shelter: string | null
                        shelter_intargram: string | null
                        shelter_site_url: string | null
                    }
                }

                shleter_profile_img: {
                    Row: {
                        related_shelter_id: string
                        shelter_img_path_1: string | null
                        shelter_img_path_2: string | null
                        shelter_img_path_3: string | null
                        shelter_img_path_4: string | null
                        shelter_profile_img_id: number
                    }
                }

                tag_group: {
                    Row: {
                        tag_id: number
                        tag_name: string
                        tag_type: string
                    }
                }

                user_email_list: {
                    Row: {
                        email: string
                        related_user_id: string
                    }
                }

                user_password_list: {
                    Row: {
                        password: string
                        related_user_id: string
                    }
                }

                user_pet_profile: {
                    Row: {
                        related_user_id: string
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
                }

                user_profile: {
                    Row: {
                        address: string
                        birth: string
                        created_at: string
                        detail_address: string
                        email: string
                        level: string
                        login_date: string
                        marketing_agree: boolean
                        name: string
                        password: string
                        phone: string
                        user_id: string
                        user_img_path: string | null
                    }
                }

                volunteer_participants_list: {
                    Row: {
                        agree_state: boolean
                        comment: string
                        reject_reason: string
                        related_user_id: string
                        related_volunteer_recruitment_id: number
                        volunteer_participants_list_id: number
                    }
                }

                volunteer_recruitment: {
                    Row: {
                        created_at: string
                        number_of_people: string
                        related_first_tag: number | null
                        related_fourth_tag: number | null
                        related_second_tag: number | null
                        related_shelter_id: string
                        related_third_tag: number | null
                        shelter_manager_contact: string
                        shelter_manager_name: string
                        transportation: string
                        volunteer_article: string
                        volunteer_deadline: string
                        volunteer_end_date: string
                        volunteer_level: string
                        volunteer_recruitment_id: number
                        volunteer_start_date: string
                        volunteer_subject: string
                        volunteer_type: string
                    }
                }

                volunteer_recruitment_img: {
                    Row: {
                        related_volunteer_recruitment_id: number
                        volunteer_img_path_1: string | null
                        volunteer_img_path_2: string | null
                        volunteer_img_path_3: string | null
                        volunteer_img_path_4: string | null
                        volunteer_recruitment_img_id: number
                    }
                }

                volunteer_review: {
                    Row: {
                        created_at: string
                        like: number
                        related_shelter_id: string
                        related_volunteer_recruitment_id: number
                        review_content: string
                        review_title: string
                        view: number
                        volunteer_review_id: number
                    }
                }

                volunteer_review_img: {
                    Row: {
                        img_path_1: string | null
                        img_path_2: string | null
                        img_path_3: string | null
                        img_path_4: string | null
                        related_volunteer_review_id: number
                        volunteer_review_img_id: number
                    }
                }
            }
        }
    }
}