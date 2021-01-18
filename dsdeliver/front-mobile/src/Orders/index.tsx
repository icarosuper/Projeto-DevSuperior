import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(false);
	const navi = useNavigation();
	const isFocused = useIsFocused();

	const handlePress = (order: Order) => {
		navi.navigate('OrderDetails', {order})
	}

	const getOrders = async () => {
		try{
			setLoading(true);
			const fetch = await fetchOrders();
			await setOrders(fetch.data);
		} catch(err) {
			Alert.alert('Houve um erro ao buscar os pedidos');
		} finally {
			setLoading(false);
		}
	}
	
	useEffect(() => {
		isFocused ? getOrders() : '';
	}, [isFocused]);	

	const renderCards = () => (
		orders.map(order => (
			<TouchableWithoutFeedback key={order.id} 
			onPress={() => handlePress(order)}>
				<OrderCard order={order}/>
			</TouchableWithoutFeedback>
		))
	)

	const loadingScreen = () => (
		<Text style={styles.title}>Carregando pedidos</Text>
	)

	return (
		<>
			<Header/>
			<ScrollView style={styles.container}>
				{ loading ? loadingScreen() : renderCards() }
			</ScrollView>
		</>
  	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: '5%',
		paddingRight: '5%',
	},
	title: {
	  color: '#263238',
	  fontSize: 26,
	  lineHeight: 35,
	  fontWeight: 'bold',
	  marginTop: 31,
	  textAlign: 'center'
	},
});

export default Orders;