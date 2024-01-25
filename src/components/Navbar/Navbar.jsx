// import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.wrapper}>
			<ol className={styles.navList}>
				<li>
					<a href="#" className={styles.navBtn}>
						Features
					</a>
				</li>
				<li>
					<a href="#" className={styles.navBtn}>
						Pricing
					</a>
				</li>
				<li>
					<a href="#" className={styles.navBtn}>
						Resources
					</a>
				</li>
			</ol>
			<div className={styles.btnContainer}>
				<button className={styles.loginBtn}>Login</button>
				<button className={styles.signupBtn}>Sign Up</button>
			</div>
		</nav>
	);
}

export default Navbar;
