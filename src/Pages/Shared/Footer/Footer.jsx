import icon from "../../../../public/Gold Modern Music Logo.gif";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div className="drop-shadow-2xl shadow-inherit rounded-full">
          <img src={icon} className="w-24 rounded-full mx-auto mb-2" alt="" />
          <span className="footer-title mx-auto">MELODY GROVE</span>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Music Lessons</a>
          <a className="link link-hover">Instrument Rentals</a>
          <a className="link link-hover">Ensemble Workshops</a>
          <a className="link link-hover">Performance Opportunities</a>
        </div>
        <div>
          <span className="footer-title">About Melody Grove</span>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Instructors</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">FAQ</a>
        </div>

        <div>
          <span className="footer-title">Programs</span>
          <a className="link link-hover">Summer Music Camp</a>
          <a className="link link-hover">Group Classes</a>
          <a className="link link-hover">Recitals and Concerts</a>
          <a className="link link-hover">Music Theory Workshops</a>
        </div>

        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">Location & Hours</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Register Now</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2023 Melody Grove (Summer Camp). All rights reserved.</p>
          <p>Created by Melody Grove Industries Ltd</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
