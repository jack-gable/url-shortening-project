import React from "react";
import styles from "./LinkInput.module.css";

function LinkInput() {
	// const [url, setUrl] = React.useState("");
	// const [shortUrl, setShortUrl] = React.useState([]);
	const [isInvalid, setIsInvalid] = React.useState(false);

	async function handleSubmit(event) {
		event.preventDefault();

		// const response = await fetch("https://cleanuri.com/api/v1/shorten", {
		// 	method: "POST",
		// 	mode: "no-cors",
		// 	body: JSON.stringify(url),
		// });
		// const data = await response.json();

		// if (data.ok) {
		// 	setShortUrl(data);
		// 	setUrl("");
		// }
	}

	// todo: setup server

	return (
		<div className={styles.wrapper}>
			<div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<input
						className={styles.input}
						style={{
							border: isInvalid ? "2px solid var(--red)" : "",
						}}
						type="url"
						placeholder="Shorten a link here..."
						required
						onInvalid={() => setIsInvalid(true)}
					/>
					<button type="submit" className={styles.submitBtn}>
						Shorten it!
					</button>
				</form>
				{isInvalid && (
					<span className={styles.errorMessage}>
						<em>Please add a link</em>
					</span>
				)}
			</div>
		</div>
	);
}

export default LinkInput;
