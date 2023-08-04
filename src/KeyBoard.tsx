import styles from "./Keyboard.module.css";

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type TKeyboardProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function KeyBoard({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
}: TKeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inactiveLetter.includes(key);
        return (
          <button
            disabled={isInActive || isActive}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
