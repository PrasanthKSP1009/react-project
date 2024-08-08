import React, {useState, useEffect} from "react"
import axios from "axios"
var Effect = () =>{
    // const [count, setCount] = useState(0)
	// const [name, setName] = useState('')
	// useEffect(() => {
	// 	console.log('useEffect - Updating document title ')
	// 	document.title = `You clicked ${count} times`
	// },[])
	// return (
	// 	<div>
	// 		<input type="text" value={name} onChange={e => setName(e.target.value)} />
	// 		<button onClick={() => setCount(count + 1)}>
	// 			useEffect - Click {count} times
	// 		</button>
	// 	</div>
	// )
    const [posts, setPost] = useState([])

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			<div>{posts.title}</div>
			<ul>
				{posts.map(post => (
          <li key={post.id}>{post.id} - {post.url}</li>
				))}
			</ul>
		</div>
	)
}
export default Effect;