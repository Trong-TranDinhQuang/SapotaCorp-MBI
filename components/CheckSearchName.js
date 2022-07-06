import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "./CheckBox";
import { useState } from "react";
const CheckSearchName = () => {
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
        if(event.target.value === ''){
            return setSearchResult([])
        }
        let valueData = []
		const data  = searchTask.filter(e =>{
            return e.nameTask.includes(event.target.value)
        })
        for(let value in data){
            valueData = valueData.concat(data[value].memberPru)
        }
        setSearchResult(valueData)
	};

    
   
    return (
        <div>
        <label className={styles.labelDev1}>Nhập tên task:</label>
        <div className={styles.search_text}>
            <input
                className={styles.search_input}
                onChange={(e)=>handleSearchChange(e)}
                placeholder="Task tuần từ {start_week_date} - {end_week_date} dự án {project_name} cho {ten-d}"
            />
        </div>
        <div className={styles.listName_task}>
            <label className={styles.labelDev2}>Dev đã chọn:</label>
            <div className={styles.checkTask}>
                <div className={styles.search_text}>
                    <label className={styles.listName + " col-4"}>
                        <div>
                            {searchResult.map((person,index) => {
                                return (
                                <CheckBox key={index} name={person.nameTV} check="true"/>
                                );
                            })}
                        </div>
                    </label>
                </div>
            </div>
        </div>
        </div>
    )
}
export default CheckSearchName