export default (() =>{
    const truncate = (string, value) => {
        if (string.length > value){
            return string.slice(1,value) + '.....'
        }
        else{
            return  string
        }
    };

    return{
        truncate
    }
})()