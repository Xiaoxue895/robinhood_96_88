import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-columns">
				<div className="footer-left">
					<div className="footer-links">
						<h4>Product</h4>
						<ul>
							<li>
								<Link to="/searchres">Invest</Link>
							</li>
							<li>
								<Link to="/credit-card">Credit Card</Link>
							</li>
							<li>
								<Link to="/gold">Gold</Link>
							</li>
							<li>
								<Link to="/crypto">Crypto</Link>
							</li>
							<li>
								<Link to="/portfolios">Retirement</Link>
							</li>
							<li>
								<Link to="/options">Options</Link>
							</li>
							<li>
								<Link to="/futures">Futures</Link>
							</li>
							<li>
								<Link to="/learn">Learn</Link>
							</li>
							<li>
								<Link to="/snacks">Snacks</Link>
							</li>
						</ul>
					</div>

					<div className="footer-links-column">
						<h4>Company</h4>
						<ul>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/partner">Partner With Us</Link>
							</li>
							<li>
								<Link to="/careers">Careers</Link>
							</li>
							<li>
								<Link to="/support">Support</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer-right">
					<div className="footer-links-column">
						<h4>Legal & Regulatory</h4>
						<ul>
							<li>
								<Link to="/terms">Terms & Conditions</Link>
							</li>
							<li>
								<Link to="/privacy">Privacy</Link>
							</li>
							<li>
								<Link to="/disclosures">Disclosures</Link>
							</li>
						</ul>
					</div>

					<div className="footer-legal">
						<h4>All investing involves risk</h4>
						<p>
							Brokerage services are offered through Robinhood Financial LLC
							(&quot;RHF&quot;), a registered broker dealer (member SIPC), and
							clearing services through Robinhood Securities, LLC
							(&quot;RHS&quot;), a registered broker dealer (member SIPC).
						</p>
						<p>
							Cryptocurrency services are offered through Robinhood Crypto, LLC
							(&quot;RHC&quot;) (NMLS ID: 1702840). Cryptocurrency held through
							Robinhood Crypto is not FDIC insured or SIPC protected.
						</p>
						<p>
							The Robinhood spending account is offered through Robinhood Money,
							LLC (&quot;RHY&quot;) (NMLS ID: 1990968), a licensed money
							transmitter.
						</p>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p>© 2024 RobinHood. All rights reserved.</p>
				<p>
					This is a cloned website built as a portfolio project for App Academy.
				</p>
				<h1 className="footer-branding">Robinhood</h1>
			</div>
		</footer>
	);
};

export default Footer;