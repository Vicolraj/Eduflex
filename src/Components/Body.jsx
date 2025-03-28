import './Styles/BodyStyle.css'
import ActionBtn from './ActionBtn'
import heroPic from '../assets/hero-girl.png'
import heroBg from '../assets/heroBg.svg'
import learnMoreRight from '../assets/learnMoreRight.png'
import learnMoreLeft from '../assets/learnMoreLeft.png'
import flare1 from '../assets/flare1.png'
import flare2 from '../assets/flare2.png'
import flare3 from '../assets/flare3.png'
import howitworksimage from '../assets/howItWorksHeroung.png'
import aboutUsImg from '../assets/abu.png'
import { useState } from 'react'
import eduflexbyx3lab from '../assets/EDUFLEXBYx3.svg'
import eduflexbyx3labback from '../assets/eduflexbyx3labblack.svg'
import {Link, useNavigate} from 'react-router-dom'

const administrator_icon = <svg width="29" height="28" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M22.5038 13.0833C23.0814 13.0831 23.6377 13.3013 24.0612 13.694C24.4848 14.0868 24.7442 14.6251 24.7875 15.2011L24.7933 15.3728V22.2413C24.7934 22.8189 24.5753 23.3753 24.1825 23.7988C23.7898 24.2223 23.2515 24.4818 22.6755 24.5251L22.5038 24.5308H17.9248C17.3471 24.531 16.7908 24.3128 16.3673 23.9201C15.9437 23.5273 15.6843 22.989 15.641 22.413L15.6353 22.2413V15.3728C15.6351 14.7952 15.8532 14.2388 16.246 13.8153C16.6387 13.3918 17.1771 13.1323 17.753 13.089L17.9248 13.0833H22.5038ZM22.5038 3.92529C23.111 3.92529 23.6933 4.16651 24.1227 4.59587C24.552 5.02524 24.7933 5.60758 24.7933 6.21479V8.5043C24.7933 9.11151 24.552 9.69385 24.1227 10.1232C23.6933 10.5526 23.111 10.7938 22.5038 10.7938H17.9248C17.3175 10.7938 16.7352 10.5526 16.3058 10.1232C15.8765 9.69385 15.6353 9.11151 15.6353 8.5043V6.21479C15.6353 5.60758 15.8765 5.02524 16.3058 4.59587C16.7352 4.16651 17.3175 3.92529 17.9248 3.92529H22.5038Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0562 3.92578C11.6635 3.92578 12.2458 4.167 12.6752 4.59636C13.1045 5.02573 13.3458 5.60807 13.3458 6.21528V13.0838C13.3458 13.691 13.1045 14.2733 12.6752 14.7027C12.2458 15.1321 11.6635 15.3733 11.0562 15.3733H6.47725C5.87003 15.3733 5.28769 15.1321 4.85832 14.7027C4.42896 14.2733 4.18774 13.691 4.18774 13.0838V6.21528C4.18774 5.60807 4.42896 5.02573 4.85832 4.59636C5.28769 4.167 5.87003 3.92578 6.47725 3.92578H11.0562Z" />
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.0562 17.6626C11.6635 17.6626 12.2458 17.9038 12.6752 18.3332C13.1045 18.7625 13.3458 19.3449 13.3458 19.9521V22.2416C13.3458 22.8488 13.1045 23.4312 12.6752 23.8605C12.2458 24.2899 11.6635 24.5311 11.0562 24.5311H6.47725C5.87003 24.5311 5.28769 24.2899 4.85832 23.8605C4.42896 23.4312 4.18774 22.8488 4.18774 22.2416V19.9521C4.18774 19.3449 4.42896 18.7625 4.85832 18.3332C5.28769 17.9038 5.87003 17.6626 6.47725 17.6626H11.0562Z"   />
</svg>

