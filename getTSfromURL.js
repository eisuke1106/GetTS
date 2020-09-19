javascript:
var saveDir = "~/Documents/.ero";
var regix = "https://edge.*m3u8";
var html = document.body.innerHTML;
var match = html.match(regix)[0];
match = match.replace(/[\\]/g,'');
match = match.replace(/u002D/g,'-');
var path = location.pathname;
path = path.replace("/", "");
path = path.replace("/", "");
var date = new Date();
var saveTime = "" + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();

var termtitle = 'echo -ne "\\033]0;"' + path + '"\\007";';
var endalert = "osascript ~/Documents/.tools/end.scpt '" + path + "';";
var exit = "exit;";

var commnad = termtitle + "\nlivestreamer hlsvariant://" + match + " '720p,best' -o " + saveDir + "/" + path + "_" + saveTime + ".ts -f;\n" + endalert + "\n" + exit;
alert(commnad);
