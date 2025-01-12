import "./component.css";
const index = () => {
  return (
    <div
      className="isolate min-h-11 rounded-2xl flex items-center justify-center relative bg-white/0 backdrop-blur-sm gradient-border p-4"
      style={{
        // @ts-ignore
        "--borderWidth": 1,
        "--background":
          "conic-gradient(from var(--angle), #525252 80%, #f5f5f5 100%)",

        animation: "beam 4s linear infinite",
      }}
    >

    <button
      className="isolate min-h-11 rounded-xl flex items-center justify-center relative bg-white/5 backdrop-blur-sm gradient-border px-2"
      style={{
        // @ts-ignore
        "--borderWidth": 1,
        "--background":
          "conic-gradient(from var(--angle), #525252 80%, #f5f5f5 100%)",

        animation: "beam 4.2s linear infinite",
      }}
    >
      Hei kammu
    </button>
    </div>
  );
};

export default index;
