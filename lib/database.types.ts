export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
        Insert: {
          adopt_experience: boolean
          application_id: number
          care_experience: boolean
          comment: string
          education_completation: boolean
          family_type: string
          related_user_id: string
          residence_type: string
        }
        Update: {
          adopt_experience?: boolean
          application_id?: number
          care_experience?: boolean
          comment?: string
          education_completation?: boolean
          family_type?: string
          related_user_id?: string
          residence_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "adopt_application_detail_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
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
        Insert: {
          adopt_experience: boolean
          care_application_id: number
          care_experience: boolean
          comment: string
          education_completation: boolean
          family_type: string
          related_user_id: string
          residence_type: string
        }
        Update: {
          adopt_experience?: boolean
          care_application_id?: number
          care_experience?: boolean
          comment?: string
          education_completation?: boolean
          family_type?: string
          related_user_id?: string
          residence_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_application_detail_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
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
        Insert: {
          aritcle: string
          care_diary_id?: number
          created_at?: string
          related_first_tag: number
          related_lost_pet_id: number
          related_second_tag: number
          related_third_tag: number
          subject: string
        }
        Update: {
          aritcle?: string
          care_diary_id?: number
          created_at?: string
          related_first_tag?: number
          related_lost_pet_id?: number
          related_second_tag?: number
          related_third_tag?: number
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_diary_related_first_tag_fkey"
            columns: ["related_first_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "care_diary_related_lost_pet_id_fkey"
            columns: ["related_lost_pet_id"]
            referencedRelation: "lost_pet_information"
            referencedColumns: ["lost_pet_id"]
          },
          {
            foreignKeyName: "care_diary_related_second_tag_fkey"
            columns: ["related_second_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "care_diary_related_third_tag_fkey"
            columns: ["related_third_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          }
        ]
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
        Insert: {
          care_diary_img_id?: number
          img_path_1?: string | null
          img_path_2?: string | null
          img_path_3?: string | null
          img_path_4?: string | null
          related_care_diary_id: number
        }
        Update: {
          care_diary_img_id?: number
          img_path_1?: string | null
          img_path_2?: string | null
          img_path_3?: string | null
          img_path_4?: string | null
          related_care_diary_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "care_diary_img_related_care_diary_id_fkey"
            columns: ["related_care_diary_id"]
            referencedRelation: "care_diary"
            referencedColumns: ["care_diary_id"]
          }
        ]
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
        Insert: {
          lost_img_path_1?: string | null
          lost_img_path_2?: string | null
          lost_img_path_3?: string | null
          lost_img_path_4?: string | null
          lost_pet_img_id: number
          related_lost_pet_id: number
        }
        Update: {
          lost_img_path_1?: string | null
          lost_img_path_2?: string | null
          lost_img_path_3?: string | null
          lost_img_path_4?: string | null
          lost_pet_img_id?: number
          related_lost_pet_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "lost_pet_img_related_lost_pet_id_fkey"
            columns: ["related_lost_pet_id"]
            referencedRelation: "lost_pet_information"
            referencedColumns: ["lost_pet_id"]
          }
        ]
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
        Insert: {
          admission_date: string
          created_at: string
          gender: string
          lost_pet_id: number
          race: string
          race_detail: string
          recue_date: string
          related_first_tag?: number | null
          related_fourth_tag?: number | null
          related_second_tag?: number | null
          related_shelter_id: string
          related_third_tag?: number | null
          rescue_spot: string
          state_of_health: string
        }
        Update: {
          admission_date?: string
          created_at?: string
          gender?: string
          lost_pet_id?: number
          race?: string
          race_detail?: string
          recue_date?: string
          related_first_tag?: number | null
          related_fourth_tag?: number | null
          related_second_tag?: number | null
          related_shelter_id?: string
          related_third_tag?: number | null
          rescue_spot?: string
          state_of_health?: string
        }
        Relationships: [
          {
            foreignKeyName: "lost_pet_information_related_first_tag_fkey"
            columns: ["related_first_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "lost_pet_information_related_fourth_tag_fkey"
            columns: ["related_fourth_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "lost_pet_information_related_second_tag_fkey"
            columns: ["related_second_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "lost_pet_information_related_shelter_id_fkey"
            columns: ["related_shelter_id"]
            referencedRelation: "shelter_profile"
            referencedColumns: ["shelter_id"]
          },
          {
            foreignKeyName: "lost_pet_information_related_third_tag_fkey"
            columns: ["related_third_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          }
        ]
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
        Insert: {
          article: string
          created_at?: string
          like: string
          newsletter_id?: number
          subheading_1: string
          subheading_2: string
          subheading_3: string
          subject: string
        }
        Update: {
          article?: string
          created_at?: string
          like?: string
          newsletter_id?: number
          subheading_1?: string
          subheading_2?: string
          subheading_3?: string
          subject?: string
        }
        Relationships: []
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
        Insert: {
          newsletter_img_id?: number
          related_newsletter_id: number
          sub_img_path_1?: string | null
          sub_img_path_2?: string | null
          sub_img_path_3?: string | null
          sub_img_path_4?: string | null
        }
        Update: {
          newsletter_img_id?: number
          related_newsletter_id?: number
          sub_img_path_1?: string | null
          sub_img_path_2?: string | null
          sub_img_path_3?: string | null
          sub_img_path_4?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_img_related_newsletter_id_fkey"
            columns: ["related_newsletter_id"]
            referencedRelation: "newsletter"
            referencedColumns: ["newsletter_id"]
          }
        ]
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
        Insert: {
          ceo_name: string
          ceo_phone: string
          created_at?: string
          marketing_agree?: boolean
          shelter_address: string
          shelter_cooperation?: boolean
          shelter_detail_address: string
          shelter_id: string
          shelter_name: string
          shelter_scale: string
          shelter_type: string
        }
        Update: {
          ceo_name?: string
          ceo_phone?: string
          created_at?: string
          marketing_agree?: boolean
          shelter_address?: string
          shelter_cooperation?: boolean
          shelter_detail_address?: string
          shelter_id?: string
          shelter_name?: string
          shelter_scale?: string
          shelter_type?: string
        }
        Relationships: []
      }
      shelter_profile_detail: {
        Row: {
          related_shelter_name: string
          relationship_with_shelter: string | null
          shelter_intargram: string | null
          shelter_site_url: string | null
        }
        Insert: {
          related_shelter_name: string
          relationship_with_shelter?: string | null
          shelter_intargram?: string | null
          shelter_site_url?: string | null
        }
        Update: {
          related_shelter_name?: string
          relationship_with_shelter?: string | null
          shelter_intargram?: string | null
          shelter_site_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shelter_profile_detail_related_shelter_name_fkey"
            columns: ["related_shelter_name"]
            referencedRelation: "shelter_profile"
            referencedColumns: ["shelter_id"]
          }
        ]
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
        Insert: {
          related_shelter_id: string
          shelter_img_path_1?: string | null
          shelter_img_path_2?: string | null
          shelter_img_path_3?: string | null
          shelter_img_path_4?: string | null
          shelter_profile_img_id: number
        }
        Update: {
          related_shelter_id?: string
          shelter_img_path_1?: string | null
          shelter_img_path_2?: string | null
          shelter_img_path_3?: string | null
          shelter_img_path_4?: string | null
          shelter_profile_img_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "shleter_profile_img_related_shelter_id_fkey"
            columns: ["related_shelter_id"]
            referencedRelation: "shelter_profile"
            referencedColumns: ["shelter_id"]
          }
        ]
      }
      tag_group: {
        Row: {
          tag_id: number
          tag_name: string
          tag_type: string
        }
        Insert: {
          tag_id?: number
          tag_name: string
          tag_type: string
        }
        Update: {
          tag_id?: number
          tag_name?: string
          tag_type?: string
        }
        Relationships: []
      }
      user_email_list: {
        Row: {
          email: string
          related_user_id: string
        }
        Insert: {
          email: string
          related_user_id: string
        }
        Update: {
          email?: string
          related_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_email_list_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_password_list: {
        Row: {
          password: string
          related_user_id: string
        }
        Insert: {
          password: string
          related_user_id: string
        }
        Update: {
          password?: string
          related_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_password_list_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
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
        Insert: {
          related_user_id: string
          user_pet_birth: string
          user_pet_gender: string
          user_pet_id: number
          user_pet_img_path?: string | null
          user_pet_introduce: string
          user_pet_name: string
          user_pet_race: string
          user_pet_size: number
          user_pet_type: string
        }
        Update: {
          related_user_id?: string
          user_pet_birth?: string
          user_pet_gender?: string
          user_pet_id?: number
          user_pet_img_path?: string | null
          user_pet_introduce?: string
          user_pet_name?: string
          user_pet_race?: string
          user_pet_size?: number
          user_pet_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_pet_profile_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          }
        ]
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
        Insert: {
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
          user_img_path?: string | null
        }
        Update: {
          address?: string
          birth?: string
          created_at?: string
          detail_address?: string
          email?: string
          level?: string
          login_date?: string
          marketing_agree?: boolean
          name?: string
          password?: string
          phone?: string
          user_id?: string
          user_img_path?: string | null
        }
        Relationships: []
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
        Insert: {
          agree_state?: boolean
          comment: string
          reject_reason: string
          related_user_id: string
          related_volunteer_recruitment_id: number
          volunteer_participants_list_id: number
        }
        Update: {
          agree_state?: boolean
          comment?: string
          reject_reason?: string
          related_user_id?: string
          related_volunteer_recruitment_id?: number
          volunteer_participants_list_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "volunteer_participants_list_related_user_id_fkey"
            columns: ["related_user_id"]
            referencedRelation: "user_profile"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "volunteer_participants_list_related_volunteer_recruitment_id_fk"
            columns: ["related_volunteer_recruitment_id"]
            referencedRelation: "volunteer_recruitment"
            referencedColumns: ["volunteer_recruitment_id"]
          }
        ]
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
        Insert: {
          created_at: string
          number_of_people: string
          related_first_tag?: number | null
          related_fourth_tag?: number | null
          related_second_tag?: number | null
          related_shelter_id: string
          related_third_tag?: number | null
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
        Update: {
          created_at?: string
          number_of_people?: string
          related_first_tag?: number | null
          related_fourth_tag?: number | null
          related_second_tag?: number | null
          related_shelter_id?: string
          related_third_tag?: number | null
          shelter_manager_contact?: string
          shelter_manager_name?: string
          transportation?: string
          volunteer_article?: string
          volunteer_deadline?: string
          volunteer_end_date?: string
          volunteer_level?: string
          volunteer_recruitment_id?: number
          volunteer_start_date?: string
          volunteer_subject?: string
          volunteer_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "volunteer_recruitment_related_first_tag_fkey"
            columns: ["related_first_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "volunteer_recruitment_related_fourth_tag_fkey"
            columns: ["related_fourth_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "volunteer_recruitment_related_second_tag_fkey"
            columns: ["related_second_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "volunteer_recruitment_related_shelter_id_fkey"
            columns: ["related_shelter_id"]
            referencedRelation: "shelter_profile"
            referencedColumns: ["shelter_id"]
          },
          {
            foreignKeyName: "volunteer_recruitment_related_third_tag_fkey"
            columns: ["related_third_tag"]
            referencedRelation: "tag_group"
            referencedColumns: ["tag_id"]
          }
        ]
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
        Insert: {
          related_volunteer_recruitment_id: number
          volunteer_img_path_1?: string | null
          volunteer_img_path_2?: string | null
          volunteer_img_path_3?: string | null
          volunteer_img_path_4?: string | null
          volunteer_recruitment_img_id: number
        }
        Update: {
          related_volunteer_recruitment_id?: number
          volunteer_img_path_1?: string | null
          volunteer_img_path_2?: string | null
          volunteer_img_path_3?: string | null
          volunteer_img_path_4?: string | null
          volunteer_recruitment_img_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "volunteer_recruitment_img_related_volunteer_recruitment_id_fkey"
            columns: ["related_volunteer_recruitment_id"]
            referencedRelation: "volunteer_recruitment"
            referencedColumns: ["volunteer_recruitment_id"]
          }
        ]
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
        Insert: {
          created_at?: string
          like?: number
          related_shelter_id: string
          related_volunteer_recruitment_id: number
          review_content: string
          review_title: string
          view?: number
          volunteer_review_id: number
        }
        Update: {
          created_at?: string
          like?: number
          related_shelter_id?: string
          related_volunteer_recruitment_id?: number
          review_content?: string
          review_title?: string
          view?: number
          volunteer_review_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "volunteer_review_related_shelter_id_fkey"
            columns: ["related_shelter_id"]
            referencedRelation: "shelter_profile"
            referencedColumns: ["shelter_id"]
          },
          {
            foreignKeyName: "volunteer_review_related_volunteer_recruitment_id_fkey"
            columns: ["related_volunteer_recruitment_id"]
            referencedRelation: "volunteer_recruitment"
            referencedColumns: ["volunteer_recruitment_id"]
          }
        ]
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
        Insert: {
          img_path_1?: string | null
          img_path_2?: string | null
          img_path_3?: string | null
          img_path_4?: string | null
          related_volunteer_review_id: number
          volunteer_review_img_id: number
        }
        Update: {
          img_path_1?: string | null
          img_path_2?: string | null
          img_path_3?: string | null
          img_path_4?: string | null
          related_volunteer_review_id?: number
          volunteer_review_img_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "volunteer_review_img_related_volunteer_review_id_fkey"
            columns: ["related_volunteer_review_id"]
            referencedRelation: "volunteer_review"
            referencedColumns: ["volunteer_review_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