const student_icon = <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_81_1202)">
<path d="M23.5568 4.18632L13.7808 -0.00341797L4.00472 4.18632L8.89275 6.28119V9.07434C8.89275 9.07434 10.5226 8.37605 13.7808 8.37605C17.039 8.37605 18.6688 9.07434 18.6688 9.07434V6.28119L23.5568 4.18632ZM23.5568 4.18632V9.77263V4.18632ZM18.6688 9.07434V10.4709C18.6688 11.1128 18.5424 11.7484 18.2967 12.3415C18.0511 12.9345 17.691 13.4734 17.2371 13.9273C16.7832 14.3812 16.2444 14.7412 15.6513 14.9869C15.0583 15.2325 14.4227 15.3589 13.7808 15.3589C13.1389 15.3589 12.5033 15.2325 11.9102 14.9869C11.3172 14.7412 10.7783 14.3812 10.3244 13.9273C9.87052 13.4734 9.51047 12.9345 9.26483 12.3415C9.01918 11.7484 8.89275 11.1128 8.89275 10.4709V9.07434M7.8914 20.5305C6.35517 21.4871 2.32464 23.4382 4.77843 25.8808C5.97809 27.0762 7.31461 27.9282 8.99191 27.9282H18.5696C20.2483 27.9282 21.5835 27.0748 22.7831 25.8808C25.2369 23.4382 21.2078 21.4871 19.6701 20.5319C17.9022 19.4333 15.8622 18.8511 13.7808 18.8511C11.6993 18.8511 9.65935 19.4333 7.8914 20.5319"/>
</g>
<defs>
<clipPath id="clip0_81_1202">
<rect width="27.474" height="27.474" fill="white" transform="translate(0.158203 -0.00341797)"/>
</clipPath>
</defs>
</svg>

