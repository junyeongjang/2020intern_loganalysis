/* 웹 로그 정규 표현식 */

// ip 정규 표현식 (정상 작동)
const ip = /(?<![0-9])(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})[.](?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))(?![0-9])/g;
//리퍼러(referrer) 정규 표현식 (정상 작동) 어떤 경로를 통해 사이트에 접속했는지?
const referrer = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
//날짜 정규 표현식 (정상 작동)
const date= /\[([\w:/]+\s[+\-]\d{4})\]/g;
//메소드 정규 표현식 (정상 작동)
// const method = /GET|POST|PUT|DELETE/g
const method = /(GET|POST|PUT|DELETE)\s?(\S+)?\s?(\S+)"/g
// GET 뒤에 있는 url 가져와야함.

exports.regex = {
    webIp : ip,
    webDate: date,
    webMethod: method,
    webRefer: referrer,
};