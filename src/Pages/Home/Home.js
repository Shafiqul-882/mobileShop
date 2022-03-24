import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';
import Topproducts from '../Topproducts/Topproducts';
import Bestsellingproducts from '../Bestsellingproducts/Bestsellingproducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Topproducts></Topproducts>
            <Reviews></Reviews>
            <Bestsellingproducts></Bestsellingproducts>
            <MakeAdmin></MakeAdmin>
            <Footer></Footer>
        </div>
    );
};

export default Home;