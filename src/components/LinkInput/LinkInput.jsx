import React from "react";
import styles from "./LinkInput.module.css";
// import ResultLink from "../ResultLink";

function LinkInput() {
	const [url, setUrl] = React.useState("");
	const [data, setData] = React.useState([]);
	const [isInvalid, setIsInvalid] = React.useState(false);

	const API_KEY = "4aeea1749686af891582749ee4e76f0d7c788b77";

	async function handleSubmit(event) {
		event.preventDefault();

		const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				long_url: url,
				domain: "bit.ly",
				group_guid: "o_6lkr8sjht",
			}),
		});
		const json = await response.json();

		setData(json);
		console.log(data);
	}

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
						value={url}
						onChange={(e) => {
							setUrl(e.target.value);
						}}
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
			{/* <div>
				{data &&
					data.map(({ link, long_url }, index) => (
						<ResultLink key={index} longUrl={long_url} shortUrl={link} />
					))}
			</div> */}
		</div>
	);
}

export default LinkInput;
