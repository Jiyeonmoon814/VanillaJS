const companies = [
    {name: "Company One", category: "Finance", start: 1981, end:2003},
    {name: "Company Two", category: "Retail", start: 1993, end:2005},
    {name: "Company Three", category: "Marketing", start: 1994, end:2010},
    {name: "Company Four", category: "Finance", start: 1980, end:2020},
    {name: "Company Five", category: "Technology", start: 1977, end:2021},
    {name: "Company Six", category: "Logistics", start: 1992, end:1999},
    {name: "Company Seven", category: "Finance", start: 2000, end:2020},
    {name: "Company Eight", category: "Medical", start: 2010, end:2019},
    {name: "Company Nine", category: "Technology", start: 2000, end:2008},
    {name: "Company Ten", category: "Hospitality", start: 1999, end:2003},
];

const ages = [33, 14, 60, 26, 30, 29, 11, 44, 48, 52, 17, 21, 38, 37, 66, 59];

//for(let i=0; i<companies.length; i++) {
//    console.log(companies[i]);
//}

//forEach
companies.forEach(function(company){
    console.log(company.name);
});

//filter

//let canDrink = [];
//for(let i=0; i<ages.length; i++){
//    if(ages[i]>=21){
//        canDrink.push(ages[i]);
//    }
//}

const cantDrink = ages.filter(function(age){
    if(age<=21){
        return true;
    }
});
console.log(cantDrink);

const canDrink = ages.filter(age => age>=21);
console.log(canDrink);

//Filter Finance companies
const  financeCompanies = companies.filter(function(company){
    if(company.category === 'Finance'){
        return true;
    }
});

console.log(financeCompanies);

const technologyCompanies = companies.filter(company => company.category === 'Technology');
console.log(technologyCompanies);

//Get 1980s companies
const eighties = companies.filter(company => (company.start >=1980 && company.start < 1990));
console.log(eighties);

//Get companies lasted 10y or more
const lastedTen = companies.filter(company => (company.end - company.start >=10));
console.log(lastedTen);

//map
//Create an Array of company names
//const companyNames = companies.map(function(company){
//    return company.name;
//});

//const testMap = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`;
//});

const testMap = companies.map(company =>
     `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

//sqrt 제곱근
const agesSpaure = ages.map(age => Math.sqrt(age));
console.log(agesSpaure);
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

//sqrt value * 2 
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

//sort
//Sort Companies by start year
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else {
        return -1;
    }
});

const sortedCompanies2 = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));

console.log(sortedCompanies2);

//sort ages
const sortAges = ages.sort();
console.log(sortAges);

//sort ages desc
const sortAges2 = ages.sort((a,b)=> b-a);
console.log(sortAges2);

//reduce
let ageSum =0;
for(let i=0; i <ages.length; i++){
    ageSum += ages[i];
}

console.log(ageSum);

const ageSum2 = ages.reduce(function(total,age){
    return total + age;
}, 0);

const ageSum3 = ages.reduce((total,age)=>total + age, 0);
console.log(ageSum3);

//Get total years for all companies
//index[0,1,2,3,4]
//index.reduce((total,num)=>total + num, 0)) 0 + 1 + 2 + 3 + 4 
//0 is initialValue
const totalYears = companies.reduce((total,company) => total + (company.end-company.start),0);
console.log(totalYears)

//Combine Methods
const combined = ages
    .map(age => age*2)
    .filter(age => age>=50)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b,0);

console.log(combined);