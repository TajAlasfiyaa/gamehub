import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { category } from "./category";

interface Props {
  submition: (date: any) => void;
}
const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(1).max(100000),
  category: z.enum(category),
});
type ExpenseType = z.infer<typeof schema>;

// ExpenseForm

const ExpenseForm = ({ submition }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseType>({
    resolver: zodResolver(schema),
  });

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
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
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
          {category.map((cat) => (
            <option value={cat}> {cat}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
