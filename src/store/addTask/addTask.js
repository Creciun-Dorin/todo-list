import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: JSON.parse(localStorage.getItem('ListsTasks')) || [],
};

const taskReducer = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action) => {
			const newTask = { content: action.payload, status: false };
			state.tasks = [...state.tasks, newTask];
			localStorage.setItem('ListsTasks', JSON.stringify(state.tasks));
		},
		removeTask: (state, action) => {
			const removeIndex = action.payload;
			const newList = state.tasks.filter((element, index) => index !== removeIndex);
			// Actualizează starea Redux
			state.tasks = [...newList];
			// Actualizează Local Storage
			localStorage.setItem('ListsTasks', JSON.stringify(newList));
		},
		changeStatus: (state, action) => {
			const { index, newStatus } = action.payload;
			// Verifică dacă task-ul la index există înainte de a schimba statusul

			if (state.tasks[index]) {
			  // Creează o nouă referință pentru obiectul task
			  state.tasks[index] = { ...state.tasks[index], status: newStatus };
			  localStorage.setItem('ListsTasks', JSON.stringify(state.tasks));
			}
		  },
	},
});

export const { addTask, removeTask, changeStatus } = taskReducer.actions;

export default taskReducer.reducer;
