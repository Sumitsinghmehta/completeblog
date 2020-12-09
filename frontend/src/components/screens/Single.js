import React from 'react'
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import PostDesc from "../parts/PostDesc";
import Comment from '../parts/CommentForm';

    const Single=()=> {
        return (
            <>
            <Header/>
            				<div className="single-post no-sidebar">
					<PostDesc/>
                        <Comment/>
					</div>
                    <Footer/>
            </>
        );
    };

export default Single;