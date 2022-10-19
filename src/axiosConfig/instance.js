import axios from 'axios';

 const axiosInstance=axios.create({
baseURL:"https://api.themoviedb.org/3",

params:{
    api_key:"848c6d3f2a8ad79956d5e177a41d06e4",

}

})
export default axiosInstance