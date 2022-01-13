dicktionary= [
    ["one","two","three","four","five","six","free fire","LoL"],
    ["một","hi","bar","tư","năm","lục","lửa chùa","Game nhái Liên quân"]
]

function trans() {
    let input = "";
    let output = "";
    let data ="";
    input = document.getElementById("input").value;
    for (let i = 0; i < dicktionary.length; i++) {
            if (dicktionary[i].indexOf(input) !== -1) {
                output = dicktionary[1 - i][dicktionary[i].indexOf(input)];
                data += "<br/>"+ input + "=" + output;
            }
    }
    if(data =="") {
        data = "<br/>"+"dễ quá không thèm dịch :v";
    }
    document.getElementById("result").innerHTML = data;
    return data;
}
