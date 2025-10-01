import React from 'react';

const PaymentSection = () => {
  return (
    <section className="py-20 bg-white">
        
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Easy Payment Options</h2>
          <p className="text-xl text-gray-600">Pay conveniently using M-Pesa</p>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">M-Pesa Paybill</h3>
            <p className="opacity-90">Quick and secure payments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Paybill Number</h4>
              <p className="text-2xl font-bold">4167741</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Account Number</h4>
              <p className="text-lg">Your Phone Number</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <p className="text-sm">
              <strong>How to pay:</strong> Go to M-Pesa → Lipa na M-Pesa → Pay Bill → 
              Enter Paybill: 4167741 → Account: Your Phone Number → Amount → PIN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;