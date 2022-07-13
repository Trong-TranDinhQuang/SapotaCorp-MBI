import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "../components/CheckBox";
import { useState, useEffect } from "react";
import SearchName from "../components/SearchName"
import axios from "axios";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default function Home() {
	const [checked, setChecked] = useState([]);
	const [urlCheck, setUrlCheck] = useState([])
	const [search, setSearch] = useState([])

	const handleCheck = (person) => {
		const data = checked.filter(e => e.ID !== person.ID)
		setChecked(data);
	};
	const filterData = (data, e) => {
		if (e) {
			return setChecked([...checked, data])
		}
		else {
			const newData = checked.filter(e => e.Name !== data.Name)
			setChecked(newData)
		}
	}

	useEffect(() => {
		getData()
	}, [])
	const getData = () => {
		axios.get('http://mbi.miracles.vn/api/UserAPI/GetListUserWorkProject/?projectID=10807').then(response => {
			setChecked(response.data)
		});
	}

	const fetchRandomData = async (e) => {
		const IDArr = checked.map((e) => e.ID)
		const IDProject = search.map((e) => e.ID)
		const ID = search.filter(each => each.ID === e.value)
		console.log(checked);
		axios.post('http://mbi.miracles.vn/api/TaskAPI/CreateTask',
			{
				TaskName: 'Task tuần từ {start_week_date} - {end_week_date} dự án {project_name} cho {ten-dev}',
				IDDev: IDArr,
				projectID:search[0].ID

			}).then(
				(response) => {
					setItems(response.data)
				}
			);
	}

	useEffect(() => {
		urlArr()
	}, [])
	const urlArr = () => {
		axios.get('http://mbi.miracles.vn/api/ProjectAPI/GetIDAndName').then(response => {
			const data = response.data.map(e => e.Name)
			setUrlCheck(data)
			setSearch(response.data)
		});
	}

		;

	const handleChange = async (e) => {
		const ID = search.filter(each => each.Name === e.value)
		await axios.get(`http://mbi.miracles.vn/api/UserAPI/GetListUserWorkProject/?projectID=${ID[0].ID}`).then(response => {
			const apiTV = response.data.map(e => e.Name)
			console.log(response.data)
			setChecked(response.data)
		});


	};



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
						<div>
							<Dropdown
								className={styles.Dropdown_root}
								placeholder='Chọn dự án'
								options={urlCheck}
								onChange={(e) => handleChange(e)}
							></Dropdown>
						</div>
						<label className={styles.labelDev1}>Nhập tên task:</label>
						<div className={styles.search_text}>
							<input
								className={styles.search_input}
								value="Task tuần từ {start_week_date} - {end_week_date} dự án {project_name} cho {ten-dev}"
							/>
						</div>

						<div className={styles.listName_task}>
							<label className={styles.labelDev2}>Dev đã chọn:</label>
							<div className={styles.checkTask}>
								<div className={styles.search_text}>
									<label className={styles.listName}>
										<div className={styles.lists}>
											{checked.map((person, index) => {
												return (
													<div key={index}>
														<input type="checkbox"
															checked={true}
															onChange={() => handleCheck(person)} />
														<label className={styles.nameCheck} >{person.Name}</label>
													</div>
												);
											})}
										</div>
									</label>
								</div>
							</div>
						</div>
					</div>
					<SearchName fc={filterData} />
				</div>
				<button onClick={fetchRandomData} className={styles.button} form='post'>Tạo task</button>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}