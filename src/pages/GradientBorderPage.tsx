import BeamBorder from "../components/BeamBorder";
import { GradientBorder } from "../components/GradientBorder";

function GradientBorderPage() {
  return (
      <div className="bg-black/90 rounded-xl text-white size-[599px] flex flex-col justify-center gap-3 items-center isolate">
        <GradientBorder borderWidth={1}>Are You Ready ??</GradientBorder>
        <BeamBorder />
      </div>
  );
}

export default GradientBorderPage;
