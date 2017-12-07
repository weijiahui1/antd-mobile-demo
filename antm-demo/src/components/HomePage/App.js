import React from 'react';
import { hashHistory } from 'react-router';
import { NavBar,Icon,Popover ,TabBar } from 'antd-mobile';
import './App.css'

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      title: '1元贷',
      visible: false,
      selectedTab: 'blueTab'
    };
  };

  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: '#f3f3f3', height: '100%', textAlign: 'center' }}>
        <div style={{ width:'100%',height:'300px',backgroundColor:'orange',border:'1px solid #cccccc' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>

        <div style={{ width:'100%',height:'300px',backgroundColor:'blue',border:'1px solid #cccccc' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>

        <div style={{ width:'100%',height:'300px',border:'1px solid #cccccc' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>

        <div style={{ width:'100%',height:'300px',backgroundColor:'yellow',border:'1px solid #cccccc' }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
      </div>
    );
  };

  render() {
    // console.log(this.props.route, this.props.params, this.props.routeParams);
    return (
      <div className="container">
        <NavBar
  	      mode="dark"
          leftContent={<Icon type="left" />}
  	      onLeftClick={() => hashHistory.goBack()}
  	      rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: 5 }}>Help</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
            <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
  	    >
  	    {this.state.title}
  	    </NavBar>
        <div className="main-content">
         {this.props.children && React.cloneElement(this.props.children, {
              changeTitle: title => this.setState({ title })
         })}
        </div>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            noRenderContent="false"
          >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              hashHistory.push('/index');
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
           {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              hashHistory.push('/s1');
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
        {/*<div className="fixed-bottom">底部固定条</div>*/}
      </div>
    );
  }
}
