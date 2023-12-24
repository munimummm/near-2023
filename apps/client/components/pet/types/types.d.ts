export interface SectionTitleThumbnailsProps {
  name?: string; // 이름
}

export interface SectionInformationProps {
  rescue_spot?: string; // 구조장소
  rescue_start_date?: string; // 구조일
  admission_date?: string; // 입소일
  rescue_end_date?: string; // 보호 종료일
  race?: string; // 품종
  race_detail?: string; // 품종 상세
  size?: string; // 몸무게
  gender?: string; // 성별
  state_of_health?: string; // 건강상태
  age?: string; // 추정 나이
}

export interface SectionTextareaProps {
  comment: string; // 특이사항
}

export interface SectionTagsProps {
  tag?: string[]; // 태그 목록
}

export interface AnimalDetailProps
  extends SectionTitleThumbnailsProps,
    SectionInformationProps,
    SectionTextareaProps,
    SectionTagsProps {
  lost_pet_id: number; // 니어동물 id
  created_at: string; // 생성일
  shelter_id: string; // 보호소 id
  foster: boolean; // 임시보호 여부
}
