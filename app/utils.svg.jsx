export const menu_icon = (color="#000") => (
<svg width="32" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M32 32.92H0v-3.5h32v3.5Z" fill={color}/>
    <path d="m20.72 25.18-1.68-1.72-1.44-1.35-3.53-3.74a31.73 31.73 0 0 1-1.58-1.83 7.26 7.26 0 0 1-1.56-2.88 4.06 4.06 0 0 1 .5-3.46 4.67 4.67 0 0 1 1.9-1.6 6.3 6.3 0 0 1 2.8-.6 6.27 6.27 0 0 1 4.11 1.51c.51.48.87 1.04 1.08 1.68L18.3 13a3.2 3.2 0 0 0-.9-1.34c-.31-.24-.69-.36-1.12-.36-.35 0-.65.05-.89.17a1.2 1.2 0 0 0-.55.5c-.13.2-.2.47-.2.8 0 .3.13.67.37 1.12.25.43.57.89.96 1.37a32.11 32.11 0 0 0 2.25 2.42L20 19.62l1.66 1.5 3.81 4.06h-4.75Zm-6.07.24c-1.27 0-2.4-.24-3.41-.72a6.13 6.13 0 0 1-2.38-1.96A5.23 5.23 0 0 1 9 16.8a6.23 6.23 0 0 1 3.03-2.14l2.4 2.33c-.9.2-1.57.51-2.01.96a2.3 2.3 0 0 0-.68 1.7c0 .55.13 1.02.39 1.42.25.4.63.71 1.13.94.5.2 1.08.3 1.77.3.64 0 1.23-.12 1.78-.38a5.63 5.63 0 0 0 2.57-2.83 8.6 8.6 0 0 0 .55-2.23h3.57c-.14 1.02-.39 1.98-.74 2.86-.35.86-.8 1.64-1.34 2.35a8.21 8.21 0 0 1-4.13 2.95c-.82.26-1.7.38-2.64.38Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M32 4H0V.5h32V4Z" fill={color}/>
</svg>

)

export const close_icon = (color="#000") => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.23744" y1="1.76256" x2="23.8649" y2="24.39" stroke={color} strokeWidth="3.5"/>
        <line x1="1.76256" y1="24.39" x2="24.39" y2="1.76256" stroke={color} strokeWidth="3.5"/>
    </svg>

)

export const gallery_icon = (color="#000") => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={color === '#000' ? 'fill-icon--light' : 'fill-icon--dark' + ' duration-300'} x="1.75" y="1.75" width="10.5" height="10.5" stroke={color} strokeWidth="3.5"/>
        <rect className={color === '#000' ? 'fill-icon--light' : 'fill-icon--dark' + ' duration-300'}  x="1.75" y="19.75" width="10.5" height="10.5" stroke={color} strokeWidth="3.5"/>
        <rect className={color === '#000' ? 'fill-icon--light' : 'fill-icon--dark' + ' duration-300'} x="19.75" y="1.75" width="10.5" height="10.5" stroke={color} strokeWidth="3.5"/>
        <rect className={color === '#000' ? 'fill-icon--light' : 'fill-icon--dark' + ' duration-300'} x="19.75" y="19.75" width="10.5" height="10.5" stroke={color} strokeWidth="3.5"/>
    </svg>
)

export const sun_icon = (color="#000") => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--> */}
    <path fill={color} d="M375.7 19.7a24 24 0 0 0-37.2-15.4L256 61.1 173.5 4.2a24 24 0 0 0-37.2 15.4l-18.1 98.5-98.5 18.2a24 24 0 0 0-15.4 37.2L61.1 256 4.2 338.5a24 24 0 0 0 15.4 37.2l98.5 18.1 18.1 98.5a24 24 0 0 0 37.2 15.4l82.6-56.8 82.5 56.9a24 24 0 0 0 37.2-15.4l18.1-98.5 98.5-18.1a24 24 0 0 0 15.4-37.2L450.9 256l56.9-82.5a24 24 0 0 0-15.4-37.2l-98.5-18.1-18.2-98.5zM269.6 110l65.6-45.2 14.4 78.3a24 24 0 0 0 19.3 19.3l78.3 14.4-45.2 65.6c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4a24 24 0 0 0-19.3 19.3l-14.4 78.3-65.6-45.2c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3a24 24 0 0 0-19.3-19.3l-78.3-14.4 45.2-65.6c5.7-8.2 5.7-19 0-27.2l-45.2-65.6 78.3-14.4a24 24 0 0 0 19.3-19.3l14.4-78.3 65.6 45.2c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm-64-112a64 64 0 1 1 128 0 64 64 0 1 1-128 0z"/>
</svg>
)

export const moon_icon = (color="#000") => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--> */}
        <path fill={color} d="M144.7 98.7a224 224 0 0 0 117.3 329A175.7 175.7 0 0 1 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66A223.6 223.6 0 0 0 0 256a223.7 223.7 0 0 0 351.9 183.4l5.5-4a215.7 215.7 0 0 0 21.8-18.7 16 16 0 0 0-13.9-27.2c-3.7.6-7.4 1.2-11.1 1.6-5 .5-10.1.9-15.3 1h-4a175.8 175.8 0 0 1-175.2-176c0-54.8 24.9-103.7 64.1-136l3.2-2.6a158.3 158.3 0 0 1 22.1-14.8 16 16 0 0 0-6.6-29.8c-3.6-.3-7.1-.5-10.7-.6l-8.2-.1-9.8.2-6.9.4z"/>
    </svg>
)

export const arrow_icon = (color="#000") => (
    <svg id="arrow" className="w-6 h-6 m-3" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 140.2">
        <path className={color === '#000' ? 'fill-icon--light' : 'fill-icon--dark' + ' duration-300'} fill={color} d="m125 140-17-16 42-41-1-1H0V58h150l-42-41 17-17 70 70-70 70Z" data-name="Layer 1"/>
    </svg>
)

export const facebook_icon = (color="#000") => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-[15px] m-auto" viewBox="0 0 320 512">
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path fill={color} d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
)

export const instagram_icon = (color="#000") => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto" viewBox="0 0 448 512">
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path fill={color} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
)

export const tiktok_icon = (color="#000") => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto" viewBox="0 0 448 512">
        {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
        <path fill={color} d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
    </svg>
)