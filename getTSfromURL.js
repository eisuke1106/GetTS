javascript:
var saveDir = "~/Documents/.ero";
var regix = "http.*m3u8";
var html = document.body.innerHTML;
var match = html.match(regix)[0];
var path = location.pathname;
path = path.replace("/", "");
path = path.replace("/", "");
var date = new Date();
var saveTime = date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
var commnad = "livestreamer hlsvariant://" + match + " '720p,best' -o " + saveDir + "/" + path + "_" + saveTime + ".ts";
alert(commnad);