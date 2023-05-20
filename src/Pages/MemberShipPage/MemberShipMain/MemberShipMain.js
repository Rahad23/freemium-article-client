import React from 'react';
import SupportMore from '../Access&SupportSecton/SupportMore';
import UnlimitedAcess from '../Access&SupportSecton/UnlimitedAcess';
import MemberShipBannar from '../MemberShipBannar/MemberShipBannar';
import TheEndSection from '../TheEndSection/TheEndSection';

import WhyMember from '../WhyMember/WhyMember';

const MemberShipMain = () => {
    return (
        <div>
            {/* member banar */}
            <div>
                <MemberShipBannar></MemberShipBannar>
            </div>
            <div className=" border-t border-white"></div>

            {/* Store and more  */}
            <div className=' grid lg:grid-cols-2 sm:grid-cols-1 p-6 gap-4 bg-[#4171f8]'>
                {/* left Store  section */}
                <div>
<UnlimitedAcess></UnlimitedAcess>
                </div>
                {/* right more section */}
                <div className='lg:border-l lg:border-white   p-2'>
<SupportMore></SupportMore>
                </div>
            </div>
{/* why Member */}
<div>
    <WhyMember></WhyMember>
</div>
{/* last section */}
<div className='border-y border-black'>
    <TheEndSection></TheEndSection>
</div>
        </div>
    );
};

export default MemberShipMain;