export const Collapsible = ({}: {}) => {
  return (
    <div>
      <input id="collapsible" className="peer hidden" type="checkbox" />
      <label
        htmlFor="collapsible"
        className="block p-3 transition-all duration-1000 bg-sky-200 peer-checked:bg-sky-500 rounded-xl peer-checked:rounded-b-none cursor-pointer"
      >
        Why you are like that bro?
      </label>
      <div className="max-h-0 overflow-hidden transition-all duration-1000 ease-out peer-checked:max-h-[350px]">
        <div className="bg-sky-100 h-20 p-2 rounded-b-xl">Hello gexx</div>
      </div>
    </div>
  );
};
