import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

function Header (props){
    return <header className={styles.header}>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/agate.min.css"/>
        </Head>
        <div id="logo">
        {/* <Link href="/"><Image src={"/images/better-caucus-banner.png"} alt="GrokOverflow Logo" height={50} width={150}/></Link> */}
        </div>
        <nav className={styles.nav}>
            <Link href="/blog"><div className={styles.link}>REFERENCE</div></Link>
            <a href="https://join.slack.com/t/bebettercaucus/shared_invite/zt-1a0bu2pep-EXCjM8A3Sy~d7nzp_mzl3Q"><div className={styles.link}>SLACK COMMUNITY</div></a>
        </nav>
    </header>
}

export default Header