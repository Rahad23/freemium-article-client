import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import RelatedTopics from './RelatedTopics/RelatedTopics';
import TopWriters from './TopWriters/TopWriters';
import TotalFollowerAndTotalArticle from './TotalFollowerAndTotalArticle/TotalFollowerAndTotalArticle';

const RelatedTopicsTopWriters = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <TotalFollowerAndTotalArticle />
            <RelatedTopics />
{
           user?.uid && <TopWriters />
}

        </div>
    );
};

export default RelatedTopicsTopWriters;