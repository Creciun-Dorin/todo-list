import { useState } from 'react';
import s from './Input.module.scss';
import add from './plus.svg';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/addTask/addTask';

export const Input = () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const addNewTask = () => {
		if (input.length === 0) return;
		dispatch(addTask(input)); // Utilizează acțiunea corectă
		setInput('');
	};

	const clickEnter = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (input.length === 0) return;
			dispatch(addTask(input)); // Utilizează acțiunea corectă
			setInput('');
		}
	}

	return (
		<form className={s.form}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type="text"
				name="add__new__task"
				id="#task"
				onKeyDown={clickEnter}
				placeholder='Add a new task'
			/>
			<button onClick={addNewTask} type='button' className={s.button}>To create <img src={add} alt="TODO LIST - Add new task" /></button>
		</form>
	);
}
