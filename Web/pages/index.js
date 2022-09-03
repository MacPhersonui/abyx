import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/index.module.scss"
import classNames from "classnames/bind"
import Timer from "react-compound-timer"
import Web3 from "web3"
import Wallet from "../components/wallet"
import useWallet from "use-wallet"
import {
    getInvite,
    getInviteRank,
    createInvite
} from "../api/api"
import tokenConfig from "../contract.config"
import { confirmAlert } from "react-confirm-alert"
import HeaderFooter from "../layout/HeaderFooter"
import Clipboard from 'react-clipboard.js'
import {
    ToastContainer,
    toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
    withRouter
} from "next/router"
import {
    useTranslation,
    Trans
} from 'next-i18next'
import {
    serverSideTranslations
} from 'next-i18next/serverSideTranslations'
import Cookies from 'js-cookie'
import {
    utils
} from "ethers"
import {
    Swiper,
    SwiperSlide
} from "swiper/react"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import {
    Navigation,
    Pagination,
    Keyboard
} from "swiper"

const cx = classNames.bind(styles)

const toastConfig = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: null,
    pauseOnHover: false,
}

const Home = ({
    router
}) => {

    const {
        t
    } = useTranslation('common')

    const wallet = useWallet()
    const {
        account,
        ethereum
    } = wallet

    const web3 = new Web3(ethereum)

    useEffect(async () => {
        const timer = setInterval(async () => {
            if (account) {

            }
            clearInterval(timer)
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [account])

    return (
        <HeaderFooter activeIndex={1}>
            <ToastContainer />
            <main className={styles.container}>
                <section className={styles.solgen}>
                    <div className={styles.solgen_bg}>
                        <span className={styles.solgen_bg_top}></span>
                        <span className={styles.solgen_bg_bottom}></span>
                    </div>
                    <i className={styles.ball1}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.arrow}></i>
                    <i className={styles.card}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.ball2}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.ball3}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.arrow2}></i>
                    <i className={styles.white_arrow}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.white_arrow2}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                    <i className={styles.border}></i>
                    <i className={styles.dot1}></i>
                    <i className={styles.dot2}></i>
                    <i className={styles.dot3}></i>
                    <div className={styles.text}>
                        <h1>Abyx</h1>
                        <p>GameFi Protocol Provider.</p>
                    </div>
                    <button className={styles.launch}>
                        <span>LAUNCH APP</span>
                        <i></i>
                    </button>
                    <i className={styles.star}>
                        <span className={styles.inner}></span>
                        <span className={styles.shadow}></span>
                    </i>
                </section>
                <section className={styles.project}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={50}
                        navigation={true}
                        loop={true}
                        modules={[Navigation, Pagination, Keyboard]}
                    >
                        <SwiperSlide>
                            <div className="inner">
                                <h1>
                                    <span>01</span>
                                    <i></i>
                                    <b></b>
                                </h1>
                                <h2>Axie Infinity</h2>
                                <h3>Sky Mavis</h3>
                                <img src="/home/game1.png" />
                                <p>Abyx is a Gamefi Protocol Provide for all Web3 App.</p>
                            </div>
                            <div className="outer">
                                <video src="/home/forza.mp4" muted={true} playsInline={true} autoPlay={true} loop={true}></video>
                                <div className="cover"></div>
                                <h4>
                                    <span>01</span>
                                    <b></b>
                                </h4>
                                <h5>Axie Infinity</h5>
                                <p>
                                    <button>
                                        <span>PLAY THE GAME</span>
                                        <i></i>
                                    </button>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner">
                                <h1>
                                    <span>02</span>
                                    <i></i>
                                    <b></b>
                                </h1>
                                <h2>Axie Infinity</h2>
                                <h3>Sky Mavis</h3>
                                <img src="/home/game1.png" />
                                <p>Abyx is a Gamefi Protocol Provide for all Web3 App.</p>
                            </div>
                            <div className="outer">
                                <video src="/home/forza.mp4" muted={true} playsInline={true} autoPlay={true} loop={true}></video>
                                <div className="cover"></div>
                                <h4>
                                    <span>01</span>
                                    <b></b>
                                </h4>
                                <h5>Axie Infinity</h5>
                                <p>
                                    <button>
                                        <span>PLAY THE GAME</span>
                                        <i></i>
                                    </button>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner">
                                <h1>
                                    <span>03</span>
                                    <i></i>
                                    <b></b>
                                </h1>
                                <h2>Axie Infinity</h2>
                                <h3>Sky Mavis</h3>
                                <img src="/home/game1.png" />
                                <p>Abyx is a Gamefi Protocol Provide for all Web3 App.</p>
                            </div>
                            <div className="outer">
                                <video src="/home/forza.mp4" muted={true} playsInline={true} autoPlay={true} loop={true}></video>
                                <div className="cover"></div>
                                <h4>
                                    <span>01</span>
                                    <b></b>
                                </h4>
                                <h5>Axie Infinity</h5>
                                <p>
                                    <button>
                                        <span>PLAY THE GAME</span>
                                        <i></i>
                                    </button>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner">
                                <h1>
                                    <span>04</span>
                                    <i></i>
                                    <b></b>
                                </h1>
                                <h2>Axie Infinity</h2>
                                <h3>Sky Mavis</h3>
                                <img src="/home/game1.png" />
                                <p>Abyx is a Gamefi Protocol Provide for all Web3 App.</p>
                            </div>
                            <div className="outer">
                                <video src="/home/forza.mp4" muted={true} playsInline={true} autoPlay={true} loop={true}></video>
                                <div className="cover"></div>
                                <h4>
                                    <span>01</span>
                                    <b></b>
                                </h4>
                                <h5>Axie Infinity</h5>
                                <p>
                                    <button>
                                        <span>PLAY THE GAME</span>
                                        <i></i>
                                    </button>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner">
                                <h1>
                                    <span>05</span>
                                    <i></i>
                                    <b></b>
                                </h1>
                                <h2>Axie Infinity</h2>
                                <h3>Sky Mavis</h3>
                                <img src="/home/game1.png" />
                                <p>Abyx is a Gamefi Protocol Provide for all Web3 App.</p>
                            </div>
                            <div className="outer">
                                <video src="/home/forza.mp4" muted={true} playsInline={true} autoPlay={true} loop={true}></video>
                                <div className="cover"></div>
                                <h4>
                                    <span>01</span>
                                    <b></b>
                                </h4>
                                <h5>Axie Infinity</h5>
                                <p>
                                    <button>
                                        <span>PLAY THE GAME</span>
                                        <i></i>
                                    </button>
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className={styles.team}>
                    <div className={styles.title}>Abyx Team</div>
                    <div className={styles.content}></div>
                </section>
            </main>
        </HeaderFooter>
    )
}

export const getStaticProps = async ({
    locale
}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})

export default withRouter(Home)
