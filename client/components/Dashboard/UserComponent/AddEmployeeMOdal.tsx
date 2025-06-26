"use client";

import React from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Zod schema for validation
const schema = z.object({
  name: z.string().min(1),
  jobRole: z.string().min(1),
  department: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  emergencyContact: z.string().min(1),
  email: z.string().email(),
  salary: z.string(),
  bankName: z.string().min(1),
  bankAccount: z.string(),
  pan: z.string(),
  idNumber: z.string(),
  idType: z.enum(["Citizenship", "Passport", "National ID", "Driving License"]),
  userRole: z.enum(["Employee", "Admin", "HR"]),
  status: z.enum(["Active", "Resigned", "On Leave"]),
  photo: z.any(),
});

export type FormData = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export default function AddEmployeeModal({ isOpen, onClose, onSubmit }: Props) {
  const { register, handleSubmit, control, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      idType: "Citizenship",
      userRole: "Employee",
      status: "Active",
    },
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="w-full max-w-3xl bg-[#1c1f24] rounded-lg p-6 overflow-y-auto max-h-[90vh] mx-auto outline-none"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X size={20} />
      </button>
      <h2 className="text-white text-xl font-semibold mb-4">
        Add New Employee
      </h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white"
      >
        <input
          {...register("name")}
          placeholder="Full Name"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("jobRole")}
          placeholder="Job Role"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("department")}
          placeholder="Department"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("address")}
          placeholder="Address"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              country="np"
              value={field.value}
              onChange={field.onChange}
              inputClass="!w-full !pl-10 !bg-[#121417] !border-[#2a2d31] !text-white !px-4 !h-12 !py-3 !rounded"
              buttonClass="!bg-[#2a2d31] !border-[#2a2d31]"
              containerClass="!w-full"
            />
          )}
        />

        <input
          {...register("emergencyContact")}
          placeholder="Emergency Contact"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("salary")}
          placeholder="Salary"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("bankName")}
          placeholder="Bank Name"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("bankAccount")}
          placeholder="Bank Account"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <select
          {...register("idType")}
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        >
          <option>Citizenship</option>
          <option>Passport</option>
          <option>National ID</option>
          <option>Driving License</option>
        </select>
        <input
          {...register("idNumber")}
          placeholder="ID Number"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />
        <input
          {...register("pan")}
          placeholder="PAN Number"
          className="px-4 py-2 rounded bg-[#121417] border border-[#ffffff]/30"
        />

        <select
          {...register("userRole")}
          className="px-4 py-2 rounded bg-[#121417] border"
        >
          <option>Employee</option>
          <option>Admin</option>
          <option>HR</option>
        </select>

        <select
          {...register("status")}
          className="px-4 py-2 rounded bg-[#121417] border"
        >
          <option>Active</option>
          <option>Resigned</option>
          <option>On Leave</option>
        </select>

        <input
          type="file"
          {...register("photo")}
          className="md:col-span-2 text-gray-300 bg-[#121417] border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded"
        >
          Save Employee
        </button>
      </form>
    </Modal>
  );
}
