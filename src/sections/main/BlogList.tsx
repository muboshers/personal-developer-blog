import React from 'react';
import {BlogCard} from "@/components";
import {BLOG_LIST} from "@/__mock/blog";

function BlogList() {


    return (
        <div className="py-[45px] sm:py-[90px]">
            <div
                className={'grid px-[2rem] grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 container mx-auto gap-[30px] place-items-center'}
                data-aos={'fade-up'}>
                {BLOG_LIST.map((blog => (
                    <BlogCard key={blog.title} blog={blog}/>
                )))}
            </div>
        </div>
    );
}

export default BlogList;