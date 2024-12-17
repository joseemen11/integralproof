import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import About2 from '../../components/about2/about2';
import Practice2 from '../../components/Practice2';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Features from '../../components/Features/Features';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact';
import Attorney from '../../components/attorneys';
import BlogSection from '../../components/BlogSection/BlogSection';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Navbar from '../../components/Navbar/Navbar';
// const img = '../images/integralPro/contactanos/contactanos.jpg'
import  img  from  '../../public/images/integralPro/portada/servici.jpg'

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Sobre nosotros'} pagesub={'Nosotros'} img={img}/> 
            {/* <Features /> */}
            <About2 />
            {/* <FunFact/> */}
            <Attorney/>
            <Practice2 />
            <Testimonial tClass={'pt-[100px] sm:pt-[20px]'}/>
            {/* <BlogSection /> */}
            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;

