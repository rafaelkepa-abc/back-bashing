import { CircleCheckBig } from "lucide-react";

const CALENDLY_BOOKING_URL = "https://calendly.com/rafaelkepa/30min";

function YuCheck({ variant }: { variant: "teal" | "gold" }) {
  return (
    <span className={`yu-check yu-check--${variant}`} aria-hidden="true">
      <CircleCheckBig
        className="yu-check-icon"
        size={18}
        strokeWidth={variant === "gold" ? 2 : 1.75}
        aria-hidden="true"
      />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <div className="brand-logo-wrap">
              <img
                src="/logo_text.png"
                alt="Back Bashing"
                className="brand-logo-img"
              />
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#event">EVENT</a>
            <a href="#details">DETAILS</a>
            <a href="#about">ABOUT</a>
          </nav>

          <a
            href={CALENDLY_BOOKING_URL}
            className="btn btn-outline-gold nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK YOUR SPOT
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="event">
          <div className="hero-bg" aria-hidden="true">
            <div className="nebula nebula-1" />
            <div className="nebula nebula-2" />
            <div className="streaks streaks-tr" />
            <div className="streaks streaks-bl" />
            <div className="sparkles" />
          </div>

          <div className="hero-grid">
            <div className="hero-left">
              <div className="kicker">
                <span className="kicker-dot" />
                <span>ONE OFF</span>
                <span className="kicker-sep">•</span>
                <span>ONE DAY ONLY</span>
                <span className="kicker-dot" />
              </div>

              <h1 className="hero-title">
                <img
                  src="/hero_text.png"
                  alt="Back Bashing"
                  className="hero-title-img"
                />
              </h1>

              <div className="subtitle-block">
                <p className="subtitle">DEEP TISSUE MASSAGE</p>
                <div className="sub-tag">DONE{"\u00a0\u00a0"}PROPER</div>
              </div>

              <p className="lede">
                Deep, intense deep tissue massage to release stubborn tension in{" "}
                <span className="hl">neck,</span>{" "}
                <span className="hl">back</span> and{" "}
                <span className="hl">shoulders</span>.
              </p>

              <ul className="no-list" role="list">
                <li>
                  <span className="x-mark" aria-hidden="true">
                    ✕
                  </span>{" "}
                  No more silly tickle my back.
                </li>
                <li>
                  <span className="x-mark" aria-hidden="true">
                    ✕
                  </span>{" "}
                  No more can&apos;t feel anything.
                </li>
                <li>
                  <span className="x-mark" aria-hidden="true">
                    ✕
                  </span>{" "}
                  No more light and not effective massage.
                </li>
                <li>
                  <span className="x-mark" aria-hidden="true">
                    ✕
                  </span>{" "}
                  No more wasted time and disappointment.
                </li>
              </ul>

              <div className="hex-row">
                <div className="hex">
                  <div className="hex-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>
                  <div className="hex-value">70</div>
                  <div className="hex-label">MINUTES</div>
                </div>
                <div className="hex">
                  <div className="hex-icon hex-icon-text" aria-hidden="true">
                    £
                  </div>
                  <div className="hex-value">£99</div>
                  <div className="hex-label">PER SESSION</div>
                </div>
                <div className="hex">
                  <div className="hex-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                  <div className="hex-value hex-value-sm">ONLY</div>
                  <div className="hex-label hex-label-lg">5 SPOTS</div>
                </div>
                <div className="hex">
                  <div className="hex-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="hex-value hex-value-xs">SATISFACTION</div>
                  <div className="hex-label hex-label-stack">
                    GUARANTEED
                    <br />
                    OR MONEY BACK
                  </div>
                </div>
              </div>

              <a
                href={CALENDLY_BOOKING_URL}
                className="btn btn-gold-primary cta-main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-main-top">BOOK YOUR SPOT NOW</span>
                <span className="cta-main-sub">
                  £30 DEPOSIT TO SECURE YOUR SPACE
                </span>
              </a>

              <div className="spots-line">
                <span className="spots-arrow" aria-hidden="true">
                  ▼
                </span>
                <span className="spots-num">5 / 5</span>
                <span className="spots-text">SPOTS AVAILABLE</span>
              </div>
            </div>

            <div className="hero-right" aria-hidden="false">
              <div className="portrait-card">
                <img src="/hero_potrait.png" alt="Rafael, deep tissue specialist" />
              </div>
            </div>
          </div>
        </section>

        <section className="you-me" id="about">
          <div className="frame frame-gold">
            <div className="yu-grid">
              <div className="yu-col">
                <h3 className="yu-title">YOU</h3>
                <ul role="list" className="yu-list">
                  <li>
                    <YuCheck variant="teal" /> Missing proper deep tissue
                    massage
                  </li>
                  <li>
                    <YuCheck variant="teal" /> Ready for &quot;Good Pain&quot;
                    experience
                  </li>
                  <li>
                    <YuCheck variant="teal" /> Want better sport performance
                  </li>
                </ul>
              </div>
              <div className="yu-divider" aria-hidden="true" />
              <div className="yu-col">
                <h3 className="yu-title gold">ME</h3>
                <ul role="list" className="yu-list">
                  <li>
                    <YuCheck variant="gold" /> Over 10 years experience
                  </li>
                  <li>
                    <YuCheck variant="gold" /> 5-star customer service
                  </li>
                  <li>
                    <YuCheck variant="gold" /> Fix the pain
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="event-details" id="details">
          <fieldset className="frame frame-gold fieldset-section">
            <legend className="fieldset-legend">EVENT DETAILS</legend>

            <div className="details-grid">
              <article className="detail-card">
                <div className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 9h18M8 3v4M16 3v4" />
                  </svg>
                </div>
                <h4 className="detail-label">DATE</h4>
                <p className="detail-value">
                  24th May
                  <br />
                  2026
                </p>
              </article>

              <article className="detail-card">
                <div className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <h4 className="detail-label">LOCATION</h4>
                <p className="detail-value">
                  Block 1A,
                  <br />
                  11 Adelphi Street,
                  <br />
                  M3 6JN
                </p>
              </article>

              <article className="detail-card">
                <div className="detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h4 className="detail-label">SESSION</h4>
                <p className="detail-value">
                  70 Minutes
                  <br />
                  Deep Tissue
                  <br />
                  Massage
                </p>
              </article>

              <article className="detail-card">
                <div className="detail-icon detail-icon-text">£</div>
                <h4 className="detail-label">PRICE</h4>
                <p className="detail-value">
                  <strong className="big">£99</strong>
                  <br />
                  £30 Deposit
                  <br />
                  Remaining £69
                  <br />
                  on the day
                </p>
              </article>
            </div>
          </fieldset>
        </section>

        <section className="booking" id="book">
          <fieldset className="frame frame-gold fieldset-section">
            <legend className="fieldset-legend">BOOK YOUR APPOINTMENT</legend>
            <p className="booking-sub">
              ONLY 5 SPOTS AVAILABLE – FIRST COME, FIRST SERVED
            </p>

            <div className="slots-grid">
              <a
                href={CALENDLY_BOOKING_URL}
                className="slot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="slot-num">1</span>
                <span className="slot-time">10:00</span>
                <span className="slot-period">AM</span>
                <span className="slot-status">AVAILABLE</span>
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                className="slot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="slot-num">2</span>
                <span className="slot-time">12:00</span>
                <span className="slot-period">PM</span>
                <span className="slot-status">AVAILABLE</span>
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                className="slot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="slot-num">3</span>
                <span className="slot-time">14:00</span>
                <span className="slot-period">PM</span>
                <span className="slot-status">AVAILABLE</span>
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                className="slot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="slot-num">4</span>
                <span className="slot-time">16:00</span>
                <span className="slot-period">PM</span>
                <span className="slot-status">AVAILABLE</span>
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                className="slot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="slot-num">5</span>
                <span className="slot-time">18:00</span>
                <span className="slot-period">PM</span>
                <span className="slot-status">AVAILABLE</span>
              </a>
            </div>
          </fieldset>

          <h2 className="closing-title">ONLY 5 SPACES. ONE DAY ONLY.</h2>
          <p className="closing-sub">
            EXPERIENCE WHAT PROPER DEEP TISSUE FEELS LIKE.
          </p>

          <div className="deposit-card frame frame-gold">
            <div className="deposit-heading">
              SECURE YOUR SPOT WITH £30 DEPOSIT
            </div>
            <a
              href={CALENDLY_BOOKING_URL}
              className="btn btn-teal pay-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{"BOOK & PAY DEPOSIT – £30"}</span>
              <svg
                className="lock"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9z" />
              </svg>
            </a>
            <div className="payment-note">{"SAFE & SECURE PAYMENT"}</div>
            <div
              className="payment-methods"
              aria-label="Accepted payment methods"
            >
              <span className="pay pay-visa">VISA</span>
              <span className="pay-dot">●</span>
              <span className="pay pay-mc">
                <span className="mc-c mc-r" />
                <span className="mc-c mc-y" />
              </span>
              <span className="pay-dot">|</span>
              <span className="pay pay-apple">{"\uF8F7"}Pay</span>
              <span className="pay-dot">|</span>
              <span className="pay pay-google">
                <span className="g-blue">G</span> Pay
              </span>
            </div>
            <p className="balance-note">
              Full balance (£69) to be paid on the day.
            </p>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Back Bashing by Rafael. All rights reserved.</p>
      </footer>
    </>
  );
}
