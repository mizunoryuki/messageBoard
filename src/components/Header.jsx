import { useNavigate } from 'react-router-dom';
import './Header.scss'

export const Header = () => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("threads/new");
	  };

	return (
		<div className='header'>
			<h1>掲示板</h1>
			<button onClick={handleClick}>スレッド新規作成</button>
		</div>
	)

}