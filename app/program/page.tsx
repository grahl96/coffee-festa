'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Program() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* 메인 히어로 섹션 */}
        <section className="relative h-[40vh] flex items-center justify-center bg-[url('/images/배경사진.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">프로그램</h1>
            <p className="text-xl">2025 보정동 커피축제 프로그램 안내</p>
          </div>
        </section>

        {/* 글 작성 구간 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">프로그램</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">추진목적</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      용인시 보정동 카페거리 커피축제 특화 및 상권활성화
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      커피축제 브랜딩에 의한 커피문화 확산 및 지속 사업화
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      용인지역 방문객 극대화를 위한 특별한 체험 및 콘텐츠 제공
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg min-h-[300px]">
                  <h3 className="text-xl font-bold mb-4">행사 주요내용</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">BOCA 루키바리스타오디션</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>용인 바이오고등학교 재학생 대상 바리스타 오디션 개최</li>
                        <li>우승자 혜택부여 : 1등 시장상, 우수상 BOCA 상품권 지급</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">커피박람회 (커피경험 A to Z)</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>용인지역 커피관련 업체 참가</li>
                        <li>커피의 A to Z 체험 및 정보 소개</li>
                        <li>관련 업체 10개 이상 참여</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">플리마켓</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>용인지역 소상공인, 스타트업, 중소기업 등 대상</li>
                        <li>업종 및 참여자 사전 접수</li>
                        <li>관련 팀 15개 이상 참여</li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">공연</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>공원 무대 활용 문화재단 공연팅 행사 방문객 대상공연</li>
                        <li>버블, 매직, 섹스폰연주 등 1일 5팀씩 공연</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 relative w-full h-[300px]">
                    <Image
                      src="/images/1.jpg"
                      alt="행사 이미지"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-6 relative w-full h-[300px]">
                    <Image
                      src="/images/2.jpg"
                      alt="커피박람회 이미지"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-6 relative w-full h-[400px]">
                    <Image
                      src="/images/bojung.jpg"
                      alt="보정동 이미지"
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