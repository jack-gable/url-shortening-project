// import React from 'react';
import styles from "./Card.module.css";

function Card({ children, image, title }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imageContainer}>
				<img src={image} alt="" />
			</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.desc}>{children}</p>
		</div>
	);
}

export default Card;
