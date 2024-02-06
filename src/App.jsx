import s from './App.module.scss';
import { Content } from './sections/content/Content';
import { Header } from './sections/header/Header';
import { Input } from './sections/input/Input';

const App = () => {
	return (
		<div className={s.box}>
			<Header />
			<Input />
			<Content />
		</div>
	);
}

export default App;
