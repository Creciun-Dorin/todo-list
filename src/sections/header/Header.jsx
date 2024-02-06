import s from './Header.module.scss';
import logo from './logo.svg';

export const Header = () => {
	return (
		<header className={s.box}>
			<img src={logo} alt="Logo Dorin | TODO LIST" />
		</header>
	)
}