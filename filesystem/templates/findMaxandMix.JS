'use strict'

const data = [1123 ,6545132,4,85,224]

const  findMaX = (nums = []) => {
    let tem = nums[0];
     
    nums.forEach(num => {
         if(num > tem)  tem = num;
    });

    return tem;
};


const findMin = (nums = []) => {
    let tem = nums[0];
     
    nums.forEach(num => {
        if(num < tem) tem = num
    })

    return tem;
}


const MAX = findMaX(data);
const MIN = findMin(data);
console.log('Max values:', MAX);
console.log('Min values:', MIN);