"use client";

import React from "react";
import { IconWhatsApp } from "../ui/Icons";

export const WhatsAppButton = () => {
  const phoneNumber = "919045597305"; // Formatted without '+' or spaces for the API link
  const message = encodeURIComponent("Hello SANKET team, I'd like to inquire about the landslide early warning platform.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] group"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
    </a>
  );
};
