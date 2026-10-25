"use client";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Chakana from "./Chakana";
import type { Dictionary } from "@/dictionaries/es";
import styles from "@/app/page.module.css";

// FormSubmit forwards submissions to this inbox (free, no account).
const ENDPOINT = "https://formsubmit.co/ajax/milagromedecu@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ t }: { t: Dictionary["home"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Chakana className={styles.formMotif} strokeWidth={0.4} />
      <input type="hidden" name="_subject" value={t.subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" />
      <div className={styles.formRow}>
        <label>
          <span>{t.name}</span>
          <input type="text" name="name" required placeholder={t.namePlaceholder} />
        </label>
        <label>
          <span>{t.phone}</span>
          <input type="tel" name="phone" placeholder="+593" />
        </label>
      </div>
      <label>
        <span>{t.email}</span>
        <input type="email" name="email" required placeholder={t.emailPlaceholder} />
      </label>
      <label>
        <span>{t.message}</span>
        <textarea name="message" rows={4} required placeholder={t.messagePlaceholder} />
      </label>
      <button type="submit" className="btn btn-teal" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.submit} <FiArrowRight />
      </button>
      {status === "sent" && (
        <p className={styles.formStatus} role="status">
          {t.sent}
        </p>
      )}
      {status === "error" && (
        <p className={`${styles.formStatus} ${styles.formError}`} role="alert">
          {t.error}
        </p>
      )}
    </form>
  );
}
