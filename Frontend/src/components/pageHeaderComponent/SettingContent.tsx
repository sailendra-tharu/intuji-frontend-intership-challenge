/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  APP,
  EMAIL_ADDRESS,
  GENERAL_SETTING,
  LAYOUTS,
  SETTING,
  THIRD_PARTY_INTEGRATION,
} from '~/config/path';

import { Text } from '../atomic';
import {
  GeneralSettingIcon,
  SettingCheckIcon,
  SettingEmailAddressIcon,
  SettingLayoutIcon,
  SettingThirdPartyIcon,
} from '../icons';

const SettingContent = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (path: string) => {
    navigate(path);
  };

  const location = useLocation();

  return (
    <div className='flex flex-col gap-2 w-[273px] pr-[10px] pl-2 py-[10px] '>
      <button
        className={`flex justify-between gap-2`}
        onClick={() => handleClick(`/${APP}/${SETTING}/${GENERAL_SETTING}`)}
      >
        <div className='flex gap-2 items-center'>
          <GeneralSettingIcon /> <Text>General Setting</Text>
        </div>
        {location?.pathname === `/app/setting/general-setting` && <SettingCheckIcon />}
      </button>
      <button
        className={`flex justify-between gap-2 `}
        onClick={() => handleClick(`/${APP}/${SETTING}/${LAYOUTS}`)}
      >
        <div className='flex gap-2 items-center'>
          <SettingLayoutIcon /> <Text>Layouts</Text>
        </div>
        {location?.pathname === `/app/setting/layouts` && <SettingCheckIcon />}
      </button>
      {/* <button
                className={`flex justify-between gap-2 `}
            onClick={() => handleClick(`/${APP}/${SETTING}/${EMAIL_ADDRESS}`)}
            >
                <div className='flex gap-2 items-center'>
                    <SettingEmailAddressIcon /> <Text>Email Address</Text>
                </div>
                {location?.pathname === `/app/setting/email-address` && <SettingCheckIcon />}
            </button> */}
      {/* <button
                className={`flex justify-between gap-2 `}
            onClick={() => handleClick(`/${APP}/${SETTING}/${THIRD_PARTY_INTEGRATION}`)}
            >
                <div className='flex gap-2 items-center'>
                    <SettingThirdPartyIcon /> <Text>Third party integrations</Text>
                </div>
                {location?.pathname === `/app/setting/third-party-integration` && (
                    <SettingCheckIcon />
                )}
            </button> */}
    </div>
  );
};

export default SettingContent;
