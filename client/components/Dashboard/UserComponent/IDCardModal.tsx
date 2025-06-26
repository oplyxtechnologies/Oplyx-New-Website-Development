"use client";

import React, { useRef } from "react";
import Modal from "react-modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { X } from "lucide-react";
import { Employee } from "@/types/employee";
import IDCard from "./IDCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee | null;
}

export default function IDCardModal({ isOpen, onClose, employee }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadPdf = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, {
      useCORS: true,
      backgroundColor: "#fff",
    });
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height] as [number, number],
    });
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      canvas.width,
      canvas.height
    );
    pdf.save(`${employee?.name}_ID_Card.pdf`);
  };

  const printCard = () => {
    if (!cardRef.current) return;
    const win = window.open("", "_blank", "width=600,height=800");
    if (win) {
      win.document.write("<html><head><title>ID Card</title></head><body>");
      win.document.write(cardRef.current.outerHTML);
      win.document.write("</body></html>");
      win.document.close();
      win.focus();
      win.print();
    }
  };

  if (!employee) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="w-full max-w-md bg-[#1c1f24] rounded-lg p-6 overflow-y-auto max-h-[90vh] outline-none"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col items-center gap-4 text-white">
        <div ref={cardRef}>
          <IDCard employee={employee} />
        </div>

        <div className="flex gap-4 mt-4 w-full">
          <button
            onClick={downloadPdf}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Download PDF
          </button>
          <button
            onClick={printCard}
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded"
          >
            Print
          </button>
        </div>
      </div>
    </Modal>
  );
}
