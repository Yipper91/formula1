import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import GridQ from './GridQ';

import formula1Img from './assets/img/formula1-background.png';
import fpImg from './assets/img/fp-img.png';
import qualImg from './assets/img/qual-img.png';
import rdImg from './assets/img/rd-img.png';
import podiumImg from './assets/img/podium-img.png';
import pressImg from './assets/img/press-img.png';
import highlightsImg from './assets/img/highlights-img.jpg';
import arrowDownIcon from './assets/img/icons/arrow-down.png';

export default function Home() {
    const { ref: snap1, inView: inView1 } = useInView({threshold: 0.5});
    const { ref: snap2, inView: inView2 } = useInView({threshold: 0.5});
    const { ref: snap3, inView: inView3 } = useInView({threshold: 0.5});
    const { ref: snap4, inView: inView4 } = useInView({threshold: 0.5});
    const { ref: snap5, inView: inView5 } = useInView({threshold: 0.5});

    return (
        <main className='page-wrap'>
            <section className='scroll-container'>
                <div className='scroll-section' id='snap1' ref={ snap1 }></div>
                <div className='scroll-section' id='snap2' ref={ snap2 }></div>
                <div className='scroll-section' id='snap3' ref={ snap3 }></div>
                <div className='scroll-section' id='snap4' ref={ snap4 }></div>
                <div className='scroll-section' id='snap5' ref={ snap5 }></div>
            </section>
            <section className='ontop landing-wrap'>
                <img src={ formula1Img } alt='Formula 1 Mercedes AMG racecar' className={ `landing-bg ${ inView1 ? `showBg` : `hideBg` }` } />
                <article className='landing-content'>
                    <div className='landing-text'>
                        <h1 className={ `${ inView1 ? `show1` : `hide1` }` }>CANADIAN <br></br> GRAND PRIX</h1>
                        <p className={ `${ inView1 ? `show1` : `hide1` }` }>Witness the world's greatest racing event.</p>
                        <div className={ `btn-wrap ${ inView1 ? `show2` : `hide2` }` }>
                            <button type='button' className='btn-fill'>Preview</button>
                            <button type='button' className='btn-outline'>Tickets</button>
                        </div>
                    </div>
                    <div className={ `track-wrap ${ inView1 ? `show3` : `hide3` }` }>
                        <div className='svg-track'>
                            <svg xmlns='http://www.w3.org/2000/svg' data-name='Canadian Grand Prix Track Outline' viewBox='0 0 1204.72 439.59'>
                                <path className='track' d='M27.06 5.21c8.92-.16 16.34 2.11 23.68 4.88 10.85 4.1 21.59 8.64 32.7 11.86 11.05 3.21 22.49 2.57 33.93.97 6.89-.96 13.97-.71 20.96-.71 13.25 0 26.5 0 39.74.37 10.33.28 20.65 1.01 30.97 1.7 15.91 1.06 31.82 2.26 47.72 3.38 8.34.59 16.69 1.09 25.03 1.69 6.69.48 13.42.76 20.06 1.67 9.33 1.27 18.6 2.94 27.87 4.63 9.23 1.68 18.44 3.47 27.61 5.46 11.34 2.47 22.61 5.25 33.93 7.78 6.12 1.37 12.32 2.41 18.43 3.79 6.38 1.44 12.69 3.2 19.07 4.66 5.9 1.35 11.85 2.46 17.76 3.75 9.51 2.07 19 4.25 28.53 6.29 6.53 1.4 13.11 2.58 19.64 3.96 6.17 1.3 12.31 2.75 18.47 4.1 4.08.89 8.18 1.71 12.26 2.59 6.15 1.33 12.28 2.71 18.43 4.05 4.2.92 8.42 1.78 12.62 2.71 6.15 1.36 12.3 2.78 18.45 4.15 3.95.88 7.91 1.68 11.87 2.54 6.27 1.38 12.54 2.79 18.81 4.17 4.1.9 8.21 1.74 12.3 2.64 6.15 1.36 12.28 2.77 18.43 4.12 4.09.9 8.2 1.71 12.29 2.62 6.28 1.39 12.55 2.82 18.83 4.23 3.72.83 7.44 1.65 11.17 2.44 6.52 1.38 13.05 2.67 19.55 4.13 6 1.34 12.01 2.68 17.93 4.34 6.94 1.94 13.89 3.95 20.64 6.45 7.4 2.74 10.43 9.2 10.36 16.38-.08 7.41 2.71 7.58 9.02 9.11 7.68 1.86 15.46 3.27 23.2 4.87 6.02 1.24 12.08 2.36 18.08 3.7 6.52 1.46 12.97 3.19 19.49 4.65 6.02 1.34 12.09 2.42 18.12 3.72 6.97 1.51 13.91 3.17 20.89 4.69 6.3 1.37 12.64 2.56 18.94 3.92 9.04 1.96 18.06 4.02 27.09 6.01 5.89 1.3 11.8 2.53 17.69 3.86 6.97 1.58 13.92 3.32 20.9 4.84 6.16 1.34 12.38 2.39 18.54 3.74 11.93 2.62 23.85 5.32 35.76 8.08 7.18 1.66 14.38 3.26 21.45 5.32 8.58 2.5 17.11 5.21 25.49 8.31 8.31 3.08 16.64 6.28 24.54 10.28 10.87 5.5 21.46 11.58 31.96 17.79 11.8 6.97 23.33 14.42 35.05 21.53 6.02 3.65 8.61 3.19 14.05-2.3 4.09-4.13 7.86-8.59 12.02-12.65 4.87-4.73 10.96-7.47 17.67-6.95 7.84.61 13.98 4.96 18.1 11.69 5.61 9.16 5.85 18.76 1.96 28.67-5.42 13.78-15.65 24.02-25.29 34.69-3.25 3.6-7.11 6.65-10.32 10.28-9.66 10.89-22.01 18.2-34.35 25.32-12.74 7.35-26.05 13.73-39.1 20.54-11.41 5.95-22.71 12.14-34.28 17.76-8.02 3.89-16.28 7.44-24.72 10.29-5.53 1.87-11.04-.36-15.56-3.86-3.47-2.68-6.66-5.79-9.61-9.05-5-5.52-10.32-8.14-18.08-5.49-6 2.05-12.55 2.47-18.81 3.83-5.09 1.1-10.14 2.41-15.16 3.8-4.85 1.34-9.62 2.99-14.47 4.35-13.73 3.86-26.93 9.02-39.22 16.28-16.92 10.01-35.08 14.89-54.64 12.46-12.21-1.51-24.31-4.22-35.63-9.39-12.39-5.65-24.77-11.33-36.98-17.35-8.94-4.41-17.62-9.35-26.36-14.16-4.99-2.75-10.29-3.35-15.86-3.01-3.69.23-6.49 1.97-8.06 5.05-2.03 4-3.65 8.23-5.15 12.46-4.91 13.93-13.32 24.34-27.39 30.24-10.42 4.37-21.13 4.29-31.56 2.7-10.36-1.59-20.4-5.48-30.48-8.68-7.46-2.37-14.77-5.2-22.12-7.91-6.98-2.57-13.91-5.27-20.88-7.89-6.19-2.33-12.41-4.59-18.59-6.96-8.75-3.36-17.55-6.61-26.2-10.23-10.46-4.38-20.96-8.72-31.1-13.76-15.94-7.92-31.61-16.39-47.38-24.67-23.35-12.26-45.02-27.02-65.35-43.8-17.98-14.83-36.12-29.47-53.88-44.56-5.21-4.42-10.27-9.57-13.62-15.41-1.99-3.47-1.1-9.02-.44-13.48.75-5.03 3.76-9.87 3.85-14.82.13-7.07-2.27-13.91-7.79-18.96-12.68-11.59-25.18-23.39-38.3-34.47-11.79-9.96-24.09-19.35-36.54-28.47-15.55-11.4-31.16-22.8-47.36-33.22-15.42-9.92-31.44-18.96-47.58-27.67-9.84-5.31-20.22-9.78-30.69-13.73-9.63-3.62-19.64-6.29-29.61-8.9-12.04-3.16-24.14-6.15-36.34-8.59-10.52-2.11-21.25-3.14-31.82-5.03C16.75 41.06 9.66 39 6.15 30.7c-2.87-6.81.19-15.66 5.08-20.23C16.01 6 21.67 4.43 27.11 5.25Z'/>
                            </svg>
                        </div>
                        <div className='svg-bg'>
                            <svg xmlns='http://www.w3.org/2000/svg' data-name='Canadian Grand Prix Track Background' viewBox='0 0 1204.72 439.59'>
                                <path className='track-bg' d='M27.06 5.21c8.92-.16 16.34 2.11 23.68 4.88 10.85 4.1 21.59 8.64 32.7 11.86 11.05 3.21 22.49 2.57 33.93.97 6.89-.96 13.97-.71 20.96-.71 13.25 0 26.5 0 39.74.37 10.33.28 20.65 1.01 30.97 1.7 15.91 1.06 31.82 2.26 47.72 3.38 8.34.59 16.69 1.09 25.03 1.69 6.69.48 13.42.76 20.06 1.67 9.33 1.27 18.6 2.94 27.87 4.63 9.23 1.68 18.44 3.47 27.61 5.46 11.34 2.47 22.61 5.25 33.93 7.78 6.12 1.37 12.32 2.41 18.43 3.79 6.38 1.44 12.69 3.2 19.07 4.66 5.9 1.35 11.85 2.46 17.76 3.75 9.51 2.07 19 4.25 28.53 6.29 6.53 1.4 13.11 2.58 19.64 3.96 6.17 1.3 12.31 2.75 18.47 4.1 4.08.89 8.18 1.71 12.26 2.59 6.15 1.33 12.28 2.71 18.43 4.05 4.2.92 8.42 1.78 12.62 2.71 6.15 1.36 12.3 2.78 18.45 4.15 3.95.88 7.91 1.68 11.87 2.54 6.27 1.38 12.54 2.79 18.81 4.17 4.1.9 8.21 1.74 12.3 2.64 6.15 1.36 12.28 2.77 18.43 4.12 4.09.9 8.2 1.71 12.29 2.62 6.28 1.39 12.55 2.82 18.83 4.23 3.72.83 7.44 1.65 11.17 2.44 6.52 1.38 13.05 2.67 19.55 4.13 6 1.34 12.01 2.68 17.93 4.34 6.94 1.94 13.89 3.95 20.64 6.45 7.4 2.74 10.43 9.2 10.36 16.38-.08 7.41 2.71 7.58 9.02 9.11 7.68 1.86 15.46 3.27 23.2 4.87 6.02 1.24 12.08 2.36 18.08 3.7 6.52 1.46 12.97 3.19 19.49 4.65 6.02 1.34 12.09 2.42 18.12 3.72 6.97 1.51 13.91 3.17 20.89 4.69 6.3 1.37 12.64 2.56 18.94 3.92 9.04 1.96 18.06 4.02 27.09 6.01 5.89 1.3 11.8 2.53 17.69 3.86 6.97 1.58 13.92 3.32 20.9 4.84 6.16 1.34 12.38 2.39 18.54 3.74 11.93 2.62 23.85 5.32 35.76 8.08 7.18 1.66 14.38 3.26 21.45 5.32 8.58 2.5 17.11 5.21 25.49 8.31 8.31 3.08 16.64 6.28 24.54 10.28 10.87 5.5 21.46 11.58 31.96 17.79 11.8 6.97 23.33 14.42 35.05 21.53 6.02 3.65 8.61 3.19 14.05-2.3 4.09-4.13 7.86-8.59 12.02-12.65 4.87-4.73 10.96-7.47 17.67-6.95 7.84.61 13.98 4.96 18.1 11.69 5.61 9.16 5.85 18.76 1.96 28.67-5.42 13.78-15.65 24.02-25.29 34.69-3.25 3.6-7.11 6.65-10.32 10.28-9.66 10.89-22.01 18.2-34.35 25.32-12.74 7.35-26.05 13.73-39.1 20.54-11.41 5.95-22.71 12.14-34.28 17.76-8.02 3.89-16.28 7.44-24.72 10.29-5.53 1.87-11.04-.36-15.56-3.86-3.47-2.68-6.66-5.79-9.61-9.05-5-5.52-10.32-8.14-18.08-5.49-6 2.05-12.55 2.47-18.81 3.83-5.09 1.1-10.14 2.41-15.16 3.8-4.85 1.34-9.62 2.99-14.47 4.35-13.73 3.86-26.93 9.02-39.22 16.28-16.92 10.01-35.08 14.89-54.64 12.46-12.21-1.51-24.31-4.22-35.63-9.39-12.39-5.65-24.77-11.33-36.98-17.35-8.94-4.41-17.62-9.35-26.36-14.16-4.99-2.75-10.29-3.35-15.86-3.01-3.69.23-6.49 1.97-8.06 5.05-2.03 4-3.65 8.23-5.15 12.46-4.91 13.93-13.32 24.34-27.39 30.24-10.42 4.37-21.13 4.29-31.56 2.7-10.36-1.59-20.4-5.48-30.48-8.68-7.46-2.37-14.77-5.2-22.12-7.91-6.98-2.57-13.91-5.27-20.88-7.89-6.19-2.33-12.41-4.59-18.59-6.96-8.75-3.36-17.55-6.61-26.2-10.23-10.46-4.38-20.96-8.72-31.1-13.76-15.94-7.92-31.61-16.39-47.38-24.67-23.35-12.26-45.02-27.02-65.35-43.8-17.98-14.83-36.12-29.47-53.88-44.56-5.21-4.42-10.27-9.57-13.62-15.41-1.99-3.47-1.1-9.02-.44-13.48.75-5.03 3.76-9.87 3.85-14.82.13-7.07-2.27-13.91-7.79-18.96-12.68-11.59-25.18-23.39-38.3-34.47-11.79-9.96-24.09-19.35-36.54-28.47-15.55-11.4-31.16-22.8-47.36-33.22-15.42-9.92-31.44-18.96-47.58-27.67-9.84-5.31-20.22-9.78-30.69-13.73-9.63-3.62-19.64-6.29-29.61-8.9-12.04-3.16-24.14-6.15-36.34-8.59-10.52-2.11-21.25-3.14-31.82-5.03C16.75 41.06 9.66 39 6.15 30.7c-2.87-6.81.19-15.66 5.08-20.23C16.01 6 21.67 4.43 27.11 5.25Z'/>
                            </svg>
                        </div>
                    </div>
                    <div className={ `more-wrap ${ inView1 ? `show3` : `hide1` }` }>
                        <p>About GP</p>
                        <img src={ arrowDownIcon } alt='Arrow Down icon' className='arrow-down' />
                    </div>
                </article>
            </section>
            <section className='ontop content-section'>
                <img src={ fpImg } alt='Overhead of the Las Vegas Grand Prix viewing stands' className={ `fp-bg ${ inView2 ? `showBg` : `hideBg` }` }  />
                <article className='content-wrap'>
                    <div className='content-left'>
                        <div className={ `content-heading ${ inView2 ? `show1` : `hide1` }` }>
                            <p className='sub-heading'>Stage 1</p>
                            <h2>Free Practice</h2>
                        </div>
                        <div className={ `fp-text ${ inView2 ? `show2` : `hide2` }` }>
                            <p>Every Grand Prix consists of three stages: <strong>free practice, qualifying, and race day</strong>. Certain GPs may also host a special <stong>"sprint"</stong> race which occurs before the qualifying match. The sprint gives drivers the opportunity to earn extra points before race day.</p>
                            <p>However, the key to race day success lies in three practice sessions before every Grand Prix. Drivers utilize these hour-long sessions to learn the track, test new vehicle setups, and gather technical data for their team. This stage is crucial as teams cannot afford any mistakes or malfunctions in the next stages.</p>
                        </div>
                    </div>
                    <div className='content-right'>
                    </div>
                </article>
                <div className={ `more-wrap ${ inView2 ? `show3` : `hide1` }` }>
                    <p>Qualifying</p>
                    <img src={ arrowDownIcon } alt='Arrow Down icon' className='arrow-down' />
                </div>
            </section>
            <section className='ontop content-section'>
                <img src={ qualImg } alt='Haas racing the Las Vegas Grand Prix on turn 5' className={ `fp-bg ${ inView3 ? `showBg` : `hideBg` }` }  />
                <article className='content-wrap'>
                    <div className='content-left'>
                        <div className={ `content-heading ${ inView3 ? `show1` : `hide1` }` }>
                            <p className='sub-heading'>Stage 2</p>
                            <h2>Qualifying</h2>
                        </div>
                        <div className={ `fp-text ${ inView3 ? `show2` : `hide2` }` }>
                            <p>Once the free practice sessions have concluded, a <strong>sprint race</strong> may give drivers their first opportunity to earn points. This 100km race is a shortened format of the Grand Prix which will award first place 8 points and seventh place 1 point. However, for most GPs, qualifying is next stage which provides the crucial battleground that determines a driver's starting position on the grid.</p>
                            <p>Drivers race in a three-stage elimination battle, pushing to set the fastest lap within the time limit. Each stage eliminates the bottom five drivers, giving the rest of the pack more time to improve their position. No points are awarded during qualifying, but high in the standings offer drivers a competitive advantage, putting them in prime position to fight for victory come race day.</p>
                        </div>
                    </div>
                    <div className={ `content-right center ${ inView3 ? `show3` : `hide3` }` }>
                        <GridQ/>
                    </div>
                </article>
                <div className={ `more-wrap ${ inView3 ? `show3` : `hide1` }` }>
                    <p>Race Day</p>
                    <img src={ arrowDownIcon } alt='Arrow Down icon' className='arrow-down' />
                </div>
            </section>
            <section className='ontop content-section'>
                <img src={ rdImg } alt='Depiction of the Las Vegas Grand Prix grid' className={ `fp-bg ${ inView4 ? `showBg` : `hideBg` }` }  />
                <article className='content-wrap'>
                    <div className='content-left'>
                        <div className={ `content-heading ${ inView4 ? `show1` : `hide1` }` }>
                            <p className='sub-heading'>Stage 3</p>
                            <h2>Race Day</h2>
                        </div>
                        <div className={ `fp-text ${ inView4 ? `show2` : `hide2` }` }>
                            <p>The Grand Prix race day is where the true test of skill, precision, and teamwork unfolds. During this final stage, driver skill and team strategy are at the fore front. Whether its hot, humid, or raining, teams must decide on which tires will be used to gain the most advantage on the track. Drivers must also strategically use DRS (drag reduction system) which will help them gain speed for a short amount of time, potentially passing other competitors if used correctly.</p>
                            <p>Completing the race will award points to the top ten finishers, with a whopping 25 points awarded to the driver securing pole position (first place). An additional point is also awarded to the driver with the fastest lap.</p>
                        </div>
                    </div>
                    <div className={ `content-right center ${ inView4 ? `show2` : `hide2` }` }>
                        <div className='position'>
                            <p className='p1'>25 pts</p>
                            <p className='p2'>18 pts</p>
                            <p className='p3'>15 pts</p>
                        </div>
                    </div>
                </article>
                <div className={ `more-wrap ${ inView4 ? `show3` : `hide1` }` }>
                    <p>Related Content</p>
                    <img src={ arrowDownIcon } alt='Arrow Down icon' className='arrow-down' />
                </div>
            </section>
            <section className='ontop content-section'>
                <img src={ podiumImg } alt='Max Verstappen winning the 2023 Singapore Grand Prix' className={ `fp-bg ${ inView5 ? `showBg` : `hideBg` }` }  />
                <article className='content-wrap'>
                    <div className={ `content-left news-wrap ${ inView5 ? `show1` : `hide1` }` }>
                        <img src={ pressImg } alt='' className={ `news-img ${ inView5 ? `showBg` : `hideBg` }` }  />
                        <div className='news'>
                            <div className='content-heading'>
                                <p className='sub-heading'>News</p>
                                <h2>Post-Race Press Conference</h2>
                            </div>
                            <div className='fp-text'>
                                <p>Spanish Grand Prix winner Lando Norris, Formula 1 points leader Max Verstappen, and seven-time champion Lewis Hamilton discuss the race results and answer media questions.</p>
                                <button type='button' className='btn-fill'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className={ `content-right news-wrap ${ inView5 ? `show2` : `hide2` }` }>
                        <img src={ highlightsImg } alt='' className={ `news-img ${ inView5 ? `showBg` : `hideBg` }` }  />
                        <div className='news'>
                            <div className='content-heading'>
                                <p className='sub-heading'>News</p>
                                <h2>Spanish Grand Prix Highlights</h2>
                            </div>
                            <div className='fp-text'>
                                <p>Re-live the thrilling action of the Spanish Grand Prix. From an busy free practice to an intence qualifying race, the top Formula 1 drivers battle for points in the tenth Grand Prix of the season.</p>
                                <button type='button' className='btn-fill'>Read More</button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}