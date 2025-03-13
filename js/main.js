// Initialize Lucide icons
window.addEventListener('load', () => {
  lucide.createIcons();
});

// Router setup
const router = {
  routes: {
    '/': renderHome,
    '/about': renderAbout,
    '/services': renderServices,
    '/careers': renderCareers,
    '/franchises': renderFranchises,
    '/contact': renderContact,
    '/booking': renderBooking
  },

  navigate(path) {
    const route = this.routes[path] || this.routes['/'];
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    route(mainContent);
    
    // Update active link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });

    // Update URL without page reload
    window.history.pushState({}, '', path);

    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Handle navigation
document.addEventListener('click', (e) => {
  if (e.target.matches('.nav-link')) {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    router.navigate(path);
  }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
  router.navigate(window.location.pathname);
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-container')) {
    navLinks.classList.remove('active');
  }
});

// Update footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Form submission handler
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Show success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Thank you! We will contact you soon.';
  form.replaceWith(successMessage);
}

// Page Renderers
function renderHome(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <div class="sparkle-badge">
            <i data-lucide="sparkles"></i>
            <span>Professional Cleaning Services</span>
          </div>
          <h1 class="animate-fade-up">Your Trusted Partner in Cleanliness</h1>
          <p class="animate-fade-up delay-1">
            Experience the difference with our expert cleaning services. 
            Book today and enjoy a spotless environment.
          </p>
          <div class="hero-buttons animate-fade-up delay-2">
            <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            <a href="/services" class="btn btn-secondary nav-link">Our Services</a>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="stats-container">
          <div class="stat-card animate-fade-up">
            <h3>5000+</h3>
            <p>Happy Clients</p>
          </div>
          <div class="stat-card animate-fade-up delay-1">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat-card animate-fade-up delay-2">
            <h3>100%</h3>
            <p>Satisfaction</p>
          </div>
          <div class="stat-card animate-fade-up delay-3">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Why Choose GoCleeny?</h2>
            <p>Experience the perfect blend of professional expertise and personalized service</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="shield"></i>
              <h3>Trusted & Insured</h3>
              <p>Fully vetted and insured cleaning professionals you can trust</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="users"></i>
              <h3>Expert Team</h3>
              <p>Highly trained professionals with years of experience</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="check-circle"></i>
              <h3>Satisfaction Guaranteed</h3>
              <p>Your satisfaction is our top priority - guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta" style="background-image: url('https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80')">
        <div class="cta-content">
          <h2>Ready for a Spotless Space?</h2>
          <p>
            Book your cleaning service today and experience the GoCleeny difference.
            Professional, reliable, and tailored to your needs.
          </p>
          <div class="cta-buttons">
            <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            <a href="/contact" class="btn btn-secondary nav-link">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderAbout(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <div class="sparkle-badge">
            <i data-lucide="sparkles"></i>
            <span>Est. 2025</span>
          </div>
          <h1 class="animate-fade-up">About GoCleeny</h1>
          <p class="animate-fade-up delay-1">
            Founded with a mission to revolutionize the cleaning industry through innovation and excellence
          </p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="features">
        <div class="features-container">
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="users"></i>
              <h3>Expert Team</h3>
              <p>Our dedicated professionals bring years of experience and commitment to excellence in every service</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="leaf"></i>
              <h3>Eco-Friendly</h3>
              <p>Committed to sustainable practices and environmentally conscious cleaning solutions</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="target"></i>
              <h3>Our Mission</h3>
              <p>To deliver exceptional cleaning services while maintaining the highest standards of quality</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Our Story</h2>
            <p>Founded in 2025, GoCleeny emerged with a vision to transform the cleaning industry</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <p>Founded in 2025, GoCleeny emerged as part of the SAMBIC Group with a vision to transform the cleaning industry. We recognized the need for a professional cleaning service that combines modern technology with eco-friendly practices.</p>
            </div>
            <div class="feature-card">
              <p>Our commitment to excellence has made us a trusted name in both residential and commercial cleaning services. We take pride in our team of dedicated professionals who share our passion for cleanliness and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="features values-section">
        <div class="features-container">
          <div class="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide us indelivering exceptional service</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="heart"></i>
              <h3>Customer First</h3>
              <p>We prioritize our customers' needs and satisfaction above all else</p>
            </div>
            <div class="feature-card">
              <i data-lucide="shield"></i>
              <h3>Quality Assurance</h3>
              <p>Maintaining the highest standards in every cleaning task we undertake</p>
            </div>
            <div class="feature-card">
              <i data-lucide="refresh-cw"></i>
              <h3>Continuous Improvement</h3>
              <p>Always learning and adapting to serve our customers better</p>
            </div>
            <div class="feature-card">
              <i data-lucide="users"></i>
              <h3>Team Excellence</h3>
              <p>Investing in our team's growth and development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderServices(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <h1 class="animate-fade-up">Our Professional Services</h1>
          <p class="animate-fade-up delay-1">Tailored cleaning solutions for every space</p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <div class="sparkle-badge">
              <i data-lucide="sparkles"></i>
              <span>Special Offer: 20% Off All Services</span>
            </div>
          </div>

          <div class="features-grid">
            <div class="service-card">
              <i data-lucide="home"></i>
              <h3>Home Cleaning</h3>
              <p class="price">Starting from £15/hr</p>
              <ul class="service-list">
                <li>Deep cleaning of all rooms</li>
                <li>Kitchen and bathroom sanitization</li>
                <li>Window sills and baseboards cleaning</li>
                <li>Mopping all floors</li>
              </ul>
              <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            </div>

            <div class="service-card">
              <i data-lucide="briefcase"></i>
              <h3>Office Cleaning</h3>
              <p class="price">Starting from £15/hr</p>
              <ul class="service-list">
                <li>Workstation and desk cleaning</li>
                <li>Kitchen and break room sanitization</li>
                <li>Bathroom cleaning and restocking</li>
                <li>Trash removal and recycling</li>
              </ul>
              <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            </div>

            <div class="service-card">
              <i data-lucide="key"></i>
              <h3>End of Tenancy</h3>
              <p class="price">Starting from £15/hr</p>
              <ul class="service-list">
                <li>Deep cleaning of all rooms</li>
                <li>Oven and appliance cleaning</li>
                <li>Carpet deep cleaning</li>
                <li>Window and frame cleaning</li>
              </ul>
              <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            </div>

            <div class="service-card">
              <i data-lucide="building-2"></i>
              <h3>Airbnb Cleaning</h3>
              <p class="price">Starting from £15/hr</p>
              <ul class="service-list">
                <li>Quick turnaround cleaning</li>
                <li>Linen change and laundry</li>
                <li>Restocking essentials</li>
                <li>Pre-guest inspection</li>
              </ul>
              <a href="/booking" class="btn btn-primary nav-link">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Services -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Specialized Services</h2>
            <p>Additional cleaning solutions for specific needs</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="spray-can"></i>
              <h3>Deep Sanitization</h3>
              <p>Professional disinfection services for complete peace of mind</p>
            </div>
            <div class="feature-card">
              <i data-lucide="construction"></i>
              <h3>Post-Construction</h3>
              <p>Thorough cleaning after renovation or construction work</p>
            </div>
            <div class="feature-card">
              <i data-lucide="calendar"></i>
              <h3>Regular Maintenance</h3>
              <p>Scheduled cleaning services for consistent cleanliness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderCareers(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <div class="sparkle-badge">
            <i data-lucide="sparkles"></i>
            <span>Join Our Team</span>
          </div>
          <h1 class="animate-fade-up">Build Your Career With Us</h1>
          <p class="animate-fade-up delay-1">
            Join a team of passionate professionals and build a rewarding career in the cleaning industry
          </p>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Why Work With Us?</h2>
            <p>Join a company that values its employees and provides opportunities for growth</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="clock"></i>
              <h3>Flexible Hours</h3>
              <p>Choose work hours that fit your schedule and maintain a healthy work-life balance</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="dollar-sign"></i>
              <h3>Competitive Pay</h3>
              <p>Earn above industry standard rates with regular performance-based increases</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="graduation-cap"></i>
              <h3>Training & Development</h3>
              <p>Access to professional development programs and career advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Current Openings -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Current Openings</h2>
            <p>Join our growing team in various roles</p>
          </div>
          <div class="features-grid">
            <div class="job-card">
              <h3>Professional Cleaner</h3>
              <p class="job-type">Full-time / Part-time</p>
              <ul class="job-requirements">
                <li>Previous cleaning experience preferred</li>
                <li>Attention to detail</li>
                <li>Customer service oriented</li>
                <li>Reliable transportation</li>
              </ul>
              <a href="#apply" class="btn btn-primary">Apply Now</a>
            </div>
            <div class="job-card">
              <h3>Team Supervisor</h3>
              <p class="job-type">Full-time</p>
              <ul class="job-requirements">
                <li>2+ years cleaning experience</li>
                <li>Leadership skills</li>
                <li>Problem-solving abilities</li>
                <li>Schedule management</li>
              </ul>
              <a href="#apply" class="btn btn-primary">Apply Now</a>
            </div>
            <div class="job-card">
              <h3>Customer Service Representative</h3>
              <p class="job-type">Full-time</p>
              <ul class="job-requirements">
                <li>Excellent communication skills</li>
                <li>Customer service experience</li>
                <li>Multi-tasking abilities</li>
                <li>Computer proficiency</li>
              </ul>
              <a href="#apply" class="btn btn-primary">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form -->
      <section id="apply" class="features">
        <div class="features-container">
          <div class="form-container">
            <div class="section-header">
              <h2>Apply Now</h2>
              <p>Take the first step towards your new career</p>
            </div>
            <form class="application-form" onsubmit="handleFormSubmit(event)">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group">
                <label for="position">Position</label>
                <select id="position" name="position" required>
                  <option value="">Select Position</option>
                  <option value="cleaner">Professional Cleaner</option>
                  <option value="supervisor">Team Supervisor</option>
                  <option value="customer-service">Customer Service Representative</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Why do you want to join our team?</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderFranchises(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <div class="sparkle-badge">
            <i data-lucide="sparkles"></i>
            <span>Franchise Opportunities</span>
          </div>
          <h1 class="animate-fade-up">Own Your Success Story</h1>
          <p class="animate-fade-up delay-1">
            Join the GoCleeny franchise network and build a successful business with our proven model
          </p>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Why Choose a GoCleeny Franchise?</h2>
            <p>Join a rapidly growing network with comprehensive support and proven success</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="trending-up"></i>
              <h3>Proven Business Model</h3>
              <p>Benefit from our established success and proven operational systems</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="shield"></i>
              <h3>Brand Recognition</h3>
              <p>Leverage our strong brand presence and reputation in the market</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="users"></i>
              <h3>Comprehensive Training</h3>
              <p>Receive thorough initial and ongoing training for you and your team</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Investment Section -->
      <section class="investment-section">
        <div class="features-container">
          <div class="section-header">
            <h2>Investment Overview</h2>
            <p>Everything you need to get started</p>
          </div>
          <div class="investment-grid">
            <div class="investment-card">
              <h3>Initial Investment</h3>
              <p class="price">£25,000 - £50,000</p>
              <ul class="investment-includes">
                <li>Territory rights</li>
                <li>Initial training</li>
                <li>Equipment package</li>
                <li>Marketing materials</li>
              </ul>
            </div>
            <div class="investment-card">
              <h3>Ongoing Support</h3>
              <ul class="support-list">
                <li>Marketing assistance</li>
                <li>Operational support</li>
                <li>Technical training</li>
                <li>Business coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form -->
      <section id="apply" class="features">
        <div class="features-container">
          <div class="form-container">
            <div class="section-header">
              <h2>Start Your Franchise Journey</h2>
              <p>Take the first step towards owning your own business</p>
            </div>
            <form class="franchise-form" onsubmit="handleFormSubmit(event)">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group">
                <label for="location">Preferred Territory</label>
                <input type="text" id="location" name="location" required>
              </div>
              <div class="form-group">
                <label for="investment">Available Investment</label>
                <select id="investment" name="investment" required>
                  <option value="">Select Range</option>
                  <option value="25-50k">£25,000 - £50,000</option>
                  <option value="50-75k">£50,000 - £75,000</option>
                  <option value="75k+">£75,000+</option>
                </select>
              </div>
              <div class="form-group">
                <label for="experience">Business Experience</label>
                <textarea id="experience" name="experience" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderContact(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <h1 class="animate-fade-up">Contact Us</h1>
          <p class="animate-fade-up delay-1">We'd love to hear from you</p>
        </div>
      </section>

      <!-- Contact Information -->
      <section class="features">
        <div class="features-container">
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="phone"></i>
              <h3>Phone</h3>
              <p>07821323334</p>
              <p>Available 24/7</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="mail"></i>
              <h3>Email</h3>
              <p>Info@gocleeny.co.uk</p>
              <p>Response within 24 hours</p>
            </div>
            
            <div class="feature-card">
              <i data-lucide="map-pin"></i>
              <h3>Address</h3>
              <p>11 Darwin Street</p>
              <p>Bolton, BL1 3PJ</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="features">
        <div class="features-container">
          <div class="form-container">
            <div class="section-header">
              <h2>Send Us a Message</h2>
              <p>We'll get back to you as soon as possible</p>
            </div>
            <form class="contact-form" onsubmit="handleFormSubmit(event)">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select Subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="quote">Request Quote</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <!-- Business Hours -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Business Hours</h2>
            <p>We're available when you need us</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <h3>Weekdays</h3>
              <p>Monday - Friday</p>
              <p>8:00 AM - 8:00 PM</p>
            </div>
            <div class="feature-card">
              <h3>Weekends</h3>
              <p>Saturday - Sunday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            <div class="feature-card">
              <h3>Emergency Service</h3>
              <p>24/7 Available</p>
              <p>Call: 07821323334</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

function renderBooking(container) {
  container.innerHTML = `
    <div class="bg-gradient">
      <!-- Hero Section -->
      <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')">
        <div class="hero-content">
          <h1 class="animate-fade-up">Book a Service</h1>
          <p class="animate-fade-up delay-1">Professional cleaning services at £15 per hour</p>
        </div>
      </section>

      <!-- Booking Form -->
      <section class="features">
        <div class="features-container">
          <div class="form-container">
            <div class="section-header">
              <h2>Schedule Your Cleaning</h2>
              <p>Tell us about your cleaning needs</p>
            </div>
            <form class="booking-form" onsubmit="handleFormSubmit(event)">
              <div class="form-group">
                <label for="service">Select Service</label>
                <select id="service" name="service" required>
                  <option value="">Choose a Service</option>
                  <option value="home">Home Cleaning</option>
                  <option value="office">Office Cleaning</option>
                  <option value="tenancy">End of Tenancy</option>
                  <option value="airbnb">Airbnb Cleaning</option>
                </select>
              </div>
              <div class="form-group">
                <label for="date">Preferred Date</label>
                <input type="date" id="date" name="date" required>
              </div>
              <div class="form-group">
                <label for="time">Preferred Time</label>
                <input type="time" id="time" name="time" required>
              </div>
              <div class="form-group">
                <label for="hours">Number of Hours</label>
                <input type="number" id="hours" name="hours" min="1" value="1" required>
                <small>Minimum 1 hours required</small>
              </div>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <textarea id="address" name="address" rows="3" required></textarea>
              </div>
              <div class="form-group">
                <label for="notes">Special Instructions (Optional)</label>
                <textarea id="notes" name="notes" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Book Now</button>
            </form>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="features">
        <div class="features-container">
          <div class="section-header">
            <h2>Why Choose Our Service?</h2>
            <p>Experience the GoCleeny difference</p>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <i data-lucide="shield"></i>
              <h3>Insured & Bonded</h3>
              <p>Your property is protected with our comprehensive insurance coverage</p>
            </div>
            <div class="feature-card">
              <i data-lucide="check-circle"></i>
              <h3>Satisfaction Guaranteed</h3>
              <p>If you're not happy, we'll make it right</p>
            </div>
            <div class="feature-card">
              <i data-lucide="clock"></i>
              <h3>Flexible Scheduling</h3>
              <p>Book a time that works best for you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  lucide.createIcons();
}

// Initial route
router.navigate(window.location.pathname);