const institution_icon = <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
<path d="M9.97706 3.44043C9.29394 3.44043 8.6388 3.7118 8.15577 4.19483C7.67273 4.67787 7.40137 5.333 7.40137 6.01612V23.1874C7.40137 23.4151 7.49182 23.6335 7.65283 23.7945C7.81385 23.9555 8.03223 24.0459 8.25993 24.0459H10.8356V19.7531C10.8356 19.5254 10.9261 19.307 11.0871 19.146C11.2481 18.985 11.4665 18.8946 11.6942 18.8946H18.5627C18.7904 18.8946 19.0088 18.985 19.1698 19.146C19.3308 19.307 19.4213 19.5254 19.4213 19.7531V24.0459H21.9969C22.2246 24.0459 22.443 23.9555 22.604 23.7945C22.765 23.6335 22.8555 23.4151 22.8555 23.1874V14.6018C22.8555 13.9186 22.5841 13.2635 22.1011 12.7805C21.6181 12.2974 20.9629 12.0261 20.2798 12.0261H19.4213V6.01612C19.4213 5.333 19.1499 4.67787 18.6668 4.19483C18.1838 3.7118 17.5287 3.44043 16.8456 3.44043H9.97706ZM12.5527 7.73325C12.5527 7.96095 12.4623 8.17933 12.3013 8.34034C12.1403 8.50135 11.9219 8.59181 11.6942 8.59181C11.4665 8.59181 11.2481 8.50135 11.0871 8.34034C10.9261 8.17933 10.8356 7.96095 10.8356 7.73325C10.8356 7.50554 10.9261 7.28716 11.0871 7.12615C11.2481 6.96514 11.4665 6.87468 11.6942 6.87468C11.9219 6.87468 12.1403 6.96514 12.3013 7.12615C12.4623 7.28716 12.5527 7.50554 12.5527 7.73325ZM12.5527 12.0261C12.5527 12.2538 12.4623 12.4721 12.3013 12.6332C12.1403 12.7942 11.9219 12.8846 11.6942 12.8846C11.4665 12.8846 11.2481 12.7942 11.0871 12.6332C10.9261 12.4721 10.8356 12.2538 10.8356 12.0261C10.8356 11.7984 10.9261 11.58 11.0871 11.419C11.2481 11.258 11.4665 11.1675 11.6942 11.1675C11.9219 11.1675 12.1403 11.258 12.3013 11.419C12.4623 11.58 12.5527 11.7984 12.5527 12.0261ZM12.5527 16.3189C12.5527 16.5466 12.4623 16.765 12.3013 16.926C12.1403 17.087 11.9219 17.1774 11.6942 17.1774C11.4665 17.1774 11.2481 17.087 11.0871 16.926C10.9261 16.765 10.8356 16.5466 10.8356 16.3189C10.8356 16.0912 10.9261 15.8728 11.0871 15.7118C11.2481 15.5508 11.4665 15.4603 11.6942 15.4603C11.9219 15.4603 12.1403 15.5508 12.3013 15.7118C12.4623 15.8728 12.5527 16.0912 12.5527 16.3189ZM15.987 7.73325C15.987 7.96095 15.8965 8.17933 15.7355 8.34034C15.5745 8.50135 15.3561 8.59181 15.1284 8.59181C14.9007 8.59181 14.6824 8.50135 14.5213 8.34034C14.3603 8.17933 14.2699 7.96095 14.2699 7.73325C14.2699 7.50554 14.3603 7.28716 14.5213 7.12615C14.6824 6.96514 14.9007 6.87468 15.1284 6.87468C15.3561 6.87468 15.5745 6.96514 15.7355 7.12615C15.8965 7.28716 15.987 7.50554 15.987 7.73325ZM15.987 12.0261C15.987 12.2538 15.8965 12.4721 15.7355 12.6332C15.5745 12.7942 15.3561 12.8846 15.1284 12.8846C14.9007 12.8846 14.6824 12.7942 14.5213 12.6332C14.3603 12.4721 14.2699 12.2538 14.2699 12.0261C14.2699 11.7984 14.3603 11.58 14.5213 11.419C14.6824 11.258 14.9007 11.1675 15.1284 11.1675C15.3561 11.1675 15.5745 11.258 15.7355 11.419C15.8965 11.58 15.987 11.7984 15.987 12.0261ZM15.987 16.3189C15.987 16.5466 15.8965 16.765 15.7355 16.926C15.5745 17.087 15.3561 17.1774 15.1284 17.1774C14.9007 17.1774 14.6824 17.087 14.5213 16.926C14.3603 16.765 14.2699 16.5466 14.2699 16.3189C14.2699 16.0912 14.3603 15.8728 14.5213 15.7118C14.6824 15.5508 14.9007 15.4603 15.1284 15.4603C15.3561 15.4603 15.5745 15.5508 15.7355 15.7118C15.8965 15.8728 15.987 16.0912 15.987 16.3189ZM19.4213 16.3189C19.4213 16.5466 19.3308 16.765 19.1698 16.926C19.0088 17.087 18.7904 17.1774 18.5627 17.1774C18.335 17.1774 18.1166 17.087 17.9556 16.926C17.7946 16.765 17.7041 16.5466 17.7041 16.3189C17.7041 16.0912 17.7946 15.8728 17.9556 15.7118C18.1166 15.5508 18.335 15.4603 18.5627 15.4603C18.7904 15.4603 19.0088 15.5508 19.1698 15.7118C19.3308 15.8728 19.4213 16.0912 19.4213 16.3189ZM17.7041 24.0459V20.6117H15.9922V24.0459H17.7041ZM14.275 24.0459V20.6117H12.5527V24.0459H14.275Z" />
</svg>

const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" className='socialICon' viewBox="0 0 32 32" fill="none">
<path d="M29.3334 15.9998C29.3334 8.63984 23.3601 2.6665 16.0001 2.6665C8.64008 2.6665 2.66675 8.63984 2.66675 15.9998C2.66675 22.4532 7.25342 27.8265 13.3334 29.0665V19.9998H10.6667V15.9998H13.3334V12.6665C13.3334 10.0932 15.4267 7.99984 18.0001 7.99984H21.3334V11.9998H18.6667C17.9334 11.9998 17.3334 12.5998 17.3334 13.3332V15.9998H21.3334V19.9998H17.3334V29.2665C24.0667 28.5998 29.3334 22.9198 29.3334 15.9998Z" fill="white"/>
</svg>

