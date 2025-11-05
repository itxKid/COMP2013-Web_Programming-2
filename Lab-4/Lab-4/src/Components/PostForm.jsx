export default function PostForm({newForm, handleOnFormChange, handleAddNewPost}) {
    return <div className="postForm">
        <form action="">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={newForm.title} onChange={(e) => handleOnFormChange(e)} required/>
            <br />
            <label htmlFor="body">Body:</label>
            <input type="text" name="body" value={newForm.body} onChange={(e) => handleOnFormChange(e)} required/>
            <br />
            <button onClick={(e) => handleAddNewPost(e)} id="postButton">Post</button>
        </form>
    </div>
}