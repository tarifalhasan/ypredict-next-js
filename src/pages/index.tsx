import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';

import HeroSection from '@/components/Hero/HeroSection';
import Spomsors from '@/components/Sponsors';
import Carousel from '@/components/Carousel/Carousel';
import PlatformFeatures from '@/components/Features/Features';
import Trusted from '@/components/Trusted/Trusted';
import WhyInvesting from '@/components/WhyInvesting/WhyInvesting';
import Tokenomics from '@/components/Tokenomics/Tokenomics';
import Team from '@/components/Team/Team';
import Testimonial from '@/components/Testimonial/Testimonial';
import Whitepaper from '@/components/Whitepaper/Whitepaper';
import Footer from '@/components/Footer/Footer';
import Comparison from '@/components/comparison/Comparison';
import MobileMenu from '@/components/Header/MobileMenu';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <MobileMenu />
        <HeroSection />
        <div className="relative">
          <Spomsors />
          <Carousel />
        </div>
        <PlatformFeatures />
        <Comparison />
        <Trusted />
        <WhyInvesting />
        <Tokenomics />
        <Team />
        <Testimonial />
        <Whitepaper />
        <Footer />
      </>
    </>
  );
}
