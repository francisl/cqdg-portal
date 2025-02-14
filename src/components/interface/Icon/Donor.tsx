import React from 'react';
import cx from 'classnames';

import { IICon } from 'types/generic';

import styles from './Donor.module.scss';

const Donor: React.FC<IICon> = ({ className = '', colored = true, size = 48 }) => (
    <svg
        className={cx(className, { [styles.colored]: colored })}
        fill="currentColor"
        height={size}
        viewBox="0 0 48 48"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path clip-rule="evenodd" d="M24.75 32.25V48H23.25V32.25H24.75Z" fill-rule="evenodd" />
        <path
            clip-rule="evenodd"
            d="M24 1.5C22.3431 1.5 21 2.84315 21 4.5C21 6.15685 22.3431 7.5 24 7.5C25.6569 7.5 27 6.15685 27 4.5C27 2.84315 25.6569 1.5 24 1.5ZM19.5 4.5C19.5 2.01472 21.5147 0 24 0C26.4853 0 28.5 2.01472 28.5 4.5C28.5 6.98528 26.4853 9 24 9C21.5147 9 19.5 6.98528 19.5 4.5Z"
            fill-rule="evenodd"
        />
        <path
            clip-rule="evenodd"
            d="M15 15.75C15 12.8511 17.3502 10.5 20.25 10.5H27.75C30.649 10.5 33 12.851 33 15.75V16.5H31.5V15.75C31.5 13.6795 29.8205 12 27.75 12H20.25C18.1788 12 16.5 13.6794 16.5 15.75V16.5H15V15.75Z"
            fill-rule="evenodd"
        />
        <path clip-rule="evenodd" d="M12 35.25V48H10.5V35.25H12Z" fill-rule="evenodd" />
        <path
            clip-rule="evenodd"
            d="M11.25 8.25C10.0074 8.25 9 9.25736 9 10.5C9 11.7426 10.0074 12.75 11.25 12.75C12.4926 12.75 13.5 11.7426 13.5 10.5C13.5 9.25736 12.4926 8.25 11.25 8.25ZM7.5 10.5C7.5 8.42893 9.17893 6.75 11.25 6.75C13.3211 6.75 15 8.42893 15 10.5C15 12.5711 13.3211 14.25 11.25 14.25C9.17893 14.25 7.5 12.5711 7.5 10.5Z"
            fill-rule="evenodd"
        />
        <path
            clip-rule="evenodd"
            d="M3 20.25C3 17.7643 5.01429 15.75 7.5 15.75H15C17.4857 15.75 19.5 17.7643 19.5 20.25V33.75H16.5V48H15V32.25H18V20.25C18 18.5927 16.6573 17.25 15 17.25H7.5C5.84271 17.25 4.5 18.5927 4.5 20.25V32.25H7.5V48H6V33.75H3V20.25Z"
            fill-rule="evenodd"
        />
        <path clip-rule="evenodd" d="M37.5 35.25V48H36V35.25H37.5Z" fill-rule="evenodd" />
        <path
            clip-rule="evenodd"
            d="M36.75 8.25C35.5074 8.25 34.5 9.25736 34.5 10.5C34.5 11.7426 35.5074 12.75 36.75 12.75C37.9926 12.75 39 11.7426 39 10.5C39 9.25736 37.9926 8.25 36.75 8.25ZM33 10.5C33 8.42893 34.6789 6.75 36.75 6.75C38.8211 6.75 40.5 8.42893 40.5 10.5C40.5 12.5711 38.8211 14.25 36.75 14.25C34.6789 14.25 33 12.5711 33 10.5Z"
            fill-rule="evenodd"
        />
        <path
            clip-rule="evenodd"
            d="M28.5 20.25C28.5 17.7643 30.5143 15.75 33 15.75H40.5C42.9857 15.75 45 17.7643 45 20.25V33.75H42V48H40.5V32.25H43.5V20.25C43.5 18.5927 42.1573 17.25 40.5 17.25H33C31.3427 17.25 30 18.5927 30 20.25V32.25H33V48H31.5V33.75H28.5V20.25Z"
            fill-rule="evenodd"
        />
        <path clip-rule="evenodd" d="M23.25 15V13.5H24.75V15H23.25Z" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M23.25 18V16.5H24.75V18H23.25Z" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M36 20.25V18.75H37.5V20.25H36Z" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M10.5 20.25V18.75H12V20.25H10.5Z" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M18 48V33H19.5V48H18Z" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M28.5 48V33H30V48H28.5Z" fill-rule="evenodd" />
    </svg>
);

export default Donor;
