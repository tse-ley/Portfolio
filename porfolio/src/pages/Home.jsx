import React from 'react';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PortfolioPage = () => {
  const companies = [
    { name: 'instagram', logo: 'https://logo.clearbit.com/instagram.com' },
    { name: 'spotify', logo: 'https://logo.clearbit.com/spotify.com' },
    { name: 'github', logo: 'https://logo.clearbit.com/github.com' },
    { name: 'linkedin', logo: 'https://logo.clearbit.com/linkedin.com' },
  ];

  const portfolioItems = [
    { image: '/api/placeholder/200/150', title: 'Mobile App Design' },
    { image: '/api/placeholder/200/150', title: 'Web Dashboard' },
    { image: '/api/placeholder/200/150', title: 'UI Kit Design' },
    { image: '/api/placeholder/200/150', title: 'Brand Identity' },
    { image: '/api/placeholder/200/150', title: 'Product Design' },
    { image: '/api/placeholder/200/150', title: 'Website Design' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-1 fw-bold mb-4" style={{ fontSize: '5rem', lineHeight: '1' }}>
              Product<br />Designer
            </h1>
            <p className="text-muted mb-4">
              Hi I'm Davy, a UI/UX Product Designer & Frontend Developer
            </p>
            
            {/* Company Logos */}
            <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
              {companies.map((company, index) => (
                <div key={index} className="opacity-75 d-flex flex-column align-items-center">
                  <img 
                    src={company.logo} 
                    alt={company.name + " logo"} 
                    style={{ width: 80, height: 30, objectFit: 'contain' }} 
                    className="mb-1"
                  />
                  <span className="text-muted small fw-medium">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="/api/placeholder/400/500" 
                alt="Designer at work" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="text-muted text-uppercase mb-3">About Me</h6>
            <h2 className="h4 mb-4">
              Design has always been more than just a job - it's my passion.
            </h2>
            <div className="position-relative">
              <img 
                src="/api/placeholder/400/300" 
                alt="Designer workspace" 
                className="img-fluid rounded-3"
              />
              <button className="btn btn-dark rounded-circle position-absolute top-50 start-50 translate-middle" style={{ width: '60px', height: '60px' }}>
                <Play size={20} fill="white" />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 mb-4">
                <h3 className="display-6 fw-bold text-success">+320</h3>
                <p className="text-muted">Project Finished</p>
              </div>
              <div className="col-12 mb-4">
                <h3 className="display-6 fw-bold text-warning">+280</h3>
                <p className="text-muted">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="text-muted text-uppercase mb-3">Services</h6>
                <h4 className="card-title mb-3">
                  A Comprehensive look at what we offer and how we deliver
                </h4>
                <p className="text-muted small mb-4">
                  A comprehensive look at all services portfolio and projects we have completed
                </p>
                <button className="btn btn-dark rounded-pill px-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Social Ads</h5>
                <p className="text-muted small mb-4">
                  Designing effective social media advertisements that convert and engage your target audience.
                </p>
                <ArrowRight className="ms-auto" size={20} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Search Engineer</h5>
                <ArrowRight className="ms-auto" size={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="row g-4 mt-2">
          <div className="col-lg-6">
            <div className="card bg-dark text-white h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Content Marketing</h5>
                <p className="small opacity-75 mb-4">
                  High-quality content creation and marketing strategies to boost engagement and drive conversions.
                </p>
                <ExternalLink className="ms-auto" size={20} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Saas Marketing</h5>
                <ArrowRight className="ms-auto" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-inline-block border rounded-pill px-3 py-2 mb-4">
              <span className="text-muted small">Experience</span>
            </div>
            
            <div className="row mb-5">
              <div className="col-lg-6">
                <h2 className="display-6 fw-bold mb-0">
                  A Yearly snapshot of my creative growth
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="text-muted">
                  An annual summary that summarizes my creative journey and development throughout the year.
                </p>
              </div>
            </div>
            
            <div className="timeline-container">
              <div className="row align-items-center mb-4 pb-4 border-bottom position-relative">
                <div className="col-lg-8">
                  <h5 className="mb-2 fw-bold">Graphic Designer at Dewa-Dewi Tech</h5>
                  <p className="text-muted mb-0">
                    Graphic Designer at Dewa-Dewi Tech, creating creative and functional visual designs to support brands and digital products.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="h4 fw-bold">2015 - 2017</span>
                </div>
              </div>
              
              <div className="row align-items-center mb-4 pb-4 border-bottom position-relative">
                <div className="col-lg-8">
                  <h5 className="mb-2 fw-bold">UI/UX Designer at Odama Studio</h5>
                  <p className="text-muted mb-0">
                    UI/UX Designer at Odama Studio, creating intuitive and engaging digital experiences through functional and aesthetic design.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="h4 fw-bold">2017 - 2019</span>
                </div>
              </div>
              
              <div className="row align-items-center mb-4 pb-4 border-bottom position-relative">
                <div className="col-lg-8">
                  <h5 className="mb-2 fw-bold">UX Researcher at Korsa Studio</h5>
                  <p className="text-muted mb-0">
                    UX Researcher at Korsa Studio, connecting data and design to create intuitive and effective user experiences.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="h4 fw-bold">2018 - 2021</span>
                </div>
              </div>
              
              <div className="row align-items-center mb-4">
                <div className="col-lg-8">
                  <h5 className="mb-2 fw-bold">Product Designer at Apple. Inc</h5>
                  <p className="text-muted mb-0">
                    Product Designer at Apple Inc., designing innovative experiences that connect technology and aesthetics to create iconic products.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <span className="h4 fw-bold">2021 - Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12">
            <h6 className="text-muted text-uppercase mb-3">Portfolio</h6>
            <h2 className="h4 mb-5">
              Explore my portfolio of creative solutions
            </h2>
          </div>
        </div>
        
        <div className="row g-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h6 className="card-title">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <blockquote className="blockquote mb-4">
                <p className="mb-4">
                  "Without Journey Commerce, we would never had been able to implement this 
                  platform ourselves. Being a small team we don't have enough hours in the day. 
                  The team at Journey Commerce researched our brand, planned the content 
                  and provided weekly feedback to improve the performance. The results 
                  have been amazing and we couldn't ask for a better partner."
                </p>
              </blockquote>
              <div className="d-flex align-items-center justify-content-center">
                <img 
                  src="/api/placeholder/50/50" 
                  alt="Client" 
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Dianna Smiley</h6>
                  <small className="text-muted">CEO, Journey Commerce</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PortfolioPage;