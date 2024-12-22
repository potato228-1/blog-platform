'use client'

import styles from "./page.module.css";

import RecentPosts from "@/components/RecentPosts/RecentPosts";
import { useEffect, useState } from "react";
import pic1 from '../../public/RecentPosts/Image1.png'
import pic2 from '../../public/RecentPosts/Image2.png'
import pic3 from '../../public/RecentPosts/Image3.png'
import pic4 from '../../public/RecentPosts/Image4.png'

import img1 from '../../public/AllBlogPosts/Image1.png'
import img2 from '../../public/AllBlogPosts/Image2.png'
import img3 from '../../public/AllBlogPosts/Image3.png'
import img4 from '../../public/AllBlogPosts/Image4.png'
import img5 from '../../public/AllBlogPosts/Image5.png'
import img6 from '../../public/AllBlogPosts/Image6.png'
import AllPosts from "@/components/AllPosts/AllPosts";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function Home() {
    let [recentPosts, setRecentPosts] = useState([
        {
            id: 1,
            title: 'UX review presentations',
            description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
            author: 'Olivia Rhye',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Research',
                    color: '#3538CD',
                    bg: '#EEF4FF',
                },
                {
                    name: 'Presentation',
                    color: '#C11574',
                    bg: '#FDF2FA',
                }
            ],
            picture: pic1,
        },
        {
            id: 2,
            title: 'Migrating to Linear 101',
            description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...',
            author: 'Phoenix Baker',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#026AA2',
                    bg: '#F0F9FF',
                },
                {
                    name: 'Research',
                    color: '#C11574',
                    bg: '#FDF2FA',
                },
            ],
            picture: pic2,
        },
        {
            id: 3,
            title: 'Building your API Stack',
            description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...',
            author: 'Lana Steiner',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#027A48',
                    bg: '#ECFDF3',
                },
                {
                    name: 'Research',
                    color: '#C11574',
                    bg: '#FDF2FA',
                },
            ],
            picture: pic3,
        },
        {
            id: 4,
            title: 'Grid system for better Design User Interface',
            description: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
            author: 'Olivia Rhye',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Interface',
                    color: '#C11574',
                    bg: '#FDF2FA',
                },
            ],
            picture: pic4,
        },
    ])
    
    let [allPosts, setAllPosts] = useState([
        {
            id: 1,
            title: 'Bill Walsh leadership lessons',
            description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            author: 'Alec Whitten',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Leadership',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Management',
                    color: '#363F72',
                    bg: '#F8F9FC',
                },
            ],
            picture: img1,
        },
        {
            id: 2,
            title: 'PM mental models',
            description: 'Mental models are simple expressions of complex processes or relationships.',
            author: 'Demi WIlkinson',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Product',
                    color: '#026AA2',
                    bg: '#F0F9FF',
                },
                {
                    name: 'Research',
                    color: '#3538CD',
                    bg: '#EEF4FF',
                },
                {
                    name: 'Frameworks',
                    color: '#C4320A',
                    bg: '#FFF6ED',
                },
            ],
            picture: img2,
        },
        {
            id: 3,
            title: 'What is Wireframing?',
            description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            author: 'Candice Wu',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Research',
                    color: '#3538CD',
                    bg: '#EEF4FF',
                },
            ],
            picture: img3,
        },
        {
            id: 4,
            title: 'How collaboration makes us better designers',
            description: 'Collaboration can make our teams stronger, and our individual designs better.',
            author: 'Natali Craig',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Design',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Research',
                    color: '#3538CD',
                    bg: '#EEF4FF',
                },
            ],
            picture: img4,
        },
        {
            id: 5,
            title: 'Our top 10 Javascript frameworks to use',
            description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
            author: 'Drew Cano',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Software Development',
                    color: '#027A48',
                    bg: '#ECFDF3',
                },
                {
                    name: 'Tools',
                    color: '#C11574',
                    bg: '#FDF2FA',
                },
                {
                    name: 'SaaS',
                    color: '#C01048',
                    bg: '#FFF1F3',
                },
            ],
            picture: img5,
        },
        {
            id: 6,
            title: 'Podcast: Creating a better CX Community',
            description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
            author: 'Orlando Diggs',
            date: '1 Jan 2023',
            tags: [
                {
                    name: 'Podcasts',
                    color: '#6941C6',
                    bg: '#F9F5FF',
                },
                {
                    name: 'Customer Success',
                    color: '#363F72',
                    bg: '#F8F9FC',
                },
            ],
            picture: img6,
        },
    ])

    let [a, setA] = useState(false)
    
    useEffect(() => {
        // for(let i = 6; i < 60; i += 6){
        //     allPosts.push(
        //         {
        //             id: i + 1,
        //             title: 'Bill Walsh leadership lessons',
        //             description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        //             author: 'Alec Whitten',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Leadership',
        //                     color: '#6941C6',
        //                     bg: '#F9F5FF',
        //                 },
        //                 {
        //                     name: 'Management',
        //                     color: '#363F72',
        //                     bg: '#F8F9FC',
        //                 },
        //             ],
        //             picture: img1,
        //         },
        //         {
        //             id: i + 2,
        //             title: 'PM mental models',
        //             description: 'Mental models are simple expressions of complex processes or relationships.',
        //             author: 'Demi WIlkinson',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Product',
        //                     color: '#026AA2',
        //                     bg: '#F0F9FF',
        //                 },
        //                 {
        //                     name: 'Research',
        //                     color: '#3538CD',
        //                     bg: '#EEF4FF',
        //                 },
        //                 {
        //                     name: 'Frameworks',
        //                     color: '#C4320A',
        //                     bg: '#FFF6ED',
        //                 },
        //             ],
        //             picture: img2,
        //         },
        //         {
        //             id: i + 3,
        //             title: 'What is Wireframing?',
        //             description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        //             author: 'Candice Wu',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Design',
        //                     color: '#6941C6',
        //                     bg: '#F9F5FF',
        //                 },
        //                 {
        //                     name: 'Research',
        //                     color: '#3538CD',
        //                     bg: '#EEF4FF',
        //                 },
        //             ],
        //             picture: img3,
        //         },
        //         {
        //             id: i + 4,
        //             title: 'How collaboration makes us better designers',
        //             description: 'Collaboration can make our teams stronger, and our individual designs better.',
        //             author: 'Natali Craig',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Design',
        //                     color: '#6941C6',
        //                     bg: '#F9F5FF',
        //                 },
        //                 {
        //                     name: 'Research',
        //                     color: '#3538CD',
        //                     bg: '#EEF4FF',
        //                 },
        //             ],
        //             picture: img4,
        //         },
        //         {
        //             id: i + 5,
        //             title: 'Our top 10 Javascript frameworks to use',
        //             description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        //             author: 'Drew Cano',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Software Development',
        //                     color: '#027A48',
        //                     bg: '#ECFDF3',
        //                 },
        //                 {
        //                     name: 'Tools',
        //                     color: '#C11574',
        //                     bg: '#FDF2FA',
        //                 },
        //                 {
        //                     name: 'SaaS',
        //                     color: '#C01048',
        //                     bg: '#FFF1F3',
        //                 },
        //             ],
        //             picture: img5,
        //         },
        //         {
        //             id: i + 6,
        //             title: 'Podcast: Creating a better CX Community',
        //             description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        //             author: 'Orlando Diggs',
        //             date: '1 Jan 2023',
        //             tags: [
        //                 {
        //                     name: 'Podcasts',
        //                     color: '#6941C6',
        //                     bg: '#F9F5FF',
        //                 },
        //                 {
        //                     name: 'Customer Success',
        //                     color: '#363F72',
        //                     bg: '#F8F9FC',
        //                 },
        //             ],
        //             picture: img6,
        //         },
        //     )
        // }
        setA(true)
    }, [])

	return (
		<div className={styles.page}>
			<PageTitle title='THE BLOG' />

            <main>
                <RecentPosts
                    postsList={recentPosts}
                />

                {
                    a ? <AllPosts postsList={allPosts} /> : <><h1>Loading...</h1></>
                }
            </main>
		</div>
	);
}
