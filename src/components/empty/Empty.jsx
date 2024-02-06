import s from './Empty.module.scss';
import empty from './Clipboard.png';

export const Empty = () => {
	return (
		<div className={s.box}>
			<img src={empty} alt="TODO LIST it is empty!" />
			<p>You don't have tasks registered yet <br /><span>Create tasks and organize to-do items</span></p>
		</div>
	)
}