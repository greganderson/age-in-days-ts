import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");

  const isNumber = (num: string): boolean => /^\d+$/.test(num);


  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newAge = event.target.value;
    if (newAge === "") {
      setAge("");
    } else if (isNumber(newAge)) {
      setAge(Number(newAge));
    }
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Varic Vallenar"
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            placeholder="Enter age in years"
            onChange={handleAgeChange} />
        </div>
      </form>
    </>
  );
}

export default Calculator;
