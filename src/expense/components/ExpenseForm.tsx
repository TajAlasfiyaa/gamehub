import { FieldValues, useForm } from "react-hook-form";
interface Props {
  submition: (date: any) => void;
}

const ExpenseForm = ({ submition }: Props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (date: FieldValues) => {
    const expense = { ...date, id: Math.round(Math.random() * 1000) };
    submition(expense);
  };
  return (
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
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="orange">orange</option>
          <option value="water">water</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