const linkedinICon = <svg xmlns="http://www.w3.org/2000/svg" className='socialICon' viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H24ZM10.6667 13.3333C10.313 13.3333 9.97391 13.4738 9.72386 13.7239C9.47381 13.9739 9.33333 14.313 9.33333 14.6667V21.3333C9.33333 21.687 9.47381 22.0261 9.72386 22.2761C9.97391 22.5262 10.313 22.6667 10.6667 22.6667C11.0203 22.6667 11.3594 22.5262 11.6095 22.2761C11.8595 22.0261 12 21.687 12 21.3333V14.6667C12 14.313 11.8595 13.9739 11.6095 13.7239C11.3594 13.4738 11.0203 13.3333 10.6667 13.3333ZM14.6667 12C14.313 12 13.9739 12.1405 13.7239 12.3905C13.4738 12.6406 13.3333 12.9797 13.3333 13.3333V21.3333C13.3333 21.687 13.4738 22.0261 13.7239 22.2761C13.9739 22.5262 14.313 22.6667 14.6667 22.6667C15.0203 22.6667 15.3594 22.5262 15.6095 22.2761C15.8595 22.0261 16 21.687 16 21.3333V16.4533C16.4067 15.9947 17.0933 15.456 17.8573 15.1293C18.3013 14.94 18.9693 14.8627 19.4333 15.0093C19.5873 15.0484 19.7244 15.1363 19.824 15.26C19.8933 15.3533 20 15.5613 20 16V21.3333C20 21.687 20.1405 22.0261 20.3905 22.2761C20.6406 22.5262 20.9797 22.6667 21.3333 22.6667C21.687 22.6667 22.0261 22.5262 22.2761 22.2761C22.5262 22.0261 22.6667 21.687 22.6667 21.3333V16C22.6667 15.1067 22.44 14.312 21.968 13.6747C21.5337 13.0967 20.9258 12.673 20.2333 12.4653C19.0307 12.088 17.6987 12.2973 16.8093 12.6787C16.5246 12.8011 16.2473 12.94 15.9787 13.0947C15.9228 12.7875 15.7608 12.5096 15.5211 12.3096C15.2813 12.1095 14.9789 12 14.6667 12ZM10.6667 9.33333C10.313 9.33333 9.97391 9.47381 9.72386 9.72386C9.47381 9.97391 9.33333 10.313 9.33333 10.6667C9.33333 11.0203 9.47381 11.3594 9.72386 11.6095C9.97391 11.8595 10.313 12 10.6667 12C11.0203 12 11.3594 11.8595 11.6095 11.6095C11.8595 11.3594 12 11.0203 12 10.6667C12 10.313 11.8595 9.97391 11.6095 9.72386C11.3594 9.47381 11.0203 9.33333 10.6667 9.33333Z" fill="white"/>
</svg>

const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" className='socialICon' viewBox="0 0 32 32" fill="none">
<path d="M21.3333 4C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333ZM16 10.6667C14.5855 10.6667 13.229 11.2286 12.2288 12.2288C11.2286 13.229 10.6667 14.5855 10.6667 16C10.6667 17.4145 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4145 21.3333 16C21.3333 14.5855 20.7714 13.229 19.7712 12.2288C18.771 11.2286 17.4145 10.6667 16 10.6667ZM16 13.3333C16.7072 13.3333 17.3855 13.6143 17.8856 14.1144C18.3857 14.6145 18.6667 15.2928 18.6667 16C18.6667 16.7072 18.3857 17.3855 17.8856 17.8856C17.3855 18.3857 16.7072 18.6667 16 18.6667C15.2928 18.6667 14.6145 18.3857 14.1144 17.8856C13.6143 17.3855 13.3333 16.7072 13.3333 16C13.3333 15.2928 13.6143 14.6145 14.1144 14.1144C14.6145 13.6143 15.2928 13.3333 16 13.3333ZM22 8.66667C21.6464 8.66667 21.3072 8.80714 21.0572 9.05719C20.8071 9.30724 20.6667 9.64638 20.6667 10C20.6667 10.3536 20.8071 10.6928 21.0572 10.9428C21.3072 11.1929 21.6464 11.3333 22 11.3333C22.3536 11.3333 22.6928 11.1929 22.9428 10.9428C23.1929 10.6928 23.3333 10.3536 23.3333 10C23.3333 9.64638 23.1929 9.30724 22.9428 9.05719C22.6928 8.80714 22.3536 8.66667 22 8.66667Z" fill="white"/>
</svg>

const arrowdown = <svg xmlns="http://www.w3.org/2000/svg" className='arrows' viewBox="0 0 24 25" fill="none">
<path d="M19.9137 9.9375L13.3937 16.4575C12.6237 17.2275 11.3637 17.2275 10.5937 16.4575L4.07373 9.9375" stroke="#063465" stroke-width="3.21154" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const arrowup = <svg xmlns="http://www.w3.org/2000/svg" className='arrows' viewBox="0 0 24 25" fill="none">
<path d="M19.9137 15.9214L13.3937 9.40139C12.6237 8.63139 11.3637 8.63139 10.5937 9.40139L4.07373 15.9214" stroke="#063465" stroke-width="3.21154" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const bullet = <span style={{fontWeight: "bolder"}} className='bullet'>•&nbsp;&nbsp;&nbsp;</span>

