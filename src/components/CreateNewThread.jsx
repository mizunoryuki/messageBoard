import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './CreateNewThread.scss'

export const CreateNewThreads = () => {

	const [text, setText] = useState("")
	const [isThreadCreated, setIsThreadCreated] = useState(false)
	const Navigate = useNavigate()

	const CreateNewThread = () => {
		console.log(text)
		if(text){
			fetch('https://railway.bulletinboard.techtrain.dev/threads', {
				method: 'POST', 
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  title: `${text}`
				})
			  })
			  .then(response => response.json())
			  .then(data => console.log(data));
			console.log("スレッドを作成できました")
			setIsThreadCreated(true)
			setText("")

		}else {
			console.log("スレッドを作成できませんでした")
			setIsThreadCreated(false)
		}

	}

	const handleChanged = (element) => {
		setText(element.target.value)
	}

	const BackToAllThreadsPage = () => {
		console.log("スレッド一覧に戻ります")
		Navigate("/threads")

	}

	return(
		<>
			<h1>新規スレッド作成</h1>
			<div className="makeNewThread">
				<div className="makeNewThread-thread">
				<p className="makeNewThread-thread-name">スレッド名:</p>
				<input type="form" value={text} onChange={handleChanged} className="makeNewThread-thread-form"></input>
				</div>
				<div className="makeNewThread-buttons">				
					<button onClick={CreateNewThread}  className="makeNewThread-buttons-create">作成</button>
					<button onClick={BackToAllThreadsPage}  className="makeNewThread-buttons-back">戻る</button>
				</div>
				{isThreadCreated && (
          <p>スレッドを作成できました</p>
        )}
			</div>
		</>

		
	)
}