javascript:
var resolution = '720p,best';
var saveDir = "~/Documents/.ero";
var videoTags = document.getElementsByTagName("video");
if (videoTags.length == 0){
    alert("can not find video tags");
}
var videoSrc = videoTags[0].src;
var path = location.pathname;
path = path.replace("/", "");
path = path.replace("/", "");
var date = new Date();
var saveTime = "" + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
var savePath = saveDir + '/' + path + '_' + saveTime + '.ts';
var newLine = '\n';

var command = ""; 
command += 'echo -ne "\\033]0;' + path + '\\007";' + newLine;
command += "streamlink 'hls://" + videoSrc + "' " + resolution + " -o " + savePath + " -f;" + newLine;
command += 'osascript ~/Documents/.tools/end.scpt ' + path + ';' + newLine;
command += 'exit;';
alert(command);
