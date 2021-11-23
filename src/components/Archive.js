import React, {useState, useEffect} from 'react'
import { Fragment } from 'react'
import "../css/bootstrap.min.css"
import Posts from './Posts'

const Archive = () => {
	const [post, setpost] = useState([])
	let postLimit = post.slice(0,20);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res=> res.json())
		.then(data=>setpost(data));

	}, [])
	return (
		<Fragment>
			<div className="container">
				<div className="row">

					{
						postLimit.map(post=> <Posts postData ={post} ></Posts>)

					}
				</div>
			</div>
		</Fragment>
	)
}

export default Archive
