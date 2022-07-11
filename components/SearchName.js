/* eslint-disable react/jsx-key */
import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CheckBox } from "./CheckBox";
import { useState, useEffect } from "react";
import axios from "axios";




const SearchName = ({ fc }) => {
    const [search, setNewSearch] = useState([]);
    function searchFunction(event) {
        if(event === ''){
            getData()
        }
        const data = search.filter((e)=>{
            if(e.Name.search(event) !== -1){
                return e
            }
        })
        setNewSearch(data)
    }
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('http://mbi.miracles.vn/api/UserAPI/GetPublicUserInfor').then(response => {
            setNewSearch(response.data)
        });
    }

    const dataUser = (user, e) => {
        fc(user, e.target.checked)
    }

    return (
        <div className={styles.listName2_task}>
            <label className={styles.labelDev3}>Dev đã chọn:</label>
            <input
                className={styles.search_input1}
                placeholder="Gõ ký tự bất kỳ để tìm kiếm dev"
                id="myInput2"
                type="text"
                onChange={(e)=> searchFunction(e.target.value)}
            />
            <div className={styles.checkTask}>
                <div className={styles.listName}>
                    <div className={styles.lists} >
                        {search.map((person, index) => {
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
    )
}
export default SearchName