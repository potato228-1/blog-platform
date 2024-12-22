import styles from "./ProjectItem.module.css";
import Image from "next/image";

interface TagItem {
	name: string;
	color: string;
	bg: string;
}

interface ProjectItem {
	id: number;
	title: string;
	description: string;
	tags: TagItem[];
	picture: any;
}

interface ProjectItemProps {
	project: ProjectItem;
	index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
	return (
		<div className={
            index == 2 ? [styles.projectItem, styles.item3].join(' ') : styles.projectItem
        }>
			<Image
				src={project.picture}
				alt=""
				className={styles.projectItem_pic}
			/>
			<div className={styles.inner_container}>
				<p className={styles.projectItem_title}>{project.title}</p>

				<p className={styles.projectItem_description}>
					{project.description}
				</p>

				<div className={styles.tags_container}>
					{project.tags.map((tag) => (
						<p
                            key={tag.name}
							className={styles.tag_item}
							style={{
								color: `${tag.color}`,
								background: `${tag.bg}`,
							}}
						>
							{tag.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
