import React from 'react'
import PythonIMG from '../assets/img/python-5.svg'
import CImg from '../assets/img/c.svg'
import JsImg from '../assets/img/javascript-1.svg'
import ReactImg from '../assets/img/react-2.svg'

function Skills() {
  return (
    <>
   
    <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle"> Technical Skills</span>

                <div className="skills__container container grid section__border">
                    {/* <!--==================== SKILLS 1 ====================--> */}
                    <div className="skills__content">
                        <h3 className="skills__title">
                            <i className="ri-braces-line"></i> Programming
                        </h3>

                        <div className="skills__info">
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={PythonIMG} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Python</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={CImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">C++</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={JsImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                          

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={ReactImg} alt="skills_image" />
                                </div>

                                <h3 className="skills__name">React</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>
                            
                            

                        </div>
                    </div>

                    {/* <!-- ========================== SKILLS 2 ====================--> */}
                    <div className="skills__content">
                        <h3 className="skills__title">
                        <i className="ri-android-line"></i> Tools/libaries
                        </h3>

                        <div className="skills__info">

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/Scikit_learn_logo_small.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Scikit-learn</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/LQuIXqyz.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">PyTorch</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/Pandas_logo.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Pandas</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Seaborn</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://numfocus.org/wp-content/uploads/2017/11/bokeh-logo-300.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Bokeh</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://e7.pngegg.com/pngimages/652/291/png-clipart-tensorflow-deep-learning-keras-library-artificial-neural-network-computer-angle-rectangle.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Keras</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://d7umqicpi7263.cloudfront.net/img/product/2f82913c-d5e1-419a-9163-c11aee0d7a95/c9dc0231-d472-470f-a37f-e5f4a4470667.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Theano</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">NLTK</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="https://media.slid.es/uploads/465821/images/5836629/pasted-from-clipboard.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Gensim</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="/image/numpy-1.svg" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Numpy</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="/image/Matplotlib_icon.svg.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Matplotlib</h3>
                               
                            </div>
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src="image/anaconda_logo-1024x512.png" alt="skills_image" />
                                </div>

                                <h3 className="skills__name">Anaconda</h3>
                               
                            </div>

                        </div>
                    </div>

                </div>

            </section></>
  )
}

export default Skills
