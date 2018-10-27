
export function getuuid() {
    
    if(! localStorage.getItem('UUID') ){
    localStorage.setItem('UUID',makeid());
    }
    return localStorage.getItem('UUID');
  }

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }