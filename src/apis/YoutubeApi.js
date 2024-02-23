import axios from 'axios';
const KEY='AIzaSyDdSq23OFqFSogM7DvW25ViW2jV9-6qa3A';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    },
})