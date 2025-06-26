// components/Dashboard/UserComponent/IDCard.tsx
"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { Employee } from "@/types/employee";
import bg from "@/public/id/id-card.png"; // Update path if different

interface Props {
  employee: Employee;
}

const IDCard = forwardRef<HTMLDivElement, Props>(({ employee }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[340px] h-[200px] rounded overflow-hidden shadow-md"
      style={{ fontFamily: "sans-serif" }}
    >
      <Image
        src={bg}
        alt="ID Card Background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex h-full px-4 py-3 text-white">
        <div className="w-24 h-24 rounded overflow-hidden border border-white">
          <Image
            src={employee.photo || ""}
            alt="Employee"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4 text-sm flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold">{employee.name}</h2>
            <p>{employee.jobRole}</p>
            <p className="text-xs">{employee.department}</p>
          </div>
          <div className="text-xs">
            <p>ID: {employee.empId}</p>
            <p>{employee.phone}</p>
            <p>{employee.status}</p>
          </div>
        </div>
        {employee.qr && (
          <div className="absolute bottom-2 right-2 w-12 h-12">
            <Image
              src={employee.qr}
              alt="QR Code"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
});

IDCard.displayName = "IDCard";
export default IDCard;
