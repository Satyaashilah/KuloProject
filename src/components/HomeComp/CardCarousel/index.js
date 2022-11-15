import {Component} from 'react';
import * as React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';
import Carousel from 'react-native-snap-carousel';

class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text',
          Image: require('./../../../images/unsplash1.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 2',
          text: 'Text',
          Image: require('./../../../images/unsplash2.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 3',
          text: 'Text',
          Image: require('./../../../images/unsplash3.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 4',
          text: 'Text',
          Image: require('./../../../images/unsplash4.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 5',
          text: 'Text 5',
          Image: require('./../../../images/unsplash5.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: moderateScale(10),
          height: verticalScale(250),
          width: horizontalScale(250),
          marginLeft: horizontalScale(25),
          marginRight: horizontalScale(25),
          marginBottom: verticalScale(100),
        }}
        onPress={item.navigate}>
        <ImageBackground
          source={item.Image}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'center',
          }}></ImageBackground>
        <View style={style.border}>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.text}>
            {/* {' '} */}
            {item.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}

//

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(5),
  },
  text: {
    fontSize: moderateScale(10),
    marginTop: verticalScale(5),
    paddingLeft: horizontalScale(10),
    paddingBottom: verticalScale(10),
  },
  border: {
    borderWidth: horizontalScale(1),
    borderColor: '#DEDEDE',
    shadowColor: '#598FF9',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default CardCarousel;
