//  B站相关环境添加
window = global;
delete global


self = window;

function btoa(str){
    return new Buffer.from(str).toString('base64');
};

function atob(b64Encoded){
    return new Buffer.from(b64Encoded, 'base64').toString();
}

window.__USER_FP_CONFIG__ = {
    "activityEvents": [
        "mousemove",
        "click"
    ],
    "logStackMaxLength": 50,
    "samplingTime": 100
}

function setTimeout(a, b){
    if (typeof a == "function"){
        a.call(null);
    }
    else{
        debugger;
        console.log(a);
    }
}

function addEventListener(a, b, c){
    if (typeof b == "function"){
        b.call(null);
    }
}

class MouseEvent{
    static WEBKIT_FORCE_AT_MOUSE_DOWN;
    static getX(){};
    static getY(){};
    static getModifers(){};
    static getClickCount(){};
    static getSourse(){}
    constructor() {    
        this.length = 1;  
    }  

}

class KeyboardEvent{
    static DOM_KEY_LOCATION_LEFT = 1;
    constructor() {    
        this.length = 1;  
    }  

}

class FocusEvent{
    constructor() {    
        this.length = 1;  
    }  

}

class TouchEvent{
    constructor() {    
        this.length = 1;  
    }  

}

class document{
    createElement(tagName){
        tagName = tagName.toLowerCase();
    }
}
