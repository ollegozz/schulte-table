import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Title, Text, Button, Div } from '@vkontakte/vkui';

const Home = () => (
	<Panel>
		<div style={{ padding: 20 }}>
			<Title level="1" style={{ marginBottom: 32, textAlign: "center" }}>
				Таблица Шульте
			</Title>
			<Text style={{paddingLeft: 16}}>				
					Таблица со случайно расположенными числами,	служащие для проверки
					и развития быстроты нахождения этих объектов в определённом порядке.				
			</Text>
			<Title level="3" style={{ textAlign: "center", paddingTop: 32 }} >Как пользоваться?</Title>
			<Text style={{ padding: 16 }} >
				Находите числа в возрастающем порядке от 1 до 25, без про́пусков, с максимальной быстротой,
				желательно не проговаривая числа ни про себя, ни вслух. Очень важно избегать передвижений взгляда
				из центра и искать числа только периферическим зрением.
			</Text>
		</div>
		<Div style={{ padding: 32 }} >
			<Button size="l" stretched>
				Начать
			</Button>
		</Div>

	</Panel>
);



export default Home;
