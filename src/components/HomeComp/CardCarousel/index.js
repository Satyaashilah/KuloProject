import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          Image: require('./../../../images/unsplash1.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          Image: require('./../../../images/unsplash2.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          Image: require('./../../../images/unsplash3.jpg'),
          navigate: () => {
            props.navigation.push('Login');
          },
        },
        {
          title: 'Item 4',
          text: 'Text 4',
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
          backgroundColor: 'floralwhite',
          borderRadius: 10,
          height: 250,
          marginRight: 25,
          marginTop: 25,
          marginBottom: 100,
        }}
        onPress={item.navigate}>
        <ImageBackground
          source={item.Image}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'center',
          }}></ImageBackground>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 10, marginTop: 5, paddingLeft: 10}}>
          {' '}
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>What's New</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
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
        </View>
      </View>
    );
  }
}

//

const style = StyleSheet.create({
  wallet: {
    marginLeft: 20,
    width: 30,
    height: 30,
  },

  kotak2: {
    height: 'auto',
    width: 'auto',
    borderRadius: 7,
    backgroundColor: '#5C93FF',
    marginTop: '5%',
  },

  kotak3: {
    marginHorizontal: '5.5%',
    height: 60,
    width: 60,
    backgroundColor: '#ffffff',
    borderColor: '#DEDEDE',
    borderRadius: 8,
  },

  fiturHome: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25%',
  },
  fiturHomeTxt: {
    marginHorizontal: '5.5%',
    height: 60,
    width: 60,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: '#4C4C4C',
  },
});

export default CardCarousel;
