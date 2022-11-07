import Metric from './../Metric';
import {TextInput, StyleSheet, Text} from 'react-native';

const {width} = Dimensions.get('window');

const text = size => (width) * size;
const title = size => (width) * size;
const subtitle = size => (width) * size;

export {text, title, subtitle}; 