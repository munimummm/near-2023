interface IconWrapperProps {
  children?: React.ReactNode;
}

function IconWrapper({ children }: IconWrapperProps) {
  return <div className='flex mb:gap-1 gap-[0.375rem]'>{children}</div>;
}
export default IconWrapper;
