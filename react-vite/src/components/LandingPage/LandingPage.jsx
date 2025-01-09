import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import StockTickerAnimation from "../StockTickerAnimation/StockTickerAnimation";
import LandingSignupGlow from "../LandingSignupGlow/LandingSignupGlow";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAllStocksThunk } from "../../redux/stock";
import "./LandingPage.css";

const LandingPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const stocks = useSelector((state) => state.stock.stocks);
	// const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(showAllStocksThunk());
	}, [dispatch]);

	// const handleExploreLegendClick = () => {
	// 	navigate("/");
	// };

	// const handleStockClick = (stockId) => {
	// 	navigate(`/stocks/${stockId}`);
	// };

	return (
		<div className="landing-page">
			<section className="search-bar-section">
				<SearchBar />
			</section>

			<section className="stock-ticker-animation-section">
				<StockTickerAnimation />
			</section>
			<br />
			<section className="hero">
				<h1 className="hero-title">A New Legend for a New Era</h1>
				<p className="hero-subtitle">
					A trading platform in your browser for free. Now available to all
					Group 96 Investors customers.
				</p>
				<button
					className="hero-explore-button"
					onClick={() => alert("New feature coming soon!")}
				>
					Explore Legend
				</button>
			</section>

			<img
				src="/assets/hero-background.jpg"
				alt="Hero Section Graphic"
				className="below-hero-image"
			/>

			<section className="investing">
				<h1>Investing</h1>
				<p>Build your portfolio starting with just $1</p>
				<p>
					Invest in stocks, ETFs, and their options, at your pace and
					comission-free
				</p>
				<button
					className="investing-learn-more-button"
					onClick={() => navigate("/searchres")}
				>
					Learn More
				</button>
			</section>

			<img
				src="/assets/landing-page-investing-section.jpg"
				alt="Investing Section Graphic"
				className="below-investing-image"
			/>

			<section className="crypto-section investing">
				<div className="crypto-div">
					<h1>Group 96 Investors Crypto</h1>
					<p>Get started with Group 96 Investors Crypto. Trade crypto 24/7.</p>
					<button
						className="crypto-learn-more-button hero-explore-button"
						onClick={() => alert("New feature coming soon!")}
					>
						Learn More
					</button>
				</div>
			</section>

			<img
				src="/assets/landing-page-crypto.jpg"
				alt="Crypto Section Graphic"
				className="below-crypto-image"
			/>

			<section className="protection-guarantee-section investing">
				<h1>Group 96 Investors Protection Guarantee</h1>
				<button
					className="protection-guarantee-button hero-explore-button"
					onClick={() => alert("New feature coming soon!")}
				>
					Learn more about our committments
				</button>
				<p>We work hard to keep your data safe and secure.</p>
				<p>We protect your account from unauthorized activity.</p>
				<p>We provide multi-factor authentication on all accounts.</p>
				<p>We&apos;ve got your back. We&apos;re available to you 24/7.</p>
			</section>

			<LandingSignupGlow />

			<section className="better-investor-section investing">
				<h1>Become a Better Investor on the Go</h1>
				<p>Take charge of your financial future with our easy-to-use app.</p>
				<button
					className="better-investor-button hero-explore-button"
					onClick={() => navigate("/signup")}
				>
					Sign up to access Group 96 Investors Learn
				</button>
			</section>

			<Footer />
		</div>
	);
};

export default LandingPage;
