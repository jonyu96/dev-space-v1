import { BackIcon } from 'components/Icons';
import { useHistory } from 'react-router';

import './Tab.css';

export interface TabProps {
    content: any;
    path: string;
}

const backIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12.599" height="13.22" viewBox="0 0 16.599 17.22">
        <g id="Icon_feather-corner-up-left" data-name="Icon feather-corner-up-left" transform="translate(1.5 2.121)">
            <path id="Path_216" data-name="Path 216" d="M10.25,14.5,6,10.25,10.25,6" transform="translate(-6 -6)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Path_217" data-name="Path 217" d="M19.6,22.849V16.9a3.4,3.4,0,0,0-3.4-3.4H6" transform="translate(-6 -9.25)" fill="none" stroke="#4a4a4a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </g>
    </svg>
)

export const Tab = ({ content, path }: TabProps): JSX.Element => {

    const history = useHistory();

    const onTabClick = () => history.push(path);

    return (
        <div className="Tab-wrapper" onClick={ onTabClick }>
            <div className="Tab">
                { content === 'Back' ? backIcon :
                    <span>{ content }</span>
                }
            </div>
        </div>
    )
}