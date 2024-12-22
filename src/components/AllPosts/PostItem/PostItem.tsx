import styles from "./PostItem.module.css";

import Image from "next/image";

interface TagItem {
	name: string;
	color: string;
	bg: string;
}

interface PostData {
	id: number;
	title: string;
	description: string;
	author: string;
	date: string;
	tags: TagItem[];
	picture: any;
}

interface PostProps {
	post: PostData;
}

export default function PostItem({ post }: PostProps) {
	return (
		<div className={styles.postItem}>
			<Image
				src={post.picture}
				alt=""
				placeholder="blur"
				className={styles.picture}
			/>
            
			<div className={styles.inner_container}>
				<div className={styles.text_container}>
					<p className={styles.author_date}>
						{post.author} • {post.date}
					</p>
					<p className={styles.title}>{post.title}</p>
					<p className={styles.description}>{post.description}</p>
				</div>
				<div className={styles.tags_container}>
					{post.tags.map((tag) => (
						<p
							key={tag.name}
							style={{
								color: `${tag.color}`,
								background: `${tag.bg}`,
							}}
							className={styles.tag}
						>
							{tag.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
