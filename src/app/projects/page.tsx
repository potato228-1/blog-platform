import styles from "./page.module.css";

import ProjectsList from "@/components/Projects/ProjectsList/ProjectsList";
import picture1 from "@/../public/Projects/Image1.png";
import picture2 from "@/../public/Projects/Image2.png";
import picture3 from "@/../public/Projects/Image3.png";
import picture4 from "@/../public/Projects/Image4.png";
import picture5 from "@/../public/Projects/Image5.png";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function Projects() {
	let projects = [
		{
			id: 1,
			title: "User Experience Design Dashboard Hotel Management",
			description:
				"n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.",
			tags: [
				{
					name: "Design",
					color: "#6941C6",
					bg: "#F9F5FF",
				},
				{
					name: "Research",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
				{
					name: "Presentation",
					color: "#C11574",
					bg: "#FDF2FA",
				},
			],
			picture: picture1,
		},
		{
			id: 2,
			title: "Bring of User Experience Design to Policy Making, How to Impact Society",
			description:
				"User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effec",
			tags: [
				{
					name: "Research",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
				{
					name: "Presentation",
					color: "#C11574",
					bg: "#FDF2FA",
				},
			],
			picture: picture2,
		},
		{
			id: 3,
			title: "UX review presentatiBringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons",
			description:
				"There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems",
			tags: [
				{
					name: "Design",
					color: "#6941C6",
					bg: "#F9F5FF",
				},
				{
					name: "Research",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
				{
					name: "Presentation",
					color: "#C11574",
					bg: "#FDF2FA",
				},
				{
					name: "Collaboration",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
			],
			picture: picture3,
		},
		{
			id: 4,
			title: "Icon Package of Slin Icon",
			description:
				"An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.",
			tags: [
				{
					name: "Design",
					color: "#6941C6",
					bg: "#F9F5FF",
				},
				{
					name: "Branding",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
				{
					name: "Identity",
					color: "#C11574",
					bg: "#FDF2FA",
				},
			],
			picture: picture4,
		},
		{
			id: 5,
			title: "UX review presentations",
			description:
				"How do you create compelling presentations that wow your colleagues and impress your managers?",
			tags: [
				{
					name: "Design",
					color: "#6941C6",
					bg: "#F9F5FF",
				},
				{
					name: "Research",
					color: "#3538CD",
					bg: "#EEF4FF",
				},
				{
					name: "Presentation",
					color: "#C11574",
					bg: "#FDF2FA",
				},
			],
			picture: picture5,
		},
	];
	return (
		<div>
			<PageTitle title='PROJECTS' />
			<ProjectsList projectsList={projects} />
		</div>
	);
}
