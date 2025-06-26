// client/types/employee.ts

export interface Employee {
  id: number;
  empId: string;
  name: string;
  jobRole: string;
  department: string;
  address: string;
  phone: string;
  emergencyContact: string;
  email: string;
  salary: string;
  bankName: string;
  bankAccount: string;
  pan: string;
  idNumber: string;
  idType: "Citizenship" | "Passport" | "National ID" | "Driving License";
  userRole: "Employee" | "Admin" | "HR";
  status: "Active" | "Resigned" | "On Leave";
  photo: string | null;
  qr: string | null;
}
