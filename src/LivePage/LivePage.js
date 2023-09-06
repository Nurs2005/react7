import './LivePage.css'
import Header from "../components/Header/Header"
import Button from '../components/Button/Button'
export default function LivePAge(){
    return(
        <div className="main">
            <Header/>
            <section className="imfoPage">
                <div className="info">
                <img className='infoPng' src="./Vector.svg" alt="" />
                    <p className='p'>Proven strategies backed by science for success.</p>
                    <h1 className='h1'>Live life at the full potential</h1>
                    <p className='p2'>I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                    <Button valeu='Get your free guide now' width="250px" borderRadius="10px"/>
                </div>
                <div>
                    <div className="imageDiv">
                    <img className="image1"  src="./47.png" alt="" />
                    </div>
                    <img className="image" src="./girl.png" alt="" />
                </div>
            </section>
            <section className='introdaction'>
                <div className="logo">
                    <img src="./Vector (1).png" alt="" />
                </div>
                <div className="helpInfo">
                    <h1>I can help you in these particular areas.</h1>
                    <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    <p className='infoSub'>Sed ut perspiciatis unde omnis iste
                         natus error sit voluptatem accusantium 
                         doloremque laudantium, totam rem aperiam,
                          eaque ipsa quae ab illo inventore veritatis 
                          et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                </div>
                <div className="helpCards">
                    <div className="helpCard">
                        <div className="helpCardIn">
                        <img className='helpCardSvg' src="./help1.svg" alt="" />
                        <h1>1:1 Coaching</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                    </div>
                    <div className="helpCard">
                    <div className="helpCardIn">
                        <img className='helpCardSvg' src="./help2.svg" alt="" />
                        <h1>Consultation</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                    </div>
                    <div className="helpCard">
                    <div className="helpCardIn">
                        <img className='helpCardSvg' src="./help3.svg" alt="" />
                        <h1>1:1 Coaching</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='reviews'>
                <div className="reviewsBlock">
                    <h1 className='reviewsh1'>Hear out what my clients say about me.</h1>
                    <div className="reviewsCards">
                        <div className="reviewsCard">
                            <div className="reviewsCardIn">
                            <p>"I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                            <h1>Jane</h1>
                            <img className='revPng' src="./Jane.png" alt="" />
                            <img className='revPng1' src="./Stars.png" alt="" />
                            </div>
                        </div>
                        <div className="reviewsCard">
                            <div className="reviewsCardIn">
                            <p>"I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                            <h1>Catherine</h1>
                            <img className='revPng' src="./2.png" alt="" />
                            <img className='revPng1'src="./Stars (1).png"alt="" />
                            </div>
                        </div>
                        <div className="reviewsCard">
                            <div className="reviewsCardIn">
                            <p>"I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                            <h1>Jane</h1>
                            <img className='revPng' src="./3.png" alt="" />
                            <img className='revPng1' src="./Stars (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                    <img className='reviewsPng' src="./4.png" alt="" />
                </div>
            </section>
            <section className='Blogs'>
                <div className="h1block">
                <h1 className='Blogh1'>Stay Motivated, read the weekly blog articles.</h1>
                </div>
                <div className="BlogCards">
                    <div className="BlockCard">
                        <div className="blockCardIn">
                        <img src="./blog1.png" alt="" />
                        <div className="blockSubs">
                            <h1>Balancing your love and work life.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                        </div>
                    </div>
                    <div className="BlockCard">
                        <div className="blockCardIn">
                        <img src="./blog1.png" alt="" />
                        <div className="blockSubs">
                            <h1>Balancing your love and work life.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                        </div>
                    </div>
                    <div className="BlockCard">
                        <div className="blockCardIn">
                        <img src="./blog1.png" alt="" />
                        <div className="blockSubs">
                            <h1>Balancing your love and work life.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <Button valeu='Read more blogs' width="250px" height='42px' borderRadius="10px"/>
            </section>
            <section className='FreeGuide'>
                <div className="FreeGuideBlock">
                <div className="FreeTitlse">
                    <h1>Don’t miss out on my ‘Live life at the full potential’ free guide</h1>
                    <div className="FreeSubTitlse">
                    <p className='FreeP1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                    <p className='FreeP'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <Button valeu='Get your free guide now' width='250px' borderRadius="10px"/>
                </div>
                <div className="FreeImage">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                </div>
            </section>
        </div>
    )
}