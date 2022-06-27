document.getElementById("inputfile").addEventListener("change", function () {
  let fr = new FileReader();
  fr.onload = function () {
    // document.getElementById('output').innerHTML = fr.result;
    solution(fr.result);
  };

  fr.readAsText(this.files[0]);
});

function solution(text) {
  // spaced_text = text.split("\n").filter(x => x); 1 cách làm tắt
  spaced_text = text.split("\n");
  // because console.log(spaced_text[spaced_text.length-1]); result empty string, we need to get rid of it;
  full_text = spaced_text.filter((element) => {
    return element !== "";
  });
  let crackedtext = [];
  for (i = 0; i < full_text.length; i++) {
    crackedtext.push(full_text[i].split(" "));
  }

  let A = [];
  for (j = 0; j < crackedtext.length; j++) {
    let B = [];
    // for (k=0; k<crackedtext[j].length; k++){
    phanso = crackedtext[j][0].split("-");
    phancolon = crackedtext[j][1].split(":").filter((x) => x);
    phanstring = crackedtext[j][2].split("");
    B.push(parseInt(phanso[0]), parseInt(phanso[1]), phancolon, phanstring);
    A.push(B);
  }

  let C = [];
  for (m = 0; m < A.length; m++) {
    if (A[m][3].includes(A[m][2][0])) {
      C.push(A[m]);
    }
  }

  let result = 0;
  for (n = 0; n < C.length; n++) {
  let count = 0;
    for ( k = 0; k<C[n][3].length; k++) {
      if (C[n][2][0] == C[n][3][k]) {
        count += 1;
      }
    }
    if ( C[n][0]<= count && count <= C[n][1]) {
      result += 1;
    }
  }
  console.log(result);
}
