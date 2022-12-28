import React from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import BannerMobile from './components/banner/BannerMobile';
import Spesialisasi from './components/spesialisasi/Spesialisasi';
import SpesialisasiMobile from './components/spesialisasi/SpesialisasiMobile';
import Navbar from './components/navbar/Navbar'
import NavbarMobile from './components/navbar/NavbarMobile'
import Submenu from './components/submenu/Submenu'
import SubmenuMobile from './components/submenu/SubmenuMobile'
import Cards from './components/cards/Cards'
import CardsMobile from './components/cards/CardsMobile'
import Kategori from './components/kategori/Kategori'
import KategoriMobile from './components/kategori/KategoriMobile'
import Promo from './components/promo/Promo'
import PromoMobile from './components/promo/PromoMobile'
import Lembaga from './components/lembaga/Lembaga'
import LembagaMobile from './components/lembaga/LembagaMobile'
import Footer from './components/footer/Footer'
import FooterMobile from './components/footer/FooterMobile'
import { dataKartu, dataKursus } from './data/data';
import useWindowDimensions from './utils/utilsWindow';

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      {width > 1000 ? <Navbar /> : <NavbarMobile/>}
      {width > 1000 ? <Submenu /> : <SubmenuMobile/>}
      {width > 1000 ? <Banner /> : <BannerMobile/>}
      {width > 1000 ? <Spesialisasi /> : <SpesialisasiMobile/>}
      {dataKartu.map((data) => {
        const c = width > 1000 ? 
        <Cards ikon={data.ikon} konten={data.konten} flashsale={data.flashsale} dataArray={data.dataAray} /> 
        : <CardsMobile ikon={data.ikon} konten={data.konten} flashsale={data.flashsale} dataArray={data.dataAray} /> 
        return(
          c
        )
      })}
      {width > 1000 ? <Kategori /> : <KategoriMobile/>}
      {width > 1000 ? <Promo /> : <PromoMobile/>}
      {width > 1000 ? <Lembaga /> : <LembagaMobile/>}
      {dataKursus.map((data) => {
        const c = width > 1000 ? 
        <Cards ikon={data.ikon} konten={data.konten} flashsale={data.flashsale} dataArray={data.dataAray} /> 
        : <CardsMobile ikon={data.ikon} konten={data.konten} flashsale={data.flashsale} dataArray={data.dataAray} /> 
        return(
          c
        )
      })}
      {width > 1000 ? <Footer /> : <FooterMobile/>}
    </div>
  );
}

export default App;
