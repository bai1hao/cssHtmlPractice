/**
 * Deep Clone
 */
function deepClone(data) {
    let result;
    if(typeof data!=="object"||data===null){
        return data;
    }
    if(data instanceof Array){
        result = []
    }else {
        result = {}
    }
    for(let key in data){
         if(data.hasOwnProperty(key)){
             result[key] = deepClone(data[key])
         }
    }
    return result;
}





