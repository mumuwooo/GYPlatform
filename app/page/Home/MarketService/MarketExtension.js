import React from 'react'
import { StyleSheet, View, Dimensions, Text, RefreshControl, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Timeline from 'react-native-timeline-listview'
import { NavigationPage, Button, Toast } from 'teaset'
import { Divider, IconFont,NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class MarketExtension extends NavigationPage {
    constructor(){
        super()
        this.onEndReached = this.onEndReached.bind(this)
        this.renderFooter = this.renderFooter.bind(this)
        this.onRefresh = this.onRefresh.bind(this)
    
        this.data = [
          {time: '09:00', title: '2019年6月27日-6月29日/广州', description: '2019世界食品广州展'},
          {time: '10:45', title: '2019年6月27日-6月28日/广州', description: '国际火锅食材用品展览会'},
          {time: '12:00', title: '2019年6月27日-6月29日/广州', description: '上海国际智能家居展览会'},
          {time: '14:00', title: '2019年6月27日-6月29日/广州', description: '上海国际智能家居展览会'},
          {time: '16:30', title: '2019年6月27日-6月29日/广州', description: '2019亚洲果蔬产业博览会'},
        ]
    
        this.state = {
          isRefreshing: false,      
          waiting: false,
          data: this.data
        }
      } 

      onRefresh(){
        this.setState({isRefreshing: true});
        //refresh to initial data
        setTimeout(() => {
          //refresh to initial data
          this.setState({
            data: this.data,
            isRefreshing: false
          });
        }, 2000);
      }
    
      onEndReached() {
        if (!this.state.waiting) {
            this.setState({waiting: true});
    
            // fetch and concat data
            setTimeout(() => {
    
              // refresh to initial data
              const data = this.state.data.concat(
                [
                  {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
                  {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
                  {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
                  {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'},
                  {time: '18:00', title: 'Load more data', description: 'append event at bottom of timeline'}
                ]
                )
    
              this.setState({
                waiting: false,
                data: data,
              });
            }, 2000);
        }
      }

      renderFooter() {
        if (this.state.waiting) {
            return <ActivityIndicator />;
        } else {
            return <Text>~</Text>;
        }
      }

  renderNavigationBar() {
    return <NavBar title="市场开拓" />
  }

  renderPage() {
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.state.data}
          circleSize={16}
          circleColor='#3a3a3a'
          lineColor='#3a3a3a'
        //   iconStyle={{width:16,height:8,resizeMode:'contain'}}
        //   timeContainerStyle={{minWidth:52, marginTop: -5}}
        //   timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          showTime={false}
          options={{
            style:{paddingTop:5},
            refreshControl: (
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            ),
            renderFooter: this.renderFooter,
            onEndReached: this.onEndReached
          }}
          innerCircle='icon'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
      },
      list: {
        flex: 1,
        // marginTop:20,
      },

})
export default MarketExtension
