var textinput = document.getElementById("Fist Name")
var errorpera = document.getElementById("Fist")
var a = []

function addvalue() {
    
        var b = textinput.value
        if (b == "") {
                errorpera.innerHTML = "Enter Fist Name"
            } else {
                    a.push(b)
                    console.log(a)
                }
            
            }
            
            // var textinput = document.getElementById("Last Name")
            // var errorpera = document.getElementById("Last")
            //     var c = []
    
//     function addvalue() {
        
//         var d = textinput.value
//         if (d == "") {
//             errorpera.innerHTML = "Enter Last Name"
//         } else {
//             a.push(d)
//             console.log(c)
            
//         }
//     }
    
// //     var textinput = document.getElementById("email")
// //     var errorpera = document.getElementById("mail")
    
// //     var e = []
    
// // function addvalue() {
    
// //     var f = textinput.value
// //     if (f == "") {
// //         errorpera.innerHTML = "Enter Eamil Address"
// //     } else {
// //         a.push(f)
// //         console.log(e)

// //     }
// // }

// // var textinput = document.getElementById("contect")
// // var errorpera = document.getElementById("ct")

// // var g = []

// // function addvalue() {
    
// //     var h = textinput.value
// //     if (h == "") {
// //         errorpera.innerHTML = "Enter Mobile Number"
// //     } else {
// //         a.push(h)
// //         console.log(g)

// //     }
// // }


// // var textinput = document.getElementById("cnic")
// // var errorpera = document.getElementById("cn")

// // var i = []

// // function addvalue() {
    
// //     var j = textinput.value
// //     if (j == "") {
// //         errorpera.innerHTML = "Enter CNIC Number"
// //     } else {
// //         a.push(j)
// //         console.log(i)

// //     }
// // }

// // var textinput = document.getElementById("Password")
// // var errorpera = document.getElementById("pswd")

// // var k = []

// // function addvalue() {
    
// //     var l = textinput.value
// //     if (l == "") {
// //         errorpera.innerHTML = "Password"
// //     } else {
// //         a.push(l)
// //         console.log(k)

// //     }
// // }

