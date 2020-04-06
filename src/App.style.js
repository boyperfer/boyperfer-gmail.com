import styled from 'styled-components';

import Map from './component/map/map.component';
import MyHome from './component/myhome/myhome.component';
import mainStyle from './styles/main';

const {
	device: { mobile },
} = mainStyle;

export const AppContainer = styled.div`
	backface-visibility: hidden;
	height: 100vh;
	display: grid;
	grid-template-columns: 25vw 75vw;
	justify-content: center;
	align-content: center;

	@media ${mobile} {
		display: flex;
	}
`;

export const MyHomeContainer = styled(MyHome)`
	grid-column: 1/2;

	@media ${mobile} {
		grid-column: unset;
	}
`;

export const MapContainer = styled(Map)`
	grid-column: 2/3;

	@media ${mobile} {
		grid-column: unset;
	}
`;
