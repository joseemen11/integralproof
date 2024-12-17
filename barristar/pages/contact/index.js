import React, {Fragment} from 'react';
import Navbar   from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage from '../../components/Contactpage/Contactpage';
import  img  from  '../../public/images/integralPro/portada/contacto.jpg'


const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contáctanos'} pagesub={'Contacto'} img={img}/> 
            <Contactpage/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage;

