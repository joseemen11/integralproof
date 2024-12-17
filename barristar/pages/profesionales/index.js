import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle1'
import Navbar from '../../components/Navbar/Navbar';
import Attorney from '../../components/attorneys';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
// import  img  from  '../../public/images/integralPro/equipo/1.jpg'
import  img  from  '../../public/images/integralPro/profiles/Equipo.png'

const AttorneyPage =() => {
    return(
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Profesionales'} pagesub={'Profesionales'} img={img}/> 
            <Attorney/>
            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AttorneyPage;

