import { useEffect, useState } from "react";

const GRID = 20;

export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState("RIGHT");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setDir("UP");
          break;
        case "ArrowDown":
          setDir("DOWN");
          break;
        case "ArrowLeft":
          setDir("LEFT");
          break;
        case "ArrowRight":
          setDir("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", key);

    return () => window.removeEventListener("keydown", key);
  }, []);

  useEffect(() => {
    const timer = setInterval(moveSnake, 180);

    return () => clearInterval(timer);
  });

  function moveSnake() {
    const head = { ...snake[0] };

    if (dir === "UP") head.y--;
    if (dir === "DOWN") head.y++;
    if (dir === "LEFT") head.x--;
    if (dir === "RIGHT") head.x++;

    if (head.x < 0) head.x = GRID - 1;
    if (head.x >= GRID) head.x = 0;
    if (head.y < 0) head.y = GRID - 1;
    if (head.y >= GRID) head.y = 0;

    const newSnake = [head, ...snake];

    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID),
      });

      setScore((s) => s + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center text-[#74D802]">
        Snake Game
      </h2>

      <p className="text-center mb-4">
        Score : {score}
      </p>

      <div
        className="mx-auto border border-[#74D802]"
        style={{
          width: 400,
          height: 400,
          display: "grid",
          gridTemplateColumns: `repeat(${GRID},1fr)`,
        }}
      >
        {Array.from({ length: GRID * GRID }).map((_, i) => {
          const x = i % GRID;
          const y = Math.floor(i / GRID);

          const snakeCell = snake.find(
            (s) => s.x === x && s.y === y
          );

          const foodCell =
            food.x === x && food.y === y;

          return (
            <div
              key={i}
              style={{
                border: "1px solid #111",
                background: snakeCell
                  ? "#74D802"
                  : foodCell
                  ? "red"
                  : "#181818",
              }}
            />
          );
        })}
      </div>
    </>
  );
}