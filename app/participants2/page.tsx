'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Participants2() {
  const participants = [
    {
      category: '커피원두업체',
      items: [
        {
          name: '㈜뮤제오',
          description: '볶음커피가공, 원두커피, 커피용품 인터넷 판매',
          logo: '/images/participants/logos/museo.jpg',
          phone: '02-2601-0918',
          website: 'https://www.caffemuseo.co.kr/main/index.php'
        },
        {
          name: '㈜베오베',
          description: '커피제조품, 기타코코아 가공품 커피 EXPO 참가업체',
          logo: '/images/participants/logos/beobe.jpg',
          phone: '010-8653-7963',
          website: 'https://www.beobe.kr/'
        },
        {
          name: '㈜에스아이파크토리',
          description: '체험형 커피 테마단지',
          logo: '/images/participants/logos/에스아이.jpg',
          phone: '1588-6102',
          website: 'https://post.naver.com/viewer/postView.nhn?volumeNo=23778092&memberNo=44114328&vType=VERTICAL'
        },
        {
          name: '㈜커피익스체인지',
          description: '커피로스팅, 커피빈공급, 인터넷 판매, 커피컨설팅',
          logo: '/images/participants/logos/exchange.jpg',
          phone: '010-8741-2981',
          website: 'https://coffeeexchange.co.kr/Home'
        },
        {
          name: '㈜티타임커피',
          description: '원두커피, 대용량커피, 커피머신 인터넷 공급업체',
          logo: '/images/participants/logos/teatime.jpg',
          phone: '1588-6651',
          website: 'https://gamtancoffee.com/'
        },
        {
          name: '미스틱 (제이제이브로스)',
          description: '로스팅원두, 커피용품 인터넷판매',
          logo: '/images/participants/logos/mystic.jpg',
          phone: '070-4410-3132',
          website: 'https://smartstore.naver.com/mystic/profile'
        },
        {
          name: '주식회사 만월회',
          description: '커피 원액 인터넷판매',
          logo: '/images/participants/logos/manwol.jpg',
          phone: '010-7209-7050',
          website: 'https://www.manwol.com/all'
        },
        {
          name: '주식회사 브라운하우스',
          description: '커피 원두 납품 인터넷판매',
          logo: '/images/participants/logos/brown.jpg',
          phone: '02-562-5175',
          website: 'https://www.brownhaus.co.kr/'
        },
        {
          name: '보나파르테 (주식회사 이엔아이에프앤비)',
          description: '커피원두 인터넷판매',
          logo: '/images/participants/logos/bona.jpg',
          phone: '031-323-5451',
          website: 'https://smartstore.naver.com/bonapartecoffee/profile'
        },
        {
          name: '아이소 (주식회사 지디지)',
          description: '로스팅 카페, 커피빈 인터넷 판매',
          logo: '/images/participants/logos/aiso.jpg',
          phone: '010-3682-4964',
          website: 'https://aisoaiso.kr/'
        },
        {
          name: '주식회사 쿠키나인',
          description: '에디오피아 로스팅커피 인터넷 판매',
          logo: '/images/participants/logos/cookie9.jpg',
          phone: '010-9953-1782',
          website: 'https://smartstore.naver.com/cooki9'
        },
        {
          name: '오설록 (태평양화학)',
          description: '오설록 녹차, 밀크티',
          logo: '/images/participants/logos/osulloc.jpg',
          phone: '031-213-1511',
          website: 'https://www.osulloc.com/kr/ko'
        },
        {
          name: '프래디 컴퍼니 커피랩',
          description: '카페용 원두커피 인터넷 판매, 추출교육',
          logo: '/images/participants/logos/freddy.jpg',
          phone: '031-328-8107',
          website: 'https://freddycompany.modoo.at/'
        }
      ]
    },
    {
      category: '바리스타 교육학교',
      items: [
        {
          name: '용인예술과학대학교',
          description: '베이커리학과 바리스타실무',
          logo: '/images/participants/logos/yongin.jpg',
          phone: '031-330-9260',
          website: 'https://dept.ysc.ac.kr/bakery'
        },
        {
          name: '용인바이오고등학교',
          description: '바리스타 교육 프로그램',
          logo: '/images/participants/logos/yibio.jpg',
          phone: '031-339-7096',
          website: 'https://www.goeyi.kr/yibio-h/cm/cntnts/cntntsView.do?mi=14348&cntntsId=2317'
        },
        {
          name: '남사중학교',
          description: '커피동아리 활동',
          logo: '/images/participants/logos/namsa.jpg',
          phone: '031-339-7096',
          website: 'https://namsa-m.goeyi.kr/namsa-m/cm/cntnts/cntntsView.do?mi=9070&cntntsId=1635'
        }
      ]
    },
    {
      category: '바리스타 학원',
      items: [
        {
          name: '㈜시즈커피코리아',
          description: '커피체험, 바리스타학원운영, 핸드드립체험, 커피용품 판매',
          logo: '/images/participants/logos/see.jpg',
          phone: '031-763-3805',
          website: 'http://www.seescoffee.com/web/index.php'
        },
        {
          name: '㈜베렉스컴퍼니',
          description: '바리스타과정, 창업과정, 바리스타자격증과정',
          logo: '/images/participants/logos/verex.jpg',
          phone: '02-3452-6262',
          website: 'https://verex.co.kr/'
        },
        {
          name: '한쿡외식문화원',
          description: '조리학, 제과제빵, 바리스타교육',
          logo: '/images/participants/logos/han.jpg',
          phone: '031-8005-8246',
          website: 'https://www.jobedu.or.kr/home'
        },
        {
          name: '한국커피바리스타학원',
          description: '보정동 카페거리앞 커피바리스타 초,중,고급자격 과정',
          logo: '/images/participants/logos/hkb.jpg',
          phone: '031-287-5330',
          website: 'https://kcbea.modoo.at/?link=3cfb09wu'
        },
        {
          name: '리벨커피바리스타학원',
          description: '동백역 바리스타학원',
          logo: '/images/participants/logos/re.jpg',
          phone: '031-8005-8285',
          website: 'https://blog.naver.com/libelle_cba'
        },
        {
          name: '용인요리제과제빵학원',
          description: '처인구 제과제빵 바리스타학원',
          logo: '/images/participants/logos/yco.jpg',
          phone: '031-338-5266',
          website: 'http://yongincook.com/layout/res/home.php?go=main'
        },
        {
          name: '분당스페셜티 커피학원',
          description: '수지구 대지로 커피학원',
          logo: '/images/participants/logos/bundang.jpg',
          phone: '031-261-5233',
          website: 'https://cafe.naver.com/bundangcoffee'
        },
        {
          name: '유럽스페셜티커피학원',
          description: '수지구 풍덕천 커피학원',
          logo: '/images/participants/logos/sca.jpg',
          phone: '031-263-1689',
          website: 'https://esca.modoo.at/'
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* 메인 히어로 섹션 */}
        <section className="relative h-[40vh] flex items-center justify-center bg-[url('/images/bean.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">참가업체</h1>
            <p className="text-xl">2024 보정동 커피축제 참가업체 소개</p>
          </div>
        </section>

        {/* 참가업체 목록 */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {/* 커피원두업체 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">커피원두업체</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {participants[0].items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="h-32 mb-4 flex items-center justify-center">
                        {item.logo && (
                          <Image
                            src={item.logo}
                            alt={`${item.name} 로고`}
                            width={120}
                            height={120}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-gray-600">전화: {item.phone}</p>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline mt-2 block"
                        >
                          웹사이트 방문
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 바리스타 교육학교 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">바리스타 교육학교</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {participants[1].items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="h-32 mb-4 flex items-center justify-center">
                        {item.logo && (
                          <Image
                            src={item.logo}
                            alt={`${item.name} 로고`}
                            width={120}
                            height={120}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-gray-600">전화: {item.phone}</p>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline mt-2 block"
                        >
                          웹사이트 방문
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 바리스타 학원 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">바리스타 학원</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {participants[2].items.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <div className="h-32 mb-4 flex items-center justify-center">
                        {item.logo && (
                          <Image
                            src={item.logo}
                            alt={`${item.name} 로고`}
                            width={120}
                            height={120}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-gray-600">전화: {item.phone}</p>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline mt-2 block"
                        >
                          웹사이트 방문
                        </a>
                      )}
                    </div>
                  ))}
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