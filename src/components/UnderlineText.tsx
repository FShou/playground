export const UnderlineText = ({ text}: { text: string, border:number }) => {
  return (
    <span className={`before:h-[2px] before:bg-red-500 before:scale-x-0 relative before:transition before:duration-300 hover:before:scale-x-100 before:absolute before:bottom-0 before:left-0 before:origin-right hover:before:origin-left before:w-full`}>
      {text}
    </span>
  );
};
export const BgHightlightOnHoverText = ({ text }: { text: string }) => {
  return (
    <span className="before:h-full before:w-full before:bg-red-500 before:scale-x-0 relative before:transition before:duration-500 hover:before:scale-x-100 before:-z-10 z-10 before:absolute before:origin-right hover:before:origin-left ">
      {text}
    </span>
  );
};
