import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import categories from "./category.ts";

interface Props {
    onSubmit: (data: ExpenseFormData) => void
}

const schema = z.object({
    description: z.string()
        .min(3, {
            message: 'Description must be at least 3 characters'
        })
        .max(50, {
            message: 'Description must be at most 50 characters'

        }),
    amount: z.number({invalid_type_error: 'Amount is required'})
        .min(0.01, {
            message: 'Amount must be at least 0.01'
        })
        .max(100_000, {
            message: 'Amount must be at most 100,000'
        }),
    category: z.enum(categories, {
        message: 'Category is required'
    }),
})

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}: Props) => {
    const  {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data)
            reset()
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} type="text" id="description" className="form-control"/>
                {errors.description && <div className="text-danger">{errors.description.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', {valueAsNumber: true})} type="number" id="amount" className="form-control"/>
                {errors.amount && <div className="text-danger">{errors.amount.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id="category" className="form-select">
                    <option value="">Select category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                {errors.category && <div className="text-danger">{errors.category.message}</div>}
            </div>
            <button className="btn btn-primary"
                    onSubmit={handleSubmit(data => console.log(data))}
            >Add</button>
        </form>
    )
}

export default ExpenseForm;