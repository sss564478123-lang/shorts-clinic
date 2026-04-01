const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfTqNWYEFYy7iBcm18Mf_0R6Tyj00KGmCEwvhaZLtPMVqPsPg/viewform?usp=header";

const KAKAO_URL = "#";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#111]">
      {/* 히어로 */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-14">
        <p className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium">
          유튜브 쇼츠 운영자를 위한 업로드 전 점검 서비스
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight">
          올리기 전에,
          <br />
          망할 포인트부터 먼저 잡아드립니다.
        </h1>

        <p className="mt-6 text-lg text-gray-700 leading-8 max-w-3xl">
          제목, 썸네일 문구, 첫 3초 오프닝, 설명문을 업로드 전에 점검해서
          실수할 확률을 줄여드립니다.
          <br />
          단순히 문제를 지적하는 게 아니라,
          <span className="font-semibold text-black">
            {" "}
            왜 약한지와 바로 쓸 수 있는 수정안
          </span>
          까지 정리해서 드립니다.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-black text-white px-6 py-4 font-semibold text-center"
          >
            지금 점검 신청하기
          </a>

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-black px-6 py-4 font-semibold text-center bg-white"
          >
            오픈채팅으로 먼저 문의하기
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
          <div className="rounded-2xl border bg-white px-4 py-4">
            <p className="text-sm font-bold">24시간 이내 전달</p>
            <p className="mt-1 text-sm text-gray-500">
              빠르게 보고 바로 수정할 수 있게 정리
            </p>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-4">
            <p className="text-sm font-bold">바로 적용 가능한 수정안</p>
            <p className="mt-1 text-sm text-gray-500">
              제목·썸네일·오프닝 수정안을 함께 제공
            </p>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-4">
            <p className="text-sm font-bold">채널 톤까지 고려</p>
            <p className="mt-1 text-sm text-gray-500">
              단순 생성이 아니라 채널 흐름까지 반영
            </p>
          </div>
        </div>
      </section>

      {/* 결과 예시 */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="rounded-3xl border bg-white p-8">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            결과 예시
          </p>
          <h2 className="mt-3 text-2xl font-black">
            이런 식으로 수정 포인트를 잡아드립니다
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-700">수정 전</p>
              <p className="mt-4 text-lg font-bold">비오는 밤에 듣는 피아노</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-6">
                <li>• 감성은 있지만 너무 흔해서 멈출 이유가 약함</li>
                <li>• 썸네일 문구와 연결했을 때 강한 정지 포인트 부족</li>
                <li>• 첫 3초와 제목의 긴장감 차이가 적음</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <p className="text-sm font-bold text-green-700">수정 후</p>
              <p className="mt-4 text-lg font-bold">
                비 오는 새벽, 이어폰 끼면 분위기 달라지는 피아노
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-6">
                <li>• 감성은 유지하면서도 멈출 이유를 더 분명하게 만듦</li>
                <li>• 상황을 구체화해서 클릭 포인트 강화</li>
                <li>• 오프닝 문장과 자연스럽게 연결되게 조정</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 무엇을 받는지 */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-2xl font-black">이 서비스를 신청하면 받는 것</h2>
            <ul className="mt-6 space-y-3 text-gray-700 leading-7">
              <li>• 가장 큰 문제 3~5개</li>
              <li>• 왜 그게 문제인지 설명</li>
              <li>• 수정 우선순위</li>
              <li>• 제목 수정안 3개</li>
              <li>• 썸네일 문구 수정안 3개</li>
              <li>• 오프닝 수정안 3개</li>
              <li>• 설명문 개선안</li>
              <li>• 지금 올려도 되는지 최종 판단</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-2xl font-black">이 서비스가 필요한 사람</h2>
            <ul className="mt-6 space-y-3 text-gray-700 leading-7">
              <li>• 영상은 만들었는데 업로드 직전 판단이 늘 애매한 사람</li>
              <li>• 제목이 약한지 강한지 혼자 판단이 안 되는 사람</li>
              <li>• 썸네일 문구 강도를 잘 못 잡는 사람</li>
              <li>• 첫 3초가 늘 약한 것 같은 사람</li>
              <li>• AI를 쓰다 보니 채널 말투가 흔들리는 사람</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 가격표 */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-black mb-8">서비스 플랜</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border bg-white p-6 space-y-4">
            <h3 className="text-2xl font-bold">업로드 전 1회 점검</h3>
            <p className="text-4xl font-black">4,900원</p>
            <ul className="space-y-2 text-gray-700 leading-7">
              <li>제목 점검</li>
              <li>썸네일 문구 점검</li>
              <li>첫 3초 오프닝 점검</li>
              <li>설명문 간단 개선</li>
              <li>최종 한 줄 판단</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-black bg-white p-6 space-y-4 shadow-sm">
            <p className="inline-block rounded-full bg-black text-white px-3 py-1 text-sm">
              추천
            </p>
            <h3 className="text-2xl font-bold">업로드 클리닉</h3>
            <p className="text-4xl font-black">9,900원</p>
            <ul className="space-y-2 text-gray-700 leading-7">
              <li>실패 위험 요소 5개</li>
              <li>왜 문제인지 설명</li>
              <li>수정 우선순위 제시</li>
              <li>제목 수정안 3개</li>
              <li>썸네일 문구 수정안 3개</li>
              <li>오프닝 수정안 3개</li>
              <li>설명문 개선안</li>
              <li>업로드 가능 여부 판단</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6 space-y-4">
            <h3 className="text-2xl font-bold">채널 톤 유지 점검</h3>
            <p className="text-4xl font-black">19,000원</p>
            <ul className="space-y-2 text-gray-700 leading-7">
              <li>기존 채널 톤 비교</li>
              <li>새 초안과의 거리 분석</li>
              <li>채널다운 수정안</li>
              <li>AI 티 줄인 버전</li>
              <li>더 클릭형 / 더 안정형 버전 제공</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 진행 방식 */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-black mb-8">진행 방식</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="rounded-3xl border bg-white p-6">
            <p className="text-sm text-gray-500 mb-2">STEP 1</p>
            <h3 className="text-xl font-bold mb-3">신청서 작성</h3>
            <p className="text-gray-700 leading-7">
              제목, 설명문, 썸네일 문구, 첫 3초 문장을 보내주세요.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="text-sm text-gray-500 mb-2">STEP 2</p>
            <h3 className="text-xl font-bold mb-3">문제 진단</h3>
            <p className="text-gray-700 leading-7">
              약한 지점, 톤 불일치, 오프닝 문제를 분석합니다.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="text-sm text-gray-500 mb-2">STEP 3</p>
            <h3 className="text-xl font-bold mb-3">수정안 제안</h3>
            <p className="text-gray-700 leading-7">
              제목, 썸네일 문구, 오프닝, 설명문 수정안을 정리해드립니다.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="text-sm text-gray-500 mb-2">STEP 4</p>
            <h3 className="text-xl font-bold mb-3">업로드 판단</h3>
            <p className="text-gray-700 leading-7">
              지금 올려도 되는지, 수정 후 올려야 하는지 최종 판단까지 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-black mb-8">자주 묻는 질문</h2>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-bold mb-2">조회수를 보장하나요?</h3>
            <p className="text-gray-700 leading-7">
              아닙니다. 이 서비스는 업로드 전에 실수할 확률을 줄이고,
              제목·썸네일·오프닝·설명문의 약한 지점을 정리해드리는 서비스입니다.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-bold mb-2">어떤 채널이 특히 잘 맞나요?</h3>
            <p className="text-gray-700 leading-7">
              한국어 쇼츠 정보형 채널, 공부/교육 채널, 음악/감성 채널처럼
              말투와 포장력이 중요한 채널에 특히 잘 맞습니다.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-bold mb-2">결과는 어떤 형식으로 받나요?</h3>
            <p className="text-gray-700 leading-7">
              핵심 문제, 수정 우선순위, 제목/썸네일/오프닝 수정안,
              설명문 개선안, 최종 판단까지 정리된 형태로 전달드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-black text-white p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            올리기 전에,
            <br />
            망할 포인트부터 먼저 잡아드립니다.
          </h2>

          <p className="mt-5 text-white/80 leading-8 max-w-2xl">
            영상은 이미 만들었는데 제목, 썸네일 문구, 첫 3초, 설명문이
            괜찮은지 혼자 판단이 안 될 때 쓰는 서비스입니다.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white text-black px-6 py-4 font-semibold text-center"
            >
              지금 점검 신청하기
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white px-6 py-4 font-semibold text-center"
            >
              먼저 문의하기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}