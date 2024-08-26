import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {

	const Navigate = useNavigate()

	const handleClick = () => {
		Navigate('/threads')
	}

	return (
		<>
			<h1>NotFoundPage</h1>
			<button onClick={handleClick}>スレッド一覧に戻る</button>
		</>
	)
}