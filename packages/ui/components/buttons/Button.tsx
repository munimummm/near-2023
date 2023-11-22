import { ReactNode } from 'react';
import { clsx } from 'clsx';
import '../../globals.css';

type ButtonType = {
  type: 'button' | 'submit' | 'reset';
  mode: 'main' | 'secondary' | 'ghost' | 'outline' | 'text' | 'danger';
};

interface ButtonProps {
  type?: ButtonType['type'];
  mode?: ButtonType['mode'];
  isDisabled?: boolean;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onlyIcon?: boolean;
  className?: string;
}

/* 기본 Button 공통 스타일 */
const ButtonBaseStyle =
  'box-border inline-flex justify-center items-center border-[0.0938rem] rounded-[2.5rem] text-center active:shadow-none disabled:shadow-none disabled:cursor-not-allowed mobile:h-8 mobile:px-4 mobile:gap-2 mobile:text-sm mobile:font-normal mobile:leading-tight tablet:h-10 tablet:px-6 tablet:gap-3 tablet:text-sm tablet:font-normal tablet:leading-tight desktop:h-[3.625rem] desktop:px-4 desktop:gap-3 desktop:text-lg desktop:font-semibold desktop:leading-7';

/* Button mode 별 스타일 */
const ButtonModeStyle = {
  /* Button mode="main" (default) */
  main: 'text-white bg-theme-main border-theme-main hover:bg-theme-main hover:border-theme-main hover:text-white hover:shadow-button active:bg-theme-main_dark active:border-theme-main_dark active:text-white disabled:bg-text-gray2 disabled:border-text-gray2 disabled:text-text-gray',
  /* Button mode="secondary" */
  secondary:
    'bg-bg-blue1 border-bg-blue1 text-theme-main hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-theme-main hover:shadow-button active:bg-bg-blue2 active:border-bg-blue2 active:text-theme-main disabled:bg-gray-3 disabled:border-gray-3 disabled:text-text-gray2',
  /* Button mode="ghost" */
  ghost:
    'bg-bg-gray1 border-bg-gray1 text-text-black1 hover:bg-bg-gray1 hover:border-bg-gray1 hover:text-text-black1 hover:shadow-button active:bg-bg-blue2 active:border-bg-blue2 active:text-theme-main_dark disabled:bg-gray-3 disabled:border-gray-3 disabled:text-text-gray2',
  /* Button mode="outline" */
  outline:
    'bg-transparent border-theme-main text-theme-main hover:bg-bg-blue1 hover:border-theme-main hover:text-theme-main hover:shadow-none active:bg-bg-blue2 active:border-theme-main active:text-theme-main disabled:bg-transparent disabled:border-text-gray disabled:text-text-gray',
  /* Button mode="text" */
  text: 'bg-transparent border-transparent text-text-black1 hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-text-black1 hover:shadow-none active:bg-transparent active:border-transparent active:text-theme-main disabled:bg-transparent disabled:border-transparent disabled:text-text-gray',
  /* Button mode="danger" */
  danger:
    'bg-text-red  border-text-red text-white hover:bg-[#A32F2F] hover:border-[#A32F2F] hover:text-white hover:shadow-none active:bg-[#822626] active:border-[#822626] active:text-white  disabled:bg-gray-1 disabled:border-gray-1 disabled:text-text-gray',
};

/**
 *
 * @author `송용수`
 *
 * @desc Button UI 컴포넌트
 *
 * @param type
 * — html `<button>` 태그의 type 속성에 들어가는 값.
 * - `필수 파라미터` — `X`
 * - `기본값` — `'button'`
 * - `타입` — `string` (`'button'` | `'submit'` | `'reset'`)
 *
 * @param mode
 * — *버튼 색상 관련 테마를 제어하는 값. (Figma 참고)*
 * - `필수 파라미터` — `X`
 * - `기본값` — `'main'`
 * - `타입` — `string` (`'main'` | `'secondary'` | `'ghost'` | `'outline'` | `'text'` | `'danger'`)
 *
 * @param isDisabled
 * — *html `<button>` 태그의 disabled 속성을 제어하는 값.*
 * - `필수 파라미터` — X
 * - `기본값` — `false`
 * - `타입` — `boolean`
 *
 * @param children
 * — *해당 컴포넌트의 내부에 들어가는 요소.*
 * - `필수 파라미터` — `X`
 * - `기본값` — 없음
 * - `타입` — `ReactNode`
 *
 * @param onClick
 * — *클릭 시 일어나는 `onClick` 이벤트.*
 * - `필수 파라미터` — X
 * - `기본값` — 없음
 * - `타입` — `React.MouseEventHandler<HTMLButtonElement>` | `undefined`
 *
 * @param onlyIcon
 * — *Large 사이즈의 경우 ```min-width: 10rem``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
 * - `필수 파라미터` — X
 * - `기본값` — false
 * - `타입` — `boolean`
 *
 * @param className
 * — *추가 스타일 변경 필요할 경우 삽입*
 * - `필수 파라미터` — X
 * - `기본값` — ""
 * - `타입` — `string`
 */
