// import React from 'react';
import styles from "./Footer.module.css";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

function Footer() {
	return (
		<footer className={styles.wrapper}>
			<h2 className={styles.logo}>Shortly</h2>
			<div className={styles.container}>
				<div className={styles.linkContainer}>
					<p className={styles.linksTitle}>Features</p>
					<a className={styles.link} href="#">
						Link shortening
					</a>
					<a className={styles.link} href="#">
						Branded links
					</a>
					<a className={styles.link} href="#">
						Link Shortening
					</a>
				</div>
				<div className={styles.linkContainer}>
					<p className={styles.linksTitle}>Resources</p>
					<a className={styles.link} href="#">
						Blog
					</a>
					<a className={styles.link} href="#">
						Developers
					</a>
					<a className={styles.link} href="#">
						Support
					</a>
				</div>
				<div className={styles.linkContainer}>
					<p className={styles.linksTitle}>Company</p>
					<a className={styles.link} href="#">
						About
					</a>
					<a className={styles.link} href="#">
						Our team
					</a>
					<a className={styles.link} href="#">
						Careers
					</a>
					<a className={styles.link} href="#">
						Contact
					</a>
				</div>
			</div>
			<div className={styles.socials}>
				<a className={styles.socialLink} href="#">
					<img src={facebook} alt="" />
				</a>
				<a className={styles.socialLink} href="#">
					<img src={twitter} alt="" />
				</a>
				<a className={styles.socialLink} href="#">
					<img src={pinterest} alt="" />
				</a>
				<a className={styles.socialLink} href="#">
					<img src={instagram} alt="" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
