'use client';

import React from 'react';
import Navbar from '../components/Navbar';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* 히어로 섹션 */}
        <section className="relative h-[40vh] flex items-center justify-center bg-[url('/images/3.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">보정동 카페거리는?</h1>
            <p className="text-xl">보정동 카페거리의 다양한 모습을 영상으로 만나보세요</p>
          </div>
        </section>

        {/* 유튜브 영상 섹션 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">보정동 카페거리 영상 갤러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/mVKDpxjQhH0"
                    title="보정동 카페거리 영상 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">보정동 카페거리 브이로그</h3>
                  <p className="text-gray-600">보정동 카페거리의 일상적인 모습을 담은 영상입니다.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/WzNcLW6fOWs"
                    title="보정동 카페거리 영상 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">보정동 카페거리 투어</h3>
                  <p className="text-gray-600">보정동 카페거리의 주요 명소들을 소개하는 투어 영상입니다.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/sEenzRryK3w"
                    title="보정동 카페거리 영상 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">보정동 맛집 탐방</h3>
                  <p className="text-gray-600">보정동 카페거리의 맛집들을 소개하는 영상입니다.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/AhQSNvHzBYk"
                    title="보정동 카페거리 영상 4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">보정동 카페 리뷰</h3>
                  <p className="text-gray-600">보정동 카페거리의 인기 카페들을 상세히 리뷰하는 영상입니다.</p>
                </div>
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
                  <li>BOCA 상인회</li>
                  <li>용인특례시</li>
                  <li>경기지방중소기업청</li>
                  <li>(주)강쎈</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>© 2025 보정동 커피축제. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 