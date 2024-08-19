import { useNavigate } from "react-router-dom"
import { useState } from "react"
export const CreateNewThreads = () => {

	const [text, setText] = useState("")
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
		}else {
			console.log("スレッドを作成できませんでした")
		}

	}

	const handleChanged = (element) => {
		setText(element.target.value)
	}

	const BackToAllThreadsPage = () => {
		console.log("スレッド一覧に戻ります")
		Navigate(-1)

	}

	return(
		<>
			<h1>新規スレッド作成画面</h1>
			<div>
				<div style={{display:"flex", justifyContent:"center"}}>				
					<button onClick={CreateNewThread} style={{marginRight:10}}>作成</button>
					<button onClick={BackToAllThreadsPage} style={{marginLeft:10}}>戻る</button>
				</div>
				<p style={{display:"inline-block"}}>スレッド名:</p>
				<input type="form" value={text} onChange={handleChanged} ></input>
			</div>
		</>

		
	)
}