// === EXPERIMENTAL FILE ===
// Reminder to self that I exported my vanilla JavaScript and attempted to convert it in React without hooks. (Do Not Use)



// import React, { useEffect, useRef } from 'react';

// export default function Scroll() {
//     const landingBgRef = useRef(null);
//     const landingTextRef = useRef(null);
//     const trackWrapRef = useRef(null);

//     const fpBgRef = useRef(null);
//     const fpHeadingRef = useRef(null);
//     const fpTextRef = useRef(null);

//     const section1Ref = useRef(null);
//     const section2Ref = useRef(null);

//     const threshold = { threshold: 0.5 };

//     const enter1 = () => {
//     landingBgRef.current.classList.add('reveal1');
//     landingTextRef.current.classList.add('reveal2');
//     trackWrapRef.current.classList.add('reveal3');
//     landingBgRef.current.classList.remove('hide3');
//     landingTextRef.current.classList.remove('hide2');
//     trackWrapRef.current.classList.remove('hide1');
//     console.log("Section 1 is in view");
//     };

//     const leave1 = () => {
//     landingBgRef.current.classList.remove('reveal1');
//     landingTextRef.current.classList.remove('reveal2');
//     trackWrapRef.current.classList.remove('reveal3');
//     landingBgRef.current.classList.add('hide3');
//     landingTextRef.current.classList.add('hide2');
//     trackWrapRef.current.classList.add('hide1');
//     console.log("Section 1 is in view");
//     };

//     const enter2 = () => {
//     fpBgRef.current.classList.add('reveal1');
//     fpHeadingRef.current.classList.add('reveal2');
//     fpTextRef.current.classList.add('reveal3');
//     fpBgRef.current.classList.remove('hide3');
//     fpHeadingRef.current.classList.remove('hide2');
//     fpTextRef.current.classList.remove('hide1');
//     };

//     const leave2 = () => {
//     fpBgRef.current.classList.remove('reveal1');
//     fpHeadingRef.current.classList.remove('reveal2');
//     fpTextRef.current.classList.remove('reveal3');
//     fpBgRef.current.classList.add('hide3');
//     fpHeadingRef.current.classList.add('hide2');
//     fpTextRef.current.classList.add('hide1');
//     };

//     useEffect(() => {
//         const watchSection = (enterView, leaveView) => (entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     console.log('Entering view:', entry.target);
//                     enterView();
//                 } else {
//                     console.log('Leaving view:', entry.target);
//                     leaveView();
//                 }
//             });
//         };

//         const watch1 = new IntersectionObserver(watchSection(enter1, leave1), threshold);
//         const watch2 = new IntersectionObserver(watchSection(enter2, leave2), threshold);

//         if (section1Ref.current) {
//             console.log('Seeing Section 1');
//             watch1.observe(section1Ref.current);
//         }
//         if (section2Ref.current) {
//             console.log('Seeing Section 2');
//             watch2.observe(section2Ref.current);
//         }

//         return () => {
//             watch1.disconnect();
//             watch2.disconnect();
//         };

//     }, []);
// };