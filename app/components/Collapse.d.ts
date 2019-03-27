/// <reference types="react" />
import React , {Component} from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types';
// class Collapse extends Component{
//   render(){
//     const { children,style} = this.props
//     if(children&&children.length>0){
//       console.log(children[0])
//       children[0].defaultProps = {
//         onPress:()=>{
//             console.log('change')
//         }
//       }
//       children[0].props = {
//         onPress:()=>{
//             console.log('change')
//         }
//       }
//       console.log(children[0])
//     }
//     return (
//     <View style={[style]}>
//       {children}
//     </View>)
//   }
// }
import CollapsePanel from './CollapsePanel';
export interface CollapseProps {
  activeKey?: Array<string> | string;
  defaultActiveKey?: Array<string>;
  /** 手风琴效果 */
  accordion?: boolean;
  onChange?: (key: string | string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  prefixCls?: string;
  name:"123213collapse"
}
export default class Collapse extends React.Component<CollapseProps, any> {
  static Panel: typeof CollapsePanel;
  static defaultProps: {
      prefixCls: string;
      bordered: boolean;
      openAnimation: {
          appear(): void;
          enter(node: HTMLElement, done: () => void): any;
          leave(node: HTMLElement, done: () => void): any;
      };
  };
  render(): JSX.Element;
}

// Collapse.propTypes = {
//   children: PropTypes.array.isRequired,
// };

export default Collapse;