import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShowAllPosts = ({ threadId, threadTitle }) => {
  const URL = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;

  const [getPosts, setGetPosts] = useState([]);
  const [getText, setGetText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    setGetPosts(data.posts); // データを正しくセットする
  })
  .catch((error) => console.error('Error fetching posts:', error));
  }, [getPosts]);

  const backToThreads = () => {
    console.log("スレッド一覧に戻ります");
    navigate(-1);
  };

  const handleChange = (event) => {
    setGetText(event.target.value);
  };

  const addPost = () => {
    if (getText) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: `${getText}`,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error posting data");
          }
          return response.json();
        })
        .then(() => {
          console.log(`"${getText}"を投稿しました`);
          setGetText(""); // 投稿後に入力フィールドをクリア
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    } else {
      console.log("投稿内容が空です");
    }
  };

  return (
    <>
      <div className="postsHeader">
        <h1>投稿一覧</h1>
        <p>スレッドid: {threadId}</p>
        <p>スレッド名: {threadTitle}</p>
        <button onClick={backToThreads}>スレッド一覧に戻る</button>
        <div>
          <input type="text" value={getText} onChange={handleChange} />
          <button onClick={addPost}>投稿する</button>
        </div>
      </div>
      <div className="allPosts">
        <p>↓投稿↓</p>
        <ul>
          {getPosts.length > 0 ? (
            getPosts.map((post) => (
              <li key={post.id}>
                <p>id: {post.id}</p>
                <p>投稿内容: {post.post}</p>
              </li>
            ))
          ) : (
            <p>投稿がありません</p>
          )}
        </ul>
      </div>
    </>
  );
};
