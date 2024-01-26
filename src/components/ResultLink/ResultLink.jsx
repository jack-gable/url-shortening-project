// import React from "react";
import styles from "./ResultLink.module.css";

function ResultLink({ longUrl, shortUrl }) {
	return (
		<div className={styles.wrapper}>
			<p className={styles.inputLink}>{longUrl}</p>
			<div className={styles.container}>
				<p className={styles.resultLink}>{shortUrl}</p>
				<button className={styles.copyBtn}>Copy</button>
			</div>
		</div>
	);
}

export default ResultLink;
