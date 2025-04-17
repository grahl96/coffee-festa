'use client';

import { useState } from 'react';

export default function BoothApply() {
  const [formData, setFormData] = useState({
    companyName: '',
    representative: '',
    phone: '',
    email: '',
    boothType: 'standard',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 데이터 처리 로직 구현
    console.log(formData);
    alert('신청이 완료되었습니다. 담당자 확인 후 연락드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">부스 신청</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                업체명 *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="representative" className="block text-sm font-medium text-gray-700 mb-1">
                대표자명 *
              </label>
              <input
                type="text"
                id="representative"
                name="representative"
                required
                value={formData.representative}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                연락처 *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                이메일 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="boothType" className="block text-sm font-medium text-gray-700 mb-1">
                부스 종류 *
              </label>
              <select
                id="boothType"
                name="boothType"
                required
                value={formData.boothType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="standard">기본 부스 (3m x 3m)</option>
                <option value="premium">프리미엄 부스 (3m x 6m)</option>
                <option value="custom">맞춤 부스 (별도 협의)</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                판매 품목 및 부스 설명
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary transition-colors"
              >
                신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 