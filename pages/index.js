import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";
import CheckSearchName from "../components/CheckSearchName"
import SearchName from "../components/SearchName"

export default function Home() {

	return (
		<div className={styles.container}>
			<Head>
				<title>Sapota Corp</title>
				<meta name="description" content="Search Name Checked Task Developer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.search}>
					<CheckSearchName/>
					<SearchName/>
				</div>
				<button className={styles.button}>Tạo task</button>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
