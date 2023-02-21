function calc() {



    var n = document.getElementById("a").value;


    //a*a + b*b = c*c

    var answer = document.getElementById("answer");
    var rows = "";
    //console.debug(a);
    if (n < 0 || n > 300) {
        answer.innerHTML = "Please enter a number between 0 and 300!";
    } else {
        for (var a = 1; a < n - 1; a++) {
            for (var b = a; b < n; b++) {
                c = Math.sqrt(a * a + b * b);
                if (c % 1 === 0) {
                    if (!(c > n)) {
                        rows += "<tr> <td> " + a + " </td> <td>" + b + "</td> <td class='tdred'>" + c + "</td> </tr>"
                    }

                }
            }
        }

        answer.innerHTML = "<table><thead> <tr> <th> a </th> <th>b</th> <th>c</th> </tr></thead> <tbody>" + rows + " </tbody></table>";
    }




}