import { Li } from '../li/Li';
import s from './TasksList.module.scss';
import { useSelector } from 'react-redux';

export const TasksList = () => {
	const tasks = useSelector((state) => state.task.tasks);

	return (
		<ol className={s.box}>
			{
				tasks.map((element, index) => (
					<Li key={index} id={index} content={element.content} status={element.status} />
				))
			}
		</ol>
	);
}
