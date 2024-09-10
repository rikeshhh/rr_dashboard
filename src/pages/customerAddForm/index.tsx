import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../component/input";
import { Button } from "../../component/button";
import { TransactionFormValues } from "../../component/type";
import { transactionSchema } from "../../schema";

export const CustomerAddForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    defaultValues: {
      name: "",
      qty: 0,
      amount: 0,
      payment: "",
      status: "Pending",
    },
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit: SubmitHandler<TransactionFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-full p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6">Add New Transaction</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          name="name"
          control={control}
          label="Name"
          placeholder="Enter transaction name"
          className="w-full"
          error={errors?.name?.message} // Extract and pass only the error message
        />

        <InputField
          name="qty"
          control={control}
          type="number"
          label="Quantity"
          placeholder="Enter quantity"
          className="w-full"
          error={errors?.qty?.message} // Extract and pass only the error message
        />

        <InputField
          name="amount"
          control={control}
          type="number"
          label="Amount"
          placeholder="Enter amount"
          className="w-full"
          error={errors?.amount?.message} // Extract and pass only the error message
        />

        <InputField
          name="payment"
          control={control}
          label="Payment Method"
          placeholder="Enter payment method"
          className="w-full"
          error={errors?.payment?.message} // Extract and pass only the error message
        />

        <div className="flex flex-col">
          <label htmlFor="status" className="mb-2 text-gray-700">
            Status
          </label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <select
                id="status"
                {...field}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
              </select>
            )}
          />
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p> // Extract and pass only the error message
          )}
        </div>

        <div className="md:col-span-2">
          <Button
            type="submit"
            buttonColor="primary"
            buttonSize="medium"
            className="w-full"
          >
            Add Transaction
          </Button>
        </div>
      </form>
    </div>
  );
};
