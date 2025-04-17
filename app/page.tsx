'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* 메인 히어로 섹션 */}
        <section className="relative h-screen flex items-center justify-center bg-[url('/images/home.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-4">
              제 1회 보정동 커피축제
            </h1>
            <p className="text-xl mb-4">2024. 6. 7(토) ~ 6. 8(일)</p>
            <p className="text-xl">용인시 보정동 카페거리 일원</p>
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
                  <li>BOCA 상인회</li>
                  <li>용인특례시</li>
                  <li>경기지방중소기업청</li>
                  <li>(주)강쎈</li>
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