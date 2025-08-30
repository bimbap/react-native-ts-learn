# Simple React Native + TypeScript – CRUD App ⚙️

This application is only a learning tool to understand both language with supabase database.

## Get started

1. Clone the github
   ```bash
   git clone https://github.com/bimbap/react-native-ts-learn.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```
3. Set-up the supabase database. _An explanation of the database supabase will be provided below._

4. Rename the ```.env.local-example``` file to ```.env.local``` and change the contents of the file as specified.


5. Start the app

   ```bash
   npx expo start
   ```

### Output
In the output, you'll find options to open the app in a

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
- Website Localhost

Only the above options can be used to view the output.

<br>

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

<br>

## Supabase

Follow these steps if you want to connect the application to a database.

1. Create a new database

2. Create a new database table with the following instructions

<br>

- Table Name : `notes`

- Table Column :

| Columns Name  | Type          |
| ------------- |:-------------:|
| id            | int8          |
| created_at    | timestamptz   |
| content       | text          |
| updated_at    | timestamptz   | 

> Don't forget to **turn off** the _Row Level Security (RLS)_ system, otherwise the system will block you because you haven't added the policy yet.

<br>

---

### Now, it's time for you to try it.
_Happy coding!_