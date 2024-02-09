import React from 'react';

function UserProfile() {
  return (
    <div className="p-4 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
      <p className="mb-4 text-gray-600">Name: John Doe</p>
      <p className="mb-4 text-gray-600">Email: john.doe@example.com</p>
      <p className="mb-4 text-gray-600">Address: 123 Main St, Anytown, USA</p>
    </div>
  );
}

function Appointments() {
  return (
    <div className="p-4 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Appointments</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 text-gray-600">Date</th>
            <th className="px-4 py-2 text-gray-600">Doctor</th>
            <th className="px-4 py-2 text-gray-600">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 border-gray-300">01/01/2022</td>
            <td className="border px-4 py-2 border-gray-300">Dr. Smith</td>
            <td className="border px-4 py-2 border-gray-300">10:00am</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 border-gray-300">01/08/2022</td>
            <td className="border px-4 py-2 border-gray-300">Dr. Johnson</td>
            <td className="border px-4 py-2 border-gray-300">2:00pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DoctorOptions() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Options</h1>
      <ul className="list-disc list-inside text-gray-600">
        <li>Dr. Smith - Cardiology</li>
        <li>Dr. Johnson - Dermatology</li>
        <li>Dr. Brown - Neurology</li>
      </ul>
    </div>
  );
}

function Payment() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment</h1>
      <form className="mb-4">
        <label className="block mb-2 text-gray-600" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="p-2 border border-gray-300 w-full"
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
        />
        <label className="block mb-2 text-gray-600" htmlFor="expirationDate">
          Expiration Date
        </label>
        <input
          className="p-2 border border-gray-300 w-full"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
        />
        <label className="block mb-2 text-gray-600" htmlFor="cvv">
          CVV
        </label>
        <input className="p-2 border border-gray-300 w-1/4" type="text" id="cvv" />
      </form>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Pay
      </button>
    </div>
  );
}

function USER1() {
  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-1/4">
          <UserProfile />
        </div>
        <div className="w-1/2">
          <Appointments />
          <DoctorOptions />
        </div>
        <div className="w-1/4">
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default USER1;
