

Object.defineProperty(exports, '__esModule', {
  value: true,
})

const _react = require('react')

const React = _interopRequireWildcard(_react)
const _CollapsePanel = require('./CollapsePanel')

const _CollapsePanel2 = _interopRequireDefault(_CollapsePanel)

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } 
    const newObj = {}
    if (obj != null) {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key]
      }
    }
    newObj.default = obj
    return newObj
  
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var Collapse = (function(_React$Component) {
  return Collapse.__proto__ || Object.getPrototypeOf(Collapse)
})(React.Component)

exports.default = Collapse

// Collapse.Panel = _CollapsePanel2['default'];
// Collapse.defaultProps = {
//     prefixCls: 'ant-collapse',
//     bordered: true,
// };
module.exports = exports.default
