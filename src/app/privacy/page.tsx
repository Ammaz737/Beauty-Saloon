import { TracingBeam } from '@/components/ui/tracing-beam';
import React from 'react';

export default function Page() {
  return (
    <TracingBeam>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center">Beauty Saloon Policy</h1>

        {/* 1. Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className='text-white'>
            Welcome to our Parlour website. By accessing and using our website or booking our services online,
            you agree to comply with and be bound by the following terms and conditions. This policy outlines how
            we manage appointments, handle your personal data, ensure service quality, and maintain transparency
            in our operations. Please read it carefully before using our services.
          </p>
        </div>

        {/* 2. Privacy & Data Protection */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Privacy & Data Protection</h2>
          <p className='text-white'>
            We respect your privacy and are committed to protecting your personal data. When you book an
            appointment, we collect basic information such as your name, contact number, email address, and
            service preferences. This data is used solely for managing your bookings and improving your experience.
            <br /><br />
            - We do not sell, share, or rent your data to third parties.<br />
            - Your information is stored securely and only accessed by authorized staff.<br />
            - We may use your contact details to send appointment confirmations, updates, and promotional offers.<br />
            - You can request to view, modify, or delete your data at any time by contacting us.
          </p>
        </div>

        {/* 3. Appointment Booking & Confirmation */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Appointment Booking & Confirmation</h2>
          <p className=' text-white'>
            Appointments can be booked through our website using the online form. Once your booking is received:
            <br /><br />
            - A confirmation email is sent to both the client and the admin.<br />
            - All appointments are subject to availability.<br />
            - Please double-check your provided information to avoid delays or miscommunication.<br /><br />
            We reserve the right to cancel or reschedule appointments due to emergencies or scheduling conflicts. In
            such cases, we will notify you as early as possible.
          </p>
        </div>

        {/* 4. Cancellation & Rescheduling */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Cancellation & Rescheduling</h2>
          <p className='text-white'>
            We understand that plans can change. To maintain a smooth service flow:
            <br /><br />
            - Clients must inform us at least 24 hours before the scheduled time for cancellations or rescheduling.<br />
            - Cancellations made with less than 24 hours' notice may be subject to a cancellation fee.<br />
            - Rescheduling is allowed once, free of charge, if done within the time window.<br /><br />
            Frequent last-minute cancellations may result in restricted future bookings.
          </p>
        </div>

        {/* 5. Service Quality & Satisfaction */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Service Quality & Satisfaction</h2>
          <p className='text-white'>
            We strive to provide high-quality beauty and grooming services tailored to each client’s needs.
            <br /><br />
            - If you are not satisfied with a service, please let us know within 24 hours so we can address your concerns.<br />
            - Our staff is trained and certified, and we use quality products for all treatments.<br />
            - We appreciate constructive feedback and take it seriously to improve our services.<br /><br />
            We reserve the right to refuse service to anyone displaying inappropriate behavior or violating our policies.
          </p>
        </div>

        {/* 6. Pricing, Payments & Refunds */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Pricing, Payments & Refunds</h2>
          <p className='text-white'>
            All prices for our services and packages are clearly mentioned on the website or will be communicated before the appointment.
            <br /><br />
            - Payments can be made in cash, bank transfer, or other accepted methods.<br />
            - Advance payments may be required for certain services.<br />
            - Refunds are only provided in case of cancellation initiated by the parlour or valid client dissatisfaction.<br />
            - No refunds for missed appointments without notice.
          </p>
        </div>

        {/* 7. Website Use & Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Website Use & Intellectual Property</h2>
          <p className='text-white'>
            All content on this website including logos, images, text, and branding is owned by the parlour and protected under copyright laws.
            <br /><br />
            - Do not copy or reuse our content without permission.<br />
            - Any website misuse or attempt to breach security may result in legal action.<br /><br />
            We try to keep the website updated and smooth, but we do not guarantee error-free access at all times.
          </p>
        </div>

        {/* 8. Policy Updates & Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Policy Updates & Contact Information</h2>
          <p className='text-white'>
            We may update this policy from time to time. Any changes will be reflected on this page with the date of update.
            <br /><br />
            - We encourage you to review this policy regularly.<br />
            - For any questions or support, please contact us at:<br />
            📧 yourparlour@email.com<br />
            📞 +123-456-7890
          </p>
        </div>
      </div>
    </TracingBeam>
  );
}
