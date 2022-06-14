var getChar=function(str){
    if(str==='') return ''
    let hashTable = new Map()
    for(let i=0;i<str.length;++i){
        if(hashTable.has(str[i])){
            hashTable.set(str[i],hashTable.get(str[i])+1)
        } else{
            hashTable.set(str[i],1)
        }
    }
    let maxStr = str[0]
    hashTable.forEach(function(value,key){
        if(hashTable.get(key)>hashTable.get(maxStr)){
            maxStr = key
        }
    })
    return maxStr
}
let str = 'abcdd'
console.log(getChar(str))