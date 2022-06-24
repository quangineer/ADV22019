document.getElementById("inputfile").addEventListener("change", function () {
  let fr = new FileReader();
  fr.onload = function () {
    // document.getElementById('output').innerHTML = fr.result;
    solution(fr.result);
  };

  fr.readAsText(this.files[0]);
});

function solution(text) {
  spaced_text = text.split("\n");
//   because console.log(spaced_text[spaced_text.length-1]); result empty string, we need to get rid of it;
    full_text = spaced_text.filter(element =>{
        return element !=="";
    })
    console.log(full_text);
    console.log(full_text[0]);
    console.log(full_text[0][1]);

    

}
