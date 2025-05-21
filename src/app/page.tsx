//홈페이지 updata 250520
"use client";
"use client";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 20px 0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <h1 style={{ fontSize: 40, fontWeight: "bold", marginBottom: 30 }}>
        차량 소모품 관리 앱
      </h1>
      <p style={{ fontSize: 20, color: "#666", marginBottom: 30 }}>
        내 차량의 소모품 등록부터 교체 체크리스트까지!
      </p>
      <div style={{ display: "flex", gap: 30 }}>
        <a
          href="/fuel"
          style={{
            background: "purple",
            color: "#fff",
            padding: "18px 36px",
            borderRadius: 15,
            fontSize: 24,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "2px 2px 10px #ccc",
          }}
        >
          이메일 입력
        </a>

        <a
          href="/R1"
          style={{
            background: "green",
            color: "#fff",
            padding: "18px 36px",
            borderRadius: 15,
            fontSize: 24,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "2px 2px 10px #ccc",
          }}
        >
          바로 시작
        </a>
      </div>
    </main>
  );
}
