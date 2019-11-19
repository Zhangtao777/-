import axios from "axios"
export default {
    queryData(store,v){
        return axios.get("/hongyue/v3/home/index",{params:{page:v,limit:2}})
        
    }
    
}