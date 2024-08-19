import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShowAllThreads = ({ getResponse, setGetResponse, selectedThread, setSelectedThread }) => {

  const navigate = useNavigate();

  useEffect(() => {
	fetch('https://railway.bulletinboard.techtrain.dev/threads')
	  .then((response) => response.json())
	  .then((myJson) => setGetResponse(myJson))
	  .catch((error) => console.error('Error fetching data:', error));
  }, [setGetResponse]);

  const handleClick = () => {
    navigate("new");
  };

  const showPosts = (thread) => {
    console.log(`スレッドid:[${thread.id}]の投稿を確認します`);
    setSelectedThread({ ...selectedThread, id: thread.id, title: thread.title });
    navigate(`/threads/${thread.id}`);
  };

  return (
    <>
      <h1>スレッド一覧</h1>
      <button onClick={handleClick}>スレッド新規作成</button>
      <ul>
        {Object.keys(getResponse).map((item) => (
          <li key={item}>
            <p>id: {getResponse[item].id}</p>
            <p>title: {getResponse[item].title}</p>
            <button onClick={() => showPosts(getResponse[item])}>投稿を確認</button>
          </li>
        ))}
      </ul>
    </>
  );
};
