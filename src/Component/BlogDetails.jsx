import React from 'react';

const BlogDetails = (props) => {
    console.log('Props list value:', props.list);

    return (
        <div>
            <div className="container mx-auto my-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={props.list["postDetails"]["img"]}
                        alt="postImage"
                        className="w-full h-auto rounded-xl shadow-md mb-8"
                    />
                    <h1 className="text-5xl font-extrabold text-gray-100 py-8 uppercase tracking-tight">
                        {props.list["title"]}
                    </h1>
                    <p className="text-lg leading-relaxed text-wtite-700">
                        {props.list["postDetails"]["content"]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
