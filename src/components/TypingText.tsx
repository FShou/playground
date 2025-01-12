import { useEffect, useState } from "react";
export function TypingText({
  texts,
  speed,
  delay,
}: {
  texts: string[];
  speed: number;
  delay: number;
}) {
  const [selected, setSelected] = useState(0);
  const text = texts[selected];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const handleTyping = () => {
      if (isDeleting) {
        if (index > 1) {
          setDisplayedText(text.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setDisplayedText("_");
          setIndex(index - 1);
          setIsDeleting(false);
          setIsPaused(true);
          setSelected((selected + 1) % texts.length);
          setTimeout(() => {
            setIsPaused(false);
          }, delay); // Delay before typing again
        }
      } else {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsDeleting(true);
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), delay); // Delay before deleting
        }
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [index, text, isDeleting, isPaused, speed, delay]);

  return (
    <span className="relative ">
      {displayedText === "_" ? (
        <>
          <span className="text-transparent">_</span>
          <span className="absolute ml-1 w-1 left-0 inset-y-0 bg-red-300 duration-100" />
        </>
      ) : (
        <>
          {displayedText}
          <span className="absolute ml-1 w-1 right-0 inset-y-0 bg-red-300 duration-100" />
        </>
      )}
    </span>
  );
}
