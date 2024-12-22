import styles from "./RecentPosts.module.css";

import PostItem from "./PostItem/PostItem";

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

export default function RecentPosts({ postsList }: PostsListProps) {
	return (
		<div className={styles.recentPosts}>
			<p className={styles.title}>Recent blog posts</p>
			<div className={styles.posts_container}>
				{postsList.map((post: Post, index: number) => (
					<PostItem post={post} key={post.id} index={index} />
				))}
			</div>
		</div>
	);
}
