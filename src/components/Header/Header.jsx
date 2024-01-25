// import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import Navbar from "../Navbar";

function Header() {
	return (
		<div className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt="Shortly" />
			<Navbar />
		</div>
	);
}

export default Header;
