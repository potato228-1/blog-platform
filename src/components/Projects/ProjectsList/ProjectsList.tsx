import styles from "./ProjectsList.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

interface TagItem {
	name: string;
	color: string;
	bg: string;
}

interface Project {
	id: number;
	title: string;
	description: string;
	tags: TagItem[];
	picture: any;
}

interface Props {
	projectsList: Project[];
}

export default function ProjectsList({ projectsList }: Props) {
	return (
		<div className={styles.projectsList}>
			<p className={styles.projectsList_title}>List Project</p>
			<div className={styles.projectsList_projects}>
				{projectsList.map((project: Project, index: number) => (
					<ProjectItem
						project={project}
						index={index}
						key={project.id}
					/>
				))}
			</div>
		</div>
	);
}
