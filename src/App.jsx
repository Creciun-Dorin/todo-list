import './App.css';
import img from './img/heading.png';
import { useState } from 'react';

function App() {
	const [text, setText] = useState('');
	const [local, setLocal] = useState(JSON.parse(localStorage.getItem('textInfo')) || []);

	const changeText = (e) => {
		setText(e.target.value);
	}

	const addText = () => {
		if (text.length > 5) {
			const newLocal = [...local, text];
			localStorage.setItem('textInfo', JSON.stringify(newLocal));
			setLocal(newLocal);
			setText('');
		}
	}

	const deleteButton = (id) => {
		const item = [...local];
		item.splice(id, 1);
		localStorage.setItem('textInfo', JSON.stringify(item));
		setLocal(item);
	}

	return (
		<div className='todo-box'>
			<header className="header-todo">
				<img src={img} alt="header web" />
			</header>
			<form>
				<input type="text" placeholder='Text....' value={text} onChange={changeText} />
				<input type="button" value="Click" onClick={addText} />
			</form>
			<ul>
				{local.map((element, index) => (
					<li key={index}>
						{element}
						<button id={index} onClick={() => deleteButton(index)}>
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M24.7969 6.98438H5.20312" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12.3282 12.3281V19.4531" stroke="#222222" strokewidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M17.6719 12.3281V19.4531" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M23.0156 6.98438V23.9062C23.0156 24.1425 22.9218 24.369 22.7547 24.536C22.5877 24.703 22.3612 24.7969 22.125 24.7969H7.87497C7.63876 24.7969 7.41223 24.703 7.2452 24.536C7.07818 24.369 6.98434 24.1425 6.98434 23.9062V6.98438" stroke="#222222" strokeWidth="2" strokeWinecap="round" strokeLinejoin="round" />
								<path d="M19.4531 6.98438V5.20313C19.4531 4.73071 19.2655 4.27764 18.9314 3.94359C18.5974 3.60954 18.1443 3.42188 17.6719 3.42188H12.3281C11.8557 3.42188 11.4026 3.60954 11.0686 3.94359C10.7345 4.27764 10.5469 4.73071 10.5469 5.20313V6.98438" stroke="#222222" strokeWidth="2" strokeWinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
