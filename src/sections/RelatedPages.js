import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import "./TrustedBy.scss";
import FlexWrapper from '../components/FlexWrapper';
import { ArrowRightAlt } from '@material-ui/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./RelatedPages.scss";

const RelatedCard = ({text, onClick, alt}) => {
	return (
		<Card className={`related-card${alt ? ' alt' : ''}`} onClick={onClick}>
			{/* Text */}
			<FlexWrapper className='related-card-text' justifyContent="space-between" alignItems="center">
				<h5 className="related-header mb-0">{text}</h5>
				<ArrowRightAlt />
			</FlexWrapper>
		</Card>
	)
}

const RelatedPages = () => {
	
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<FadeInSection>
			<TsContainer>
				<Row className="mb-4">
					<Col xs="12">
						<FadeInSection delay="1">
							<h3 className="mb-0">Related Pages</h3>
						</FadeInSection>
					</Col>
				</Row>
				<Row style={{rowGap: 24}}>
					<Col xs="12" lg={6}>
						<RelatedCard text="3SKYE Wealth Platform" onClick={() => changeRoute('/wealth')} />
					</Col>
					<Col xs="12" lg={6}>
						<RelatedCard alt text="3SKYE Research Platform" onClick={() => changeRoute('/research')} />
					</Col>
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}

export default RelatedPages;