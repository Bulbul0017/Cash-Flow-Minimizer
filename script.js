var N = 0
let graph1
function getInputValue() {
  N = document.getElementById("num").value
  //console.log(N)
  if (N != 0) {
    graph1 = Array.apply(0, new Array(N)).map((i) => 0)
    for (var i = 0; i < N; i++) {
      graph1[i] = new Array(N).fill(0)
    }
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        graph1[i][j] = new Array(N).fill(0)
      }
    }
    // console.log(graph1.length)
  } else {
    alert("please add a value to item")
  }
}

var name1 = new Array(N)
var j = 0
function newElement() {
  const a = document.getElementById("Names")
  if (a.value != "" && N != 0) {
    name1[j] = a.value
    //console.log(name1[j])
    j++
    const list3 = document.getElementById("list3")

    let make_li = document.createElement("LI")
    let s1 = a.value + " = " + j
    make_li.appendChild(document.createTextNode(s1))
    list3.appendChild(make_li)
  } else {
    alert("please add a value to item")
  }
}

function addMore() {
  const who1 = document.getElementById("who")
  const towhom1 = document.getElementById("towhom")
  const amt1 = document.getElementById("amount")
  /* console.log(who1.value)
  console.log(towhom1.value)
  console.log(amt1.value)*/
  if (who1.value != "" && who1.value != "" && amt1.value != "" && N != 0) {
    const list1 = document.getElementById("list1")
    const list2 = document.getElementById("list2")
    let make_li2 = document.createElement("LI")
    let s = name1[who1.value - 1] + " and " + name1[towhom1.value - 1]
    make_li2.appendChild(document.createTextNode(s))
    list1.append(make_li2)
    let make_li3 = document.createElement("LI")
    make_li3.appendChild(document.createTextNode(amt1.value))
    list2.append(make_li3)
    graph1[who1.value - 1][towhom1.value - 1] = amt1.value
  } else {
    alert("please add a value to item")
  }
}

// Driver code

function findSol() {
  // for (i = 0; i < N; i++) for (j = 0; j < N; j++) console.log(graph1[i][j])
  minCashFlow(graph1)
}

function getMin(arr) {
  var minInd = 0
  for (i = 1; i < N; i++) if (arr[i] < arr[minInd]) minInd = i
  return minInd
}

function getMax(arr) {
  var maxInd = 0
  for (i = 1; i < N; i++) if (arr[i] > arr[maxInd]) maxInd = i
  return maxInd
}

function minOf2(x, y) {
  return x < y ? x : y
}

function minCashFlowRec(amount1) {
  var mxCredit = getMax(amount1)
  var mxDebit = getMin(amount1)

  if (amount1[mxCredit] == 0 && amount1[mxDebit] == 0) return

  var min = minOf2(-amount1[mxDebit], amount1[mxCredit])
  amount1[mxCredit] -= min
  amount1[mxDebit] += min

  document.write(
    "<br>" + name1[mxDebit] + " has to pay " + min + " to " + name1[mxCredit]
  )

  minCashFlowRec(amount1)
}

function minCashFlow(graph) {
  var amount = Array.from({ length: N }, (_, i) => 0)

  for (var p = 0; p < N; p++)
    for (i = 0; i < N; i++) amount[p] += graph[i][p] - graph[p][i]

  minCashFlowRec(amount)
}
