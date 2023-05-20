import React from 'react';
import AskedFrequently from './AskedFrequently/AskedFrequently';
import CreateSpace from './CreateYourSpacePage/CreateSpace';
import EarnManyWriting from './EarnManyWritingPage/EarnManyWriting';
import GrowAudience from './GrowAudience/GrowAudience';
import JoinNetowork from './JoinNetoworkPage/JoinNetowork';
import SliderCreatorPage from './SliderCreatorPage/SliderCreatorPage';


const Creator = () => {
    return (
        <div>
            <SliderCreatorPage />
            <JoinNetowork />
            <CreateSpace />
            <GrowAudience />
            <EarnManyWriting />
            <AskedFrequently />
        </div>
    );
};

export default Creator;