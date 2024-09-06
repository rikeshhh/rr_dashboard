import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomerFormValues } from "../../component/type";
import InputField from "../../component/input";
import { Button } from "../../component/button";

export const CustomerAddForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CustomerFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cylinderType: "",
      notes: "",
    },
  });

  const onSubmit: SubmitHandler<CustomerFormValues> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="max-w-full  p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Customer</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="flex flex-col">
          <InputField
            name="name"
            control={control}
            label="Name"
            placeholder="Enter customer's name"
            className="w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <InputField
            name="email"
            control={control}
            label="Email"
            type="email"
            placeholder="Enter customer's email"
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <InputField
            name="phone"
            control={control}
            label="Phone Number"
            type="tel"
            placeholder="Enter customer's phone number"
            className="w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <InputField
            name="address"
            control={control}
            label="Address"
            placeholder="Enter customer's address"
            className="w-full"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <InputField
            name="city"
            control={control}
            label="City"
            placeholder="Enter city"
            className="w-full"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col">
          <InputField
            name="state"
            control={control}
            label="State"
            placeholder="Enter state"
            className="w-full"
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* Zip Code */}
        <div className="flex flex-col">
          <InputField
            name="zip"
            control={control}
            label="Zip Code"
            placeholder="Enter zip code"
            className="w-full"
          />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
          )}
        </div>

        {/* Preferred Cylinder Type */}
        <div className="flex flex-col">
          <InputField
            name="cylinderType"
            control={control}
            label="Preferred Cylinder Type"
            placeholder="Enter preferred cylinder type"
            className="w-full"
          />
          {errors.cylinderType && (
            <p className="text-red-500 text-sm mt-1">{errors.cylinderType.message}</p>
          )}
        </div>

        {/* Notes */}
        <div className="md:col-span-2 flex flex-col">
          <InputField
            name="notes"
            control={control}
            label="Notes"
            placeholder="Any additional notes"
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            buttonColor="primary"
            buttonSize="medium"
            className=""
          >
            Add Customer
          </Button>
        </div>
      </form>
    </div>
  );
};
