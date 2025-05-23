import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="feature-style-three p_relative centred">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_100">
                        <span className="sub-title">Направления</span>
                        {/* <h2>Помочь вам максимально раскрыть ваш потенциал и достичь новых высот</h2> */}
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h3><Link href="/index-3">Платформа для обмена бизнес-лидами</Link></h3>
                                    <p>Установление связей между бизнес-лидами и потенциальными клиентами, партнерами и специалистами. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }}></div>
                                    <div className="icon-box"><i className="icon-8"></i></div>
                                    <h3><Link href="/index-3">Финансирование</Link></h3>
                                    <p>Финансирование компаний на разных стадиях развития для разработки продукта, найм сотрудников, маркетинг и масштабирование операций.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <h3><Link href="/index-3">Менторство и поддержка</Link></h3>
                                    <p>Опытные менторы, которые помогают основателям на стратегическом уровне.<br />
                                    Молодые специалисты, которые помогают основателям на операционном уровне.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
