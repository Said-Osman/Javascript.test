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
jamförelse

==   / 
===  /
!=   /
!==  /
>    /
<    /
>=   /
<=   / 
&&   /
||   /

*/