import styles from "./page.module.css";

import Image from "next/image";
import picture from "../../../public/About/Image.png";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function About() {
	return (
		<div className={styles.aboutPage}>
			<PageTitle title='John Doe' />

			<main className={styles.about_main}>
				<Image
					src={picture}
					alt="John Doe"
					className={styles.picture}
				/>
				<div className={styles.main_textContainer}>
					<div className={styles.textBlock}>
						<p className={styles.main_subtitle}>About Me</p>
						<p className={styles.main_text}>
							As a passionate and experienced UI designer, I am
							dedicated to creating intuitive and engaging user
							experiences that meet the needs of my clients and
							their users. I have a strong understanding of design
							principles and a proficiency in design tools, and I
							am comfortable working with cross-functional teams
							to bring projects to fruition. I am confident in my
							ability to create designs that are both visually
							appealing and functional, and I am always looking
							for new challenges and opportunities to grow as a
							designer.
						</p>
					</div>

					<div className={styles.textBlock}>
						<p className={styles.main_subtitle}>Skills:</p>

						<ul className={styles.listText}>
							<li className={styles.main_text}>
								Extensive experience in UI design, with a strong
								portfolio of completed projects
							</li>
							<li className={styles.main_text}>
								Proficiency in design tools such as Adobe
								Creative Suite and Sketch
							</li>
							<li className={styles.main_text}>
								Excellent visual design skills, with a strong
								understanding of layout, color theory, and
								typography
							</li>
							<li className={styles.main_text}>
								Ability to create wireframes and prototypes to
								communicate design concepts
							</li>
							<li className={styles.main_text}>
								Strong communication and collaboration skills,
								with the ability to work effectively with
								cross-functional teams
							</li>
							<li className={styles.main_text}>
								Experience conducting user research and
								gathering insights to inform design decisions
							</li>
							<li className={styles.main_text}>
								Proficiency in HTML, CSS, and JavaScript
							</li>
						</ul>
					</div>

					<div className={styles.textBlock}>
						<p className={styles.main_subtitle}>Experience:</p>

						<ul className={styles.listText}>
							<li className={styles.main_text}>
								5 years of experience as a UI designer, working
								on a variety of projects for clients in the tech
								and retail industries
							</li>
							<li className={styles.main_text}>
								Led the design of a successful e-commerce
								website, resulting in a 25% increase in online
								sales
							</li>
							<li className={styles.main_text}>
								Created wireframes and prototypes for a mobile
								banking app, leading to a 20% increase in app
								usage
							</li>
							<li className={styles.main_text}>
								Conducted user research and usability testing to
								inform the redesign of a healthcare provider's
								website, resulting in a 15% increase in website
								traffic
							</li>
						</ul>
					</div>

					<div className={styles.textBlock}>
						<p className={styles.main_subtitle}>Education:</p>

						<ul className={styles.listText}>
							<li className={styles.main_text}>
								Bachelor's degree in Graphic Design
							</li>
							<li className={styles.main_text}>
								Certified User Experience Designer (CUED)
							</li>
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}
