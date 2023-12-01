import React, { ChangeEvent } from "react";
import { category } from "./category";

interface Props {
  onChange: (event: string) => void;
}

const ExpenseFillter = ({ onChange }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All Categores</option>
        {category.map((cat) => (
          <option value={cat}> {cat}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFillter;
