let people=["Grey","Mary","Devon","James"];
console.log("1)")
for(let i=0;i<people.length;i++)
{
    console.log(people[i]);
}
console.log("2)")
people.shift();
console.log(people);
console.log("3)")
people.pop();
console.log(people);
console.log("4)")
people.unshift("Matt");
console.log(people);
console.log("5)")
people.push("Karaneesh K");
console.log(people);
console.log("6)")
let i=0;
while(i!=people.indexOf("Mary")+1)
{
    console.log(people[i]);
    i++;
}
console.log("7)")
let arr=[];
for(let i=0;i<people.length;i++)
{
    if(people[i]=="Mary"||people[i]=="Matt")
    {
        continue;
    }
    else
    {
        arr.push(people[i]);
    }
}
console.log(arr);
console.log("8)")
console.log(people.indexOf("Mary"));
console.log("9)")
console.log(people.indexOf("Foo"));
console.log("10)")
people.splice(2,1,"Elizabeth","Artie");
console.log(people);
console.log("11)")
let str1=people;
console.log(str1.concat("Bob"));
