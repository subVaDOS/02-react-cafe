import React from "react";

// const App: React.FC = () => {
//   return <div>{/* App content goes here */}</div>;
// };
// 1. Імпортуємо функцію useState
import { useState } from "react";

export default function App() {
  // 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };

  return (
    <>
      <button onClick={handleClick1}>Current: {clicks}</button>
      <button onClick={handleClick2}>Current: {clicks}</button>
      <button onClick={handleClick3}>Current: {clicks}</button>
      <button onClick={handleClick4}>Current: {clicks}</button>
      <button onClick={handleClick5}>Current: {clicks}</button>
      <button onClick={handleClick6}>Current: {clicks}</button>
      <button onClick={handleClick7}>Current: {clicks}</button>
      <button onClick={handleClick8}>Current: {clicks}</button>
      <button onClick={handleClick9}>Current: {clicks}</button>
      <button onClick={handleClick0}>Current: {clicks}</button>
    </>
  );
}
