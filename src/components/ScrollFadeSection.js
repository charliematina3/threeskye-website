import React from 'react';
import "./ScrollFadeSection.scss";

function ScrollFadeSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	const { noTransform, fadeInLeft, fadeInRight, faster, slower, className, style } = props;

	React.useEffect(() => {
		const currentDomRef = domRef.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setVisible(entry.isIntersecting);
				if (entry.isIntersecting) {
					observer.unobserve(entry.target);
				}
			});
		});
		observer.observe(currentDomRef);
		return () => observer.unobserve(currentDomRef);
	}, []);
	return (
		<div
			className={`scroll-fade-in-section${className ? " " + className : ""}${isVisible ? " is-visible" : ""}${noTransform ? " scroll-no-transform" : ""}${faster ? " scroll-fade-faster" : ""}${
				slower ? " scroll-fade-slower" : ""
				}${fadeInLeft ? " scroll-fade-in-left" : ""}${fadeInRight ? " scroll-fade-in-right" : ""}`}
			style={style}
			ref={domRef}
		>
			{props.children}
		</div>
	);
}

export default ScrollFadeSection;