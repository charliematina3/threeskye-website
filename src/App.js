import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import './App.scss';
import Footer from "./components/Footer";
import MobileNav from "./components/mobile/navigation/MobileNav";
import ResearchPage from "./pages/ResearchPage";
import WealthPage from "./pages/WealthPage";
import TsxPage from "./pages/TsxPage";
import AboutUsPage from "./pages/AboutUsPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NavBar from "./components/desktop/navigation/NavBar";
import ErrorPage from "./pages/ErrorPage";

function App() {
	// Paths for navigation
	const paths = [
		{ name: "Home", path: "/", exact: true },
		{ name: "About Us", path: "/about-us" },
		{ name: "Get in Touch", path: "/get-in-touch" },
		{ name: "Privacy Policy", path: "/privacy-policy" },
	];

	// Product paths + content 
	const products = [
		{ name: "Research Platform", path: "/research-platform", text: "A platform for publishing institutional and equity research.", landingText: "Create publish and distribute Research the easy way", img: "/images/product-rp.png" },
		{ name: "Wealth Platform", path: "/wealth-platform", text: "A Single Pane of Glass", landingText: "A modular platform for financial professionals and investors.", img: "/images/product-wp.png" },
		{ name: "3Skye-X", path: "/3skye-x", text: "A HNW and family office focused platform.", landingText: "A HNW and Family Office focused platform.", img: "/images/product-hnw.png" },
	];

	return (
		<div className="master-container">
			<BrowserRouter>
				{/* Navigation */}
				{/* Mobile */}
				<MobileNav paths={paths} products={products} />
				{/* Desktop */}
				<NavBar products={products} />
				<div className="main-content-container" id="main-content">
					<Switch>
						<Route path="/" exact render={() => <Homepage products={products} />} />
						<Route path="/research-platform" exact render={() => <ResearchPage products={products} />} />
						<Route path="/wealth-platform" exact render={() => <WealthPage products={products} />} />
						<Route path="/3skye-x" exact render={() => <TsxPage products={products} />} />
						<Route path="/about-us" exact render={() => <AboutUsPage products={products} />} />
						<Route path="/get-in-touch" exact render={() => <GetInTouchPage products={products} />} />
						<Route path="/privacy-policy" exact render={() => <PrivacyPolicyPage products={products} />} />
						<Route render={ErrorPage}/>
					</Switch>
				</div>
				<Footer paths={paths} products={products} />
			</BrowserRouter>
		</div>
	);
}

export default App;
