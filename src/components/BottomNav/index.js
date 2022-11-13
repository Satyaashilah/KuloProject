import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);

const index = () => {
    return (
    
        <View style={styles.kotak}>
            <View style={styles.itemRow}>
                <View style={styles.itemCol}>
                    <FontAwesomeIcon icon={['fas', 'home']} />
                    <Text>Pesanan</Text>
                </View>
                <View style={styles.itemCol}>
                    <FontAwesomeIcon icon={['fas', 'wallet']} />
                    <Text>Payment</Text>
                </View>
                <View style={styles.itemCol}>
                    <FontAwesomeIcon icon={['fas', 'inbox']} />
                    <Text>Inbox</Text>
                </View>
                <View style={styles.itemCol}>
                    <FontAwesomeIcon icon={['fas', 'user']} />
                    <Text>Account</Text>
                </View>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    kotak: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: '10%',
        width: '90%',
        borderRadius: 3,
        backgroundColor: '#5C93FF',
        marginTop: '5%',
        marginHorizontal: '4%',
    },
    itemCol:{
        flexDirection: 'column',
    },
    itemRow:{
        flexDirection:'row',
    },
    icon:{
        color: '#FFFFFF',
    },
})