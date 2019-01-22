import React from "react";
import DoctorsMap from "./Map";

export default class DoctorsMapContainer extends React.Component {

	render() {
		return (
			<DoctorsMap
				doctors={this.props.doctors}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDf-Ac8lc5Bm8yeryjvlL5mnLlm5fq3Stg&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `80%` }} />}

			/>
		);
	}
}