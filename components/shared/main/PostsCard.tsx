import Image from 'next/image'
import React from 'react'

const PostsCard = () => {
    return (
        <>
            <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                <Image className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width={375} height={562} alt="" />
                <div className="p-3">
                    <span className="text-sm text-primary">November 19, 2022</span>
                    <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                    International Womens Day 2022: Date, history, significance, theme this year
                    </h3>
                    <p className="paragraph-normal text-gray-600">
                    Happy Womens Day 2022: Read on to know all about the history and significance...
                    </p>
                    <a className="mt-3 block" href="#">Read More</a>
                </div>
            </div>
        </>
    )
}

export default PostsCard
