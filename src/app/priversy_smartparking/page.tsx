export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight">스마트파킹 개인정보처리방침</h1>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            스마트게이지는 「개인정보 보호법」 등 관련 법령에 따라
            이용자의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>
          <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700">
            <p>시행일자: 2026-03-11</p>
            <p>최종 수정일: 2026-03-11</p>
          </div>
        </header>

        <div className="space-y-10 text-[15px] leading-8 text-gray-800">
          <section>
            <h2 className="mb-3 text-xl font-semibold">1. 개인정보의 처리 목적</h2>
            <p>
              스마트게이지는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는
              다음 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 관련
              법령에 따라 필요한 조치를 이행합니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>회원가입 및 본인 식별, 회원관리</li>
              <li>주차 서비스 제공, 차량 등록 및 관리, 입출차 기록 확인</li>
              <li>민원처리, 공지사항 전달, 고객문의 응대</li>
              <li>서비스 개선, 오류 분석, 부정이용 방지 및 보안 유지</li>
              <li>이벤트, 혜택, 안내 메시지 발송(이용자의 별도 동의를 받은 경우)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">2. 처리하는 개인정보 항목</h2>
            <p>스마트게이지는 서비스 제공을 위해 다음과 같은 개인정보를 처리할 수 있습니다.</p>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold">가. 회원가입 및 계정관리</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>필수:닉네임, 비밀번호</li>
              
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold">나. 차량 및 주차 서비스 이용</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>선택: 주차장 이용 정보</li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold">다. 서비스 이용 과정에서 자동 수집될 수 있는 정보</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>기기정보(OS, 앱 버전, 기기 모델명)</li>
                  <li>로그기록, 접속 일시, IP 주소, 쿠키, 이용기록</li>
                  <li>오류 및 장애 기록</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              ※ 스마트게이지는 서비스 제공에 필요한 최소한의 개인정보만을 수집합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">3. 개인정보의 처리 및 보유 기간</h2>
            <p>
              스마트게이지는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집
              시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리 및 보유합니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>회원정보: 회원 탈퇴 시까지</li>
              <li>고객문의 및 민원처리 기록: 3년</li>
              <li>서비스 이용기록: 수집일로부터 3개월 또는 관련 법령에서 정한 기간</li>
              <li>
                관계 법령에 따라 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관
              </li>
            </ul>
            <p className="mt-3">
              단, 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 절차 종료 시까지,
              서비스 이용에 따른 채권·채무관계가 남아 있는 경우에는 해당 관계 정산 시까지
              보관할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">4. 개인정보의 제3자 제공</h2>
            <p>
              스마트게이지는 정보주체의 개인정보를 제1조의 처리 목적 범위 내에서만 처리하며, 정보주체의
              동의, 법률의 특별한 규정 등 관련 법령에 해당하는 경우에만 개인정보를 제3자에게
              제공합니다.
            </p>
            <p className="mt-3">
              현재 스마트게이지는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              ※ 향후 제3자 제공이 발생하는 경우 제공받는 자, 제공 목적, 제공 항목, 보유기간을
              본 방침에 즉시 반영합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">5. 개인정보 처리의 위탁</h2>
            <p>
              스마트게이지는 원활한 서비스 제공을 위하여 필요한 경우 일부 업무를 외부에 위탁할 수
              있으며, 위탁계약 체결 시 관련 법령에 따라 개인정보가 안전하게 처리되도록 필요한
              사항을 규정하고 관리·감독합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">6. 개인정보의 파기 절차 및 방법</h2>
            <p>
              스마트게이지는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을
              때에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>전자적 파일 형태: 복구 또는 재생되지 않도록 기술적 방법을 사용하여 삭제</li>
              <li>종이 문서 형태: 분쇄하거나 소각하여 파기</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              7. 정보주체와 법정대리인의 권리·의무 및 행사방법
            </h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대하여 열람, 정정, 삭제, 처리정지 요구 등의
              권리를 행사할 수 있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>회원정보 조회 및 수정: 서비스 내 계정설정 메뉴 또는 고객센터</li>
              <li>회원탈퇴: 서비스 내 탈퇴 기능 또는 고객센터 요청</li>
              <li>개인정보 관련 요청: 이메일 또는 서면을 통한 요청 가능</li>
            </ul>
            <p className="mt-3">
              스마트게이지는 정보주체의 권리행사에 대해 지체 없이 조치하겠습니다. 다만 법령에 따라
              열람 또는 삭제가 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">8. 개인정보의 안전성 확보조치</h2>
            <p>스마트게이지는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>개인정보 접근 권한의 최소화 및 관리</li>
              <li>접속기록의 보관 및 위변조 방지</li>
              <li>개인정보의 암호화 저장 및 전송구간 보호</li>
              <li>보안프로그램 설치 및 주기적 점검</li>
              <li>내부관리계획 수립 및 운영</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">
              9. 자동으로 수집하는 장치의 설치·운영 및 거부
            </h2>
            <p>
              스마트게이지는 이용자에게 보다 편리한 서비스 제공을 위해 쿠키 등 자동 수집 장치를 사용할
              수 있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>쿠키 사용 목적: 로그인 유지, 이용자 환경 설정, 서비스 이용 통계 분석</li>
              <li>이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              ※ 쿠키 저장을 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">10. 개인정보 보호책임자</h2>
            <p>
              스마트게이지는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
              정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를
              지정하고 있습니다.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 p-4">
              <p><strong>성명:</strong> 조홍래</p>
              <p><strong>직책:</strong> 개인정보 보호책임자</p>
              <p><strong>연락처:</strong> smartgauge@smartgauge.co.kr</p>
              <p><strong>문의처:</strong> 010-2487-9329</p>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              ※ 실제 담당자명, 이메일, 연락처로 반드시 수정하세요.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">11. 권익침해 구제방법</h2>
            <p>
              정보주체는 개인정보 침해에 대한 피해구제, 상담 등을 아래 기관에 문의할 수
              있습니다.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>개인정보침해신고센터</li>
              <li>개인정보 분쟁조정위원회</li>
              <li>대검찰청</li>
              <li>경찰청 사이버수사국</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              자세한 기관 연락처 및 접수 방법은 각 기관 공식 홈페이지에서 확인할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">12. 개인정보처리방침의 변경</h2>
            <p>
              본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 서비스 변경사항을 반영하기
              위해 내용의 추가, 삭제 및 수정이 있는 경우에는 변경사항을 서비스 내 공지사항 또는
              별도 페이지를 통해 사전에 안내하겠습니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}