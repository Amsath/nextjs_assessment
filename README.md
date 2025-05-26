# Next.js Interview Challenges

This project contains solutions to the front-end coding challenges using **Next.js** and **TypeScript**.

## 📁 Project Structure

```
NEXTJS_ASSESSMENT/
├── src/
│    ├──app/
│       ├── page.tsx           # Home navigation page
│       ├── calculator         # Challenge 1 - Calculator
│       │     ├──page.tsx
│       ├── navbar.tsx         # Challenge 2 - Toggleable Navbar
│       │     ├──page.tsx
│       └── twosum.tsx         # Challenge 3 - Two Sum II
│            ├──page.tsx
├── README.md              # Project documentation
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript config
└── next.config.js         # Next.js configuration
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-interview-challenges.git
cd nextjs-interview-challenges
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to:  
👉 `http://localhost:3000`

---

## 🧪 Challenge Pages

| Page       | Path             | Description                                 |
|------------|------------------|---------------------------------------------|
| Home       | `/`              | Links to all challenges                     |
| Calculator | `/calculator`    | Adds two numbers and shows the result       |
| Navbar     | `/navbar`        | Toggleable navbar with search input         |
| Two Sum II | `/twosum`        | Solves the sorted array target sum problem  |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind 

---

## ✅ Notes

- All challenges are implemented in **React with Next.js (preferred)**.
- Code is written in **TypeScript**.
- Mobile view for navbar is optional and not implemented.
- No third-party libraries are used unless required.

---

## 🧪 Test Cases for Challenge 3 (Two Sum)

```ts
console.log(twoSum([4, 11, 17, 25], 21)); // [1, 2]
console.log(twoSum([0, 1, 2, 2, 3, 5], 4)); // [3, 4]
console.log(twoSum([-1, 0], -1)); // [1, 2]
```

---


