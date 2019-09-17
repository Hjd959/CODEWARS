
// يعطين اسم واذا كان يبدا بحرف R او r يطبع لي الجمله اذا كان غير ذالك يطبع لي  جمله اخرى 
// write any value name if value name start chart word R or r print states 


function areYouPlayingBanjo(name) {

    var strName = name;
    if (strName.charAt(0).match(/[R]/i)) {
        console.log(strName + " plays banjo");
    }
    else
        console.log(strName + " does not play banjo");
}

areYouPlayingBanjo('Martin');
areYouPlayingBanjo('Rikke');
areYouPlayingBanjo('rikke');



function areYouPlayingBanjo2(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
areYouPlayingBanjo2('vdfg');


function areYouPlayingBanjo3(name) {

    var strName = name;
    if (strName.match(/[A-Z]/i)) {

        console.log(strName + " plays banjo");
        return strName + " plays banjo";
    }
    else {
        console.log(strName + " does not play banjo");
        return strName + " does not play banjo";
    }
}



const areYouPlayingBanjo4 = (name) => (name[0].toLocaleLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
console.log(areYouPlayingBanjo4('rear'));



