import React from 'react';
import "./Logo.scss";

const Logo = ({ src, alt, link, maxWidth }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="logo-wrapper cursor-pointer" style={{maxWidth: maxWidth ? maxWidth : ""}}>
			<img src={src} alt={alt} />
		</a>
	);
};

// Logo object
export const LogoObject = [
	{
		name: "Microsoft Office 365",
		code: "office",
		description:
			"Experience seamless integration and robust compliance with our wealth CRM, automatically synchronising your emails from Office 365 for efficient and compliant communication.",
		img: "images/2023-images/logos/Office.jpg",
		link: "https://www.microsoft.com/en-nz/microsoft-365",
	},
	{
		name: "Microsoft Power BI",
		code: "power-bi",
		description:
			"Enhance your data visualisation and business intelligence with our integration of Microsoft Power BI. Integrated into the 3SKYE platform, it offers streamlined access to insights that drive smarter business decisions.",
		img: "images/2023-images/logos/power-bi.jpg",
		link: "https://powerbi.microsoft.com/en-au/",
	},
	{
		name: "Azure AD",
		code: "azure",
		description: "Empower your access with our Single Sign-On (SSO) service, seamlessly integrated with Azure AD for secure and effortless authentication.",
		img: "images/2023-images/logos/azure.jpg",
		link: "https://azure.microsoft.com/en-us",
	},
	{
		name: "NZX Wealth Technologies",
		code: "nzx",
		description: "Provides custodial services to financial advisers in NZ.",
		img: "images/2023-images/logos/nzx.jpg",
		link: "https://nzxwt.com/",
	},
	{
		name: "Chelmer",
		code: "chelmer",
		description: "Our integration with Chelmer provides a steady, reliable platform for trading and investment solutions.",
		img: "images/2023-images/logos/chelmer.jpg",
		link: "https://chelmer.co/",
	},
	{
		name: "Apex Group",
		code: "apex",
		description: "Investment administration, portfolio reporting and custodial services. Apex Group acquired MMC in 2022.",
		img: "images/2023-images/logos/apex.jpg",
		link: "https://www.apexgroup.com/",
	},
	{
		name: "Addy",
		code: "addy",
		description: "Addy for address verification for onboarding and AML. Addy also provides autocomplete for finding and adding New Zealand and Australian addresses.",
		img: "images/2023-images/logos/addy.jpg",
		link: "https://www.addysolutions.com/",
	},
	{
		name: "Akahu",
		code: "akahu",
		description: "Provides seamless, secure account addition for onboarding, KYC, and AML verification.",
		img: "images/2023-images/logos/akahu.jpg",
		link: "https://www.akahu.nz/",
	},
	{
		name: "Refinitiv",
		code: "refinitiv",
		description:
			"Experience unparalleled data access with our integration with Refinitiv. This powerful tool supplies real-time and historical data, offering critical insights into market pricing and fundamentals. Elevate your investment strategy with rich, comprehensive data, efficiently harnessed through the 3SKYE platform.",
		img: "images/2023-images/logos/refinitiv.jpg",
		link: "https://www.refinitiv.com/",
	},
	{
		name: "Bloomberg",
		code: "bloomberg",
		description:
			"Leverage our Bloomberg API integration for real-time, historical, and reference market data. This tool delivers vital pricing and fundamental data, powering strategic investment decisions through 3SKYE.",
		img: "images/2023-images/logos/bloomberg.jpg",
		link: "https://www.bloomberg.com/",
	},
	{
		name: "Xignite",
		code: "xignite",
		description:
			"Maximise your market intelligence with our Xignite integration. Providing real-time and historical data, Xignite equips you with essential pricing and fundamental market insights. Streamline your investment strategy with robust, accessible data, all seamlessly delivered through the 3SKYE platform.",
		img: "images/2023-images/logos/xignite.jpg",
		link: "https://www.xignite.com/",
	},
	{
		name: "EOD Historical Data",
		code: "eod",
		description:
			"Tap into a wealth of historical data with our EODHistoricalData.com integration. This tool provides extensive end-of-day data, offering invaluable insights into market pricing and fundamentals. Inform and refine your investment decisions with comprehensive historical data, all through the seamless experience of the 3SKYE platform.",
		img: "images/2023-images/logos/EOD.jpg",
		link: "https://eodhistoricaldata.com/",
	},
	{
		name: "Send Grid",
		code: "send-grid",
		description:
			"Enhance your email outreach through our seamless integration with SendGrid, ensuring secure, reliable, and targeted email distribution to meet your communication needs.",
		img: "images/2023-images/logos/send-grid.jpg",
		link: "https://sendgrid.com/",
	},
	{
		name: "Click Send",
		code: "click-send",
		description:
			"Stay connected on-the-go with our integration with ClickSend, facilitating secure and instantaneous SMS messaging to reach your stakeholders wherever they are.",
		img: "images/2023-images/logos/click-send.jpg",
		link: "https://www.clicksend.com/nz/",
	},
];

export default Logo;
