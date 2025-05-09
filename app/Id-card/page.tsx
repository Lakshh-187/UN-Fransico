import AdditionalBenefits from '@/components/Id-card/AdditionalBenefits';
import GreenCard from '@/components/Id-card/GreenCard';
import IDCardTimeAid from '@/components/Id-card/IDAid';
import UNMembershipGuide from '@/components/Id-card/MembershipGuide';
import ScholarIDCard from '@/components/Id-card/ScholarIDCard';
import React from 'react';

export default function IDCardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        UN-Francisco Scholar ID Card
      </h1>
      <UNMembershipGuide />
      <IDCardTimeAid />
      <ScholarIDCard />
      <AdditionalBenefits />
      <GreenCard />
    </div>
  );
}
