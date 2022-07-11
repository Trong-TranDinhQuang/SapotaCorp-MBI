import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "../components/CheckBox";
import { useEffect, useState } from "react";
import CheckSearchName from "../components/CheckSearchName"
import SearchName from "../components/SearchName"
import axios from "axios";

export default function Home() {
	const [searchResult, setSearchResult] = useState([]);

	const searchTask = [
		{
			id: 1,
			nameTask: "LastMonth",
			memberPru: [
				{
					id: 1,
					nameTV: "Trần Trọng Tín",
				},
				{
					id: 1,
					nameTV: "Trần Văn Thiện",
				},
				{
					id: 1,
					nameTV: "Phan Gia Vũ",
				},
				{
					id: 1,
					nameTV: "Lê Văn Phóng",
				},
				{
					id: 1,
					nameTV: "Nguyễn Văn Quỳnh",
				},
				{
					id: 1,
					nameTV: "Huỳnh Bá Thắng",
				},
			],
		},
		{
			id: 1,
			nameTask: "Tank",
			memberPru: [
				{
					id: 1,
					nameTV: "Trần Thanh Tâm",
				},
				{
					id: 1,
					nameTV: "Đỗ Phi Long Duy",
				},
				{
					id: 1,
					nameTV: "Nguyễn Thế Văn",
				},
				{
					id: 1,
					nameTV: "Trần Đình Trọng",
				},
				{
					id: 1,
					nameTV: "Phạm Ngũ Lão",
				},
				{
					id: 1,
					nameTV: "Vũ Văn Hiếu  ",
				},
			],
		},
		{
			id: 1,
			nameTask: "Prudential",
			memberPru: [
				{
					id: 1,
					nameTV: "Trần Thanh Danh",
				},
				{
					id: 1,
					nameTV: "Đỗ Phi Long",
				},
				{
					id: 1,
					nameTV: "Nguyễn Thành Sang",
				},
				{
					id: 1,
					nameTV: "Lê Quang Đạo",
				},
				{
					id: 1,
					nameTV: "Nguyễn Đình Tứ",
				},
				{
					id: 1,
					nameTV: "Trần Đình Quang Trong",
				},
			],
		},

	];
	const handleSearchChange = (event) => {
		if (event.target.value === '') {
			return setSearchResult([])
		}
		let valueData = []
		const data = searchResult.filter(e => {
			return e.Name.includes(event.target.value)
		})
		for (let value in data) {
			valueData = valueData.concat(data[value].Name)
		}
		setSearchResult(valueData)
	};
	const filterData = (data, e) => {
		if (e) {
			return setSearchResult([...searchResult, data])
		}
		else {
			const newData = setSearchResult.filter(e => e.Name !== e.Name)
			setSearchResult(newData)
		}
	}
	useEffect(() =>{
		getData()
	},[])
	const getData = () =>{
		axios.get('http://mbi.miracles.vn/api/UserAPI/GetListUserWorkProject/?projectID=12278').then(response => {
			setSearchResult(response.data)
		});
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
								onChange={(e) => handleSearchChange(e)}
								placeholder="Search.."
							/>
						</div>
						<div className={styles.listName_task}>
							<label className={styles.labelDev2}>Dev đã chọn:</label>
							<div className={styles.checkTask}>
								<div className={styles.search_text}>
									<div className={styles.listName}>
											{searchResult.map((person, index) => {
												return (
													<CheckBox key={index} name={person.Name} check="true" />
												);
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<SearchName fc={filterData} />
				</div>
				<button className={styles.button}>Tạo task</button>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
