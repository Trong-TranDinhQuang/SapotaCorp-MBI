
import React, { useState } from "react"
import style from '../styles/Home.module.css';
export const CheckBox = (_props) => {
	const [checkData, setCheckData] = useState(_props.check)
	return (
		<div className={style.nameCheck}>
			<input type="checkbox" />
			<label className={style.nameCheck}>{_props.name}</label>
		</div>
	)
}