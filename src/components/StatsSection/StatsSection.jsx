// import React from 'react';
import styles from "./StatsSection.module.css";
import LinkInput from "../LinkInput";
import Card from "../Card";
import brandImage from "../../assets/images/icon-brand-recognition.svg";
import detailedImage from "../../assets/images/icon-detailed-records.svg";
import customImage from "../../assets/images/icon-fully-customizable.svg";

function StatsSection() {
	return (
		<>
			<div className={styles.wrapper}>
				<LinkInput />
				<div className={styles.container}>
					<h3 className={styles.heading}>Advanced Statistics</h3>
					<p className={styles.desc}>
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>
				<div className={styles.flexContainer}>
					<div>
						<Card title="Brand Recognition" image={brandImage}>
							Boost your brand recognition with each click. Generic links
							don&apos;t mean a thing. Branded links help instil confidence in
							your content.
						</Card>
					</div>
					<div className={styles.bar}></div>
					<div className={styles.card1}>
						<Card title="Detailed Records" image={detailedImage}>
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</Card>
					</div>
					<div className={styles.bar}></div>
					<div className={styles.card2}>
						<Card title="Fully Customizable" image={customImage}>
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}

export default StatsSection;
