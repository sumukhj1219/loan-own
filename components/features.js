"use client"
import React, { useEffect, useState } from 'react';
import Card from './card';
import ServiceCards from './service-cards';
import { AnimatedTestimonialsDemo } from './testimonials';
import Showcase, { HeroScrollDemo } from './advertise';

const Features = () => {
    const [state, setState] = useState()
    useEffect(() => {
        setState(true)
    }, [])
    
    return (
        <>
            <HeroScrollDemo />
            <div className='max-w-6xl mx-auto p-6'>
                <span className='text-3xl font-semibold flex items-center justify-start'>
                    Start your home loan journey here
                </span>
                <span className='text-lg font-thin pt-10'>
                    Click on the segment below that best suits your requirements. Complete our simple fact find to help us speed up the approval process for you.
                </span>
            </div>

            <Card />

            <div className='max-w-6xl mx-auto p-6'>
                <span className='text-3xl font-semibold flex items-center justify-start'>
                    Our services
                </span>
                <span className='text-lg font-thin'>
                    With a range of services on offer, Finance Home Loans strives to be your one stop shop for your financial needs.
                </span>
            </div>

            <ServiceCards />

            <div className='max-w-6xl mx-auto p-6'>
                <span className='text-3xl font-semibold flex items-center justify-start'>
                    Our featured Google reviews
                </span>
                <span className='text-lg font-thin'>
                    At Finance Home Loans, we pride ourselves on providing an exceptional experience that sets us apart, combining excellence in our roles with outstanding customer service. See for yourself what our clients have to say about us.
                </span>
            </div>

            {
                state ? <AnimatedTestimonialsDemo /> : ""
            }
        </>
    );
};

export default Features;
