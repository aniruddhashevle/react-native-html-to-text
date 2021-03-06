/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HtmlText from './lib/HtmlText';

var HtmlTextApp = React.createClass({
  render: function() {
    var html = `<p>Hello world <b>world</b> <i>foo</i> bar hahh</p>`

    return (
      <View style={styles.container}>
        <HtmlText style={styles.welcome} html={html}></HtmlText>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    margin: 10,

  },
  welcome: {
  }
});

AppRegistry.registerComponent('HtmlTextApp', () => HtmlTextApp);
