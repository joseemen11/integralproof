import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Practice3 from '../../components/Practice3/Practice3';
import Navbar from '../../components/Navbar/Navbar';
import Features from '../../components/Features/Features';
import Testimonial from '../../components/Testimonial/Testimonial';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import  img  from  '../../public/images/integralPro/portada/servicios.jpg'

const PracticePage =() => {

    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Servicios'} pagesub={'Servicios'} img={img}/> 
            <Features />
            {/* <Practice3 /> */}
            <CaseStudies/>
            {/* <Testimonial tClass={'pt-[100px] sm:pt-[20px]'}/> */}
            {/* <Pricing /> */}
            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePage;

