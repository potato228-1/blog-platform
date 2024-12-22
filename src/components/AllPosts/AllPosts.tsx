import { useState } from "react";
import styles from "./AllPosts.module.css";

import PostItem from "./PostItem/PostItem";
import Pagination from "../Pagination/Pagination";

interface TagItem {
	name: string;
	color: string;
	bg: string;
}

interface Post {
	id: number;
	title: string;
	description: string;
	author: string;
	date: string;
	tags: TagItem[];
	picture: any;
}

interface PostsListProps {
	postsList: Post[];
}

export default function AllPosts({ postsList }: PostsListProps) {
	let [pageLimit, setPageLimit] = useState(6);
	let [currentPage, setCurrentPage] = useState(1);

	let lastIndex = currentPage * pageLimit;
	let firstIndex = lastIndex - pageLimit;
	let currentPosts = postsList.slice(firstIndex, lastIndex);

	return (
		<div className={styles.allPosts}>
			<p className={styles.title}>All blog posts</p>
			<div className={styles.posts_container}>
				{currentPosts.map((post: Post) => (
					<PostItem post={post} key={post.id} />
				))}
			</div>
			<Pagination
				totalPages={Math.ceil(postsList.length / pageLimit)}
				setPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
}
