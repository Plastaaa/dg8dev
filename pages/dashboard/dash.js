import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import DashBoardHome from '../../components/dashboard/dashboardHome';

export default function Home(){
    useEffect (() => {ReactGA.pageview("Back-Office");}, []);
    return (
        <div>
            <DashBoardHome/>
        </div>
    )
}