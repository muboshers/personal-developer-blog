import React from 'react';
import {BlurImage} from "@/components";
import {convertColorToRGBA} from "@/utils/color";
import {Blog} from "@/__mock/blog";


export function BlogCard({blog}: { blog: Blog }) {


    return (
        <div className={'group w-full h-full'}>
            <div className={'relative max-h-[250px] rounded-[12px] overflow-hidden'}>
                <BlurImage
                    src={blog.image}
                    alt={'Test image'}
                    placeholder={'blur'}
                    blurDataURL={'./placeholder-image.png'}/>
            </div>

            <div className="info mt-[32px]">
                <span className={'text-[#6941C6] text-[14px] font-semibold'}>
                   {blog.created_at}
                </span>

                <h3 className={'mt-[12px] text-[24px] text-[#1A1A1A] font-semibold'}>
                    {blog.title}
                </h3>

                <p className={'text-[#667085] leading-7'}>
                    {blog.description}
                </p>

                <div className="tags flex  flex-wrap items-center mt-[24px] gap-[8px]">
                    {blog.  tags.map(tag => (
                        <span key={tag.color}
                              className={'py-[2px] text-[14px] rounded-[16px] px-[10px]'}
                              style={{
                                  backgroundColor: convertColorToRGBA(tag.color, 0.1),
                                  color: tag.color,
                              }}
                        >{tag.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
