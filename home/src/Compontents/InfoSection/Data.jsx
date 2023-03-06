// This data file is where we can pass in different values and can update the design the application without hardcoding properties 
    // and is used to  create reusable compontents 


// about section object
export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'The Goals',
    headline: 'Encouraging to become more Sustainable',
    description: 'Steer people away from mindless spending habits of short term happiness that heavily contribute to environmental distress.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: '/images/svg-1.svg',
    alt: 'environment',
    dark: true,
    primary: true, 
    darkText: false
}

// Discover section object
export const homeObjTwo = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'The Community',
    headline: 'Foster Community with a more Sustainable Lifestyle',
    description: 'Create mutual identity within a community surrounding sustainability and share contributions with others.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: '/images/svg-2.svg',
    alt: 'community',
    dark: true,
    primary: false,
    darkText: false
}

// signup section Object
export const homeObjThree = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Join the Community',
    headline: 'Getting Started is Easy',
    description: "Get everything set up and ready in under 5 minutes. All you need to do is add your information and you're ready to become the better you.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: '/images/svg-3.svg',
    alt: 'heart',
    dark: true,
    primary: false,
    darkText: false
}