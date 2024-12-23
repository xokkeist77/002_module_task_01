import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');

	const [list, setList] = useState([]);

	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		console.log(promptValue);
		if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно быть не менее 3 символов');
		}
	};

	let isValueValid = true;
	if (value.length < 3) {
		isValueValid = false;
	}

	const getDate = () => {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const date = today.getDate();
		const hours = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();
		return `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`;
	};

	const onAddButtonClick = () => {
		if (value.length >= 3) {
			const date = getDate();

			const updateList = [
				...list,
				{
					id: Date.now(),
					value: value,
					date: date,
				},
			];
			setList(updateList);
			setValue('');
			setError('');

			console.log(list);
		}
	};

	const pText = <p className={styles.noMarginText}>Нет добавленных элементов</p>;

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{error !== '' ? <div className={styles.error}>{error}</div> : <div></div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 && pText}
				<ul className={styles.list}>
					{list.map(({ id, value, date }) => (
						<li className={styles.listItem} key={id}>
							{value} {date}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
