// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ============ Section 1 Start ============== */}
      <div className="bg-home">
        <div className="home-gradient">
          {/* ======== Navbar Start ======== */}
          <nav className="navbar navbar-expand-lg bg-dark py-2 sticky-top">
            <div className="container">
              <a
                className="navbar-brand text-white fw-bolder navbar-txt mx-5"
                href="/"
              >
                DORSIN
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-3">
                    <a
                      className="nav-link link-clr"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Team
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link link-clr" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <button
                    className="btn btn-clr rounded-pill px-4 py-2 me-5"
                    type="submit"
                  >
                    Try It Free
                  </button>
                </form>
              </div>
            </div>
          </nav>
          {/* ======== Navbar End ======== */}

          {/* ========= Home Start ======== */}

          <div className="home-main d-flex align-items-center">
            <div className="container">
              <div className="home-heading text-white text-center">
                <h1>We help startups launch their products</h1>
                <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                <p className="mt-4 media-main">
                  <a href="/" className="media-btn">
                    <i class="fa-solid fa-play"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* ========= Home End ======== */}
        </div>
      </div>
      {/* ============ Section 1 End ============== */}

      {/* ============ Section 2 Start ============== */}

      <div className="section2-main my-5">
        <div className="container">
          <div className="section2-heading text-center">
            <h2>OUR SERVICES</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-50 mx-auto">
              <p>
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning and add a
                value for our clients.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-regular fa-gem"></i>
                <h5 className="mt-3">Digital Design</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Moltin gives you the
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-regular fa-newspaper"></i>
                <h5 className="mt-3">Unlimited Colors</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    Credibly brand standards compliant users without extensible
                    services. Anibh euismod tincidunt ut laoreet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-solid fa-piggy-bank"></i>
                <h5 className="mt-3">Strategy Solutions</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-brands fa-react"></i>
                <h5 className="mt-3">Awesome Support</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth leave for the far World
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-solid fa-scroll"></i>
                <h5 className="mt-3">Truly Multipurpose</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="services text-center effect">
                <i class="fa-solid fa-plane"></i>
                <h5 className="mt-3">Easy to customize</h5>
                <div className="section2-para">
                  <p className="mt-3 pt-2 para">
                    Question Marks and devious Semikoli, but the Little Blind
                    Text didn’t listen. She packed her seven versalia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Section 2 End ============== */}

      {/* ============ Section 3 Start ============== */}
      <div className="sec3-main bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="features-main">
                <div className="features-heading">
                  <h3>
                    A digital web design studio creating modern & engaging
                    online experiences
                  </h3>
                </div>
                <div className="section2-para">
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the
                    necessary regelialia.
                  </p>
                </div>
                <div className="list-main my-3">
                  <ul className="list">
                    <li>We put a lot of effort in design.</li>
                    <li>
                      The most important ingredient of successful website.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </li>
                    <li>Submit Your Organization.</li>
                  </ul>
                </div>
                <a className="btn btn-primary mt-3" href="/">
                  Learn More <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img">
                <img src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Section 3 End ============== */}

      {/* ============ Section 4 Start ============== */}

      <div className="sec4-main sec4-bg">
        <div className="home-gradient">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center sec4-content">
                <div className="sec4-heading text-white">
                  <h2>Build your dream website today</h2>
                </div>
                <div className="pt-3">
                  <p className="sec4-desc">
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few insidious Copy Writers ambushed
                    her.
                  </p>
                </div>
                <a className="btn btn-white mt-4 mb-5" href="/">
                  View Plan & Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 4 End ============== */}

      {/* ============ Section 5 Start ============== */}

      <div className="sec5-main my-5">
        <div className="container">
          <div className="section2-heading text-center">
            <h2>OUR PRICING</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-50 mx-auto">
              <p>
                Call to action pricing table is really crucial to your for your
                business website. Make your bids stand-out with amazing options.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="price-box text-center effect">
                <h6>ECONOMY</h6>
                <h1>$9.90</h1>
                <p className="bill">BILLING PER MONTH</p>
                <div className="price-border"></div>
                <div className="price-feature mt-4">
                  <p>
                    Bandwidth: <span>1GB</span>
                  </p>
                  <p>
                    Onlinespace: <span>50MB</span>
                  </p>
                  <p>
                    Support: <span>NO</span>
                  </p>
                  <p>
                    <span>1</span> Domain
                  </p>
                  <p>
                    <span>NO</span> Hidden Fees
                  </p>
                </div>
                <a className="btn btn-primary mt-3" href="/">
                  Join Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box text-center effect">
                <h6>DELUXE</h6>
                <h1>$19.90</h1>
                <p className="bill">BILLING PER MONTH</p>
                <div className="price-border"></div>
                <div className="price-feature mt-4">
                  <p>
                    Bandwidth: <span>10GB</span>
                  </p>
                  <p>
                    Onlinespace: <span>500</span>
                  </p>
                  <p>
                    Support: <span>Yes</span>
                  </p>
                  <p>
                    <span>10</span> Domain
                  </p>
                  <p>
                    <span>NO</span> Hidden Fees
                  </p>
                </div>
                <a className="btn btn-primary mt-3" href="/">
                  Join Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box text-center effect">
                <h6>ULTIMATE</h6>
                <h1>$29.90</h1>
                <p className="bill">BILLING PER MONTH</p>
                <div className="price-border"></div>
                <div className="price-feature mt-4">
                  <p>
                    Bandwidth: <span>100GB</span>
                  </p>
                  <p>
                    Onlinespace: <span>2GB</span>
                  </p>
                  <p>
                    Support: <span>Yes</span>
                  </p>
                  <p>
                    <span>Unlimited</span> Domain
                  </p>
                  <p>
                    <span>NO</span> Hidden Fees
                  </p>
                </div>
                <a className="btn btn-primary mt-3" href="/">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 5 End ============== */}

      {/* ============ Section 6 Start ============== */}

      <div className="sec6-main my-5 pt-5">
        <div className="container">
          <div className="section2-heading text-center mt-5">
            <h2>BEHIND THE PEOPLE</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-75 mx-auto">
              <p>
                It is a long established fact that create category leading brand
                experiences a reader will be distracted by the readable content
                of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 col-lg-3">
              <div className="text-center effect crew-box">
                <div className="crew-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg"
                    className="rounded"
                  />
                </div>
                <h4 className="crew-name">Frank Johson</h4>
                <p className="crew-position">CEO</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="text-center effect crew-box">
                <div className="crew-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg"
                    className="rounded"
                  />
                </div>
                <h4 className="crew-name">Elaine Stclair</h4>
                <p className="crew-position">DESIGNER</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="text-center effect crew-box">
                <div className="crew-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg"
                    className="rounded"
                  />
                </div>
                <h4 className="crew-name">Wanda Arthur</h4>
                <p className="crew-position">DEVELOPER</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="text-center effect crew-box">
                <div className="crew-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg"
                    className="rounded"
                  />
                </div>
                <h4 className="crew-name">Joshua Stemple</h4>
                <p className="crew-position">MANAGER</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 6 End ============== */}

      {/* ============ Section 7 Start ============== */}

      <div className="sec7-main my-5">
        <div className="container">
          <div className="section2-heading text-center">
            <h2>WHAT THEY'VE SAID</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-75 mx-auto">
              <p>
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                pulvinar metus molestie sed Semikoli.
              </p>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-lg-4">
              <div className="review-box effect">
                <div className="review-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-2.jpg"
                    className="rounded-circle"
                  />
                </div>
                <div className="review-txt">
                  <p>
                    “I feel confident imposing change on myself. It's a lot more
                    fun progressing than looking back. That's why scelerisque
                    pretium dolor, sit amet vehicula erat pelleque need throw
                    curve balls.”
                  </p>
                </div>
                <h6 className="pt-3 review-name">
                  RUBEN REED - <span className="review-sub">Charleston</span>
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="review-box effect">
                <div className="review-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-1.jpg"
                    className="rounded-circle"
                  />
                </div>
                <div className="review-txt">
                  <p>
                    “Our task must be to free ourselves by widening our circle
                    of compassion to embrace all living creatures Integer varius
                    lacus non magna tempor congue natuasre the whole its
                    beauty.”
                  </p>
                </div>
                <h6 className="pt-3 review-name">
                  MICHAEL P. HOWLETT -
                  <span className="review-sub">Worcester</span>
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="review-box effect">
                <div className="review-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-3.jpg"
                    className="rounded-circle"
                  />
                </div>
                <div className="review-txt">
                  <p>
                    “I've learned that people will forget what you said, people
                    will forget what you did, but people will never aliquam in
                    nunc quis tincidunt forget how you vestibulum egestas them
                    feel.”
                  </p>
                </div>
                <h6 className="pt-3 review-name">
                  THERESA D. SINCLAIR -
                  <span className="review-sub">Lynchburg</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Section 7 End ============== */}

      {/* ============ Section 8 Start ============== */}

      <div className="sec7-main sec7-bg">
        <div className="home-gradient">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center sec4-content">
                <div className="sec4-heading text-white">
                  <h2>Let's Get Started</h2>
                </div>
                <div className="line pt-3"></div>
                <div className="pt-3">
                  <p className="sec4-desc">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <a className="btn btn-white mt-4 mb-5" href="/">
                  Get Started <i class="fa-solid fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 8 End ============== */}

      {/* ============ Section 9 End ============== */}

      <div className="sec9-main py-5">
        <div className="container">
          <div className="section2-heading text-center mt-5">
            <h2>BLOG</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-75 mx-auto">
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean class at a euismod mus ipsum
                vel ex finibus semper luctus quam.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <div className="blog-main mt-4 effect">
                <div className="blog-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/blog/img-1.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content">
                  <h5 className="mt-4">UI & UX Design</h5>
                  <h4 className="mt-3">
                    <a href="/" className="blog-txt-link">
                      Doing a cross country road trip
                    </a>
                  </h4>
                  <p>
                    She packed her seven versalia, put her initial into the belt
                    and made herself on the way..
                  </p>
                  <div className="mt-3">
                    <a href="/" className="blog-read">
                      Read More <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-main mt-4 effect">
                <div className="blog-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/blog/img-2.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content">
                  <h5 className="mt-4">Digital Marketing</h5>
                  <h4 className="mt-3">
                    <a href="/" className="blog-txt-link">
                      New exhibition at our Museum
                    </a>
                  </h4>
                  <p>
                    New exhibition at our Museum Pityful a rethoric question ran
                    over her cheek, then she continued her way.
                  </p>
                  <div className="mt-3">
                    <a href="/" className="blog-read">
                      Read More <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-main mt-4 effect">
                <div className="blog-img-main">
                  <img
                    src="http://dorsin.react.themesbrand.com/assets/images/blog/img-3.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content">
                  <h5 className="mt-4">Travelling</h5>
                  <h4 className="mt-3">
                    <a href="/" className="blog-txt-link">
                      Why are so many people..
                    </a>
                  </h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </p>
                  <div className="mt-3">
                    <a href="/" className="blog-read">
                      Read More <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 9 End ============== */}

      {/* ============ Section 10 End ============== */}

      <div className="sec10-main my-5">
        <div className="container">
          <div className="section2-heading text-center mt-5">
            <h2>GET IN TOUCH</h2>
            <div className="line pt-3"></div>
            <div className="section2-para text-center py-4 w-75 mx-auto">
              <p>
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be supported with
                faucibus sapien odio measurable results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-4 pt-4 details-main">
                <p>
                  <span className="deatils-heading">Office Address 1:</span>
                  <br />
                  <span className="mt-2 d-block details-sub">
                    4461 Cedar Street Moro, AR 72368
                  </span>
                </p>
                <p className="mt-4">
                  <span className="deatils-heading">Office Address 2:</span>
                  <br />
                  <span className="mt-2 d-block w-50 details-sub">
                    2467 Swick Hill Street New Orleans, LA 70171
                  </span>
                </p>
                <p className="mt-4">
                  <span className="deatils-heading">Working Hours:</span>
                  <br />
                  <span className="mt-2 d- block details-sub">
                    9:00AM To 6:00PM
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-8 mt-5">
              <div className="details-form-main">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="inp-style form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="inp-style form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Your subject..."
                          className="form-control inp-style"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mt-2">
                        <textarea
                          name=""
                          id=""
                          rows="4"
                          placeholder="Your message..."
                          className="form-control txt"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-end">
                      <button className="btn btn-primary mt-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Section 10 End ============== */}
    </div>
  );
}

export default App;
