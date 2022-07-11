import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "../components/CheckBox";
import { useEffect, useState } from "react";
import SearchName from "../components/SearchName"
import axios from "axios";

export default function Home({ lc }) {

	const [searchResult, setSearchResult] = useState([]);
	function researchFunction(event) {
		if (event === '') {
			getData()
		}
		const data = searchResult.filter((e) => {
			if (e.Name.search(event) !== -1) {
				return e
			}
		})
		setSearchResult(data)
	}
	useEffect(() => {
		getData()
	}, [])
	const getData = () => {
		axios.get('http://mbi.miracles.vn/api/UserAPI/GetListUserWorkProject/?projectID=10807').then(response => {
			setSearchResult(response.data)
		});
	}

	const dataUser = (user, e) => {
		fc(user, e.target.checked)
	}

	// const handleSearchChange = (event) => {
	// 	if (event.target.value === '') {
	// 		return setSearchResult([])
	// 	}
	// 	let valueData = []
	// 	const data = searchResult.filter(e => {
	// 		return e.Name.includes(event.target.value)
	// 	})
	// 	for (let value in data) {
	// 		valueData = valueData.concat(data[value].Name)
	// 	}
	// 	setSearchResult(valueData)
	// };
	const filterData = (data, e) => {
		if (e) {
			return setSearchResult([...searchResult, data])
		}
		else {
			const newData = setSearchResult.filter(e => e.Name !== e.Name)
			setSearchResult(newData)
		}
	}
	useEffect(() => {
		getData()
	}, [])

	const fetchRandomData = () => {
		axios.post('http://mbi.miracles.vn/api/TaskAPI/CreateTask').then(
			(response) => {
				setItems(response.data)
			}
		);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Sapota Corp</title>
				<meta name="description" content="Search Name Checked Task Developer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.search}>
					<div>
						<label className={styles.labelDev1}>Nhập tên task:</label>
						<div className={styles.search_text}>
							<input
								className={styles.search_input}
								onChange={(e) => researchFunction(e.target.value)}
								placeholder="Search.."
								id="myInput"
								type="text"
							/>
						</div>
						<div className={styles.listName_task}>
							<label className={styles.labelDev2}>Dev đã chọn:</label>
							<div className={styles.checkTask}>
								<div className={styles.search_text}>
									<div className={styles.listName}>
										<div className={styles.lists}>
											{searchResult.map((person, index) => {
												return (
													<div key={index}>
														<input type="checkbox" onChange={(e) => dataUser(person, e)} />
														<label className={styles.nameCheck} >{person.Name}</label>
													</div>
												);
											})}
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<SearchName fc={filterData} />
				</div>
				<div>
					<button onClick={fetchRandomData} className={styles.button} >Tạo task</button>
				</div>

			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
