import "./component.css";
export const GradientBorder = ({
  borderWidth,
  children,
}: {
  borderWidth: number;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="isolate min-h-11 rounded-xl flex items-center justify-center relative bg-white/5 backdrop-blur-sm gradient-border px-2"
      style={{
        // @ts-ignore
        "--borderWidth": borderWidth,
        "--background": `linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)`, // this use for gradient-border behind the div
        border: `${borderWidth}px solid transparent`,
      }}
    >
      {children}
    </div>
  );
};
