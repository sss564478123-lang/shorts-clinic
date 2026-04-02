const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfTqNWYEFYy7iBcm18Mf_0R6Tyj00KGmCEwvhaZLtPMVqPsPg/viewform?usp=publish-editor";

const KAKAO_URL = "https://open.kakao.com/o/sQ0mRpoi";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#111]">
      {/* 히어로 */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-14">
        <p className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium">
          유튜브 쇼츠 제목·썸네일·첫 3초 오프닝 점검 서비스
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight">
          [SSD 확인] 쇼츠 업로드 전,
          <br />
          제목과 썸네일부터 먼저 점검하세요
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          유튜브 쇼츠 제목이 약한지, 썸네일 문구가 애매한지, 첫 3초 오프닝이
          부족한지 업로드 전에 점검해드립니다.
          <br />
          단순히 문제를 말하는 게 아니라,
          <span className="font-semibold text-black">
            {" "}
            왜 약한지와 바로 적용할 수정안
          </span>
          까지 정리해서 드립니다.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-black px-6 py-4 text-center font-semibold text-white"
          >
            지금 점검 신청하기
          </a>

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-black bg-white px-6 py-4 text-center font-semibold"
          >
            카카오톡으로 문의하기
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          신청 내용을 확인한 뒤, 진행 가능 여부와 결제 안내를 드립니다.
        </p>

        <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white px-4 py-4">
            <p className="text-sm font-bold">24시간 이내 전달</p>
            <p className="mt-1 text-sm text-gray-500">
              업로드 전에 빠르게 보고 바로 수정 가능
            </p>
          </div>

          <div className="rounded-2xl border bg-white px-4 py-4">
            <p className="text-sm font-bold">제목·썸네일·오프닝 점검</p>
            <p className="mt-1 text-sm text-gray-500">
              핵심 클릭 포인트를 한 번에 확인
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
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            결과 예시
          </p>

          <h2 className="mt-3 text-2xl font-black">
            이런 식으로 수정 포인트를 정리해드립니다
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-bold text-red-700">수정 전</p>
              <p className="mt-4 text-lg font-bold">비오는 밤에 듣는 피아노</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
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
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-2xl font-black">이 서비스를 신청하면 받는 것</h2>
            <ul className="mt-6 space-y-3 leading-7 text-gray-700">
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
            <ul className="mt-6 space-y-3 leading-7 text-gray-700">
              <li>• 유튜브 쇼츠 제목이 약한지 혼자 판단 안 되는 사람</li>
              <li>• 썸네일 문구 강도를 못 잡는 사람</li>
              <li>• 첫 3초 오프닝이 늘 아쉬운 사람</li>
              <li>• 업로드 전에 마지막 점검이 필요한 사람</li>
              <li>• AI를 쓰다 보니 채널 말투가 흔들리는 사람</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 가격표 */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-black">서비스 플랜</h2>
          <p className="mt-2 text-sm text-gray-500">
            사이트에서 바로 결제하는 방식이 아니라, 신청 확인 후 진행 안내 및
            결제 안내를 드립니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 space-y-4">
            <h3 className="text-2xl font-bold">업로드 전 1회 점검</h3>
            <p className="text-4xl font-black">4,900원</p>
            <ul className="space-y-2 leading-7 text-gray-700">
              <li>제목 점검</li>
              <li>썸네일 문구 점검</li>
              <li>첫 3초 오프닝 점검</li>
              <li>설명문 간단 개선</li>
              <li>최종 한 줄 판단</li>
            </ul>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-2xl bg-black px-6 py-4 text-center font-semibold text-white"
            >
              이 플랜 신청하기
            </a>
          </div>

          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-sm space-y-4">
            <p className="inline-block rounded-full bg-black px-3 py-1 text-sm text-white">
              추천
            </p>
            <h3 className="text-2xl font-bold">업로드 클리닉</h3>
            <p className="text-4xl font-black">9,900원</p>
            <ul className="space-y-2 leading-7 text-gray-700">
              <li>실패 위험 요소 5개</li>
              <li>왜 문제인지 설명</li>
              <li>수정 우선순위 제시</li>
              <li>제목 수정안 3개</li>
              <li>썸네일 문구 수정안 3개</li>
              <li>오프닝 수정안 3개</li>
              <li>설명문 개선안</li>
              <li>업로드 가능 여부 판단</li>
            </ul>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-2xl bg-black px-6 py-4 text-center font-semibold text-white"
            >
              이 플랜 신청하기
            </a>
          </div>

          <div className="rounded-3xl border bg-white p-6 space-y-4">
            <h3 className="text-2xl font-bold">채널 톤 유지 점검</h3>
            <p className="text-4xl font-black">19,000원</p>
            <ul className="space-y-2 leading-7 text-gray-700">
              <li>기존 채널 톤 비교</li>
              <li>새 초안과의 거리 분석</li>
              <li>채널다운 수정안</li>
              <li>AI 티 줄인 버전</li>
              <li>더 클릭형 / 더 안정형 버전 제공</li>
            </ul>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-2xl bg-black px-6 py-4 text-center font-semibold text-white"
            >
              이 플랜 신청하기
            </a>
          </div>
        </div>
      </section>

      {/* 진행 방식 */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="mb-8 text-2xl font-black">진행 방식</h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border bg-white p-6">
            <p className="mb-2 text-sm text-gray-500">STEP 1</p>
            <h3 className="mb-3 text-xl font-bold">신청서 작성</h3>
            <p className="leading-7 text-gray-700">
              제목, 설명문, 썸네일 문구, 첫 3초 문장을 보내주세요.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="mb-2 text-sm text-gray-500">STEP 2</p>
            <h3 className="mb-3 text-xl font-bold">내용 확인</h3>
            <p className="leading-7 text-gray-700">
              신청 내용을 확인한 뒤 진행 가능 여부와 예상 방향을 안내합니다.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="mb-2 text-sm text-gray-500">STEP 3</p>
            <h3 className="mb-3 text-xl font-bold">결제 안내</h3>
            <p className="leading-7 text-gray-700">
              진행이 확정되면 결제 방식과 진행 절차를 별도로 안내드립니다.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6">
            <p className="mb-2 text-sm text-gray-500">STEP 4</p>
            <h3 className="mb-3 text-xl font-bold">결과 전달</h3>
            <p className="leading-7 text-gray-700">
              제목, 썸네일, 오프닝, 설명문 기준으로 수정안을 정리해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="mb-8 text-2xl font-black">자주 묻는 질문</h2>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="mb-2 font-bold">사이트에서 바로 결제되나요?</h3>
            <p className="leading-7 text-gray-700">
              아닙니다. 현재는 신청 내용을 먼저 확인한 뒤, 진행 가능 여부와
              결제 안내를 드리는 방식으로 운영하고 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="mb-2 font-bold">유튜브 쇼츠 제목 추천도 해주나요?</h3>
            <p className="leading-7 text-gray-700">
              네. 채널 톤과 영상 방향에 맞춰 제목 수정안까지 함께 드립니다.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h3 className="mb-2 font-bold">결과는 어떤 형식으로 받나요?</h3>
            <p className="leading-7 text-gray-700">
              핵심 문제, 수정 우선순위, 제목·썸네일·오프닝 수정안, 설명문
              개선안, 최종 판단까지 정리된 형태로 전달드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-black p-10 text-white md:p-14">
          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            쇼츠 업로드 전 점검이 필요하다면,
            <br />
            먼저 신청부터 남겨보세요.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            신청 내용을 확인한 뒤 진행 가능 여부와 결제 안내를 드립니다.
            간단한 문의는 카카오톡으로 바로 가능합니다.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black"
            >
              지금 점검 신청하기
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white px-6 py-4 text-center font-semibold"
            >
              카카오톡으로 문의하기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}