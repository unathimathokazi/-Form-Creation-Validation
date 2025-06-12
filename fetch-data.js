// Step 1: Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Step 2
    const dataContainer = document.getElementById('api-data');   // Step 3

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create list and append user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Run fetchUserData when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
