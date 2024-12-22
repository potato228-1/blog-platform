'use client'

import styles from './page.module.css'

import img1 from '../../../public/AllBlogPosts/Image1.png'
import img2 from '../../../public/AllBlogPosts/Image2.png'
import img3 from '../../../public/AllBlogPosts/Image3.png'
import { useState } from 'react'
import AllPosts from '@/components/AllPosts/AllPosts'

export default function Newsletter() {
    let [allBlogPosts, setAllBlogPosts] = useState([
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
    ])
  return (
    <div className={styles.newsletterPage}>
        <div className={styles.newsletter_titleContainer}>
            <p className={styles.newsletter_subtitle}>
                Newlatters
            </p>

            <p className={styles.newsletter_mainTitle}>
                Stories and interviews
            </p>

            <p className={styles.newsletter_description}>
                Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>

            <div className={styles.newsletter_inputContainer}>
                <div className={styles.inputWrapper}>
                    <input type="email" className={styles.newsletter_input} />
                    <button className={styles.btn_subscribe}>
                        Subscribe
                    </button>
                </div>
                <p className={styles.input_subtitle}>
                    We care about your data in our <a href='/newsletter'>privacy policy</a>
                </p>
            </div>
        </div>

        <AllPosts postsList={allBlogPosts} />
    </div>
  )
}
