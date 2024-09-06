
interface User2 {
    id: number;
    name: string;
    email: string;
    age: number;
}


function updateUser(user2: User2, updates: Partial<User2>): User2 {
   
    return { ...user2, ...updates };
}


let user2: User2 = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25
};

console.log("Original User:", user2);


let updatedUser = updateUser(user2, { name: "Jane Doe", age: 26 });

console.log("Updated User2:", updatedUser);
