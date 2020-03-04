export default (() =>{
    const truncate = (string, value) => {
        if (string.length > value){
            return string.slice(0,value) + '.....'
        }
        else{
            return  string
        }
    };

    return{
        truncate
    }
})()