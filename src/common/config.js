// 本地测试
 const host = 'http://192.168.1.123';
 const wshost = 'ws://192.168.1.158:9321';

// 服务器
//const host = '';
//sconst wshost = 'ws://' + location.hostname + ':9321';


// const host = '';
const userpath = host + location.pathname.substr(0, location.pathname.indexOf('/', 1));
// const aesKey = '_q;,ym_@3:v+X8fd';
export default{
  host,
  wshost,
  userpath
};