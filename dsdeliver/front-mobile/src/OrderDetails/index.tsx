import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Alert, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { setDelivered } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

type Props = {
	route: {
		params: {
			order: Order;
		}
	}
}

function OrderDetails({route}: Props) {
	const {order} = route.params;
	const navi = useNavigation();

	const confirmarPedido = async () => {
		try{
			await setDelivered(order.id);
			Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
			navi.navigate('Orders');
		} catch(err){
			Alert.alert(`Ocorreu um erro ao tentar confirmar o pedido ${order.id}`)
		}
	}

	const startNavigation = () => {
		Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
	}

	return (
		<>
			<Header/>
			<View style={styles.container}>
				<OrderCard order={order}></OrderCard>

				<Button buttonStyle={styles.button} onPress={() => startNavigation()} 
				title="INICIAR NAVEGAÇÃO" titleStyle={styles.buttonText}/>

				<Button buttonStyle={styles.button} onPress={() => confirmarPedido()} 
				title="CONFIRMAR ENTREGA" titleStyle={styles.buttonText}/>

				<Button buttonStyle={styles.button} onPress={() => navi.navigate('Orders')} 
				title="CANCELAR" titleStyle={styles.buttonText}/>
			</View>
		</>
  );
}

const styles = StyleSheet.create({
	container: {
	  paddingRight: '5%',
	  paddingLeft: '5%'
	},
	button: {
	  backgroundColor: '#DA5C5C',
	  flexDirection: 'row',
	  borderRadius: 10,
	  marginTop: 40,
	  alignItems: 'center',
	  justifyContent: 'center'
	},
	buttonText: {
	  paddingTop: 15,
	  paddingBottom: 15,
	  paddingLeft: 50,
	  paddingRight: 50,
	  fontWeight: 'bold',
	  fontSize: 18,
	  color: '#FFF',
	  letterSpacing: -0.24,
	  fontFamily: 'OpenSans_700Bold'
	}
  });

export default OrderDetails;