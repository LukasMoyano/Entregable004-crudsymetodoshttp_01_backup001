module.exports ={
     code5, code6, code7, code8
}


function code5(date){
    return date.toLocaleString("en-US").slice(11);
}

function code6(date){
    return date.toLocaleString("en-US", { hour12: false }).slice(11);
}

function code7(date){
   return date.toLocaleString("en-US").slice(11, 15) + date.toLocaleString("en-US").slice(18);
}

function code8(date){
    return date.toLocaleString("en-US",  { hour12: false }).slice(11,16);
}