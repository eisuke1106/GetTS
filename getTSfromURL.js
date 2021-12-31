var resolution = '720p,best';
var saveDir = "~/Documents/.ero";
var newLine = '\n';

var videoTags = document.getElementsByTagName("video");
if (videoTags.length == 0){
    alert("can not find video tags");
}else{
    var videoSrc = videoTags[0].src;

    var title = location.pathname.replaceAll('/','');
    var date = new Date();
    var saveTime = "" + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();
    var savePath = saveDir + '/' + title + '_' + saveTime + '.ts';
    
    var command = ""; 
    command += 'echo -ne "\\033]0;' + title + '\\007";' + newLine;
    command += "streamlink 'hls://" + videoSrc + "' " + resolution + " -o " + savePath + " -f;" + newLine;
    command += 'osascript ~/Documents/.tools/end.scpt ' + title + ';' + newLine;
    command += 'exit;';
    alert(command);    
}
