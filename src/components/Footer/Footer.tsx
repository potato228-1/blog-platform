import styles from './Footer.module.css'

export default function Footer() {
    let links = [
        {
            name: 'Twitter',
            url: '#',
        },
        {
            name: 'LinkedIn',
            url: '#',
        },
        {
            name: 'Email',
            url: '#',
        },
        {
            name: 'RSS feed',
            url: '#',
        },
        {
            name: 'Add to Feedly',
            url: '#',
        },
    ]
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_inner}>
            <p className={styles.footer_item}>© 2023</p>
            <div className={styles.links_container}>
                {
                    links.map(link =>
                        <a href={link.url} key={link.name} className={styles.footer_item}>{link.name}</a>
                    )
                }
            </div>
        </div>
    </footer>
  )
}
