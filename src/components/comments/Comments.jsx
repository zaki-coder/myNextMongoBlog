import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comment</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea className={styles.input} placeholder="Write a comment..." />
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image className={styles.image} src="/p1.jpeg" alt="" width={50} height={50} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.username}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repudiandae, adipisci deserunt omnis animi quidem magnam? Nobis quas, beatae fuga architecto dolores eligendi eveniet dolore! Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image className={styles.image} src="/p1.jpeg" alt="" width={50} height={50} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.username}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repudiandae, adipisci deserunt omnis animi quidem magnam? Nobis quas, beatae fuga architecto dolores eligendi eveniet dolore! Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image className={styles.image} src="/p1.jpeg" alt="" width={50} height={50} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.username}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repudiandae, adipisci deserunt omnis animi quidem magnam? Nobis quas, beatae fuga architecto dolores eligendi eveniet dolore! Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image className={styles.image} src="/p1.jpeg" alt="" width={50} height={50} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.username}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repudiandae, adipisci deserunt omnis animi quidem magnam? Nobis quas, beatae fuga architecto dolores eligendi eveniet dolore! Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments