var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var Party = React.createClass({
  render: function() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{flex: 1, textAlign: 'right', marginRight: 25}}>{this.props.name}:</Text>
        <TextInput style={{flex: 1, marginRight: 100}} />
      </View>
    );
  }
});

var Parties = React.createClass({
  render: function() {
    return (
      <View>
        <Party name='Conservative' />
        <Party name='Liberal' />
        <Party name='NDP' />
        <Party name='Bloc Québécois' />
        <Party name='Green' />
      </View>
    );
  }
});

var Bar = React.createClass({
  render: function() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
        <Text style={{flex: 2, textAlign: 'right', marginRight: 10}}>{this.props.name}:</Text>
        <View style={{flex: 2}} >
          <View style={{backgroundColor: this.props.color, height: 25, width: parseInt(this.props.seats) }} />
        </View>
        <Text style={{flex: 1, color: this.props.color}}>{this.props.message}</Text>
      </View>       
    );
  }
})

var Graph = React.createClass({
  render: function() {
    return (
      <View style={{margin: 25}}>
        <Bar name='Conservative' color='blue' seats='132' message='Minority' />
        <Bar name='Liberal' color='red' seats='112' />
        <Bar name='NDP' color='orange' seats='76' />
        <Bar name='Bloc Québécois' color='cyan' seats='4' />
        <Bar name='Green' color='green' seats='2' />
      </View>
    );
  }
})

var election = React.createClass({
  render: function() {
    return (
      <View>
        <Parties style={{flex: 1}}/>
        <Graph style={{flex: 1}} />
      </View>
    );
  }
});

AppRegistry.registerComponent('election', () => election);
