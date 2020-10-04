import React from 'react';
import {Card, Button,Container,Row,Col} from 'react-bootstrap';

function PageCard(){
	return(
		<div>
		<Container>
		<Row>
		<Col>
		<Card style={{ width: '15rem' , height: '36rem'}}>
			<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
			<Card.Body>
				<Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
				<Card.Text>
				Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final Piala Tiongkok. Diego Godin boleh berbangga setekah resmi menjadi.
				</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
		</Col>
		<Col>
		<Card style={{ width: '15rem' , height: '36rem'}}>
			<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600/100px180"/>
			<Card.Body>
				<Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-German</Card.Title>
				<Card.Text>
				Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun ligue 1 Peranci, demikian kata ayahnya
				</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
		</Col>
		<Col>
		<Card style={{ width: '15rem' , height: '36rem'}}>
			<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600/100px180" />
			<Card.Body>
				<Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
				<Card.Text>
				Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangant optimistis. Ross Berkley merasa Inggirs sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
				</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
		</Col>
		<Col>
		<Card style={{ width: '15rem' , height: '36rem'}}>
			<Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600/100px180" />
			<Card.Body>
				<Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
				<Card.Text>
				GodinGelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedia tim akan bentrok pada laga pemungkas grup K.
				</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
		</Col>
		</Row>
		</Container>
		</div>
	)
}

export default PageCard;