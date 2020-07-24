import axios from 'axios';
import qs from 'qs';
axios.defaults.withCredentials = true;
export default {
    ajax,
    changeTimeYear,
    changeTimeHour,
    changeTimeSecond
}
var requestUrl = 'www';

function ajax(options) {
    let method = options.method || 'post';
    let data = options.data || {};
    return axios({
        method: method,
        url: requestUrl + options.url,
        withCredentials: true,
        data: options.contentType && options.contentType.indexOf('application/json') > -1 ? data : qs.stringify(data),
        headers: {
            'Content-Type': options.contentType || 'application/x-www-form-urlencoded'
        },
    }).then(res => {
        if (res.data.denied) {
            return;
        }
        return res.data;
    }).catch(e => {
        return e;
    })
}
//时间格式转化年
function changeTimeYear(now) {
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    return year + "-" + (month >= 10 ? month : '0' + month) + "-" + (date >= 10 ? date : '0' + date) + " ";
}
//时间格式转化小时
function changeTimeHour(now) {
    let hour = now.getHours();
    let minter = now.getMinutes();
    let second = now.getSeconds();
    return (hour >= 10 ? hour : '0' + hour) + ":" + (minter >= 10 ? minter : '0' + minter) + ":" + (second >= 10 ? second : '0' + second);
}
//时间格式转化小时无秒
function changeTimeSecond(now) {
    let hour = now.getHours();
    let minter = now.getMinutes();
    // let second = now.getSeconds();
    return (hour >= 10 ? hour : '0' + hour) + ":" + (minter >= 10 ? minter : '0' + minter);
}