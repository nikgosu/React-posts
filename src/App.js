import React, {useRef, useState} from 'react';
import Counter from "./components/counter";

import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

	const [posts, setPosts] = useState([{
			id: 1,
			title: 'Javascript',
			body: 'Description'
		},{
			id: 2,
			title: 'Javascript 1',
			body: 'Description'
		},{
			id: 3,
			title: 'Javascript 2',
			body: 'Description'
		}])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	// const bodyInputRef = useRef();

	const addNewPost = (event) => {
		// убирает обновление страницы по нажатию кнопки
		event.preventDefault();
		const newPost = {
			id: Date.now(),
			title,
			body
		}
		setPosts([...posts, newPost])
		setTitle('');
		setBody('');

	}

	return (
    <div className="App">
	    <form>
		    {/*{Управляемый компонент}*/}
		    <MyInput
			    value={title}
			    onChange={event => setTitle(event.target.value)}
			    type="text"
			    placeholder='Название поста'
		    />
		    <MyInput
			    value={body}
			    onChange={event => setBody(event.target.value)}
			    type="text"
			    placeholder='Название поста'
		    />
		    {/*Неуправляемый компонент*/}
		    {/*<MyInput*/}
			{/*    ref={bodyInputRef}*/}
			{/*    type="text"*/}
			{/*    placeholder='Описание поста'*/}
		    {/*/>*/}
		    <MyButton onClick={addNewPost}>Создать пост</MyButton>
	    </form>
		<PostList posts={posts} title={'Список постов JS'}/>
    </div>
  );
}

export default App;
