import React, { ChangeEvent } from "react";

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
        <option value="">All Categoryes</option>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
};

export default ExpenseFillter;
