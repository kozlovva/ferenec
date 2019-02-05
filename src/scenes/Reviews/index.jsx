import React from 'react';
import Review from "./components/Review";
import {Grid, Row} from "react-bootstrap";

import "./style.scss";

export default class index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			items: [{
				name: 'Наталья',
				message:"Заказывала синабончики - очень вкусные",
				icon: "http://www.fais.info/wp-content/uploads/2016/03/flat-faces-icons-circle-16.png",
			},
			{
				icon: "https://d3syw3s8letioz.cloudfront.net/static/img/student-stock-photo.71e8b7927254.png",
				name: 'Иван',
				message:"Ну, конечно вкусно. Но я худею."
			}
			]
		}
	}

	render() {
		const {items} = this.state;
		return (
			<div className="reviews-wrapper">
				<Grid >
					<Row>
						{items.map((item, idx) => {
							if (idx < 2)
								return <div className="col s6">
								<Review className={idx%2 === 0 ? "orange" : ""} key={idx} review={item}/>
							</div>})}
					</Row>
				</Grid>
			</div>
		);
	}
}
