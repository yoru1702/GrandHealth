"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "เธฅเธเธ—เธฐเน€เธเธตเธขเธเธ—เธ”เธชเธญเธเธชเธณเน€เธฃเนเธ (เธเนเธญเธกเธนเธฅเธขเธฑเธเนเธกเนเนเธ”เนเธ–เธนเธเธเธฑเธเธ—เธถเธเธฅเธเธเธฒเธเธเนเธญเธกเธนเธฅ)"
    );
  }

  return (
    <main style={{ maxWidth: "400px", margin: "40px auto", padding: "20px" }}>
      <h1>GrandHealth</h1>
      <h2>เธฅเธเธ—เธฐเน€เธเธตเธขเธเธเธนเนเนเธเนเธเธฒเธ</h2>

      <form onSubmit={handleRegister}>
        <p>
          <label htmlFor="fullName">เธเธทเนเธญ - เธเธฒเธกเธชเธเธธเธฅ</label>
          <br />
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="เธเธฃเธญเธเธเธทเนเธญ - เธเธฒเธกเธชเธเธธเธฅ"
            required
          />
        </p>

        <p>
          <label htmlFor="phone">เน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน</label>
          <br />
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="เธเธฃเธญเธเน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เน"
            maxLength={10}
            required
          />
        </p>

        <p>
          <label htmlFor="userType">เธเธฃเธฐเน€เธ เธ—เธเธนเนเนเธเนเธเธฒเธ</label>
          <br />
          <select id="userType" name="userType" required defaultValue="">
            <option value="" disabled>
              เน€เธฅเธทเธญเธเธเธฃเธฐเน€เธ เธ—เธเธนเนเนเธเนเธเธฒเธ
            </option>
            <option value="ELDERLY">เธเธนเนเธชเธนเธเธญเธฒเธขเธธ</option>
            <option value="RELATIVE">เธเธฒเธ•เธดเธเธนเนเธ”เธนเนเธฅ</option>
          </select>
        </p>

        <button type="submit">เธฅเธเธ—เธฐเน€เธเธตเธขเธ (เธ—เธ”เธชเธญเธ)</button>
      </form>

      {message && <p>{message}</p>}

      <hr />

      <p>
        เธกเธตเธเธฑเธเธเธตเธญเธขเธนเนเนเธฅเนเธง? <Link href="/liff-login">เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ</Link>
      </p>
    </main>
  );
}
