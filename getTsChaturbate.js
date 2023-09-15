(function () {
  const resolution = "720p,best";
  const saveDir = "~/Documents/.ero";
  const newLine = "\n";
  const roomInfo = window.initialRoomDossier;
  if (roomInfo == undefined) {
    alert("can not find videoInfo");
  } else {
    const hlsSource = JSON.parse(roomInfo).hls_source;
    const title = location.pathname.replaceAll("/", "");
    const saveTime = getDateString();
    const savePath = `${saveDir}/${title}_${saveTime}.ts`;

    let command = "";
    command += `echo -ne "\\033]0;${title}\\007";${newLine}`;
    command += `streamlink "hls://${hlsSource}" ${resolution} -o ${savePath} -f; ${newLine}`;
    command += `osascript ~/Documents/.tools/end.scpt ${title}; ${newLine}`;
    command += "exit;";
    alert(command);
  }
})();

function getDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  return `${year}${pad2(month)}${pad2(date)}${pad2(hour)}${pad2(min)}${pad2(sec)}`;
}

function pad2(val) {
  return val.toString().padStart(2, 0);
}
