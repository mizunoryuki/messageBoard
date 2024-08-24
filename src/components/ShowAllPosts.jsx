import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ShowAllPosts.scss'

export const ShowAllPosts = ({ threadId, threadTitle }) => {
  const URL = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
  const [getPosts, setGetPosts] = useState([]);
  const [getText, setGetText] = useState("");
  const navigate = useNavigate();

  // 投稿一覧を取得
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGetPosts(data.posts); // 正しくデータをセットする
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, [getPosts]);

  // スレッド一覧に戻る
  const backToThreads = () => {
    console.log("スレッド一覧に戻ります");
    navigate(-1);
  };

  // テキスト入力の状態を変更
  const handleChange = (event) => {
    setGetText(event.target.value);
  };

  // 投稿を追加
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
        <h1>{threadTitle}</h1>
        <div className="items">
          <div className="postslist">
            <ul>
              {getPosts.length > 0 ? (
                getPosts.map((post) => (
                  <li key={post.id}>
                    <p>{post.post}</p>
                  </li>
                ))
              ) : (
                <p>投稿がありません</p>
              )}
            </ul>
          </div>
          <div className="postsHeader-components">
            <button onClick={backToThreads}>スレッド一覧に戻る</button>
            <div className="postsHeader-postArea">
              <input type="text" value={getText} onChange={handleChange} />
              <button onClick={addPost}>投稿する</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
