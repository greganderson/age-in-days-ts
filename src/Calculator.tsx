import React, { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");

  // This is what is displayed as the result
  const [ageInDays, setAgeInDays] = useState<number | null>(null);

  const isNumber = (num: string): boolean => /^\d+$/.test(num);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the page from refreshing when the user clicks submit
    event.preventDefault();

    // Only show the result if the user has put in an age
    if (typeof age === "number") {
      setAgeInDays(age * 365);
    } else {
      alert("Please enter an age");
    }
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newAge = event.target.value;

    // If the user tries to clear out the number from the input box, change
    // the value to an empty string. They won't be able to clear the number
    // if we don't have this.
    if (newAge === "") {
      setAge("");
    } else if (isNumber(newAge)) {
      // Because the value we get from the input box always comes back as
      // a string, cast the value into a number.
      setAge(Number(newAge));
    }
  }

  return (
    <div className={styles.calculator}>
      <form onSubmit={handleSubmit} className={styles.calculatorForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Varic Vallenar"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter age in years"
            onChange={handleAgeChange} />
        </div>
        <button type="submit">Submitme</button>
      </form>
      {/* Only show the result if they've submitted with an age */}
      {ageInDays && <h2>{name ? name : "This person"} is {ageInDays} days old!</h2>}
    </div>
  );
}

export default Calculator;
