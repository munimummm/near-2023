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
 * — *Large 사이즈의 경우 ```min-width: 160px``` 조건이 있어 아이콘만 넣어야 할 경우 true로 설정. (Figma 참고)*
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
        `btn-base btn-${mode}`,
        `${onlyIcon ? '' : 'desktop:min-w-[160px]'}`,
        className,
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
