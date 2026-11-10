"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

// แก้ path ให้ตรงกับโปรเจกต์ของคุณ
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

type NotificationType = "success" | "error" | "warning";

interface Notification {
  type: NotificationType;
  message: string;
}

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [notification, setNotification] =
    useState<Notification | null>(null);

  const showNotification = (
    type: NotificationType,
    message: string
  ) => {
    setNotification({
      type,
      message,
    });

    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      showNotification(
        "warning",
        "กรุณากรอก Email และรหัสผ่านให้ครบถ้วน"
      );
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(error);

        showNotification(
          "error",
          "Email หรือรหัสผ่านไม่ถูกต้อง"
        );

        setLoading(false);
        return;
      }

      if (!data.user) {
        showNotification(
          "error",
          "ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง"
        );

        setLoading(false);
        return;
      }

      showNotification(
        "success",
        "เข้าสู่ระบบสำเร็จ กำลังเข้าสู่ระบบ Admin..."
      );

      // รอให้ notification แสดงเล็กน้อย
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 800);

    } catch (error) {
      console.error(error);

      showNotification(
        "error",
        "เกิดข้อผิดพลาดในการเข้าสู่ระบบ"
      );

      setLoading(false);
    }
  };

  return (
    <main className={styles.page}>

      {/* Notification */}
      {notification && (
        <div
          className={`${styles.notification} ${
            styles[notification.type]
          }`}
        >
          <div className={styles.notificationIcon}>
            {notification.type === "success" && "✓"}
            {notification.type === "error" && "!"}
            {notification.type === "warning" && "!"}
          </div>

          <div className={styles.notificationContent}>
            <strong>
              {notification.type === "success" && "สำเร็จ"}
              {notification.type === "error" && "เกิดข้อผิดพลาด"}
              {notification.type === "warning" && "แจ้งเตือน"}
            </strong>

            <span>{notification.message}</span>
          </div>

          <button
            type="button"
            className={styles.notificationClose}
            onClick={() => setNotification(null)}
          >
            ×
          </button>
        </div>
      )}

      <section className={styles.loginContainer}>

        {/* Left Side */}
        <div className={styles.brandSection}>

          <div className={styles.logo}>
            <span>+</span>
          </div>

          <h1>
            HealthCare
            <br />
            <span>Management System</span>
          </h1>

          <p>
            ระบบจัดการสุขภาพผู้สูงอายุ
            <br />
            สำหรับโรงพยาบาลส่งเสริมสุขภาพตำบล
          </p>

          <div className={styles.brandLine} />

          <small>
            Admin Management Portal
          </small>

        </div>

        {/* Right Side */}
        <div className={styles.formSection}>

          <div className={styles.formWrapper}>

            <div className={styles.formHeader}>
              <span className={styles.mobileLogo}>+</span>

              <h2>
                เข้าสู่ระบบ
              </h2>

              <p>
                กรุณาเข้าสู่ระบบสำหรับเจ้าหน้าที่
              </p>
            </div>

            <form
              className={styles.form}
              onSubmit={handleLogin}
            >

              {/* Email */}
              <div className={styles.inputGroup}>

                <label htmlFor="email">
                  Email
                </label>

                <div className={styles.inputWrapper}>

                  <span className={styles.inputIcon}>
                    ✉
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="example@healthcare.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    disabled={loading}
                    autoComplete="email"
                  />

                </div>

              </div>

              {/* Password */}
              <div className={styles.inputGroup}>

                <div className={styles.labelRow}>
                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className={styles.forgotPassword}
                    onClick={() =>
                      showNotification(
                        "warning",
                        "กรุณาติดต่อผู้ดูแลระบบเพื่อรีเซ็ตรหัสผ่าน"
                      )
                    }
                  >
                    ลืมรหัสผ่าน?
                  </button>
                </div>

                <div className={styles.inputWrapper}>

                  <span className={styles.inputIcon}>
                    ●
                  </span>

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="กรอกรหัสผ่าน"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    disabled={loading}
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "ซ่อนรหัสผ่าน"
                        : "แสดงรหัสผ่าน"
                    }
                  >
                    {showPassword ? "ซ่อน" : "แสดง"}
                  </button>

                </div>

              </div>

              {/* Remember */}
              <div className={styles.rememberRow}>

                <label className={styles.checkboxLabel}>
                  <input type="checkbox" />
                  <span>
                    จดจำการเข้าสู่ระบบ
                  </span>
                </label>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className={styles.loginButton}
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className={styles.spinner} />
                    กำลังเข้าสู่ระบบ...
                  </>
                ) : (
                  <>
                    เข้าสู่ระบบ
                    <span>→</span>
                  </>
                )}

              </button>

            </form>

            <div className={styles.securityText}>
              ระบบรักษาความปลอดภัยสำหรับเจ้าหน้าที่
            </div>

          </div>

        </div>

      </section>

      <footer className={styles.footer}>
        © 2026 HealthCare Management System
      </footer>

    </main>
  );
}