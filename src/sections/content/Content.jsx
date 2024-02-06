import { Empty } from '../../components/empty/Empty';
import { TasksList } from '../../components/taskslist/TasksList';
import s from './Content.module.scss';
import { useSelector } from 'react-redux';

export const Content = () => {
	const tasksList = useSelector(state => state.task.tasks);

	return (
		<main className={s.box}>
			<header className={s.header}>
				<div className={s.grup}>
					<h4>Tasks created</h4>
					<div>{tasksList.length}</div>
				</div>
				<div className={s.grup}>
					<h4>Completed</h4>
					{tasksList.filter(element => element.status).length === 0 ? (<div>0</div>) :
						(
							<div>{tasksList.filter(element => element.status).length}  from  {tasksList.length}
							</div>
						)
					}
				</div>
			</header>
			{/* Empty sau TasksList */}
			{
				tasksList.length === 0 ? <Empty /> : <TasksList />
			}
		</main>
	)
}