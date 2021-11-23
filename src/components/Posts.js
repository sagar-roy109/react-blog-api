import React from 'react'
import { Fragment } from 'react'

const Posts = (getpost) => {
	return (
		<Fragment>
			<div className="col-md-3 shadow">
				<div className="post-container p-3 ">
					<h4 className="blog-title">{getpost.postData.title}</h4>
					<p className="content">{getpost.postData.body}</p>
				</div>

			</div>
		</Fragment>
	)
}

export default Posts
