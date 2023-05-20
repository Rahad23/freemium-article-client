import React from 'react';
import Feedback from './Feedback/Feedback';
import SliderPage from './SliderPage/SliderPage';
import AnotherSlide from './AnotherSlide/AnotherSlide';

const MemberShipPage = () => {
    return (
        <div>
            <SliderPage />
              <Feedback />
            <AnotherSlide />
        </div>
    );
};

export default MemberShipPage;