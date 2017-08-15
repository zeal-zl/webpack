/* 
* @Author: Lyle
* @Date:  2017/8/14 14:45
*/
import _ from "lodash";
import "./style.css";
/*import icon from "./01.jpg";
import Data from "./data.xml";*/

import printMe from "./print.js";

function component() {
    var element = document.createElement("div");

    var btn = document.createElement('button');

    element.innerHTML = _.join(["hello", "webpack"], " ");

    btn.innerHTML = 'click me and check the console！';
    btn.onclick = printMe;
    element.appendChild(btn);

    // element.classList.add('hello');

    //将图片添加到我们现有是div
    // var myIcons = new Image();
    // myIcons.src = icon;

    // element.appendChild(myIcons);

    // console.log(Data)

    return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
// document.body.appendChild(component());
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}