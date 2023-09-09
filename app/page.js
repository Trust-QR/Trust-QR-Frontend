import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolores quam commodi, qui eligendi ipsa unde iusto
            voluptas accusantium mollitia.
          </p>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              iste eveniet odit accusantium quae velit molestiae at! Dolor sit
              quibusdam sint, tempora laboriosam accusamus harum natus, error,
              at distinctio sapiente.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}