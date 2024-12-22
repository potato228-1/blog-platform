import { useEffect } from "react";
import styles from "./HeaderModal.module.css";

import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

interface NavItem {
	name: string;
	href: string;
}

export default function HeaderModal({
	navItems,
    setVisibility,
    visibility,
}: {
	navItems: NavItem[];
    setVisibility: (arg: boolean) => void
    visibility: boolean,
}) {
    function closeModal(){
        setVisibility(false)
    }

    let body:any

    useEffect(() => {
        body = document.querySelector('body')
    })

    {
        visibility ? body?.classList.add('disable-scroll') : body?.classList.remove('disable-scroll')
    }

	return (
		<div className={visibility ? [styles.modalMenu, styles.active].join(' ') : styles.modalMenu}>
            <div className={styles.modal_inner}>
                <header className={styles.header}>
                    <p className={styles.title}>Your Name</p>
                    <div className={styles.header_inner}>
                        <nav className={styles.nav}>
                            {navItems.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.name}
                                    className={styles.nav_link}
                                    onClick={() => closeModal()}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                        <ThemeSwitcher/>
                </header>
                <button className={styles.modalMenu_btn} onClick={() => closeModal()}>
                    <div className={styles.lines_container}>
                        <span className={[styles.btn_line, styles.line1].join(' ')}></span>
                        <span className={[styles.btn_line, styles.line2].join(' ')}></span>
                    </div>
                </button>
            </div>
		</div>
	);
}
