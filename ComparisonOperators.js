const iphoneWeight = 550
const samsungWeight = 700

const identical = iphoneWeight == samsungWeight
const identicalValueAndType = iphoneWeight === samsungWeight
const isDifferent = iphoneWeight != samsungWeight
const isDifferentValueAndType = iphoneWeight !== samsungWeight
const isGreater = iphoneWeight > samsungWeight
const isGreaterOrEqual = iphoneWeight >= samsungWeight
const isLess = iphoneWeight < samsungWeight
const isLessOrEqual = iphoneWeight <= samsungWeight

function comparisonOperator() {
	alert(isLessOrEqual) 
}

const macbookWeight = 87
const zenbookWeight = 93

const AND = macbookWeight > 90 && zenbookWeight > 90
const OR = macbookWeight > 90 || zenbookWeight > 90
const NOT = !(macbookWeight > 90)

function logicalOperators() {
	alert(NOT)
}

/*  
EQUAL LIST
---------------------------------------------------------------------------------------------------------------------
==   / 	Equal to: true if the operands are equal
===  / Strict equal to: true if the operands are equal and of the same type
!    / Logical NOT: true if the operand is false and vice-versa.   
!=   / 	Equal to: true if the operands are equal
!==  /  Strict not equal to: true if the operands are equal but of different type or not equal at all
>    / Greater than: true if the left operand is greater than the right operand
<    / Less than: true if the left operand is less than the right operand
>=   / Greater than or equal to: true if the left operand is greater than or equal to the right operand
<=   / 	Less than or equal to: true if the left operand is less than or equal to the right operand
&&   / 	Logical AND: true if both the operands/boolean values are true, else evaluates to false
||   / Logical OR: true if either of the operands/boolean values is true . evaluates to false if both are false
-----------------------------------------------------------------------------------------------------------------------
*/