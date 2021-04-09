import React, { useLayoutEffect, useState } from 'react';
import Basic from '../layouts/basicLayout';
import { Route, Redirect, Switch } from 'react-router-dom';
// import { Provider } from '@/redux';
// import { $getParams } from '@/utils';
export function renderRoutes(routes) {
  return (
    <Switch>
      {
        routes.map((route, index) => {
          // console.log(route)
          if (route.children && route.children.length > 0) {
            return route.children.map((child, index) => {
              return child.children.map(chi => {
                return (
                  <Route
                    key={index}
                    path={route.path + chi.path}
                    exact={route.exact ? route.exact : false}
                    render={(props) => {
                      // console.log(props)
                      // console.log(child)
                      return (
                        <LoadRoute {...route} {...props} renderComponent={chi}/>
                      );
                    }}
                  />
                )
              })
            })
          } else {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact ? route.exact : false}
                render={(props) => {
                  // console.log(props)
                  // const entrancePath = window.sessionStorage.getItem('entrancePath');
                  // if(!entrancePath) {
                  //   // 记录初始页面
                  //   window.sessionStorage.setItem('entrancePath', props.history.location.pathname);
                  // }
                  // // 路由渲染之前将saastoken存放在storage中
                  // const { access_token } = $getParams();
                  // if(access_token) {
                  //   window.localStorage.setItem('access_token', access_token);
                  // }
                  return (
                    <LoadRoute {...route} {...props} renderComponent={route}/>
                  );
                }}
              />
            );
          }
        })
      }
      <Redirect to="/notfound" />
    </Switch>
  );
}

function LoadRoute(props) {
  const [innerComponent, setCom] = useState(null);
  useLayoutEffect(() => {
    // console.log(props)
    const { componentPath } = props.renderComponent;
    import(`../${componentPath}`).then(res => {
      // console.log(res)
      // 应用对应模块的公共样式
      // const modulePath = componentPath.split('/')[1];
      // try{
      //   console.log(`../${modulePath}/${modulePath}.scss`)
      //   require(`../${modulePath}/${modulePath}.scss`);
      // }catch(ex) {
      //   // console.log(
      //   //   `%c 样式 %c ${modulePath}模块载入`,
      //   //   `color:#fff;padding:1px;border-radius:3px 0 0 3px; background-color: #F59A23;`,
      //   //   `border-radius: 0 3px 2px 0;border: 1px solid #F59A23;color: #4B7902;`
      //   // );
      // }
      setCom(res);
      // document.title = 'v5' + (props.title ? `_${props.title}` : '');
    });
  });
  return (
    <>
      {
        props.type == 'basic' ? <Basic
          component={innerComponent ?
            <innerComponent.default {...props} />
            : ''}
          router={props}
        // routes={routes}
        >
        </Basic> : innerComponent ?
          <innerComponent.default {...props} /> : ''
      }

    </>
  );
}
export default LoadRoute;
