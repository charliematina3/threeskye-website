import { LogoObject } from "../../components/logos/Logos";

const office = LogoObject[0];
const powerBi = LogoObject[1];
const azure = LogoObject[2];
const nzx = LogoObject[3];
const chelmer = LogoObject[4];
const apex = LogoObject[5];
const addy = LogoObject[6];
const akahu = LogoObject[7];
const refinitiv = LogoObject[8];
const bloomberg = LogoObject[9];
const xignite = LogoObject[10];
const eod = LogoObject[11];
const sendGrid = LogoObject[12];
const clickSend = LogoObject[13];
const ms = LogoObject[14];

export const IntegrationsContent = [
	{
		name: "Financial Service Integrations",
		description: "Live feeds from NZX Wealth Technologies, Chelmer and Apex Group (formerly MMC), allow for a single, accurate picture of portfolios and trading information.",
		ref: 'financial',
		tiles: [
			{
				name: nzx.name,
				code: nzx.code,
				description: nzx.description,
				image: nzx.img,
				link: nzx.link
			},
			{
				name: chelmer.name,
				code: chelmer.code,
				description: chelmer.description,
				image: chelmer.img,
				link: chelmer.link,
			},
			{
				name: apex.name,
				code: apex.code,
				description: apex.description,
				image: apex.altImg,
				link: apex.link,
			},
		],
	},
	{
		name: "Compliance Integrations",
		description: "Easily satisfy your KYC and AML obligations in one place. Happy Compliance = Happy Life.",
		ref: 'compliance',
		tiles: [
			{
				name: addy.name,
				code: addy.code,
				description: addy.description,
				image: addy.img,
				link: addy.link
			},
			{
				name: akahu.name,
				code: akahu.code,
				description: akahu.description,
				image: akahu.img,
				link: akahu.link,
			},
		],
	},
	{
		name: "Market Data Integrations",
		description: "Live feeds from major providers.",
		ref: 'market',
		tiles: [
			{
				name: refinitiv.name,
				code: refinitiv.code,
				description: refinitiv.description,
				image: refinitiv.img,
				link: refinitiv.link,
				partnership: true
			},
			{
				name: bloomberg.name,
				code: bloomberg.code,
				description: bloomberg.description,
				image: bloomberg.img,
				link: bloomberg.link,
			},
			{
				name: xignite.name,
				code: xignite.code,
				description: xignite.description,
				image: xignite.img,
				link: xignite.link,
			},
			{
				name: eod.name,
				code: eod.code,
				description: eod.description,
				image: eod.img,
				link: eod.link,
			},
		],
	},
	{
		name: "Business Automation",
		description: "Discover a comprehensive suite of solutions, offering everything from effortless sign-on and email synchronisation, to powerful data-driven dashboards, secure email distribution, and instant SMS communication - all tailored to streamline your operations and empower informed decision-making.",
		ref: 'business',
		tiles: [
			{
				name: ms.name,
				code: ms.code,
				description: ms.description,
				image: ms.img,
				title: ms.title,
				link: ms.link,
				large: true,
				partnership: ms.partnership,
				subs: [
					{
						name: azure.name,
						code: azure.code,
						description: azure.description,
						image: azure.img,
						link: azure.link,
					},
					{
						name: office.name,
						code: office.code,
						description: office.description,
						image: office.img,
						link: office.link,
					},
					{
						name: powerBi.name,
						code: powerBi.code,
						description: powerBi.description,
						image: powerBi.img,
						link: powerBi.link,
					},
				]
			},
			{
				name: sendGrid.name,
				code: sendGrid.code,
				description: sendGrid.description,
				image: sendGrid.img,
				link: sendGrid.link,
			},
			{
				name: clickSend.name,
				code: clickSend.code,
				description: clickSend.description,
				image: clickSend.img,
				link: clickSend.link,
			}
		],
	},
	{
		name: "Partnerships",
		description: "Through strategic partnerships, our company stands on the shoulders of giants, leveraging the collective strengths, expertise, and resources of our esteemed partners.",
		ref: 'partnerships',
		tiles: [
			{
				name: ms.name,
				code: ms.code,
				description: ms.partnership,
				image: ms.img,
				link: ms.link
			},
			{
				name: refinitiv.name,
				code: refinitiv.code,
				description: refinitiv.partnership,
				image: refinitiv.img,
				link: refinitiv.link,
			},
		],
	},
];