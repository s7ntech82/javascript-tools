# Random Username Generator  

A simple tool to generate unique and creative usernames by combining adjectives, nouns, and random numbers. Perfect for inspiration or assigning random identifiers to users, game characters, and more! 🚀  

---

## 🎯 Features  

- **Creative Names**: Combines an adjective and an animal name to create memorable usernames.  
- **Unique Numbers**: Appends a random number between 100 and 999 to ensure uniqueness.  
- **Portable**: Easy to integrate into any JavaScript project.  

---

## 📦 Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/s7ntech82/javascript-tools.git
   cd random-generator/random-username-generator
   ```

2. Install dependencies (if Jest is included):  
   ```bash
   npm install
   ```

---

## 🚀 Usage  

Here’s an example of how to use the username generator:  

```javascript
const generateRandomUsername = require('./src/generateRandomUsername');

console.log(generateRandomUsername());
// Output: QuickTiger123 (varies each time)
```

### Sample Outputs  
- **HappyShark456**  
- **CleverPanther789**  
- **SilentWolf123**  

---

## 🛠️ Testing  

The project includes automated tests to ensure the generator works correctly.  

Run the tests with:  
```bash
npm test
```

The tests verify:  
- That the generated username is not null.  
- That it follows the `AdjectiveNounNumber` format.  
- That the number is between 100 and 999.  

---

## 📚 Project Structure  

```
random-username-generator/
├── src/
│   └── generateRandomUsername.js   # Main code
├── tests/
│   └── generateRandomUsername.test.js   # Automated tests
├── package.json   # Project configuration
└── README.md   # Project documentation
```

---

## 🤝 Contributing  

Contributions are welcome and appreciated! Here’s how you can help:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/my-new-feature
   ```  
3. Make your changes and add relevant tests.  
4. Submit a pull request with a detailed description of your changes.  

---

## 📜 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and share it!  

---

## ✨ Author  

Created with ❤️ by s7ntech.  
Have suggestions or feedback? Reach out or open an issue on GitHub. 😊  
