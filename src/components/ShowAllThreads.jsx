import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ShowAllThreads = ({getResponse, setGetResponse}) => {

	const Navigate = useNavigate()

	useEffect(() => {
		fetch('https://railway.bulletinboard.techtrain.dev/threads')
		.then(Response => Response.json()
	  .then(myJson => setGetResponse(myJson)))
	  .catch((error) => console.error('Error fetching data:', error));
	},[]);

	const HandleClick = () => {
		Navigate("new")
	}

	return (
	<>
	    <h1>スレッド一覧</h1>
		<button onClick={HandleClick}>スレッド新規作成</button>
    	<ul>
    		{Object.keys(getResponse).map((item) => (
    		<li key={item}>
      			<p>   id: {getResponse[item].id}</p>
      			<p>title: {getResponse[item].title}</p>
    		</li>
    		))}
    	</ul>
	</>

	)
}