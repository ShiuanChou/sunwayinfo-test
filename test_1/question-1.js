let testData = [
	{ firstName: 'May', lastName: 'Green', customerID: '01', note: '', profession: 'student' },
	{ firstName: 'April', lastName: 'Lee', customerID: '02', note: '', profession: 'student' },
	{ firstName: 'Tim', lastName: 'Bing', customerID: '03', note: '', profession: 'productOwner' },
	{ firstName: 'Ross', lastName: 'Wang', customerID: '04', note: '', profession: 'systemAnalytics' },
	{ firstName: 'Alice', lastName: 'Ling', customerID: '05', note: '', profession: 'freelancer' },
	{ firstName: 'Kate', lastName: 'Smith', customerID: '06', note: '', profession: 'engineer' },
	{ firstName: 'Leo', lastName: 'Lu', customerID: '07', note: '', profession: 'systemAnalytics' },
	{ firstName: 'Jack', lastName: 'Avey', customerID: '08', note: '', profession: 'systemAnalytics' },
	{ firstName: 'Jess', lastName: 'Cooper', customerID: '09', note: '', profession: 'productOwner' },
	{ firstName: 'Joey', lastName: 'Beal', customerID: '10', note: '', profession: 'systemAnalytics' },
];

/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/

function sortUserName(user) {
	const result = [];
	user.map((item) => result.push(item.firstName + item.lastName + item.customerID));

	console.log("Q1-1", result);

	return result;
};
sortUserName(testData);

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/
function sortByType(user) {
	let sortList = ['systemAnalytics', 'engineer', 'productOwner', 'freelancer', 'student']

	user.sort((x, y) => {
		let a = sortList.indexOf(x.profession);
		let b = sortList.indexOf(y.profession);

		if (a > b) return 1;
		if (a < b) return -1;
		else return 0;
	});

	console.log("Q1-2", user);

	return user;
};
sortByType(testData);
