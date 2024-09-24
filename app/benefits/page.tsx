// pages/membership-benefits.tsx

import React from 'react';
import MembershipBenefits from '@/components/benefits/membershipBenefit'; // Adjust the path based on where you store the component
import CareerTrack from '@/components/benefits/career-track';
import ResourceLibrary from '@/components/benefits/resource-library';
import UNSRCertificate from '@/components/benefits/UNSR-Internship';
import GreenCardBenefits from '@/components/benefits/Greencardbenefit';

export default function MembershipBenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Membership Benefits
        </h1>
        <MembershipBenefits />
        <CareerTrack />
        <ResourceLibrary />
        <UNSRCertificate />
        <GreenCardBenefits/>
      </div>
    </div>
  );
}
