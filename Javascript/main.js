const API_Key = "AIzaSyCGeAAVb50eFY6T4v1FSpTaMccCrmMqvKs";
const URL = "https://www.googleapis.com/youtube/v3/videos";
const clannel_ID = "UCeVMnSShP_Iviwkknt83cww";


const playList = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCeVMnSShP_Iviwkknt83cww&maxResults=25&key=AIzaSyCGeAAVb50eFY6T4v1FSpTaMccCrmMqvKs";


function fatchPlaylist(playList) {
    fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCeVMnSShP_Iviwkknt83cww&maxResults=25&key=AIzaSyCGeAAVb50eFY6T4v1FSpTaMccCrmMqvKs").then((data) => {
        return data.json();

    }).then((completeData) => {
        console.log(completeData.items);
    })
     .catch((error) => {
            console.log(error);
        })
}

onload = fatchPlaylist();



















