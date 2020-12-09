import React from 'react'
import Footer from '../parts/Footer';
import Header from '../parts/Header';

const NotFound = () => {
    return (
        <>
        <Header/>
<section className="page-banner-section">
			<div className="container">
				<h1>Page Could Not Be Found</h1>
			</div>
		</section>
		

		
		<section className="error-section">
			<div className="container">
				<div className="error-box">
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<p>We are sorry. But the page you are looking for cannot be found. </p>
					<a className="button-one" href="/">Go To HomePage</a>
				</div>
			</div>
		</section>
        <Footer/>

        </>
    );
};

export default NotFound;
