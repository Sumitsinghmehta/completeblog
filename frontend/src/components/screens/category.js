import React from 'react'
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Post from "../parts/Post";
import Breadcrumb from "../parts/Breadcrumb";
import Sidebar from "../parts/Sidebar";

    const Category=()=> {
        return (
           <>
            <Header/>
            <Breadcrumb/>
            <section className="blog-section">
			<div className="container">
				<div className="row">
					<Post/>
                    <Sidebar/>
					
				</div>
			</div>
		</section>
        <Footer/>
         </>
         
        );
    };

export default Category;