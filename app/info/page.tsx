'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Info() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* 메인 히어로 섹션 */}
        <section className="relative h-[40vh] flex items-center justify-center bg-[url('/images/info.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">축제안내</h1>
            <p className="text-xl">2025 보정동 커피축제 소개</p>
          </div>
        </section>

        {/* 글 작성 구간 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">축제 안내</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">행사 개요</h3>
                  <p className="text-gray-700 leading-relaxed">
                    제1회 용인시 보정동카페거리 "BOCA COFFEE FESTA"는 커피 문화의 중심지인 보정동 카페거리에서
                    열리는 커피 축제입니다. 용인의 유명 로스터리 카페들이 참여하여 커피 시음회를 열고,
                    바리스타들의 노하우를 배울 수 있는 세미나와 다양한 문화행사가 펼쳐집니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg min-h-[300px]">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">행사명</h4>
                      <p className="text-gray-700">제1회 용인시 보정동 카페거리 "BOCA COFFEE FESTA"</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">행사일시</h4>
                      <p className="text-gray-700">2025년 6월 7일(토) ~ 6월 8일(일)</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">행사장소</h4>
                      <p className="text-gray-700">용인시 보정동 카페거리 일원</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">주최/주관</h4>
                      <p className="text-gray-700">보정동 BOCA 골목형 상인회</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">운영/후원</h4>
                      <p className="text-gray-700">용인특례시, 경기지방중소기업청, (주)강쎈, 참여업체</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">추진배경</h3>
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      경기도 용인특례시로서 경기남부 지역 경제 활성화의 인프라구축
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      구별 특화에 의한 지역 활성화 및 구별 협력체계 마련
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      특례시로서 지역내 특화브랜드 구축에 의한 성장기회 마련
                    </p>
                  </div>
                  <div className="relative w-full h-[500px]">
                    <Image
                      src="/images/추진배경.jpg"
                      alt="추진배경"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
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
              <p>© 2024 보정동 커피축제. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 