"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { data, status } = useSession();

    const router = useRouter();

    if(status === "unauthenticated") {
        router.push("/login");
    }

    // const status = "authenticated";
    return <>
        {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
        ): (
            <>
                <Link href="/write" className={styles.link}>Write</Link>
                <span className={styles.link} onClick={signOut}>
                    Logout
                </span>
            </>
        )}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                {status === "notauthenticated" ? (
                <Link href="/login">Login</Link>
            ): (
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>
                        Logout
                    </span>
                </>
            )}
            </div>
        )}
    </>
}

export default AuthLinks;