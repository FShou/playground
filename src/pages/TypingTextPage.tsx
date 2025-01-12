import { TypingText } from "../components/TypingText";

export const TypingTextPage = (props: {}) => {
  return (
    <div>
       <p className="text-4xl w-[400px]">
        Hello <TypingText texts={["Gess", "Cuys", "thezze"]} speed={200} delay={400} />
      </p>
    </div>
  );
};
