import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
const badi = [
  { description: "fasdfasd", amount: "9", category: "apple" },
  { description: "fasdfasd", amount: "9", category: "orange" },
  { description: "fasdfasd", amount: "9", category: "banana" },
  { description: "fasdfasd", amount: "9", category: "apple" },
  { description: "fasdfasd", amount: "9", category: "water" },
];
const Form = () => {
  const [badges, setBadges] = useState<any>(badi);
  const { register, handleSubmit } = useForm();
  const onSubmit = (date: FieldValues) => setBadges([...badi, date]);
  let test = badges;
  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount")}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option value="apple">food</option>
            <option value="banana">One</option>
            <option value="orange">Two</option>
            <option value="water">Three</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <form>
        <div className="mb-3">
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            onSelect={(event) => console.log(event.currentTarget.value)}
          >
            <option value="apple">food</option>
            <option value="banana">One</option>
            <option value="orange">Two</option>
            <option value="water">Three</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
