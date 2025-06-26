"use client";

import React, { useState } from "react";
import { UserPlus, FileDown } from "lucide-react";

import IDCardModal from "@/components/Dashboard/UserComponent/IDCardModal";

import AddEmployeeModal, {
  FormData,
} from "@/components/Dashboard/UserComponent/AddEmployeeMOdal";
import EmployeeCard from "@/components/Dashboard/UserComponent/EmployeeCard";

// Employee type extending the form data and adding id, empId, qr
interface Employee extends Omit<FormData, "photo"> {
  id: number;
  empId: string;
  photo: string | null;
  qr: string | null;
}

export default function User() {
  // State management
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [modalEmp, setModalEmp] = useState<Employee | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [showFormModal, setShowFormModal] = useState(false);

  // Handle form submission
  const handleAddEmployee = async (data: FormData) => {
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

      // Save employee
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

      setShowFormModal(false);
    };

    reader.readAsDataURL(data.photo[0]); // Read uploaded image
  };

  // Filter employees by status
  const filteredEmployees =
    filter === "All"
      ? employees
      : employees.filter((emp) => emp.status === filter);

  // Download all employees as CSV
  const downloadCSV = () => {
    if (!employees.length) return;

    const keys = Object.keys(employees[0]).filter(
      (k) => k !== "photo" && k !== "qr"
    );
    const csv = [
      keys.join(","), // headers
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
      {/* Top Buttons */}
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
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="bg-[#121417] border border-[#2a2d31] text-white px-4 py-2 rounded"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
          <option value="Resigned">Resigned</option>
        </select>
      </div>

      {/* Employee Cards */}
      {filteredEmployees.length > 0 ? (
        <div className="space-y-4">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="bg-[#121417] border border-[#2a2d31] p-4 rounded text-white"
            >
              <EmployeeCard
                employee={emp}
                onView={() => setModalEmp(emp)}
                onRemove={() =>
                  setEmployees((prev) => prev.filter((e) => e.id !== emp.id))
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          No employees to display. Try adding or changing filter.
        </p>
      )}

      {/* View ID Modal */}
      <IDCardModal
        isOpen={!!modalEmp}
        onClose={() => setModalEmp(null)}
        employee={modalEmp}
      />

      {/* Add Employee Modal */}
      <AddEmployeeModal
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
        onSubmit={handleAddEmployee}
      />
    </div>
  );
}
