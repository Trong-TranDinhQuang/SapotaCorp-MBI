import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "./CheckBox";
import { useState } from "react";



 const SearchName = () => {
    const [search, setNewSearch] = useState("");
    const handleSearchChanged = (e) => {
        setNewSearch(e.target.value);
    };

    var searchName = [];

    let searchName1 = [
        {
            id: 1,
            myName: "Trần Đình Quang Trọng",
        },
        {
            id: 1,
            myName: "Lê Đức Vũ Nguyên",
        },
        {
            id: 1,
            myName: "Định Văn Trưởng",
        },
        {
            id: 1,
            myName: "Phạm Thị Tố Nữ",
        },
        {
            id: 1,
            myName: "Lâm Thị Oanh",
        },
        {
            id: 1,
            myName: "Nguyễn Lê Chánh Văn",
        },
        {
            id: 1,
            myName: "Phan Lê Điện",
        },
        {
            id: 1,
            myName: "Phan Thị Lan",
        },
        {
            id: 1,
            myName: "Trần Đình Quang Trong",
        },
        {
            id: 1,
            myName: "Trần Đình Quang Trường",
        },
    ];
    const filtered = !search
        ? searchName1
        : searchName1.filter((person) =>
            person.myName.toLowerCase().includes(search.toLowerCase())
        );
    var searchName = [];
    function searchFunction(event) {
        var input, filter, txtValue;
        if (event !== '') {
            searchName = [];
        }
        searchName1.forEach(t => {
            var check = t.myName.toString().search(event.toString());
            if (check >= 0) {
                searchName.push(t.myName)
            }
        });
        // searchName1.filter((t) => {
        // 	console.log("filter = " + t.toString())
        // 	console.log("event = " + event.toString())
        // 	var check = t.myName.toString().search(event.toString());
        // 	if (check > 0) {
        // 		searchName.push(t);
        // 	}
        // 	console.log(searchName);
        // });
    }
    return (
        <div className={styles.listName2_task}>
            <label className={styles.labelDev3}>Dev đã chọn:</label>
            <input
                className={styles.search_input1}
                placeholder="Gõ ký tự bất kỳ để tìm kiếm dev"
                id="myInput2"
                type="text"
                value={search}
                onChange={handleSearchChanged}
            />
            <div className={styles.checkTask}>
                <div className={styles.listName + " col-3"}>
                    <div className={styles.name}>
                        {filtered.map((person) => {
                            return (
                                <CheckBox key={person.id} name={person.myName}  />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchName