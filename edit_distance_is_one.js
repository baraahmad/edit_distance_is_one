function editNumbers(str1, str2){
    let count=0;
    if(str1.length==str2.length){
        for(let i=0; i<str1.length; i++){
                if (!(str1.includes(str2[i]))){
                    count++;
            }
        }
        if(count == 1){
            return true;    
        }else{
            return false
        }
        
    }
}