function Button({
  type = 'button',
  mode = 'main',
  isDisabled = false,
  children,
  onClick,
  onlyIcon = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        ButtonBaseStyle,
        ButtonModeStyle[mode],
        `${onlyIcon ? '' : 'desktop:min-w-[10rem]'}`,
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonXLBaseStyle =
  'w-[26.25rem] h-[3.625rem] box-border inline-flex justify-center items-center border-[0.0938rem] rounded-full text-center active:shadow-none disabled:shadow-none disabled:cursor-not-allowed gap-3 text-lg font-semibold leading-7';

/**
 *
 * @author `송용수`
 *
 * @desc Button_XL UI 컴포넌트 (width 고정)
 *
 * @param type
 * — html `<button>` 태그의 type 속성에 들어가는 값.
 * - `필수 파라미터` — `X`
 * - `기본값` — `'button'`
 * - `타입` — `string` (`'button'` | `'submit'` | `'reset'`)
 *
 * @param mode
 * — *버튼 색상 관련 테마를 제어하는 값. (Figma 참고)*
 * - `필수 파라미터` — `X`
 * - `기본값` — `'main'`
 * - `타입` — `string` (`'main'` | `'secondary'` | `'ghost'` | `'outline'` | `'text'` | `'danger'`)
 *
 * @param isDisabled
 * — *html `<button>` 태그의 disabled 속성을 제어하는 값.*
 * - `필수 파라미터` — X
 * - `기본값` — `false`
 * - `타입` — `boolean`
 *
 * @param children
 * — *해당 컴포넌트의 내부에 들어가는 요소.*
 * - `필수 파라미터` — `X`
 * - `기본값` — 없음
 * - `타입` — `ReactNode`
 *
 * @param onClick
 * — *클릭 시 일어나는 `onClick` 이벤트.*
 * - `필수 파라미터` — X
 * - `기본값` — 없음
 * - `타입` — `React.MouseEventHandler<HTMLButtonElement>` | `undefined`
 *
 * @param onlyIcon
 * — *Large 사이즈의 경우 ```min-width: 10rem``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
 * - `필수 파라미터` — X
 * - `기본값` — false
 * - `타입` — `boolean`
 *
 * @param className
 * — *추가 스타일 변경 필요할 경우 삽입*
 * - `필수 파라미터` — X
 * - `기본값` — ""
 * - `타입` — `string`
 */
export function ButtonXL({
  type = 'button',
  mode = 'main',
  isDisabled = false,
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(ButtonXLBaseStyle, ButtonModeStyle[mode], className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonETCBaseStyle =
  'min-w-[13rem] h-[3.625rem] box-border inline-flex justify-center items-center border-[0.0938rem] rounded-full text-center active:shadow-none disabled:shadow-none disabled:cursor-not-allowed gap-3 text-lg font-semibold leading-7';

/**
 *
 * @author `송용수`
 *
 * @desc Button_ETC UI 컴포넌트
 *
 * @param type
 * — html `<button>` 태그의 type 속성에 들어가는 값.
 * - `필수 파라미터` — `X`
 * - `기본값` — `'button'`
 * - `타입` — `string` (`'button'` | `'submit'` | `'reset'`)
 *
 * @param mode
 * — *버튼 색상 관련 테마를 제어하는 값. (Figma 참고)*
 * - `필수 파라미터` — `X`
 * - `기본값` — `'main'`
 * - `타입` — `string` (`'main'` | `'secondary'` | `'ghost'` | `'outline'` | `'text'` | `'danger'`)
 *
 * @param isDisabled
 * — *html `<button>` 태그의 disabled 속성을 제어하는 값.*
 * - `필수 파라미터` — X
 * - `기본값` — `false`
 * - `타입` — `boolean`
 *
 * @param children
 * — *해당 컴포넌트의 내부에 들어가는 요소.*
 * - `필수 파라미터` — `X`
 * - `기본값` — 없음
 * - `타입` — `ReactNode`
 *
 * @param onClick
 * — *클릭 시 일어나는 `onClick` 이벤트.*
 * - `필수 파라미터` — X
 * - `기본값` — 없음
 * - `타입` — `React.MouseEventHandler<HTMLButtonElement>` | `undefined`
 *
 * @param onlyIcon
 * — *Large 사이즈의 경우 ```min-width: 10rem``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
 * - `필수 파라미터` — X
 * - `기본값` — false
 * - `타입` — `boolean`
 *
 * @param className
 * — *추가 스타일 변경 필요할 경우 삽입*
 * - `필수 파라미터` — X
 * - `기본값` — ""
 * - `타입` — `string`
 */
export function ButtonETC({
  type = 'button',
  mode = 'main',
  isDisabled = false,
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(ButtonETCBaseStyle, ButtonModeStyle[mode], className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonXSBaseStyle =
  'h-[1.5625rem] box-border inline-flex justify-center items-center border-[0.0625rem] rounded-full text-center active:shadow-none disabled:shadow-none disabled:cursor-not-allowed gap-2 text-[0.625rem] font-semibold leading-[0.625rem]';

/**
 *
 * @author `송용수`
 *
 * @desc Button Ssmall UI 컴포넌트
 * @param className
 * — *내부 패딩이 규칙적이지 않아 너비값 지정 필수!!*
 * - `필수 파라미터` — X
 * - `기본값` — ""
 * - `타입` — `string`
 *
 * @param type
 * — html `<button>` 태그의 type 속성에 들어가는 값.
 * - `필수 파라미터` — `X`
 * - `기본값` — `'button'`
 * - `타입` — `string` (`'button'` | `'submit'` | `'reset'`)
 *
 * @param mode
 * — *버튼 색상 관련 테마를 제어하는 값. (Figma 참고)*
 * - `필수 파라미터` — `X`
 * - `기본값` — `'main'`
 * - `타입` — `string` (`'main'` | `'secondary'` | `'ghost'` | `'outline'` | `'text'` | `'danger'`)
 *
 * @param isDisabled
 * — *html `<button>` 태그의 disabled 속성을 제어하는 값.*
 * - `필수 파라미터` — X
 * - `기본값` — `false`
 * - `타입` — `boolean`
 *
 * @param children
 * — *해당 컴포넌트의 내부에 들어가는 요소.*
 * - `필수 파라미터` — `X`
 * - `기본값` — 없음
 * - `타입` — `ReactNode`
 *
 * @param onClick
 * — *클릭 시 일어나는 `onClick` 이벤트.*
 * - `필수 파라미터` — X
 * - `기본값` — 없음
 * - `타입` — `React.MouseEventHandler<HTMLButtonElement>` | `undefined`
 *
 * @param onlyIcon
 * — *Large 사이즈의 경우 ```min-width: 10rem``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
 * - `필수 파라미터` — X
 * - `기본값` — false
 * - `타입` — `boolean`
 */
export function ButtonXS({
  type = 'button',
  mode = 'main',
  isDisabled = false,
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(ButtonXSBaseStyle, ButtonModeStyle[mode], className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonXXSBaseStyle =
  'h-[1rem] px-[0.375rem] py-[0.1875rem] box-border inline-flex justify-center items-center border-[0.0625rem] rounded-full text-center active:shadow-none disabled:shadow-none disabled:cursor-not-allowed gap-[0.1875rem] text-[0.3987rem] font-semibold leading-[0.5981rem]';

/**
 *
 * @author `송용수`
 *
 * @desc Button Sssmall UI 컴포넌트
 *
 * @param type
 * — html `<button>` 태그의 type 속성에 들어가는 값.
 * - `필수 파라미터` — `X`
 * - `기본값` — `'button'`
 * - `타입` — `string` (`'button'` | `'submit'` | `'reset'`)
 *
 * @param mode
 * — *버튼 색상 관련 테마를 제어하는 값. (Figma 참고)*
 * - `필수 파라미터` — `X`
 * - `기본값` — `'main'`
 * - `타입` — `string` (`'main'` | `'secondary'` | `'ghost'` | `'outline'` | `'text'` | `'danger'`)
 *
 * @param isDisabled
 * — *html `<button>` 태그의 disabled 속성을 제어하는 값.*
 * - `필수 파라미터` — X
 * - `기본값` — `false`
 * - `타입` — `boolean`
 *
 * @param children
 * — *해당 컴포넌트의 내부에 들어가는 요소.*
 * - `필수 파라미터` — `X`
 * - `기본값` — 없음
 * - `타입` — `ReactNode`
 *
 * @param onClick
 * — *클릭 시 일어나는 `onClick` 이벤트.*
 * - `필수 파라미터` — X
 * - `기본값` — 없음
 * - `타입` — `React.MouseEventHandler<HTMLButtonElement>` | `undefined`
 *
 * @param onlyIcon
 * — *Large 사이즈의 경우 ```min-width: 10rem``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
 * - `필수 파라미터` — X
 * - `기본값` — false
 * - `타입` — `boolean`
 *
 * @param className
 * — *추가 스타일 변경 필요할 경우 삽입*
 * - `필수 파라미터` — X
 * - `기본값` — ""
 * - `타입` — `string`
 */
export function ButtonXXS({
  type = 'button',
  mode = 'main',
  isDisabled = false,
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(ButtonXXSBaseStyle, ButtonModeStyle[mode], className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