export default function HomePage(){
    const navigate = useNavigate()
    
    return (
        <section style={{fontFamily: "var(--afacad)", animation: 'fade-in 1s '}} className="component-container">
            <HeroSection />
            {/* ====================================================================================
                VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
            ==================================================================================== */}
            <section className='learn_more_container'>
                <div className='left'><img src={learnMoreLeft}/></div>
                <div className='center'>
                    <article >
                        <h2 >Trusted by Institutions</h2>
                        <h2 style={{color: "grey"}} >Trusted by Students</h2>
                        <p>Eduflex is built to meet the evolving needs of universities and students, delivering smarter ways to learn, manage, and grow together.</p>

                        <a href='#aboutus'><ActionBtn isLight={true}  content='Learn More About Eduflex' btnWidth={240} /></a>
                    </article>
                    
                </div>
                <div className='right'><img src={learnMoreRight} alt="" /></div>
            </section>

            <section id='features' className='WhyEduflex' title='Why Eduflex'>
                <h2>Why Choose Eduflex?</h2>
                <div className='outliner'>
                    <div>
                        <div>
                            <article>
                                <h2>For Students <i className="whyeduflexicons">{student_icon}</i></h2>
                                <ul>
                                    <li>Easy enrollment and fee payments.</li>
                                    <li>Virtual classrooms with live lectures.</li>
                                    <li>Academic performance tracking.</li>
                                </ul>
                            </article>
                            <article>
                                <h2>For Administrator <i className="whyeduflexicons">{administrator_icon}</i></h2>
                                <ul>
                                    <li>Streamlined admission management.</li>
                                    <li>Automated grading and course management.</li>
                                    <li>Anti-cheating exam monitoring.</li>
                                </ul>
                            </article>
                            <article>
                                <h2>For Institution <i className='whyeduflexicons'>{institution_icon}</i></h2>
                                <p className='ul'>
                                    <li>Finance tracking and reporting.</li>
                                    <li>Data analytics for decison-making.</li>
                                    <li>Secure, GDPR-compliant user authentication.</li>
                                </p>
                               
                            </article>
                        </div>
                    </div>
                    <img src={flare1} alt="flare" className="flareIcon1" />
                    <img src={flare2} alt="flare" className="flareIcon2" />
                    <img src={flare3} alt="flare" className="flareIcon3" />
                </div>
            </section>
            <section id='howitworks' className='howitworks'>
                <div className='howItWorksHero'>
                    <div>
                        <h1>How It Works</h1>
                        <article>
                            <span className='numBullet'>1</span>
                            <h1>Student Module:<br />Enrollment & Learning</h1>
                            <p>Students can easily enroll, register for courses, and track their progress. With live/recorded lectures, group assignments, and real-time feedback, learning is interactive and personalized.</p>
                        </article>
                    </div>
                    <img alt='How it works Image' src={howitworksimage}/>
                </div>
                <div className='how_it_works_bullet'>
                    {/* 2 */}
                    <article>
                        <span className='numBullet'>2</span>
                        <h1>Faculty & Administrative Module: Course & Exam Management</h1>
                        <p>Faculty create courses, grade assignments, and monitor exams with AI-powered tools. Administrators handle admissions, course management, and track performance in real-time.</p>
                    </article>
                    {/* 3 */}
                    <article>
                        <span className='numBullet'>3</span>
                        <h1>Institutional Management & Analytics</h1>
                        <p>Institutions gain insights on student performance, financial tracking, and course effectiveness with real-time data and predictive analytics.</p>
                    </article>
                    {/* 4 */}
                    <article>
                        <span className='numBullet'>4</span>
                        <h1>Fee & Payment System</h1>
                        <p>Students pay tuition and fees securely via Paystack or Flutterwave, with reminders for pending payments and support for multiple currencies.</p>
                    </article>
                    {/* 5 */}
                    
                    <article  className='lastBulletArticle'>
                        <span className='numBullet'>5</span>
                        <h1>Communication & Notifications</h1>
                        <p>Students pay tuition and fees securely via Paystack or Flutterwave, with reminders for pending payments and support for multiple currencies.</p>
                    </article>
                    
                </div>
            </section>
            <section id='aboutus' className="aboutUs">
                <div className='aboutUsLeft'>
                    <img src={aboutUsImg} className="mainImg" />
                    <div className="abtflare1"></div>
                    <div className="abtflare2"></div>
                    <div className="abtflare3"></div>
                </div>
                <div className='aboutUsRight'>
                    <h1>ABOUT US</h1>
                    <p>
                    Eduflex is an advanced digital platform designed to transform academic and administrative processes in universities. With a mission to improve efficiency, engagement, and learning outcomes, we provide a seamless solution for students, faculty, and administrators. By integrating flexible enrollment, online learning, automated fee payments, and robust communication tools, Eduflex enhances the educational experience for both institutions and learners. 
                    </p>
                    <p>
                    Our platform empowers universities to scale globally, support remote and hybrid learning, and make data-driven decisions for improved academic planning and operational efficiency.
                    </p>
                </div>
            </section>
            <section id='faq' className='faq'>   
                <div className='faqHeader'>
                    <h1>FAQ</h1>
                    <small>Common Questions and Solutions</small>
                </div>
                <div>
                    <FAQComponent opened = {true} header='What is Eduflex?' content='Eduflex is a digital platform designed to optimize academic and administrative processes for universities. It offers tools for course registration, fee payments, e-learning, performance tracking, and more, all in one place.'/>

                    <FAQComponent opened = {true} header='Who can use EduFlex?' content='Eduflex is a digital platform designed to optimize academic and administrative processes for universities. It offers tools for course registration, fee payments, e-learning, performance tracking, and more, all in one place.'/>

                    <FAQComponent opened = {true} header="Is EduFlex compatible with my university's exting systems?" content='Eduflex is a digital platform designed to optimize academic and administrative processes for universities. It offers tools for course registration, fee payments, e-learning, performance tracking, and more, all in one place.'/>
                </div>
                        <div className='moreFAQ'>
                            <small>More FAQs</small>
                        </div>
            </section>
            <footer id='contacts'>
                <div className='footerpart1'>
                    <div className='leftfootercomponent'>
                        <img src={eduflexbyx3lab} className='eduflexby' />
                        <h1>Power the Future of Education</h1>
                    </div>
                    <div className='rightfootercomponent'>
                        <h1>Quick Links</h1>
                        <ul>
                            <li>Features</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                           
                        </ul>
                    </div>
                </div>
                <div className='footerbottompart'>
                    <small>&copy; 2025 Eduflex. Built by X3 Lab Team</small>
                    <div className='footerSocialContainer'>
                        <a href="https://facebook.com" target='_blank'>{facebookIcon}</a>
                        <a href="#" _blank>{linkedinICon}</a>
                        <a href="https://instagram.com" target='_blank'>{instagramIcon}</a>
                    </div>
                </div>
            </footer>
        </section>
    )
}

