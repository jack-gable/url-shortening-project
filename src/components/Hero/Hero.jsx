import styles from "./Hero.module.css";
import heroImage from "../../assets/images/illustration-working.svg";

function Hero() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				More than just
				<br /> shorter links
			</h1>
			<p className={styles.subtitle}>
				Build your brand&apos;s recognition and get detailed
				<br /> insights on how your links are performing.
			</p>
			<button className={styles.heroBtn}>Get Started</button>
			<img className={styles.heroImg} src={heroImage} alt="" />
		</div>
	);
}

export default Hero;
