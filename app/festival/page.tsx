'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Festival() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* 히어로 섹션 */}
        <section className="relative h-[60vh] flex items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">축제 소개</h1>
            <p className="text-xl">보정동 커피축제의 모든 것</p>
          </div>
        </section>

        {/* 축제 개요 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">축제 개요</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">축제명</h3>
                <p>보정동 커피축제 2024</p>
                
                <h3 className="text-xl font-bold">기간</h3>
                <p>2024년 5월 24일(금) ~ 5월 26일(일)</p>
                
                <h3 className="text-xl font-bold">장소</h3>
                <p>경기도 용인시 수지구 보정동 카페거리 일원</p>
                
                <h3 className="text-xl font-bold">주최/주관</h3>
                <p>용인시, 보정동 카페거리 상인회, 용인문화재단</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">축제 취지</h3>
                <p className="leading-relaxed">
                  보정동 커피축제는 커피 문화의 중심지인 보정동 카페거리에서
                  커피와 문화가 어우러진 특별한 경험을 제공합니다.
                  전국의 유명 로스터리 카페들이 참여하여 커피 시음회를 열고,
                  바리스타들의 노하우를 배울 수 있는 세미나와 다양한 문화행사가 펼쳐집니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">보정동 커피축제</h3>
                <p className="mb-2">주소: 경기도 용인시 수지구 보정동 카페거리</p>
                <p className="mb-2">전화: 031-123-4567</p>
                <p>이메일: info@bocacoffeefesta.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">주최/주관</h3>
                <ul className="space-y-2">
                  <li>용인시</li>
                  <li>보정동 카페거리 상인회</li>
                  <li>용인문화재단</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>© 2024 보정동 커피축제. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 