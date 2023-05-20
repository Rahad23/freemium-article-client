import React from 'react';
import ProductStatusCard from './ProductStatusCard/ProductStatusCard';
import VisitorsTraking from './VisitorsTraking/VisitorsTraking';
const DasReCharts = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold text-gray-900 underline'>FreeMium site dashboard...</h1>
            <div className='mt-5'>
                 <ProductStatusCard />
                 <VisitorsTraking />
            </div>
        </div>
    );
};

export default DasReCharts;
