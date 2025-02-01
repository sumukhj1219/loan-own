"use client"
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCodeCanvas } from 'qrcode.react';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">Have a question or need assistance? Contact us directly via WhatsApp.</p>
          <div className="flex justify-center mb-4">
            <QRCodeCanvas value="https://wa.me/61401234567" size={128} />
          </div>
          <a
            href="https://wa.me/61401234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp size={24} />
            <span>+61 401 234 567</span>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
