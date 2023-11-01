import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김철수",
    content: "하이3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};
export default App;
