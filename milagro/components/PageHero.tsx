import Chakana from "./Chakana";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  accent: string;
  sub: string;
};

export default function PageHero({ eyebrow, title, accent, sub }: Props) {
  return (
    <section className={`${styles.hero} on-dark`}>
      <div className={styles.blobA} />
      <div className={styles.blobB} />
      <Chakana className={styles.motifLg} strokeWidth={0.3} />
      <Chakana className={styles.motifSm} strokeWidth={0.5} detailed={false} />
      <div className={styles.grid} />

      <div className={`container ${styles.inner}`}>
        <p className="eyebrow rise" style={{ "--d": "0.05s" } as React.CSSProperties}>
          {eyebrow}
        </p>
        <h1 className={`title-xl rise ${styles.title}`} style={{ "--d": "0.15s" } as React.CSSProperties}>
          {title} <span className="grad-text">{accent}</span>
        </h1>
        <p className="lead rise" style={{ "--d": "0.3s" } as React.CSSProperties}>
          {sub}
        </p>
      </div>
    </section>
  );
}
