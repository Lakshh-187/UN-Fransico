import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TermsDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-blue-600 underline hover:text-blue-800 transition duration-300">
        Terms and Conditions
      </DialogTrigger>
      <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-lg border-2 border-blue-500">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">
            ₹200: Registration Fee
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-4 pl-4 border-l-4" style={{ borderColor: '#3b82f6' }}>
            This fee is refundable if you actively participate in our events, conferences, and campaigns.
          </DialogDescription>

          <DialogTitle className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">
            ₹300: Refundable Membership Fee
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-4 pl-4 border-l-4" style={{ borderColor: '#ef4444' }}>
            This amount will be refunded after you submit a valid Social Internship Certificate.
          </DialogDescription>

          <DialogTitle className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">
            Agreement Acknowledgment
          </DialogTitle>
          <DialogDescription className="text-gray-600 pl-4 border-l-4" style={{ borderColor: '#10b981' }}>
            Your payment confirms that you have reviewed all the content on the portal and accept these terms.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
