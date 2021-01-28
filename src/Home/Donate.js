import React from "react";
import "./Donate.css";

function Donate() {
  return (
    <div className="wrapper">
      <p>
        The Internet Archive is a US 501c3 non-profit organization. Our tax ID
        number is 94-3242767. Your gift is tax deductible to the full extent
        provided by the law.
      </p>
      <div className="box box1">
        <h1>A Message from Internet Archive Founder, Brewster Kahle</h1>
        <hr />
        <p>Dear Internet Archive Community,</p>

        <p>
          Right now more than ever before, we need your help. 2020 brought
          unique challenges and unprecedented demand for our services. In the
          middle of a global pandemic, natural disasters, and political turmoil,
          we're all turning to our screens for information—today is the
          Internet's day.
        </p>

        <p>
          With our staff working remotely and our community relying on us like
          never before, we’re providing resources to digital learners,
          entertaining quarantined citizens everywhere, and archiving history as
          it unfolds. As physical libraries remain closed and the world adjusts
          to a new normal, we’re offering millions of texts, audio files,
          webpages, images, and other resources for users around the world.
          Right now:
        </p>

        <ul>
          <li>
            We’re hosting <b>70 petabytes</b> of data and counting
          </li>
          <li>
            The Wayback Machine is storing more than <b>475 billion </b>{" "}
            webpages
          </li>
          <li>
            Readers around the world are browsing more than{" "}
            <b>28 million books and texts</b>
          </li>
          <li>
            Music lovers, podcast listeners, Old Time Radio fans, and
            audiophiles have access to more than <b>14 million recordings</b>
          </li>
          <li>
            Users are uploading more than <b>17,000 items per day</b>
          </li>
        </ul>

        <p>
          The Internet Archive has always kept our collections completely free
          for everyone, everywhere. But we don’t charge for access, sell user
          data, or run ads. Instead, we rely on the generosity of individuals
          like you to pay for servers, staff, and preservation projects.
        </p>

        <p>
          A little goes a long way. For $20, we can acquire, digitize, and
          preserve a book forever. If everyone who uses the archive contributed
          just $5, we could continue offering these services for free and
          ad-free for years to come. If you find our site useful, please chip
          in! Your support will help us build the web we deserve. Together we
          can make it through these turbulent times and continue advancing
          Universal Access to All Knowledge.
        </p>

        <p>Thank you for joining me.</p>

        <p>
          <i>
            Brewster Kahle <br />
            Digital Librarian
          </i>
        </p>

        <p>
          Please make a tax-deductible donation now. <br />
          You will receive an email confirmation that can be used for your tax
          records. <br />
          The Internet Archive is a California non-profit charity that is
          tax-exempt under section 501c3 of the Internal <br />
          Revenue Code. Federal Tax ID Number 94-3242767.
        </p>
      </div>
      <div className="box box2">
        <h1>Donation</h1>
        <hr />
        <h2>Choose a payment method</h2>
        <div className="logo">
          <img
            className="footer__albumLogo"
            src="https://www.flaticon.com/svg/vstatic/svg/825/825488.svg?token=exp=1611293337~hmac=931f83c79f9c88ae148d978da8460b4a"
            alt=""
          />
          <img
            className="footer__albumLogo"
            src="https://www.flaticon.com/svg/vstatic/svg/825/825454.svg?token=exp=1611293134~hmac=567984811d598e41cf79a57ffb682fa4"
            alt=""
          />
          <img
            className="footer__albumLogo"
            src="https://www.flaticon.com/svg/vstatic/svg/825/825466.svg?token=exp=1611293337~hmac=1a5cdd1ce9ca4e1c16f96174faad6b66"
            alt=""
          />
          <img
            className="footer__albumLogo"
            src="https://www.flaticon.com/svg/vstatic/svg/825/825457.svg?token=exp=1611293337~hmac=c91918d0753ddd9bebec82c0d6a44b4d"
            alt=""
          />
          <img
            className="footer__albumLogo"
            src="https://www.flaticon.com/svg/vstatic/svg/825/825510.svg?token=exp=1611293452~hmac=b659a83316f046cb491d757ac1f93a7a"
            alt=""
          />
        </div>
        <hr />

        <div>
          <h2>Other ways to donate</h2>
          <p>
            <b>Mail your donation to:</b>
            <p>Internet Archive</p>
            <p>300 Funston Avenue</p>
            <p>San Francisco, CA 94118</p>
          </p>

          <p>
            <b>Stock or Wire Transfer:</b>
            <br />
            <p>
              If you would like to make a stock or wire transfer gift, please
              contact us at{" "}
              <a href="donations@libraryarchieve.org">
                donations@libraryarchive.org
              </a>
            </p>
          </p>
          <p>
            <small>
              By donating, you will receive occasional donor-related emails from
              the Internet Archive. We do not sell or trade your information
              with anyone. You can unsubscribe at any time.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donate;
