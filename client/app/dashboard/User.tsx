"use client";

import React, { useState } from "react";
import { UserPlus, FileDown, Trash2, X } from "lucide-react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

type FormData = z.infer<typeof schema>;

interface Employee extends Omit<FormData, "photo"> {
  id: number;
  empId: string;
  photo: string | null;
  qr: string | null;
}

export default function User() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showFormModal, setShowFormModal] = useState(false);

  const { register, handleSubmit, control, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      idType: "Citizenship",
      userRole: "Employee",
      status: "Active",
    },
  });

  const onSubmit = async (data: FormData) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const empId = `OPX-${110 + employees.length}`;
      const vcard = `BEGIN:VCARD
VERSION:3.0
N:${data.name}
TEL:${data.phone}
EMAIL:${data.email}
ADR:${data.address}
TITLE:${data.jobRole}
ORG:${data.department}
ROLE:${data.userRole}
END:VCARD`;

      const res = await fetch(`/api/qrcode?text=${encodeURIComponent(vcard)}`);
      const qrData = await res.json();

      setEmployees((prev) => [
        ...prev,
        {
          id: Date.now(),
          empId,
          ...data,
          photo: reader.result as string,
          qr: qrData.qr || null,
        },
      ]);

      reset();
      setShowFormModal(false);
    };
    reader.readAsDataURL(data.photo[0]);
  };

  const downloadCSV = () => {
    if (!employees.length) return;
    const keys = Object.keys(employees[0]).filter(
      (k) => k !== "photo" && k !== "qr"
    );
    const csv = [
      keys.join(","),
      ...employees.map((emp) =>
        keys.map((k) => String(emp[k as keyof Employee] || "")).join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.csv";
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setShowFormModal(true)}
          className="px-4 py-2 bg-emerald-600 text-white rounded flex items-center gap-2"
        >
          <UserPlus size={18} /> Add Employee
        </button>
        <button
          onClick={downloadCSV}
          className="px-4 py-2 bg-yellow-500 text-black rounded flex items-center gap-2"
          disabled={!employees.length}
        >
          <FileDown size={18} /> Download CSV
        </button>
      </div>

      {employees.length > 0 ? (
        <div className="space-y-4">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="bg-[#121417] border border-[#2a2d31] p-4 rounded text-white"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">
                    {emp.name}{" "}
                    <span className="text-sm text-gray-400">
                      ({emp.userRole})
                    </span>
                  </h2>
                  <p className="text-gray-400 text-sm">
                    ID: {emp.empId} | Phone: {emp.phone} | Email: {emp.email}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded text-sm ${
                    emp.status === "Active"
                      ? "bg-green-600"
                      : emp.status === "On Leave"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                >
                  {emp.status}
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                    setEmployees((prev) => prev.filter((e) => e.id !== emp.id))
                  }
                  className="border px-4 py-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No employees yet. Click <strong>Add Employee</strong> to create one.
        </p>
      )}

      {/* Modal */}
      <Modal
        isOpen={showFormModal}
        onRequestClose={() => setShowFormModal(false)}
        ariaHideApp={false}
        className="w-full max-w-3xl bg-[#1c1f24] rounded-lg p-6 outline-none overflow-y-auto max-h-[90vh]"
        overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      >
        <button
          onClick={() => setShowFormModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">Add Employee</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white"
        >
          {/* --- Personal Details --- */}
          <input
            {...register("name")}
            placeholder="Full Name"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("jobRole")}
            placeholder="Job Role"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("department")}
            placeholder="Department"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("address")}
            placeholder="Address"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />

          {/* --- Contact Info --- */}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                country="np"
                value={field.value}
                onChange={field.onChange}
                inputClass="!w-full !bg-[#121417] !border-[#2a2d31] !text-white !px-4 !h-12 !py-3 !rounded-md !focus:border-emerald-500"
                buttonClass="!bg-[#2a2d31] !border-[#2a2d31]"
                containerClass="!w-full"
              />
            )}
          />
          <input
            {...register("emergencyContact")}
            placeholder="Emergency Contact"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("email")}
            placeholder="Email Address"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />

          {/* --- Financial Info --- */}
          <input
            {...register("salary")}
            placeholder="Salary"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("bankName")}
            placeholder="Bank Name"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("bankAccount")}
            placeholder="Bank Account Number"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <input
            {...register("pan")}
            placeholder="PAN Number"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />

          {/* --- ID Details --- */}
          <input
            {...register("idNumber")}
            placeholder="ID Number"
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          />
          <select
            {...register("idType")}
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          >
            <option>Citizenship</option>
            <option>Passport</option>
            <option>National ID</option>
            <option>Driving License</option>
          </select>

          {/* --- Role & Status --- */}
          <select
            {...register("userRole")}
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          >
            <option>Employee</option>
            <option>Admin</option>
            <option>HR</option>
          </select>
          <select
            {...register("status")}
            className="bg-[#121417] border border-[#2a2d31] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 px-4 py-3 rounded-md w-full"
          >
            <option>Active</option>
            <option>Resigned</option>
            <option>On Leave</option>
          </select>

          {/* --- Upload --- */}
          <input
            type="file"
            {...register("photo")}
            className="text-gray-400 file:bg-emerald-700 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md border border-[#2a2d31] rounded-md bg-[#121417] w-full md:col-span-2"
          />

          {/* --- Submit Button --- */}
          <button
            type="submit"
            className="w-full bg-green-600 py-3 rounded-md hover:bg-green-700 transition-all md:col-span-2"
          >
            Save Employee
          </button>
        </form>
      </Modal>
    </div>
  );
}
