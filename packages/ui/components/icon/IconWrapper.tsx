interface IconWrapperProps {
  children?: React.ReactNode;
}

function IconWrapper({ children }: IconWrapperProps) {
  return (
    <div className='flex mobile:gap-1 tablet:gap-[0.375rem] desktop:gap-[0.375rem]'>
      {children}
    </div>
  );
}
export default IconWrapper;
