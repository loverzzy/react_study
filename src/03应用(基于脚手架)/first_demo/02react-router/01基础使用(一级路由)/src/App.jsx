import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
export default class App extends Component {
  render() {
    //通过 ...将状态中的全部赋值过去
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}
              {/* RouteBrowserRouterr:就是利用H5推出的history身上的API
                        HashRouter:就是利用#,也就是锚点 hash值  改变页面不会刷新
                    */}

              {/*NavBar="ss"所指定的class的值，如果不添加默认是active
                        这是因为Link相当于是把标签写死了，不能去改变什么。
                    */}
              {/* <NavBar  className="list-group-item"  to="/about">About</NavBar>
                    <NavBar className="list-group-item"  to="/home">Home</NavBar> */}

              {/*将NavBar进行封装，成为NavBar,通过props进行传参数，标签体内容是props特殊的一个属性，叫做children */}
              <NavBar to="/about">About</NavBar>
              <NavBar to="/home">Home</NavBar>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                注册路由，也就是写对应的关系， 同一个路由指向不同组件这个时候使用Switch包裹路由使path和component一一对应
                exact精准匹配  Route默认为模糊匹配
                Redirect 一般写在路由最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
                */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  {/* <Redirect to="/about"></Redirect> */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
