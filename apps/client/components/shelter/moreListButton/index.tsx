interface MoreListButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  text: string;
}

function MoreListButton({ onClick, children, text }: MoreListButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex w-full py-24 h-[100px] justify-center items-center'
    >
      <span className='pb-1 pr-2'>{children}</span>
      <p className='text-base tablet:text-2xl'>{text}</p>
    </button>
  );
}
export default MoreListButton;
