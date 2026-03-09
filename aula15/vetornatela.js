let valores  = [3, 2, 6, 8, 7]
valores.sort()

/*
for (let c = 0;c <= valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}
*/

for (var c in valores) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}