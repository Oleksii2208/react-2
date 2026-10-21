import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import ClickCounter from "../ClickCounter/ClickCounter";

const App = () => {
  // const handleClick = () => {
  //   alert("I'm a button!");
  // };
  // return <button onClick={handleClick}>Click me!</button>;
  // return <button onClick={() => alert("I'm a button!")}>Click me!</button>;  Також можна визначити обробник подій безпосередньо всередині JSX як
  // анонімну інлайн - функцію.
  // const handleClick = (evt) => {
  //   console.log(evt);
  // };
  // return (
  //   <>
  //     <button onClick={handleClick}>First button</button>
  //     <button onClick={(evt) => console.log(evt)}>Second button</button>
  //   </>
  // );
  // let clicks = 0;
  // const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [clicks, setClicks] = useState(0);

  // Функція, яку будемо передавати в ClickCounter
  // для виклику під час кліку
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // Оновлення об'єктів
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <h2>Реактивність</h2>
      <button onClick={handleClick}>Current: {clicks}</button>
      <h2>Декілька станів</h2>
      <p>
        Ви можете мати стільки змінних стану, скільки потрібно в одному
        компоненті. Для кожного використовуйте окремий useState.
      </p>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <p>
        Кожен зі станів clicks та isOpen незалежний і оновлюється своїми
        відповідними функціями встановлення setClicks та setIsOpen відповідно.
      </p>
      <h2>Ізоляція стану</h2>
      <ClickCounter />
      <ClickCounter />
      <h2>Підняття стану</h2>
      <p>
        А що, якщо нам потрібно, щоб всі ClickCounter тримали свої стани
        синхронізованими? Правильний спосіб зробити це в React - це видалити
        стан з дочірніх компонентів і додати його до їхнього найближчого
        спільного батька, тобто створити спільний стан.
      </p>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <h2>Оновлення об'єктів</h2>
      <p>Стан може містити будь-який тип значення, включаючи об'єкти.</p>
      <p>
        У жодному разі не слід змінювати об'єкти по посиланню, тобто мутувати
        стан. Мутація стану не викличе оновлення компонента і, відповідно,
        інтерфейсу.
      </p>
      <p>
        Іншими словами, слід розглядати будь-який об'єкт в стані лише для
        читання. Змінювати його не можна!
      </p>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
      <h2>Обмеження хуків</h2>
      <p>
        Будь-які хуки можна викликати лише на верхньому рівні функції
        компонента. Це означає, що вони повинні знаходитися безпосередньо в тілі
        функції компонента, а не всередині циклів, умов, вкладених функцій і так
        далі. Такі обмеження спрощують написання логіки компонента та роблять
        код більш читабельним.
      </p>
      <p>
        Викликайте хуки лише на верхньому рівні функції компонента, так само, як
        ви імпортуєте модулі лише на верхньому рівні вашого файлу.
      </p>
    </>
  );
};

export default App;
