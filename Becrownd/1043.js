let input = `6.0 4.0 2.0`
var lines = input.split(' ');
let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())
if ((A> Math.abs(B-C) && A< B+C)||(B> Math.abs(A-C) && B< A+C)||(C>Math.abs(A-B)&&C<A+B)) {
  console.log(`Perimetro = ${(A+B+C).toFixed(1)}`);
} else{
  console.log(`Area = ${((A+B)*C/2).toFixed(1)}`);
}
