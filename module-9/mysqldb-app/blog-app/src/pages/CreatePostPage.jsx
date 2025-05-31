import useFetch from "../useFetch"

export default function CreatePostPage() {

    return (
        <>
            <input type="text" />
            material        
            <button onSubmit={useFetch}>post</button>
        </>
    )
}