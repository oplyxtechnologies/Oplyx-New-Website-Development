"use client";

import React from "react";
import Image from "next/image";
import { Eye, Mail, Phone, Trash2 } from "lucide-react";
import { Employee } from "@/types/employee"; // Adjust import path as needed

interface Props {
  employee: Employee;
  onView: () => void;
  onRemove: () => void;
}

export default function EmployeeCard({ employee, onView, onRemove }: Props) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600";
      case "On Leave":
        return "bg-yellow-600";
      case "Resigned":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-[#1c1f24] border border-[#2a2d31] rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4 text-white">
      <Image
        src={employee.photo || "/default-profile.png"}
        alt="Employee"
        width={80}
        height={80}
        className="rounded-full object-cover w-20 h-20"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{employee.name}</h3>
        <p className="text-sm text-gray-300">{employee.jobRole}</p>
        <p className="text-sm text-gray-400 flex items-center gap-4">
          <span className="flex items-center gap-2  ">
            <Mail size={16} /> {employee.email}{" "}
          </span>{" "}
          <span className="flex items-center gap-2  ">
            <Phone size={16} /> {employee.phone}
          </span>
        </p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded ${getStatusClass(
            employee.status
          )}`}
        >
          {employee.status}
        </span>
      </div>

      <div className="flex gap-3 mt-2 md:mt-0">
        <button
          onClick={onView}
          className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          <Eye size={16} />
          View ID
        </button>
        <button
          onClick={onRemove}
          className="flex items-center gap-1 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
}
