import Link from "next/link";

export default function Services() {
    return (
        <>        
            <section className="service-style-three p_relative bg-color-2">
                {/* <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div> */}
                {/* <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div> */}
                <div className="auto-container">
                  <div className="sec-title centred light mb_30">
                    <span className="sub-title">ЦЕЛИ И ЗАДАЧИ</span>
                    {/* <h2>Альянс преследует следующие цели:</h2> */}
                  </div>
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-7"></i></div>
                          <h3><Link href="/strategy-planning">Интеграция</Link></h3>
                          <p>Интеграция в европейское общество на основе соблюдения законов Европы, прав человека, принципов демократии и культурного многообразия.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-12"></i></div>
                          <h3><Link href="/program-manager">Образование</Link></h3>
                          <p>Повышение образовательного и материального уровня членов и их семей.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-8"></i></div>
                          <h3><Link href="/tax-management">Деловое сотрудничество</Link></h3>
                          <p>Деловое сотрудничество и взаимная помощь в коммерческой деятельности.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-13"></i></div>
                          <h3><Link href="/investment-policy">Содействие развитию</Link></h3>
                          <p>Содействие развитию образования, творчества, науки и спорта.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-14"></i></div>
                          <h3><Link href="/financial-advices">Менторство и поддержка</Link></h3>
                          <p>Консультирование, советы и участие в общественной и социальной жизни.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                      <div className="service-block-three wow fadeInRight animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="icon-box"><i className="icon-15"></i></div>
                          <h3><Link href="/insurance-strategy">Взаимная помощь</Link></h3>
                          <p>Взаимная помощь в трудоустройстве членов Альянса и членов их семей.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-title centred light">
                    <p>Для достижения целей Альянс осуществляет мероприятия, не запрещённые законом, включая: проведение форумов, конференций, наставнических программ, совместные бизнес-проекты, получение грантов и добровольных взносов.</p>
                  </div>
                </div>
            </section>
        </>
    )
}
