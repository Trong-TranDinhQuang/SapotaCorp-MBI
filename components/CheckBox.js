
import React, { useState } from "react"
import style from '../styles/Home.module.css';
export const CheckBox = (_props) => {
	const [checkData, setCheckData] = useState(_props.check)
	console.log(_props)
	return (
		<div className={style.nameCheck1 +" col-4"}>
			<input type="checkbox" checked={checkData} onChange={() => setCheckData(!checkData)} />
			<label className={style.nameCheck}>{_props.name}</label>
		</div>
	)
}