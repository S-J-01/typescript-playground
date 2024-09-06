var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function that updates user details using a Partial<User>
function updateUser(user2, updates) {
    // Use object spread to merge the original user object with updates
    return __assign(__assign({}, user2), updates);
}
// Example usage
var user2 = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25
};
console.log("Original User:", user2);
// Partial updates to the user
var updatedUser = updateUser(user2, { name: "Jane Doe", age: 26 });
console.log("Updated User2:", updatedUser);
