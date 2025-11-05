import {useState, useEffect} from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const [posts, setPosts] = useState([]); 
    const [newForm, setNewForm] = useState({ title: "", body: "",})
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        const response = await fetch(URL); 
        const data = await response.json();

        setPosts(data.map((post) => {
            return {id: post.id, ...post}
        }));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPosts();  
    }, []);

    const handleOnFormChange = (e) => {
        setNewForm((prevNewForm) => {
            return {...prevNewForm, [e.target.name]: e.target.value};
        })
        return;
    }

    const handleAddNewPost = (e) => {
        e.preventDefault();
        setPosts((prevPosts) => {
            return [newForm, ...prevPosts] 
        })
        setNewForm({ title: "", body: ""})
    }

    return <div>
        <h1>Fake API App</h1>
        {isLoading && <h2>Loading...</h2> }
        <PostForm newForm={newForm} handleOnFormChange={handleOnFormChange} handleAddNewPost={handleAddNewPost}/>
        <PostsContainer posts={posts}/>
    </div>
}