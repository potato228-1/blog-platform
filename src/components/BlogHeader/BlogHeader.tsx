"use client";

import styles from "./BlogHeader.module.css";

import Link from "next/link";
import HeaderModal from "./HeaderModal/HeaderModal";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function blogHeader() {
	let headerLinks = [
		{ name: "Blog", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "About", href: "/about" },
		{ name: "Newsletter", href: "/newsletter" },
	];

	let [modal, setModal] = useState(false);

	return (
		<header className={styles.header}>
			<p className={styles.title}>Your Name</p>
			<div className={styles.headerInner}>
				<nav>
					{
                        headerLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.name}
                                className={styles.nav_link}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
				</nav>
                <ThemeSwitcher />
			</div>
			<button className={styles.modalBtn} onClick={() => setModal(true)}>
				<div className={styles.btnMenu_container}>
					<span className={styles.menuLine}></span>
					<span className={styles.menuLine}></span>
					<span className={styles.menuLine}></span>
				</div>
			</button>
			<HeaderModal
				navItems={headerLinks}
				setVisibility={setModal}
				visibility={modal}
			/>
		</header>
	);
}
