import styled from 'styled-components';

import mainStyle from '../../styles/main';

const {
	variables: { greyDark4, white },
	device: { mobile },
} = mainStyle;

export const DateContainer = styled.div`
	background-color: ${greyDark4};
	text-align: center;
	padding: 1rem 1rem;
	color: ${white};
	margin: 1rem 1rem;
`;

export const TimeContainer = styled.div`
	font-size: 2.5rem;
	font-weight: 500;

	@media ${mobile} {
		font-size: 3rem;
	}
`;

export const TitleContainer = styled.div`
	font-size: 1.5rem;
	@media ${mobile} {
		font-size: 2rem;
	}
`;
