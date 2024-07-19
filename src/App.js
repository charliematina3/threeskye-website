import { Route, Switch } from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
import TsxPage from "./pages/TsxPage";
// import Homepage from "./pages/Homepage";
import './App.scss';
import Footer from "./components/Footer";
import MobileNav from "./components/mobile/navigation/MobileNav";
import ResearchPage from "./pages/ResearchPage";
import WealthPage from "./pages/WealthPage";
import AboutUsPage from "./pages/AboutUsPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NavBar from "./components/desktop/navigation/NavBar";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import IntegrationsPage from "./pages/IntegrationsPage";
import FundManagementPage from "./pages/FundManagementPage";
import PortalManagementPage from "./pages/PortalManagementPage";

function App() {
	// Paths for navigation
	const paths = [
		{ name: "Home", path: "/", exact: true },
		{ name: "About Us", path: "/about-us" },
		{ name: "Let's Chat", path: "/get-in-touch" },
		{ name: "Privacy Policy", path: "/privacy-policy" },
	];

	// Product paths + content 
	const products = [
		{ name: "3SKYE Research Publication", path: "/research", exact: true, text: "Institutional and retail equity research the easy way", landingText: "Create publish and distribute Research the easy way.", img: "/images/2023-images/products/research-nav-new.png" },
		{ name: "3SKYE Funds Management", path: "/funds-management", exact: true, text: "Automate all your Fund Documentation.", landingText: "Automate all your Fund Documentation. Simple.", img: "/images/funds/fund-menu.png" },
		// { name: "3SKYE Portal Management", path: "/portal-management", exact: true, text: "Streamline client onboarding and portal management.", landingText: "Streamline Client Onboarding and Portal Management with Ease.", img: "/images/portal-management/pmp-menu.png" },
		{ name: "3SKYE Wealth Platform", path: "/wealth", text: "A Single Pane of Glass", landingText: "A modular platform for financial professionals and investors.", img: "/images/2023-images/products/crm-single.png" },
		{ name: "3SKYE-X", path: "/3skye-x", text: "A HNW and family office focused platform.", landingText: "A HNW and Family Office focused platform.", img: "/images/2023-images/products/3sx-holdings-large.png" },
	];

	const other = [
		{ name: "Integrations", path: "/integrations", exact: true },
	];

	const combinedPaths = [ ...paths, ...other ];

	return (
		<div className="master-container">
			<BrowserRouter>
				{/* Navigation */}
				{/* Mobile */}
				<MobileNav paths={combinedPaths} products={products} />
				{/* Desktop */}
				<NavBar products={products} />
				<div className="main-content-container" id="main-content">
					<Switch>
						<Route path="/" exact render={() => <Homepage products={products} />} />
						<Route path="/wealth" exact render={() => <WealthPage products={products} />} />
						<Route path="/portal-management" exact render={() => <PortalManagementPage products={products} />} />
						<Route path="/funds-management" exact render={() => <FundManagementPage products={products} />} />
						<Route path="/fund-management" exact>
        					<Redirect to="/funds-management" />
      					</Route>
						<Route path="/research" exact render={() => <ResearchPage products={products} />} />
						<Route path="/3skye-x" exact render={() => <TsxPage products={products} />} />
						<Route path="/integrations" exact render={() => <IntegrationsPage />} />
						<Route path="/about-us" exact render={() => <AboutUsPage products={products} />} />
						<Route path="/get-in-touch" exact render={() => <GetInTouchPage products={products} />} />
						<Route path="/privacy-policy" exact render={() => <PrivacyPolicyPage products={products} />} />
						<Route render={ErrorPage}/>
					</Switch>
				</div>
				<Footer paths={paths} products={products} other={other} />
			</BrowserRouter>
		</div>
	);
}

export default App;