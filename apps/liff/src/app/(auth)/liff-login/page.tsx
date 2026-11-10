"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  function handleLogin() {
    setMessage(
      "นี่คือหน้าทดสอบ ระบบยังไม่ได้เชื่อมต่อ LINE LIFF SDK"
    );
  }

  return (
    <main style={{ maxWidth: "400px", margin: "60px auto", padding: "20px" }}>
      <h1>GrandHealth</h1>
      <h2>เข้าสู่ระบบ</h2>

      <p>ระบบดูแลส่งเสริมสุขภาพผู้สูงอายุ</p>

      <button type="button" onClick={handleLogin}>
        เข้าสู่ระบบด้วย LINE (ทดสอบ)
      </button>

      {message && <p>{message}</p>}

      <hr />

      <p>
        ยังไม่มีบัญชี? <Link href="/register">ลงทะเบียน</Link>
      </p>
    </main>
  );
}