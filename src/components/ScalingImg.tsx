export const ScalingImg = () => {
  return (
    <div className="h-96 w-80 bg-red-500 overflow-hidden rounded-2xl relative group hover:rotate-3 border-white shadow-2xl border-[12px] transform duration-1000 origin-bottom">
      <img
        alt="Church"
        src="https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="object-contain group-hover:scale-105 transform duration-300 ease-out"
      />
      <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/30 transition duration-1000" />
    </div>
  );
};
