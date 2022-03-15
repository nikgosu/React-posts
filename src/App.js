import React, {useMemo, useRef, useState} from 'react';
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'aa', body: 'zz'},
		{id: 2, title: 'ff 1', body: 'ww'},
		{id: 3, title: 'vv', body: 'aa'}
	]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}
		return posts;
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false)
	}

	// Хук useRef для неуправляемого компонента
	// const bodyInputRef = useRef();

	//Получаю пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(delPost => delPost.id !== post.id))
	}

	return (
		<div className="App">
			<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</MyModal>
			<hr style={{margin: '15px 0'}}/>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
				<PostList remove={removePost}posts={sortedAndSearchedPosts} title='Посты про JS'/>
		</div>
	);
}

export default App;