function FAQComponent({header = 'no head', content = 'no content', defHeight = '90px', minHeight = '30px'}){
    const[FAQheight, setHeight] = useState(minHeight)
    return(
    <div className='faqContainer' style={{height:  FAQheight}}>
        <div className='faqControl'> <h3>{header}</h3> <span onClick={clicked}>{FAQheight == minHeight ? arrowdown : arrowup}</span>
        </div>
        <div className='FAQContent'>{content}</div>
    </div>)

    function clicked(){
        setHeight( (FAQheight == defHeight) ? minHeight : defHeight)
    }
}

function HeroSection(){
    const [modal1Translate, setM1Translate ] = useState('translateX(-301px)')
    const[modal2Translate, setM2Translate] = useState('translateX(-410px)')
    
    const [modalReseterDisplay, setMRDisplay]  = useState('none')
    return(
        <>
        <section className='hero'>
                <div className='herobg_container'>
                    <img src={heroBg} className='herobg' />
                </div>
                <div className='hero-left'>
                    <h2><span className='h2A'>A</span> Smarter Way to<br /> <span className="cyan">Learn</span>, Manage, and Grow in Education</h2>

                    <p>A new way to, access resources, and <br />streamline academic process. all in one</p>
                    <div  style={{display: 'flex', gap:'20px'}}>
                        <div onClick={() => { setM1Translate('translateX(101px)'); setMRDisplay('block');}}>
                            <ActionBtn  content='Create Your Account' isLight = {true} btnWidth={190} />
                        </div>
                        <div 
                        onClick={() => {setM2Translate('translateX(312px)'); setMRDisplay('block')}}>
                            <ActionBtn content='Log in to Your Portal' btnWidth={190} />
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <img alt='heroprofile'  src={heroPic}/>
                </div>

                <section style={{display: modalReseterDisplay}} 
                onClick={() => { setM1Translate('translateX(-301px)'); setM2Translate('translateX(-401px)'); setMRDisplay('none')}} className='modal-exit'></section>

                <div style={{transform: modal1Translate}} className='hero-modal getstarted'>
                <img src={eduflexbyx3labback} />
                    <p>Get Started</p>
                    <Link to='/create/admin'><button style={{backgroundColor: '#CEDDEE'}}>As Administration</button></Link>
                    <Link to='/create/student'><ActionBtn btnWidth={170} btnHeight={35} content='As Student'/></Link>
                    
                </div>

                <div style={{transform: modal2Translate}} className='hero-modal login'>
                    <img src={eduflexbyx3labback} />
                    <p>Login</p>
                    <Link to='/login/admin'><button style={{backgroundColor: '#CEDDEE'}}>As Administration</button></Link>
                    <Link to='/login/student'><ActionBtn btnWidth={170} btnHeight={35} content='As Student'/></Link>
                </div>


                
            </section>
        </>
    )
}
