"use client";

import { useRef, useState } from "react";
import { FiClock, FiMapPin, FiVideo, FiExternalLink } from "react-icons/fi";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/es";
import styles from "@/app/agendar/agendar.module.css";

// Google Calendar appointment schedules, in the same order as dict.booking.types.
const schedules = [
  "AcZssZ2Iu3jC5t5jeFVe0kEhs-tyeVQfgyx36hAbbKiwFfGdhj8y1Nvbb6L0Mu73ALWaotlHeF9_eDLa", // New patient
  "AcZssZ2Ms_wIFAFO4cEukunQlSEAVRenctjH5esyj8NQlHCLfz0yZVsoDjIq5BdH_q_sh0g241A5Wr4i", // Telemedicine
  "AcZssZ2osVLuzNDVpfuLKKzn0FGe7mCcXeT3nToyxek3rOMx_mqs3OjzfsvGO2rtEOyrBS9DUV94aJTL", // Follow-up
  "AcZssZ2RVjsa7ccgbyNOkRFF-jvxlg1r9y5pE7x8YC8Z_kxV3puQTtSTYtTQohnyYWbBftbPx6Xq63Sh", // Exam review
];

const scheduleUrl = (id: string, locale: Locale, embed: boolean) =>
  `https://calendar.google.com/calendar/appointments/schedules/${id}?hl=${locale}${embed ? "&gv=true" : ""}`;

export default function BookingPicker({
  t,
  locale,
}: {
  t: Dictionary["booking"];
  locale: Locale;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const choose = (i: number) => {
    setSelected(i);
    // Wait for the calendar step to render before scrolling to it.
    requestAnimationFrame(() =>
      calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  return (
    <>
      <h2 className={styles.step}>
        <span>1</span> {t.step1}
      </h2>
      <div className={styles.types} role="radiogroup" aria-label={t.step1}>
        {t.types.map((type, i) => (
          <button
            key={type.name}
            type="button"
            role="radio"
            aria-checked={selected === i}
            className={`${styles.type} ${selected === i ? styles.typeActive : ""}`}
            onClick={() => choose(i)}
          >
            <span className={styles.typeName}>{type.name}</span>
            <span className={styles.typeMeta}>
              <span>
                <FiClock /> {type.duration}
              </span>
              <span>
                {type.online ? <FiVideo /> : <FiMapPin />}{" "}
                {type.online ? t.online : t.inPerson}
              </span>
            </span>
            <span className={styles.typeDesc}>{type.desc}</span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div ref={calendarRef} className={styles.calendarStep}>
          <h2 className={styles.step}>
            <span>2</span> {t.step2} · {t.types[selected].name}
          </h2>
          <div className={styles.calendar}>
            <iframe
              key={`${selected}-${locale}`}
              src={scheduleUrl(schedules[selected], locale, true)}
              title={`${t.calendarTitle} · ${t.types[selected].name}`}
            />
          </div>
          <a
            className={styles.external}
            href={scheduleUrl(schedules[selected], locale, false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.openExternal} <FiExternalLink />
          </a>
        </div>
      )}
    </>
  );
}
